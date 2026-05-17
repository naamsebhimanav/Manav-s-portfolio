"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void"
    >
      {/* ── Background Image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/hero_gold_nebula_bg.png')" }}
      />
      {/* ── Dark overlay for contrast ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/10 via-void/60 to-void pointer-events-none" />

      {/* ── Spotlight cone from top ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[80vh] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 90% at 50% 0%, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.05) 50%, transparent 80%)",
        }}
      />

      {/* ── Warm ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(28,16,8,0.6) 0%, transparent 70%)",
        }}
      />

      {/* ── Vignette edges ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* ── Film grain removed due to performance issues ── */}

      {/* ── Stage floor line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* ── Corner brackets ── */}
      <div className="absolute top-8 left-8 w-10 h-10 border-l-2 border-t-2 border-gold/30" />
      <div className="absolute top-8 right-8 w-10 h-10 border-r-2 border-t-2 border-gold/30" />
      <div className="absolute bottom-8 left-8 w-10 h-10 border-l-2 border-b-2 border-gold/30" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-r-2 border-b-2 border-gold/30" />

      {/* ── Background watermark ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-serif font-bold text-[22vw] text-white/[0.02] tracking-tighter leading-none">
          MANAV
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Descriptor */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/50" />
          <span className="font-sans text-[11px] tracking-[0.6em] uppercase text-white/70">
            Performer · Visual Artist · Storyteller
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/50" />
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(15px)", y: 40 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light text-[15vw] md:text-[10vw] text-white leading-[0.85] tracking-tight mb-6"
        >
          Manav Arora
        </motion.h1>

        {/* Tagline */}
        <p className="font-serif italic text-display-md text-white/90 mb-2 leading-relaxed max-w-3xl mx-auto">
          Where stories breathe through performance and visuals
        </p>

        {/* Supporting Line */}
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 mb-12">
          Blending performance, storytelling, and visual artistry
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("#work")}
            className="group flex items-center gap-3 bg-gold text-void font-sans font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold-light hover:scale-[1.03] transition-all duration-300"
          >
            Explore My Work <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-3 border border-gold/50 text-gold font-sans font-medium text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold/10 hover:border-gold hover:scale-[1.03] transition-all duration-300"
          >
            Let's Collaborate
          </button>
        </div>


      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold/70 animate-pulse">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-scroll-line" />
        </div>
        <ArrowDown size={12} className="text-gold/50" />
      </div>
    </section>
  );
}
