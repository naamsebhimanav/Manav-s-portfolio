"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const steps = [20, 45, 70, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 300);
      }
    }, 180);
    return () => clearInterval(interval);
  }, []);

  // On server / before mount — render children immediately so there's no blank flash
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Page content — always rendered, fades in when loading ends */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      {/* Loading overlay — sits on top, slides away */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[99999] bg-void flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Left curtain */}
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 bg-curtain"
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            />
            {/* Right curtain */}
            <motion.div
              className="absolute inset-y-0 right-0 w-1/2 bg-curtain"
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
              {/* Diamond logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="w-16 h-16 border border-gold/40 rotate-45 flex items-center justify-center">
                  <div className="w-8 h-8 border border-gold/60 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.p
                className="font-serif text-sm tracking-[0.4em] uppercase text-ivory/70"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Manav Arora
              </motion.p>

              {/* Progress bar */}
              <div className="w-48 h-px bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-dim via-gold to-gold-light"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ width: "0%" }}
                />
              </div>

              <motion.p
                className="font-sans text-[10px] tracking-[0.35em] uppercase text-smoke"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                The curtain rises
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
