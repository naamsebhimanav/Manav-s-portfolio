"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/components/providers/CursorProvider";

export default function CustomCursor() {
  const { variant, label } = useCursor();
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springCfg = { damping: 28, stiffness: 280, mass: 0.5 };
  const dotCfg   = { damping: 40, stiffness: 600, mass: 0.2 };

  const x    = useSpring(cursorX, springCfg);
  const y    = useSpring(cursorY, springCfg);
  const dotX = useSpring(cursorX, dotCfg);
  const dotY = useSpring(cursorY, dotCfg);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mouseenter", show);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseenter", show);
    };
  }, [cursorX, cursorY, visible]);

  const isHover  = variant === "hover";
  const isText   = variant === "text";
  const isHidden = variant === "hidden" || !visible;

  const ringSize = isHover ? 48 : isText ? 72 : 32;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x, y }}
        animate={{ opacity: isHidden ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="rounded-full border border-gold/60 flex items-center justify-center"
          animate={{
            width:  ringSize,
            height: ringSize,
            x: -ringSize / 2,
            y: -ringSize / 2,
            backgroundColor: isHover ? "rgba(201,168,76,0.08)" : "transparent",
          }}
          transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
        >
          {label && (
            <span className="font-sans text-[9px] tracking-widest uppercase text-gold whitespace-nowrap">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: isHidden || isHover ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-gold"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </motion.div>
    </>
  );
}
