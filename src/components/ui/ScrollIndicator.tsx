"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-smoke rotate-90 origin-center mb-2">
        Scroll
      </span>
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gold"
          style={{ height: "40%" }}
          animate={{ y: ["0%", "250%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5,
          }}
        />
      </div>
    </motion.div>
  );
}
