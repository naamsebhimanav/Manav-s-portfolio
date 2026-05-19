"use client";

import { ArrowDown, Brush } from "lucide-react";

export default function ArtHero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* ── Spotlight on canvas ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 50% 10%, rgba(201,168,76,0.16) 0%, rgba(201,168,76,0.04) 50%, transparent 75%)",
        }}
      />

      {/* ── Ambient warm fill ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 50%, rgba(20,12,4,0.7) 0%, transparent 70%)",
        }}
      />

      {/* ── Deep vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 20%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* ── Grain removed due to performance issues ── */}

      {/* ── Full background artwork ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/design/ganeshji.png')" }}
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* ── Corner brackets ── */}
      <div className="absolute top-24 left-10 w-8 h-8 border-l-2 border-t-2 border-gold/20" />
      <div className="absolute top-24 right-10 w-8 h-8 border-r-2 border-t-2 border-gold/20" />
      <div className="absolute bottom-16 left-10 w-8 h-8 border-l-2 border-b-2 border-gold/20" />
      <div className="absolute bottom-16 right-10 w-8 h-8 border-r-2 border-b-2 border-gold/20" />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Tag */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="font-sans text-[9px] tracking-[0.6em] uppercase text-gold/60">
            Art Portfolio · Manav Arora
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Headline */}
        <h1 className="font-serif font-light text-display-2xl text-white leading-[0.92] tracking-tight mb-5">
          Every stroke
          <br />
          <span className="italic text-gold-gradient">tells a story</span>
        </h1>

        {/* Sub */}
        <p className="font-sans text-sm text-white/40 max-w-md mx-auto mb-12 leading-relaxed">
          Portraits, paintings, and commissions — each piece crafted with intention,
          light, and the quiet language of colour.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => go("#gallery")}
            className="flex items-center gap-3 bg-gold text-black font-sans font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            <Brush size={14} />
            View Gallery
          </button>
          <button
            onClick={() => go("#cta")}
            className="border border-gold/40 text-gold font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            Commission a Portrait
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10">
          {[
            { num: "120+", label: "Artworks" },
            { num: "15+",  label: "Commissions" },
            { num: "5–7",  label: "Days Delivery" },
            { num: "100%", label: "Satisfaction" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-2xl text-gold font-light">{s.num}</p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/30 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-scroll-line" />
        </div>
        <ArrowDown size={12} className="text-gold/40" />
      </div>
    </section>
  );
}
