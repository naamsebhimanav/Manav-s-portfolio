"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/components/providers/CursorProvider";
import clsx from "clsx";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
  variant?: "gold" | "outline" | "ghost";
  label?: string;
}

const variantClasses = {
  gold: "bg-gold text-void font-sans font-semibold tracking-[0.2em] uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors duration-300",
  outline:
    "border border-gold/50 text-gold font-sans font-medium tracking-[0.2em] uppercase text-xs px-8 py-4 hover:border-gold hover:bg-gold/8 transition-all duration-300",
  ghost:
    "text-ivory/70 font-sans font-medium tracking-[0.2em] uppercase text-xs px-4 py-2 hover:text-gold transition-colors duration-300",
};

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  strength = 0.35,
  variant = "gold",
  label,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const { setVariant, setLabel } = useCursor();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
    setVariant("default");
    setLabel("");
  };

  const handleMouseEnter = () => {
    setVariant("hover");
    if (label) setLabel(label);
  };

  const inner = (
    <motion.div
      ref={ref}
      className={clsx("relative inline-block", className)}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <span className={clsx("relative z-10 inline-flex items-center gap-2", variantClasses[variant])}>
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="inline-block"
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0 cursor-none">
      {inner}
    </button>
  );
}
