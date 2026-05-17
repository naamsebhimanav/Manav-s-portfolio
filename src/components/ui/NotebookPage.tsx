"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * NotebookPage — wraps a section and applies a 3D page-lift / peel
 * transition as the user scrolls it into view.
 *
 * The section starts slightly rotated on X (like the bottom of a page
 * curling up), scaled down, and dimmed. As it scrolls into the viewport
 * it "unfolds" flat, scales to 1, and reaches full brightness.
 */
export default function NotebookPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // "start end" = top of element hits bottom of viewport → progress 0
    // "end start" = bottom of element hits top of viewport → progress 1
    offset: ["start end", "start 0.3"],
  });

  // Map scroll progress to animation values
  const rotateX = useTransform(scrollYProgress, [0, 1], [6, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        scale,
        opacity,
        y,
        transformPerspective: 1200,
        transformOrigin: "center bottom",
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
