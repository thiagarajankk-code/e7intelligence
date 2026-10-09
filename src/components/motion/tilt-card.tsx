"use client";

import { createContext, useContext, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

const spring = { stiffness: 180, damping: 18, mass: 0.6 };
const MAX_TILT = 7; // degrees

const TiltHover = createContext(false);

/** True while the cursor is over the surrounding <TiltCard>. */
export function useTiltHover() {
  return useContext(TiltHover);
}

/**
 * Card that tilts in 3D towards the cursor, with a shine and a lit-up dot grid
 * following the pointer.
 */
export function TiltCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  // Pointer position within the card, 0–1 on each axis
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useSpring(0, spring);

  const rotateX = useSpring(useTransform(py, [0, 1], [MAX_TILT, -MAX_TILT]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX_TILT, MAX_TILT]), spring);

  const x = useTransform(px, (v) => `${v * 100}%`);
  const y = useTransform(py, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${x} ${y}, #000, transparent)`;
  const shine = useMotionTemplate`radial-gradient(520px circle at ${x} ${y}, color-mix(in oklab, var(--brand) 22%, transparent), transparent 60%)`;

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    hover.set(1);
    setHovered(true);
  }

  function onPointerLeave() {
    px.set(0.5);
    py.set(0.5);
    hover.set(0);
    setHovered(false);
  }

  return (
    <div className="[perspective:1200px]">
      <motion.div
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={reduced ? undefined : { rotateX, rotateY }}
        className={cn(
          "relative overflow-hidden [transform-style:preserve-3d]",
          className,
        )}
      >
        {/* Resting dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--line)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        {/* Brighter dots revealed under the cursor */}
        <motion.div
          aria-hidden
          style={{ opacity: hover, maskImage: spotlight, WebkitMaskImage: spotlight }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--brand)_1.5px,transparent_1.5px)] [background-size:22px_22px]"
        />
        <motion.div
          aria-hidden
          style={{ opacity: hover, backgroundImage: shine }}
          className="pointer-events-none absolute inset-0"
        />
        <TiltHover.Provider value={hovered}>{children}</TiltHover.Provider>
      </motion.div>
    </div>
  );
}
