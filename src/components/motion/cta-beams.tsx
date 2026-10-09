"use client";

import { cn } from "@/lib/cn";
import { PulsePath, Scene } from "@/components/motion/scene";
import { useTiltHover } from "@/components/motion/tilt-card";

// Everything converges on the centre of the card.
const beams = [
  { d: "M-10 40C180 40 220 150 400 150", accent: false },
  { d: "M-10 260C180 260 220 150 400 150", accent: true },
  { d: "M810 40C620 40 580 150 400 150", accent: true },
  { d: "M810 260C620 260 580 150 400 150", accent: false },
  { d: "M-10 150H400", accent: true },
  { d: "M810 150H400", accent: false },
];

const DURATION = 1.8;
// Pulses per line, evenly spaced so the flow never breaks
const TRAIN = [0, 1, 2];

/** Lines that stream into the centre of the card — only while it is hovered. */
export function CtaBeams() {
  const hovered = useTiltHover();

  return (
    <Scene
      viewBox="0 0 800 300"
      preserveAspectRatio="xMidYMid slice"
      paused={!hovered}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-500 [mask-image:linear-gradient(90deg,#000,rgb(0_0_0/0.3)_35%,rgb(0_0_0/0.3)_65%,#000)]",
        hovered ? "opacity-100" : "opacity-0",
      )}
    >
      {beams.map((b, i) =>
        TRAIN.map((n) => (
          <PulsePath
            key={`${b.d}-${n}`}
            d={b.d}
            track={n === 0 ? undefined : false}
            delay={(i % 3) * 0.2 + (n * DURATION) / TRAIN.length}
            duration={DURATION}
            repeatDelay={0}
            ease="linear"
            length={0.18}
            color={b.accent ? "var(--accent)" : "var(--brand)"}
          />
        )),
      )}
    </Scene>
  );
}
