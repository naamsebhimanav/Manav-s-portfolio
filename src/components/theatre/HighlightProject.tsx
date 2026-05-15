"use client";

import { useState } from "react";
import { Play, X, Quote, Layers, Lightbulb, Heart } from "lucide-react";

const visuals = [
  {
    label: "The Opening",
    desc: "A bare stage. A single spotlight. One man. Seven masks laid in a circle around him.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    label: "The Transformation",
    desc: "Mid-performance, the costume changes happen in full view of the audience — the act of becoming is the performance.",
    img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
  },
  {
    label: "The Confrontation",
    desc: "The climax: all seven characters speak simultaneously, overlapping, until only silence remains.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  },
  {
    label: "The Unmasking",
    desc: "The final moment — Manav removes every costume piece, every mask, and stands as himself. The most vulnerable moment of the show.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
];

const pillars = [
  {
    icon: Layers,
    title: "The Concept",
    content:
      "Bahurupiya — the shape-shifter — is a figure from Indian folk tradition who earns his living by becoming others. The show asks: when you spend your life being everyone else, who are you when you stop?",
  },
  {
    icon: Lightbulb,
    title: "The Inspiration",
    content:
      "Inspired by the real Bahurupiyas of Rajasthan, by Kafka's Metamorphosis, and by Manav's own experience of performing — the constant question of where the actor ends and the person begins.",
  },
  {
    icon: Heart,
    title: "The Emotion",
    content:
      "The show moves through seven emotional registers: joy, grief, rage, love, fear, shame, and finally — peace. Each character embodies one, and together they form a complete human being.",
  },
  {
    icon: Quote,
    title: "The Reception",
    content:
      "Winner of Best Solo Performance at the National Youth Theatre Festival 2024. Performed in Delhi, Mumbai, and Chandigarh. Called 'a masterclass in physical and emotional transformation' by critics.",
  },
];

export default function HighlightProject() {
  const [activeVisual, setActiveVisual] = useState(0);
  const [videoOpen, setVideoOpen]       = useState(false);

  return (
    <section id="bahurupiya" className="relative py-28 lg:py-36 bg-stage overflow-hidden">
      {/* Dramatic top spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(201,168,76,0.14) 0%, rgba(201,168,76,0.03) 50%, transparent 75%)" }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold/60">Highlight Project · 2024</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
          <h2 className="font-serif text-display-xl text-ivory leading-tight mb-4">
            Bahurupiya
          </h2>
          <p className="font-serif italic text-display-md text-gold-gradient mb-6">
            The Many-Faced One
          </p>
          <p className="font-sans text-sm text-ivory/40 max-w-2xl mx-auto leading-relaxed">
            A 45-minute solo performance. Seven characters. One question: who are you when you take off every mask?
          </p>
        </div>

        {/* ── Visual showcase ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mb-16">

          {/* Main visual */}
          <div className="relative aspect-video overflow-hidden border border-gold/15">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url('${visuals[activeVisual].img}')` }}
            />
            <div className="absolute inset-0 bg-void/50" />
            {/* Spotlight */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
            />
            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(0,0,0,0.75) 100%)" }}
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-void/90 to-transparent">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/60 mb-1">
                {visuals[activeVisual].label}
              </p>
              <p className="font-sans text-xs text-ivory/50 leading-relaxed max-w-lg">
                {visuals[activeVisual].desc}
              </p>
            </div>

            {/* Play button */}
            <button
              onClick={() => setVideoOpen(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-gold/50 flex items-center justify-center text-gold hover:bg-gold/15 hover:border-gold transition-all duration-300 group"
              aria-label="Watch performance"
            >
              <Play size={22} className="ml-1 group-hover:scale-110 transition-transform" />
            </button>

            {/* Top badge */}
            <div className="absolute top-4 left-4 bg-void/70 backdrop-blur-sm border border-gold/25 px-3 py-1.5">
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/70">
                National Youth Theatre Festival 2024
              </span>
            </div>

            {/* Award badge */}
            <div className="absolute top-4 right-4 bg-gold/15 border border-gold/40 px-3 py-1.5">
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold">
                🏆 Best Solo Performance
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex flex-row lg:flex-col gap-3">
            {visuals.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveVisual(i)}
                className={`relative flex-1 lg:flex-none aspect-video lg:aspect-[4/3] overflow-hidden border transition-all duration-300 ${
                  activeVisual === i ? "border-gold/60" : "border-white/8 hover:border-gold/25"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${v.img}')` }}
                />
                <div className={`absolute inset-0 transition-colors duration-300 ${activeVisual === i ? "bg-void/30" : "bg-void/60"}`} />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="font-sans text-[8px] tracking-[0.2em] uppercase text-ivory/60 leading-tight">{v.label}</p>
                </div>
                {activeVisual === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Four pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group p-7 border border-white/5 hover:border-gold/20 bg-charcoal/20 hover:bg-charcoal/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <p.icon size={18} className="text-gold/50 group-hover:text-gold transition-colors duration-300" />
                <h3 className="font-serif text-lg text-ivory">{p.title}</h3>
              </div>
              <p className="font-sans text-sm text-ivory/45 leading-relaxed">{p.content}</p>
            </div>
          ))}
        </div>

        {/* ── Full-width quote ── */}
        <div className="relative py-14 border-t border-b border-gold/10 text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
          />
          <div className="relative">
            <div className="font-serif text-6xl text-gold/15 leading-none mb-4 select-none">&ldquo;</div>
            <p className="font-serif text-display-md italic text-ivory/60 max-w-3xl mx-auto leading-relaxed">
              I didn&apos;t write Bahurupiya. I excavated it — from every performance I&apos;d ever given,
              every character I&apos;d ever worn, every moment I&apos;d wondered who I was underneath.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gold/30" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/50">Manav Arora</span>
              <div className="h-px w-8 bg-gold/30" />
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setVideoOpen(true)}
            className="flex items-center gap-3 bg-gold text-void font-sans font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            <Play size={14} />
            Watch the Performance
          </button>
          <a
            href="/#contact"
            className="border border-gold/40 text-gold font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            Book Manav for Your Stage
          </a>
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-void/97 flex items-center justify-center p-6"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              title="Bahurupiya Performance"
            />
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 flex items-center gap-2 text-ivory/50 hover:text-gold transition-colors"
            >
              <X size={18} />
              <span className="font-sans text-[10px] tracking-widest uppercase">Close</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
