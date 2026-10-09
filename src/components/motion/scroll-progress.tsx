"use client";

import { motion, useScroll } from "framer-motion";

/** Thin brand line under the header that fills as the page is read. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: scrollYProgress }}
      className="absolute inset-x-0 -bottom-px h-px origin-left bg-gradient-to-r from-brand to-accent"
    />
  );
}
