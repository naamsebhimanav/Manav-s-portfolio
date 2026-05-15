"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SceneDividerProps {
  label: string;
}

export default function SceneDivider({ label }: SceneDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center py-6 overflow-hidden bg-void"
      aria-hidden="true"
    >
      {/* Left line */}
      <motion.div
        className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/25"
        initial={{ scaleX: 0, originX: 1 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Label */}
      <motion.span
        className="mx-6 font-sans text-[9px] tracking-[0.45em] uppercase text-gold/35 whitespace-nowrap"
        initial={{ opacity: 0, y: 6 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {label}
      </motion.span>

      {/* Right line */}
      <motion.div
        className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/25"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Center diamond */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-gold/40 rotate-45"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.4 }}
      />
    </div>
  );
}
