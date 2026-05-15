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
    name: "The Shape-Shifter",
    play: "Bahurupiya",
    year: "2024",
    description: "Seven faces, one soul. A character who questions whether identity is fixed or fluid — and finds the answer terrifying.",
    emotion: "Existential Dread · Wonder · Liberation",
    costume: "Layered fabrics, each representing a different persona",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    accent: "rgba(201,168,76,0.2)",
  },
  {
    name: "Ashwatthama",
    play: "Andha Yug",
    year: "2024",
    description: "The immortal warrior cursed to wander. Rage, grief, and the unbearable weight of surviving a war you helped destroy.",
    emotion: "Rage · Grief · Immortal Loneliness",
    costume: "Battle-worn armour, ash-smeared face, matted hair",
    img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80",
    accent: "rgba(180,60,40,0.2)",
  },
  {
    name: "Vladimir",
    play: "Waiting for Godot",
    year: "2023",
    description: "Waiting. Always waiting. The comedy of existence played out in a single pair of boots and an endless conversation.",
    emotion: "Absurd Hope · Quiet Despair · Dark Humour",
    costume: "Worn suit, bowler hat, oversized shoes",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    accent: "rgba(100,100,180,0.2)",
  },
  {
    name: "Prince Salim",
    play: "Mughal-E-Azam",
    year: "2022",
    description: "A prince torn between love and empire. Every scene a battle between the heart and the throne.",
    emotion: "Passionate Love · Defiance · Tragic Nobility",
    costume: "Royal Mughal attire, jewelled turban, silk robes",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    accent: "rgba(201,168,76,0.15)",
  },
  {
    name: "Devdas",
    play: "Devdas — A Retelling",
    year: "2022",
    description: "Self-destruction as poetry. A modern Devdas navigating heartbreak in a city that doesn't care.",
    emotion: "Heartbreak · Self-Destruction · Longing",
    costume: "Dishevelled kurta, hollow eyes, cigarette",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    accent: "rgba(80,80,120,0.2)",
  },
  {
    name: "The Narrator",
    play: "Ek Tha Raja",
    year: "2023",
    description: "The storyteller who becomes the story. A folk narrator who slips between worlds — observer and participant.",
    emotion: "Wisdom · Mischief · Ancient Knowing",
    costume: "Folk dhoti, painted face, traditional jewellery",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
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
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${c.img}')` }}
              />

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

                {/* Revealed on hover */}
                <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500">
                  <p className="font-sans text-[10px] text-ivory/55 leading-relaxed mb-2">{c.description}</p>
                  <p className="font-sans text-[9px] tracking-wide text-gold/50 italic">{c.emotion}</p>
                </div>
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
              {/* Image */}
              <div className="relative aspect-[3/4] md:aspect-auto">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${characters[lightbox].img}')` }}
                />
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

                <p className="font-sans text-sm text-ivory/55 leading-relaxed">{characters[lightbox].description}</p>

                <div className="space-y-2">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40">Emotional Core</p>
                  <p className="font-serif italic text-sm text-ivory/50">{characters[lightbox].emotion}</p>
                </div>

                <div className="space-y-2">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40">Costume & Look</p>
                  <p className="font-sans text-xs text-ivory/40 leading-relaxed">{characters[lightbox].costume}</p>
                </div>

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
