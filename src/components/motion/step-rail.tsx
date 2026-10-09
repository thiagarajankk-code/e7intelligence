"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Horizontal rail linking the steps, with a pulse running start to finish. */
export function StepRail() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 hidden h-px overflow-hidden bg-line sm:block"
    >
      {!reduced && (
        <motion.div
          className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-brand to-accent"
          initial={{ left: "-10%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
        />
      )}
    </div>
  );
}
