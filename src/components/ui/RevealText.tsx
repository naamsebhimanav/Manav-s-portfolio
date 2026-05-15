"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  once?: boolean;
}

export default function RevealText({
  children,
  className,
  delay = 0,
  duration = 0.8,
  as: Tag = "p",
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px" });

  const words = children.split(" ");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={clsx(className)}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration,
              delay: delay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
