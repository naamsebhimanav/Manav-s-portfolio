"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Character {
  name: string;
  play: string;
  year: string;
  description: string;
  emotion: string;
  costume: string;
  img: string;
  accent: string;
}

const characters: Character[] = [
  {
    name: "Mumtaz Bhai",
    play: "Gaay",
    year: "2025",
    description: "",
    emotion: "",
    costume: "",
    img: "/theatre/gaay 1.png",
    accent: "rgba(201,168,76,0.2)",
  },
  {
    name: "narrator",
    play: "Gunvanti",
    year: "2026",
    description: "",
    emotion: "",
    costume: "",
    img: "/theatre/gun 2.png",
    accent: "rgba(180,60,40,0.2)",
  },
  {
    name: "bade bhai",
    play: "bade bhaisahab",
    year: "2025",
    description: "",
    emotion: "",
    costume: "",
    img: "/theatre/bb%201.png",
    accent: "rgba(100,100,180,0.2)",
  },
  {
    name: "narrator",
    play: "the journey of birsa munda",
    year: "2024",
    description: "",
    emotion: "",
    costume: "",
    img: "/theatre/iit indore.jpg",
    accent: "rgba(201,168,76,0.15)",
  },
  {
    name: "narrator and khuda",
    play: "laila majnu",
    year: "2025",
    description: "",
    emotion: "",
    costume: "",
    img: "/theatre/lm 1.jpg",
    accent: "rgba(80,80,120,0.2)",
  },
  {
    name: "lead hero",
    play: "usne kaha tha",
    year: "2025",
    description: "",
    emotion: "",
    costume: "",
    img: "/theatre/uts 4.mov",
    accent: "rgba(201,168,76,0.18)",
  },
];

export default function CharacterGallery() {
  const [hovered, setHovered]   = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((l) => l !== null ? (l - 1 + characters.length) % characters.length : null);
  const next = () => setLightbox((l) => l !== null ? (l + 1) % characters.length : null);

  return (
    <section id="characters" className="relative py-28 lg:py-36 bg-stage overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-sans text-[10px] text-gold/60 tracking-widest">02</span>
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/40">Character Gallery</span>
          </div>
          <h2 className="font-serif text-display-lg text-ivory mb-4">
            The faces I&apos;ve worn,<br />
            <span className="italic text-gold-gradient">the souls I&apos;ve borrowed</span>
          </h2>
          <p className="font-sans text-sm text-ivory/40 leading-relaxed max-w-xl">
            Each character is a complete universe. Hover to meet them. Click to step inside.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {characters.map((c, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-white/5 hover:border-gold/30 transition-all duration-500"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setLightbox(i)}
            >
              {/* Image or Video */}
              {c.img.toLowerCase().endsWith('.mov') || c.img.toLowerCase().endsWith('.mp4') ? (
                <video
                  src={c.img}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={(e) => e.currentTarget.playbackRate = 0.5}
                />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${c.img}')` }}
                />
              )}

              {/* Base overlay */}
              <div className="absolute inset-0 bg-void/55 group-hover:bg-void/30 transition-colors duration-500" />

              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${c.accent} 0%, transparent 70%)` }}
              />

              {/* Spotlight from top */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
              />

              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)" }}
              />

              {/* Content — slides up on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                {/* Always visible */}
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/60 mb-1">{c.play} · {c.year}</p>
                  <h3 className="font-serif text-lg md:text-xl text-ivory leading-tight mb-2">{c.name}</h3>
                </div>

                {/* Removed description and emotion on hover */}
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              {/* Number badge */}
              <div className="absolute top-4 left-4 font-serif text-3xl text-white/[0.06] font-bold leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-void/97 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-charcoal border border-gold/15 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[3/4] md:aspect-auto">
                {/* Image or Video */}
                {characters[lightbox].img.toLowerCase().endsWith('.mov') || characters[lightbox].img.toLowerCase().endsWith('.mp4') ? (
                  <video
                    src={characters[lightbox].img}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedMetadata={(e) => e.currentTarget.playbackRate = 0.5}
                  />
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${characters[lightbox].img}')` }}
                  />
                )}
                <div className="absolute inset-0 bg-void/30" />
                {/* Spotlight */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 70% 70% at 50% 30%, ${characters[lightbox].accent} 0%, transparent 70%)` }}
                />
              </div>

              {/* Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center space-y-5">
                <div>
                  <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold/50 mb-2">
                    {characters[lightbox].play} · {characters[lightbox].year}
                  </p>
                  <h3 className="font-serif text-display-md text-ivory mb-1">{characters[lightbox].name}</h3>
                </div>

                <div className="h-px w-12 bg-gold/30" />

                {/* Removed description, emotion, and costume */}

                {/* Nav */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-ivory/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="font-sans text-[10px] text-smoke">
                    {lightbox + 1} / {characters.length}
                  </span>
                  <button
                    onClick={next}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-ivory/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-8 h-8 border border-white/10 flex items-center justify-center text-ivory/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
