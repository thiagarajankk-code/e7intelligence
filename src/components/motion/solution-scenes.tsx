"use client";

import { motion } from "framer-motion";
import {
  PulseNode,
  PulsePath,
  Scene,
  useSceneActive,
} from "@/components/motion/scene";

const box = { fill: "var(--background)", stroke: "var(--line)", strokeWidth: 1.5 };

/** Three stages hand work to one another; each lights up as the pulse passes. */
function Workflow() {
  const active = useSceneActive();

  return (
    <>
      <PulsePath d="M4 48H156" duration={3} repeatDelay={0.6} length={0.12} />
      {[14, 62, 110].map((x, i) => (
        <g key={x}>
          <rect x={x} y={32} width={36} height={32} rx={8} {...box} />
          <motion.rect
            x={x}
            y={32}
            width={36}
            height={32}
            rx={8}
            stroke="var(--brand)"
            strokeWidth={1.5}
            opacity={0}
            animate={active ? { opacity: [0, 1, 0] } : undefined}
            transition={{
              duration: 1,
              delay: 0.5 + i * 0.85,
              repeat: Infinity,
              repeatDelay: 2.6,
            }}
          />
          <path d={`M${x + 10} 44h16M${x + 10} 52h10`} stroke="var(--line)" strokeWidth={1.5} />
        </g>
      ))}
    </>
  );
}

/** A question comes in, the assistant thinks, then answers. */
function Assistant() {
  const active = useSceneActive();

  return (
    <>
      <rect x={16} y={14} width={78} height={26} rx={10} {...box} />
      <path d="M28 27h40" stroke="var(--line)" strokeWidth={1.5} />
      <rect x={58} y={52} width={86} height={30} rx={10} fill="var(--background)" stroke="var(--brand)" strokeWidth={1.5} />
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={86 + i * 15}
          cy={67}
          r={3}
          fill={i === 2 ? "var(--accent)" : "var(--brand)"}
          animate={active ? { y: [0, -5, 0], opacity: [0.4, 1, 0.4] } : undefined}
          transition={{
            duration: 0.9,
            delay: i * 0.15,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
      <PulsePath d="M30 40V67H58" duration={1.6} repeatDelay={1.4} length={0.3} />
    </>
  );
}

/** A scanner sweeps a document and structured rows come out the other side. */
function Documents() {
  const active = useSceneActive();
  const rows = [26, 48, 70];

  return (
    <>
      <rect x={18} y={10} width={50} height={76} rx={6} {...box} />
      <path d="M28 26h30M28 38h22M28 50h30M28 62h18M28 74h26" stroke="var(--line)" strokeWidth={1.5} />
      {active && (
        <motion.path
          d="M14 0H72"
          stroke="var(--accent)"
          strokeWidth={1.5}
          initial={{ y: 14 }}
          animate={{ y: 82 }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      )}
      {rows.map((y, i) => (
        <g key={y}>
          <PulsePath
            d={`M68 48C84 48 82 ${y} 100 ${y}`}
            duration={1.4}
            delay={i * 0.5}
            repeatDelay={1.6}
            length={0.3}
          />
          <rect x={100} y={y - 8} width={44} height={16} rx={5} {...box} />
          <motion.rect
            x={106}
            y={y - 2}
            width={32}
            height={4}
            rx={2}
            fill="var(--brand)"
            opacity={0.25}
            animate={active ? { opacity: [0.25, 1, 0.25] } : undefined}
            transition={{ duration: 1.2, delay: 1 + i * 0.5, repeat: Infinity, repeatDelay: 1.8 }}
          />
        </g>
      ))}
    </>
  );
}

/** One founder at the centre, a ring of tools working around them. */
function Toolkit() {
  const active = useSceneActive();
  const tools = [
    { x: 80, y: 14 },
    { x: 114, y: 48 },
    { x: 80, y: 82 },
    { x: 46, y: 48 },
  ];

  return (
    <>
      <motion.g
        animate={active ? { rotate: 360 } : undefined}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <circle cx={80} cy={48} r={34} stroke="var(--line)" strokeWidth={1.5} strokeDasharray="2 6" />
        {tools.map((t, i) => (
          <rect
            key={i}
            x={t.x - 7}
            y={t.y - 7}
            width={14}
            height={14}
            rx={4}
            fill="var(--background)"
            stroke={i % 2 ? "var(--accent)" : "var(--brand)"}
            strokeWidth={1.5}
          />
        ))}
      </motion.g>
      {tools.map((t, i) => (
        <PulsePath
          key={i}
          d={`M80 48L${80 + (t.x - 80) * 0.62} ${48 + (t.y - 48) * 0.62}`}
          duration={1.2}
          delay={i * 0.6}
          repeatDelay={1.8}
          length={0.4}
          color={i % 2 ? "var(--accent)" : "var(--brand)"}
        />
      ))}
      <PulseNode cx={80} cy={48} r={5} />
    </>
  );
}

/** Two systems wired together, data moving in both directions. */
function Integration() {
  return (
    <>
      <PulsePath d="M56 38H104" duration={1.5} repeatDelay={1} length={0.35} />
      <PulsePath d="M56 58H104" duration={1.5} delay={0.8} repeatDelay={1} length={0.35} color="var(--accent)" reverse />
      <rect x={14} y={24} width={42} height={48} rx={8} {...box} />
      <path d="M24 38h22M24 48h22M24 58h14" stroke="var(--line)" strokeWidth={1.5} />
      <rect x={104} y={24} width={42} height={48} rx={8} fill="var(--background)" stroke="var(--brand)" strokeWidth={1.5} />
      <PulseNode cx={125} cy={48} r={4} delay={0.6} />
      <circle cx={56} cy={38} r={2.5} fill="var(--brand)" />
      <circle cx={104} cy={58} r={2.5} fill="var(--accent)" />
    </>
  );
}

/** A short sprint: the line climbs through milestones to a proven result. */
function Sprints() {
  const active = useSceneActive();
  const points = [
    [18, 76],
    [50, 60],
    [76, 66],
    [108, 36],
    [142, 18],
  ];
  const d = "M" + points.map((p) => p.join(" ")).join("L");

  return (
    <>
      <path d="M18 16V84H148" stroke="var(--line)" strokeWidth={1.5} />
      <path d={d} stroke="var(--line)" strokeWidth={1.5} />
      {active && (
        <motion.path
          d={d}
          stroke="var(--brand)"
          strokeWidth={2}
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{ duration: 3.6, times: [0, 0.65, 1], repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }}
        />
      )}
      {points.slice(1, -1).map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r={3} fill="var(--background)" stroke="var(--line)" strokeWidth={1.5} />
      ))}
      <PulseNode cx={142} cy={18} r={4} delay={2.2} color="var(--accent)" />
    </>
  );
}

const scenes = {
  workflow: Workflow,
  assistant: Assistant,
  documents: Documents,
  toolkit: Toolkit,
  integration: Integration,
  sprints: Sprints,
};

export type SolutionSceneName = keyof typeof scenes;

export function SolutionScene({ name }: { name: SolutionSceneName }) {
  const Content = scenes[name];

  return (
    <Scene viewBox="0 0 160 96" className="h-24 w-40">
      <Content />
    </Scene>
  );
}
