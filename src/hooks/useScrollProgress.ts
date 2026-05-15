import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollProgressOptions {
  offset?: [string, string];
}

interface ScrollProgressReturn {
  ref: React.RefObject<HTMLElement>;
  scrollYProgress: MotionValue<number>;
  opacity: MotionValue<number>;
  y: MotionValue<string>;
  scale: MotionValue<number>;
}

export function useScrollProgress(
  options: ScrollProgressOptions = {}
): ScrollProgressReturn {
  const ref = useRef<HTMLElement>(null);
  const { offset = ["start end", "end start"] } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return { ref, scrollYProgress, opacity, y, scale };
}
