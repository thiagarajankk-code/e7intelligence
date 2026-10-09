"use client";

import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/** Fades content up the first time it scrolls into view. */
export function Reveal({
  delay = 0,
  y = 20,
  className,
  children,
}: {
  delay?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
