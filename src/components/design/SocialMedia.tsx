"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface UIDesign {
  id: number;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  tools: string[];
  img: string;
  accent: string;
  size: "hero" | "tall" | "wide" | "square";
}

const designs: UIDesign[] = [
  {
    id: 1,
    title: "Landing page",
    client: "landing page",
    year: "2026",
    category: "Portfolio landing page",
    description: "",
    tools: ["figma", "chatgpt"],
    img: "/design/lp1.png",
    accent: "#c9a84c",
    size: "hero",
  },
  {
    id: 2,
    title: "Roots & Routes",
    client: "Cultural Festival",
    year: "2024",
    category: "Event Branding",
    description: "Festival branding including posters, social media graphics, and promotional materials.",
    tools: ["Figma", "Photoshop"],
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85",
    accent: "#e63946",
    size: "tall",
  },
  {
    id: 3,
    title: "Landing page 2",
    client: "landing page",
    year: "2026",
    category: "Portfolio landing page",
    description: "",
    tools: ["figma", "chatgpt"],
    img: "/design/lp2.png",
    accent: "#c9a84c",
    size: "square",
  },
  {
    id: 4,
    title: "Movie booking (Mockup)",
    client: "UI mockup",
    year: "2024",
    category: "User interface",
    description: "",
    tools: ["figma", "chatgpt"],
    img: "/design/mockup.png",
    accent: "#4cc9f0",
    size: "wide",
  },
  {
    id: 5,
    title: "Artkart (original UI project)",
    client: "UI mockup",
    year: "2024",
    category: "User interface",
    description: "",
    tools: ["figma", "chatgpt"],
    img: "/design/mockup 1.png",
    accent: "#c9a84c",
    size: "square",
  },
  {
    id: 6,
    title: "login page redesigned",
    client: "UI mockup",
    year: "2024",
    category: "User interface",
    description: "",
    tools: ["figma", "chatgpt"],
    img: "/design/irctc.jpg",
    accent: "#ffd60a",
    size: "tall",
  },
];

const sizeGrid: Record<UIDesign["size"], string> = {
  hero:   "md:col-span-2 md:row-span-2",
  tall:   "md:col-span-1 md:row-span-2",
  wide:   "md:col-span-2 md:row-span-1",
  square: "md:col-span-1 md:row-span-1",
};

const aspectMap: Record<UIDesign["size"], string> = {
  hero:   "aspect-[1728/1117]",
  tall:   "aspect-[3/4]",
  wide:   "aspect-[3/2]",
  square: "aspect-[1025/672]",
};

export default function SocialMedia() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((l) => l !== null ? (l - 1 + designs.length) % designs.length : null);
  const next = () => setLightbox((l) => l !== null ? (l + 1) % designs.length : null);

  return (
    <section id="social" className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans font-bold text-[10px] text-gold/70 tracking-widest">02</span>
              <div className="h-px w-10 bg-gold/30" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">USER INTERFACES</span>
            </div>
            <h2 className="font-sans font-black text-display-lg text-white uppercase tracking-tight">
              Scroll-stopping<br />
              <span className="text-gold-gradient">creatives</span>
            </h2>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:auto-rows-[300px]">
          {designs.map((p, i) => (
            <div
              key={p.id}
              className={`group relative overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500 ${sizeGrid[p.size]} ${aspectMap[p.size]} min-h-[200px]`}
              onClick={() => setLightbox(i)}
            >
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Accent colour wash on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-color"
                style={{ background: p.accent + "22" }}
              />

              {/* Vignette */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)" }} />

              {/* Category badge */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="font-sans text-[8px] tracking-[0.3em] uppercase border px-2 py-1 bg-black/70 backdrop-blur-sm"
                  style={{ color: p.accent, borderColor: p.accent + "50" }}>
                  {p.category}
                </span>
              </div>

              {/* Year */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-sans text-[9px] text-white/40">{p.year}</span>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: p.accent + "cc" }}>
                  {p.client}
                </p>
                <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight leading-tight">
                  {p.title}
                </h3>
                <p className="font-sans text-[10px] text-white/40 mt-1 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Tools */}
              <div className="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.tools.slice(0, 2).map((t) => (
                  <span key={t} className="font-sans text-[7px] tracking-wider uppercase text-white/30 border border-white/10 px-1.5 py-0.5 bg-black/50">
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}>
          <div className="relative w-full max-w-5xl bg-[#0f0f0f] border border-white/8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_340px]">
              {/* Image */}
              <div className={`relative ${aspectMap[designs[lightbox].size]} md:aspect-auto min-h-[300px] md:min-h-[500px]`}>
                <div className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${designs[lightbox].img}')` }} />
                <div className="absolute inset-0 bg-black/20" />
                {/* Accent overlay */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 60% 60% at 50% 30%, ${designs[lightbox].accent}18 0%, transparent 70%)` }} />
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col justify-between border-l border-white/5">
                <div className="space-y-5">
                  <div>
                    <span className="font-sans text-[8px] tracking-[0.4em] uppercase block mb-2"
                      style={{ color: designs[lightbox].accent }}>
                      {designs[lightbox].category} · {designs[lightbox].year}
                    </span>
                    <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight leading-tight">
                      {designs[lightbox].title}
                    </h3>
                    <p className="font-sans text-xs text-white/40 mt-1">{designs[lightbox].client}</p>
                  </div>

                  <div className="h-px w-12 bg-white/10" />

                  <p className="font-sans text-sm text-white/50 leading-relaxed">
                    {designs[lightbox].description}
                  </p>

                  <div>
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 mb-2">Tools Used</p>
                    <div className="flex flex-wrap gap-2">
                      {designs[lightbox].tools.map((t) => (
                        <span key={t} className="font-sans text-[9px] tracking-wider uppercase text-white/40 border border-white/10 px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3">
                    <button onClick={prev} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:border-white/30 hover:text-white transition-all duration-300">
                      <ChevronLeft size={16} />
                    </button>
                    <span className="font-sans text-[10px] text-white/25 flex-1 text-center">
                      {lightbox + 1} / {designs.length}
                    </span>
                    <button onClick={next} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:border-white/30 hover:text-white transition-all duration-300">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-gold text-black font-sans font-bold text-xs tracking-[0.25em] uppercase py-3 hover:bg-gold-light transition-colors duration-300">
                    Commission Similar Work
                  </button>
                </div>
              </div>
            </div>

            <button onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:border-white/30 hover:text-white transition-all duration-300">
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
