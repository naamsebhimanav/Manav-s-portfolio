"use client";

import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Artwork {
  id: number;
  title: string;
  medium: string;
  year: string;
  category: "portrait" | "painting" | "experimental";
  size: "large" | "tall" | "wide" | "small";
  img: string;
  description: string;
  dimensions: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Silence Between Words",
    medium: "Oil on Canvas",
    year: "2024",
    category: "portrait",
    size: "large",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900&q=85",
    description: "A study in restraint. The subject's gaze holds everything unsaid — grief, hope, and the particular exhaustion of being deeply known.",
    dimensions: "24 × 36 in",
  },
  {
    id: 2,
    title: "Golden Hour, Chandigarh",
    medium: "Acrylic on Canvas",
    year: "2024",
    category: "painting",
    size: "tall",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700&q=85",
    description: "The city at dusk — warm ochres bleeding into violet. A love letter to the light that falls on familiar streets.",
    dimensions: "18 × 24 in",
  },
  {
    id: 3,
    title: "The Weight of Waiting",
    medium: "Charcoal & Pastel",
    year: "2024",
    category: "portrait",
    size: "small",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85",
    description: "Charcoal portrait exploring the tension in stillness. The hands tell the story the face refuses to.",
    dimensions: "12 × 16 in",
  },
  {
    id: 4,
    title: "Fracture Lines",
    medium: "Mixed Media",
    year: "2024",
    category: "experimental",
    size: "wide",
    img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=85",
    description: "Collage, ink, and gold leaf. The cracks in the surface are the point — beauty lives in what has been broken and repaired.",
    dimensions: "30 × 20 in",
  },
  {
    id: 5,
    title: "Mother, Unguarded",
    medium: "Oil on Canvas",
    year: "2023",
    category: "portrait",
    size: "tall",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=85",
    description: "A portrait of quiet strength. Painted from memory and reference — the most personal piece in the collection.",
    dimensions: "20 × 28 in",
  },
  {
    id: 6,
    title: "Monsoon Study No. 3",
    medium: "Watercolour",
    year: "2023",
    category: "painting",
    size: "small",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=85",
    description: "Rain on glass, light diffused. Watercolour's natural bleed becomes the medium's message.",
    dimensions: "9 × 12 in",
  },
  {
    id: 7,
    title: "Dissolution",
    medium: "Ink & Resin",
    year: "2023",
    category: "experimental",
    size: "small",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85",
    description: "Ink dropped into resin — controlled chaos. The artist's hand guides but does not dictate.",
    dimensions: "12 × 12 in",
  },
  {
    id: 8,
    title: "The Performer at Rest",
    medium: "Graphite",
    year: "2023",
    category: "portrait",
    size: "wide",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=85",
    description: "A self-portrait in graphite. The performer without the performance — raw, unlit, honest.",
    dimensions: "18 × 12 in",
  },
];

const sizeClasses: Record<Artwork["size"], string> = {
  large: "col-span-2 row-span-2",
  tall:  "col-span-1 row-span-2",
  wide:  "col-span-2 row-span-1",
  small: "col-span-1 row-span-1",
};

const aspectClasses: Record<Artwork["size"], string> = {
  large: "aspect-square",
  tall:  "aspect-[3/4]",
  wide:  "aspect-[16/7]",
  small: "aspect-square",
};

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hovered, setHovered]   = useState<number | null>(null);

  const prev = () => setLightbox((l) => l !== null ? (l - 1 + artworks.length) % artworks.length : null);
  const next = () => setLightbox((l) => l !== null ? (l + 1) % artworks.length : null);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans text-[10px] text-gold/60 tracking-widest">01</span>
              <div className="h-px w-10 bg-gold/30" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Gallery</span>
            </div>
            <h2 className="font-serif text-display-lg text-white">
              The collection
            </h2>
          </div>
          <p className="font-sans text-xs text-white/30 max-w-xs leading-relaxed">
            Hover to illuminate. Click to step inside.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {artworks.map((art, i) => (
            <div
              key={art.id}
              className={`group relative overflow-hidden cursor-pointer border border-white/5 hover:border-gold/30 transition-all duration-500 ${sizeClasses[art.size]}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setLightbox(i)}
            >
              {/* Image with zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${art.img}')` }}
              />

              {/* Base dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Spotlight on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(201,168,76,0.12) 0%, transparent 70%)",
                }}
              />

              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.75) 100%)",
                }}
              />

              {/* Category badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-gold/80 border border-gold/30 bg-black/60 backdrop-blur-sm px-2 py-0.5">
                  {art.category}
                </span>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <div className="w-7 h-7 border border-gold/40 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn size={12} className="text-gold" />
                </div>
              </div>

              {/* Info — slides up */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-gold/60 mb-1">{art.medium} · {art.year}</p>
                <h3 className="font-serif text-base text-white leading-tight">{art.title}</h3>
                <p className="font-sans text-[9px] text-white/30 mt-0.5">{art.dimensions}</p>
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_360px]">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto min-h-[300px] md:min-h-[500px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${artworks[lightbox].img}')` }}
                />
                {/* Spotlight */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 70% at 50% 30%, rgba(201,168,76,0.1) 0%, transparent 70%)",
                  }}
                />
                {/* Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
                  }}
                />
              </div>

              {/* Info panel */}
              <div className="p-8 md:p-10 flex flex-col justify-between border-l border-white/5">
                <div className="space-y-5">
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold/50 block mb-2">
                      {artworks[lightbox].category} · {artworks[lightbox].year}
                    </span>
                    <h3 className="font-serif text-display-md text-white leading-tight mb-1">
                      {artworks[lightbox].title}
                    </h3>
                  </div>

                  <div className="h-px w-12 bg-gold/30" />

                  <p className="font-sans text-sm text-white/50 leading-relaxed">
                    {artworks[lightbox].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Medium",     value: artworks[lightbox].medium },
                      { label: "Dimensions", value: artworks[lightbox].dimensions },
                    ].map((d) => (
                      <div key={d.label}>
                        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 mb-1">{d.label}</p>
                        <p className="font-sans text-xs text-white/60">{d.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  {/* Nav */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="font-sans text-[10px] text-white/30 flex-1 text-center">
                      {lightbox + 1} / {artworks.length}
                    </span>
                    <button
                      onClick={next}
                      className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-gold text-black font-sans font-semibold text-xs tracking-[0.25em] uppercase py-3 hover:bg-gold-light transition-colors duration-300"
                  >
                    Commission Similar Work
                  </button>
                </div>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
