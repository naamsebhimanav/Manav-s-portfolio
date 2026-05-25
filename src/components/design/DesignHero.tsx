"use client";

import { ArrowDown, Layers, Zap, Monitor } from "lucide-react";

const tags = ["Brand Identity", "Poster Design", "Social Media", "Typography", "UI/UX", "Motion"];

export default function DesignHero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">

      {/* ── Background image ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/content/design thumb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }} />
      {/* ── Dark overlay for contrast ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.8) 100%)",
        }} />

      {/* ── Grid background ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

      {/* ── Accent blobs ── */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />

      {/* ── Vignette ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(8,8,8,0.9) 100%)" }} />

      {/* ── Floating design elements ── */}
      <div className="absolute top-32 right-16 hidden lg:block opacity-20">
        <div className="w-24 h-24 border border-gold/40 rotate-12" />
        <div className="w-16 h-16 border border-white/20 -rotate-6 mt-3 ml-4" />
      </div>
      <div className="absolute bottom-32 left-16 hidden lg:block opacity-15">
        <div className="w-20 h-20 rounded-full border border-gold/30" />
        <div className="w-3 h-3 bg-gold/50 rounded-full mt-4 ml-8" />
      </div>

      {/* ── Corner brackets ── */}
      <div className="absolute top-24 left-10 w-8 h-8 border-l-2 border-t-2 border-white/10" />
      <div className="absolute top-24 right-10 w-8 h-8 border-r-2 border-t-2 border-white/10" />
      <div className="absolute bottom-16 left-10 w-8 h-8 border-l-2 border-b-2 border-white/10" />
      <div className="absolute bottom-16 right-10 w-8 h-8 border-r-2 border-b-2 border-white/10" />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">

        {/* Tag */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="font-sans text-[9px] tracking-[0.6em] uppercase text-gold/60">
            Design · Manav Arora
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Headline */}
        <h1 className="font-sans font-black text-display-2xl text-white leading-[0.88] tracking-tight mb-2 uppercase">
          Design that
        </h1>
        <h1 className="font-sans font-black text-display-2xl leading-[0.88] tracking-tight mb-8 uppercase"
          style={{
            background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 40%, #ffffff 60%, #c9a84c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
          demands attention
        </h1>

        {/* Sub */}
        <p className="font-sans text-sm text-white/40 max-w-lg mx-auto mb-10 leading-relaxed">
          Posters, logos, social media, and brand identities — built with obsessive attention
          to typography, contrast, and the kind of visual impact that stops the scroll.
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tags.map((t) => (
            <span key={t} className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/30 border border-white/10 px-3 py-1.5 hover:border-gold/40 hover:text-gold/70 transition-all duration-300 cursor-default">
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button onClick={() => go("#posters")}
            className="flex items-center gap-3 bg-white text-black font-sans font-bold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold hover:text-black transition-colors duration-300">
            <Layers size={14} />
            View Work
          </button>
          <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 border border-gold/40 text-gold font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold/10 hover:border-gold transition-all duration-300">
            <Zap size={14} />
            Hire Me
          </button>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
        </div>
        <ArrowDown size={12} className="text-white/25" />
      </div>
    </section>
  );
}
