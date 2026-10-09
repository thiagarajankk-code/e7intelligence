"use client";

import { motion } from "framer-motion";
import { PulsePath, Scene } from "@/components/motion/scene";

// The brain is drawn in its own 400×300 box, then placed in the middle of the scene.
const SCALE = 1;
const OFFSET = { x: 80, y: 60 };
const WIDTH = 400;

/** Front-on silhouette of the right hemisphere, traced clockwise from the top of the fissure. */
const rightSide = [
  [200, 40],
  [235, 22],
  [285, 25],
  [328, 50],
  [358, 95],
  [368, 145],
  [355, 195],
  [322, 232],
  [275, 250],
  [230, 248],
  [200, 232],
];

// The left hemisphere mirrors the right, carrying on round to where we started.
const profile = [
  ...rightSide,
  ...rightSide
    .slice(1, -1)
    .reverse()
    .map(([x, y]) => [WIDTH - x, y]),
];

// Each edge bulges outwards, giving the folded outline of the cortex.
const outline =
  [...profile, profile[0]]
    .map(([x, y], i, all) => {
      if (i === 0) return `M${x} ${y}`;
      const [px, py] = all[i - 1];
      const r = Math.round(Math.hypot(x - px, y - py) * 0.62);
      return `A${r} ${r} 0 0 1 ${x} ${y}`;
    })
    .join("") + "Z";

const fissure = "M200 40C194 90 206 150 200 232";

// Drawn once for the right half and mirrored for the left.
const halfDetails = [
  "M235 22C250 50 228 70 245 95",
  "M328 50C300 70 310 100 285 115",
  "M368 145C335 140 320 160 330 185",
  "M275 250C285 220 260 205 270 180",
  "M222 130C245 125 255 145 280 140",
  "M225 190C240 180 250 195 262 188",
  // Cerebellum lobe and brain stem, tucked underneath
  "M206 252C212 282 262 280 270 254",
  "M214 262C230 274 250 272 262 260",
  "M210 266C210 282 206 292 205 300",
];

// Points inside the brain where the incoming lines end, in the brain's own coordinates.
const neurons = {
  a: [245, 70],
  b: [310, 95],
  c: [335, 150],
  d: [290, 195],
  e: [240, 215],
  f: [250, 140],
  g: [155, 70],
  h: [90, 95],
  i: [65, 150],
  j: [110, 195],
  k: [160, 215],
  l: [150, 140],
} as const;

type Neuron = keyof typeof neurons;

const at = (n: Neuron) => ({
  x: OFFSET.x + neurons[n][0] * SCALE,
  y: OFFSET.y + neurons[n][1] * SCALE,
});

// Information streaming in from the edges of the scene, each line ending inside the brain.
const feeds: Array<{ from: string; to: Neuron; accent?: boolean }> = [
  { from: "M0 90C60 90 110 150", to: "h" },
  { from: "M0 330C50 330 90 215", to: "i", accent: true },
  { from: "M150 0C155 50 225 80", to: "g", accent: true },
  { from: "M410 0C405 50 335 80", to: "a" },
  { from: "M560 90C500 90 450 150", to: "b", accent: true },
  { from: "M560 330C510 330 470 215", to: "c" },
  { from: "M440 440C435 390 400 300", to: "d", accent: true },
  { from: "M120 440C125 390 160 300", to: "j" },
];

const tone = (accent?: boolean) => (accent ? "var(--accent)" : "var(--brand)");
const brainStroke = "color-mix(in oklab, var(--brand) 45%, var(--line))";

/** Hero illustration: a solid brain with information streaming into it from all sides. */
export function HeroBrain() {
  return (
    <Scene
      viewBox="0 0 560 440"
      className="h-auto w-full [mask-image:radial-gradient(closest-side,#000_75%,transparent)]"
    >
      {feeds.map((f, i) => {
        const end = at(f.to);
        const d = `${f.from} ${end.x} ${end.y}`;
        return (
          <g key={d}>
            <PulsePath
              d={d}
              duration={2.6}
              delay={i * 0.45}
              repeatDelay={1}
              length={0.16}
              color={tone(f.accent)}
            />
            {/* A second packet on the same line keeps the stream constant */}
            <PulsePath
              d={d}
              track={false}
              duration={2.6}
              delay={i * 0.45 + 1.8}
              repeatDelay={1}
              length={0.08}
              color={tone(f.accent)}
            />
          </g>
        );
      })}

      <g transform={`translate(${OFFSET.x} ${OFFSET.y}) scale(${SCALE})`}>
        {/* Solid, so the incoming lines vanish into the brain rather than showing through */}
        <path
          d={outline}
          fill="color-mix(in oklab, var(--brand) 8%, var(--background))"
        />
        {[undefined, `translate(${WIDTH} 0) scale(-1 1)`].map((mirror) => (
          <g key={mirror ?? "right"} transform={mirror}>
            {halfDetails.map((d) => (
              <path key={d} d={d} stroke="var(--line)" strokeWidth={1.2} />
            ))}
          </g>
        ))}
        <motion.path
          d={outline}
          stroke={brainStroke}
          strokeWidth={1.4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        <path d={fissure} stroke={brainStroke} strokeWidth={1.2} />
      </g>
    </Scene>
  );
}
