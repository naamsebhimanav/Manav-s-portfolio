"use client";

import { ArrowDown, Play } from "lucide-react";

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
        className="absolute inset-0 bg-contain bg-[center_bottom] bg-no-repeat opacity-80 grayscale-[15%]"
        style={{ backgroundImage: "url('/hero-bg-user.png')" }}
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

      {/* ── Film grain ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

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
        {/* Tag line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold/70">
            Performer · Visual Artist · Storyteller
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Name */}
        <h1 className="font-serif font-light text-display-2xl text-ivory leading-[0.92] tracking-tight mb-4">
          Manav Arora
        </h1>

        {/* Subtext */}
        <p className="font-serif italic text-display-md text-gold-gradient mb-4">
          Where stories breathe through
        </p>
        <p className="font-serif italic text-display-md text-gold-gradient mb-10">
          performance and visuals
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("#work")}
            className="group flex items-center gap-3 bg-gold text-void font-sans font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            <Play size={14} className="group-hover:scale-110 transition-transform" />
            View Work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-3 border border-gold/50 text-gold font-sans font-medium text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 mb-16">
          {[
            { num: "50K+", label: "Instagram" },
            { num: "30+",  label: "Performances" },
            { num: "10+",  label: "Awards" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-2xl text-gold font-light">{s.num}</p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-smoke mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-smoke">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-scroll-line" />
        </div>
        <ArrowDown size={12} className="text-gold/50" />
      </div>
    </section>
  );
}
