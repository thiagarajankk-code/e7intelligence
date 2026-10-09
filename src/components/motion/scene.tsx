"use client";

import { createContext, useContext, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const SceneActive = createContext(true);

/** True while the surrounding <Scene> is on screen and motion is allowed. */
export function useSceneActive() {
  return useContext(SceneActive);
}

/**
 * SVG canvas for an abstract illustration. Looping animations inside only run
 * while the scene is visible, and not at all for reduced-motion users.
 */
export function Scene({
  viewBox,
  className,
  preserveAspectRatio,
  paused = false,
  children,
}: {
  viewBox: string;
  className?: string;
  preserveAspectRatio?: string;
  paused?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: "80px" });
  const reduced = useReducedMotion();

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <SceneActive.Provider value={inView && !reduced && !paused}>
        {children}
      </SceneActive.Provider>
    </svg>
  );
}

/** A line with a pulse of light travelling along it. */
export function PulsePath({
  d,
  duration = 2.4,
  delay = 0,
  repeatDelay = 0.8,
  length = 0.2,
  color = "var(--brand)",
  track = "var(--line)",
  strokeWidth = 1.5,
  reverse = false,
  ease = "easeInOut",
}: {
  d: string;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
  length?: number;
  color?: string;
  track?: string | false;
  strokeWidth?: number;
  reverse?: boolean;
  ease?: "easeInOut" | "linear";
}) {
  const active = useSceneActive();
  const from = reverse ? 1 : -length;
  const to = reverse ? -length : 1;

  return (
    <>
      {track && <path d={d} stroke={track} strokeWidth={strokeWidth} />}
      {active && (
        <motion.path
          d={d}
          stroke={color}
          strokeWidth={strokeWidth}
          initial={{ pathLength: length, pathSpacing: 1, pathOffset: from }}
          animate={{ pathOffset: to }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatDelay,
            ease,
          }}
        />
      )}
    </>
  );
}

/** A node that softly pings, like a live connection. */
export function PulseNode({
  cx,
  cy,
  r = 3,
  delay = 0,
  color = "var(--brand)",
}: {
  cx: number;
  cy: number;
  r?: number;
  delay?: number;
  color?: string;
}) {
  const active = useSceneActive();

  return (
    <>
      {active && (
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          stroke={color}
          strokeWidth={1}
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: 3.2, opacity: 0 }}
          transition={{
            duration: 2,
            delay,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeOut",
          }}
        />
      )}
      <circle cx={cx} cy={cy} r={r} fill={color} />
    </>
  );
}
