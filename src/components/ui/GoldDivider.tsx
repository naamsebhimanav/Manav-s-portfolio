"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface GoldDividerProps {
  className?: string;
  width?: "full" | "partial";
}

export default function GoldDivider({ className, width = "full" }: GoldDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={clsx("flex items-center justify-center", className)}>
      <motion.div
        className={clsx(
          "h-px",
          width === "full" ? "w-full" : "w-24"
        )}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.8) 50%, rgba(201,168,76,0.5) 70%, transparent 100%)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
}
