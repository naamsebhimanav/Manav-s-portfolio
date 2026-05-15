"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface Logo {
  id: number;
  brand: string;
  industry: string;
  year: string;
  concept: string;
  colors: string[];
  fonts: string;
  deliverables: string[];
  logoMark: string;   // SVG path or emoji stand-in
  bg: string;
  textColor: string;
  accentColor: string;
  img: string;
}

const logos: Logo[] = [
  {
    id: 1,
    brand: "Rangmanch",
    industry: "Theatre Collective",
    year: "2024",
    concept: "A stylised curtain fold that doubles as the letter R. The mark communicates drama, transformation, and the act of revealing.",
    colors: ["#c9a84c", "#1a1a1a", "#f5f0e8"],
    fonts: "Custom serif wordmark",
    deliverables: ["Primary logo", "Icon mark", "Wordmark", "Brand guidelines"],
    logoMark: "◈",
    bg: "#0f0d08",
    textColor: "#c9a84c",
    accentColor: "#c9a84c",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 2,
    brand: "Roots & Routes",
    industry: "Cultural Festival",
    year: "2024",
    concept: "Two overlapping paths — one rooted in tradition, one reaching forward. The negative space forms a leaf and a compass simultaneously.",
    colors: ["#ffffff", "#e63946", "#1a1a1a"],
    fonts: "Bold geometric sans",
    deliverables: ["Logo system", "Poster templates", "Social kit", "Merchandise"],
    logoMark: "◉",
    bg: "#0a0a0a",
    textColor: "#ffffff",
    accentColor: "#e63946",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    id: 3,
    brand: "Monsoon Collective",
    industry: "Independent Music",
    year: "2023",
    concept: "A raindrop that becomes a sound wave. Minimal, modern, and immediately recognisable at any size — from vinyl to phone screen.",
    colors: ["#4cc9f0", "#0a0a0a", "#ffffff"],
    fonts: "Thin geometric sans",
    deliverables: ["Logo", "Album art template", "Social media kit"],
    logoMark: "◇",
    bg: "#050a10",
    textColor: "#4cc9f0",
    accentColor: "#4cc9f0",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
  {
    id: 4,
    brand: "Arora Studio",
    industry: "Creative Studio",
    year: "2023",
    concept: "The initials A and S interlocked — a mark that works as a monogram, a seal, and a signature. Timeless over trendy.",
    colors: ["#f5f0e8", "#050505", "#c9a84c"],
    fonts: "Custom serif monogram",
    deliverables: ["Monogram", "Full wordmark", "Stationery", "Digital assets"],
    logoMark: "◎",
    bg: "#080808",
    textColor: "#f5f0e8",
    accentColor: "#c9a84c",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
  },
  {
    id: 5,
    brand: "Kala Manch",
    industry: "Art Gallery",
    year: "2023",
    concept: "A brushstroke that forms a doorway — the entrance to art. The mark is deliberately imperfect, celebrating the human hand.",
    colors: ["#ffffff", "#2d1f0e", "#c9a84c"],
    fonts: "Handwritten + clean sans",
    deliverables: ["Logo", "Signage", "Print collateral", "Website assets"],
    logoMark: "◈",
    bg: "#0d0a07",
    textColor: "#ffffff",
    accentColor: "#c9a84c",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
  },
  {
    id: 6,
    brand: "Natak Co.",
    industry: "Theatre Production House",
    year: "2022",
    concept: "A spotlight beam reduced to its geometric essence — a triangle of light. Bold, confident, and unmistakably theatrical.",
    colors: ["#ffd60a", "#0a0a0a", "#ffffff"],
    fonts: "Heavy condensed sans",
    deliverables: ["Logo", "Poster system", "Merchandise", "Digital kit"],
    logoMark: "▲",
    bg: "#080800",
    textColor: "#ffd60a",
    accentColor: "#ffd60a",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
  },
];

export default function LogoDesigns() {
  const [active, setActive] = useState<number | null>(null);
  const logo = active !== null ? logos[active] : null;

  return (
    <section id="logos" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans font-bold text-[10px] text-gold/70 tracking-widest">02</span>
              <div className="h-px w-10 bg-gold/30" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Logo Designs</span>
            </div>
            <h2 className="font-sans font-black text-display-lg text-white uppercase tracking-tight">
              Marks that<br />
              <span className="text-gold-gradient">mean something</span>
            </h2>
          </div>
          <p className="font-sans text-xs text-white/30 max-w-xs leading-relaxed">
            Every logo is a distillation — a brand's entire personality compressed into a single mark.
          </p>
        </div>

        {/* Minimal grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {logos.map((l, i) => (
            <div
              key={l.id}
              className="group relative aspect-square cursor-pointer border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden"
              style={{ background: l.bg }}
              onClick={() => setActive(i)}
            >
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />

              {/* Logo mark — centred */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <span className="text-5xl md:text-6xl transition-transform duration-500 group-hover:scale-110"
                  style={{ color: l.accentColor }}>
                  {l.logoMark}
                </span>
                <div className="text-center">
                  <p className="font-sans font-black text-sm md:text-base uppercase tracking-widest transition-colors duration-300"
                    style={{ color: l.textColor }}>
                    {l.brand}
                  </p>
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 mt-0.5">
                    {l.industry}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <ZoomIn size={20} className="text-white/60" />
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">View Case</span>
                </div>
              </div>

              {/* Year badge */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-[8px] text-white/25">{l.year}</span>
              </div>

              {/* Accent corner */}
              <div className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${l.accentColor}40, transparent)` }} />
            </div>
          ))}
        </div>
      </div>

      {/* Case study modal */}
      {logo && (
        <div className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 md:p-10"
          onClick={() => setActive(null)}>
          <div className="relative w-full max-w-4xl border border-white/8 overflow-hidden"
            style={{ background: logo.bg }}
            onClick={(e) => e.stopPropagation()}>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Logo display */}
              <div className="relative aspect-square flex flex-col items-center justify-center gap-6 p-12">
                {/* Grid bg */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }} />

                <span className="text-8xl" style={{ color: logo.accentColor }}>{logo.logoMark}</span>
                <div className="text-center">
                  <p className="font-sans font-black text-2xl uppercase tracking-widest" style={{ color: logo.textColor }}>
                    {logo.brand}
                  </p>
                  <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/30 mt-1">{logo.industry}</p>
                </div>

                {/* Colour swatches */}
                <div className="flex gap-2 mt-4">
                  {logo.colors.map((c) => (
                    <div key={c} className="w-8 h-8 border border-white/10" style={{ background: c }} title={c} />
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-8 border-l border-white/5 flex flex-col justify-between space-y-5">
                <div className="space-y-5">
                  <div>
                    <span className="font-sans text-[8px] tracking-[0.4em] uppercase block mb-2" style={{ color: logo.accentColor }}>
                      {logo.industry} · {logo.year}
                    </span>
                    <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight">{logo.brand}</h3>
                  </div>

                  <div className="h-px w-12 bg-white/10" />

                  <div>
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 mb-2">Concept</p>
                    <p className="font-sans text-sm text-white/50 leading-relaxed">{logo.concept}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 mb-2">Typography</p>
                      <p className="font-sans text-xs text-white/45">{logo.fonts}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 mb-2">Year</p>
                      <p className="font-sans text-xs text-white/45">{logo.year}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 mb-2">Deliverables</p>
                    <div className="flex flex-wrap gap-1.5">
                      {logo.deliverables.map((d) => (
                        <span key={d} className="font-sans text-[9px] tracking-wider uppercase text-white/35 border border-white/10 px-2 py-0.5">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full font-sans font-bold text-xs tracking-[0.25em] uppercase py-3 transition-colors duration-300"
                  style={{ background: logo.accentColor, color: "#000" }}>
                  Commission a Logo
                </button>
              </div>
            </div>

            <button onClick={() => setActive(null)}
              className="absolute top-4 right-4 w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:border-white/30 hover:text-white transition-all duration-300">
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
