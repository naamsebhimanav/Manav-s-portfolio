"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ number, label, className }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={ref}
      className={clsx("flex items-center gap-4", className)}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="font-sans text-[10px] text-gold/60 tracking-widest">{number}</span>
      <motion.div
        className="h-px bg-gold/30 origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        style={{ width: "40px" }}
      />
      <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/40">
        {label}
      </span>
    </motion.div>
  );
}
