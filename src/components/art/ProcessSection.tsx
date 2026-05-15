"use client";

import { useState } from "react";
import { PenLine, Layers, Droplets, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PenLine,
    phase: "Reference & Sketch",
    title: "The bones of the piece",
    duration: "Day 1",
    description:
      "Every artwork begins with deep observation. Manav studies the reference — whether a photograph, a live subject, or an idea — and builds the compositional skeleton in pencil or charcoal. Proportions, light sources, and emotional focal points are established before a single drop of colour is applied.",
    details: [
      "Compositional thumbnail studies",
      "Light and shadow mapping",
      "Proportion and anatomy checks",
      "Emotional tone established",
    ],
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=700&q=80",
    color: "text-white/60",
    borderColor: "border-white/15",
  },
  {
    number: "02",
    icon: Layers,
    phase: "Underpainting",
    title: "Building the foundation",
    duration: "Day 2",
    description:
      "A monochromatic underpainting in raw umber or burnt sienna establishes the value structure. This layer is the painting's skeleton — it determines where light lives and where shadow breathes. Everything built on top of this layer is informed by it.",
    details: [
      "Monochromatic value study",
      "Tonal range established",
      "Texture and surface preparation",
      "Compositional refinement",
    ],
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",
    color: "text-amber-400/70",
    borderColor: "border-amber-400/20",
  },
  {
    number: "03",
    icon: Droplets,
    phase: "Colour Blocking",
    title: "The world gains colour",
    duration: "Day 3–4",
    description:
      "Broad colour masses are laid in — not details, but the essential hues and temperatures of each area. Warm lights against cool shadows. The painting begins to breathe. This is where the emotional palette is committed to.",
    details: [
      "Warm/cool temperature relationships",
      "Colour harmony established",
      "Saturation and value balance",
      "Background and foreground separation",
    ],
    img: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=700&q=80",
    color: "text-orange-400/70",
    borderColor: "border-orange-400/20",
  },
  {
    number: "04",
    icon: Sparkles,
    phase: "Detail & Refinement",
    title: "Where the magic lives",
    duration: "Day 5–6",
    description:
      "The finest details are added — the catch light in an eye, the texture of skin, the edge quality that separates a face from its background. This is the most meditative phase: slow, precise, and deeply satisfying.",
    details: [
      "Edge quality — hard vs soft",
      "Highlight and shadow details",
      "Texture and surface variation",
      "Focal point intensification",
    ],
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80",
    color: "text-gold/80",
    borderColor: "border-gold/25",
  },
  {
    number: "05",
    icon: CheckCircle,
    phase: "Final & Delivery",
    title: "The piece finds its home",
    duration: "Day 7",
    description:
      "Final varnishing, photography, and quality review. For commissions, a high-resolution digital preview is sent for client approval before the physical piece is carefully packaged and shipped with a certificate of authenticity.",
    details: [
      "Final varnish and protection",
      "High-res digital preview sent",
      "Client approval and revisions",
      "Careful packaging and shipping",
    ],
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&q=80",
    color: "text-gold",
    borderColor: "border-gold/40",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Curtain lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,168,76,1) 80px, rgba(201,168,76,1) 81px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-sans text-[10px] text-gold/60 tracking-widest">03</span>
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Process</span>
          </div>
          <h2 className="font-serif text-display-lg text-white mb-3">
            Sketch to<br />
            <span className="italic text-gold-gradient">masterpiece</span>
          </h2>
          <p className="font-sans text-sm text-white/35 leading-relaxed max-w-lg">
            Five deliberate steps. Every commission follows this process — no shortcuts, no compromises.
          </p>
        </div>

        {/* Step selector — horizontal timeline */}
        <div className="relative mb-10">
          {/* Connecting line */}
          <div className="absolute top-5 left-0 right-0 h-px bg-white/8 hidden md:block" />
          <div
            className="absolute top-5 left-0 h-px bg-gradient-to-r from-gold/60 to-gold/20 hidden md:block transition-all duration-500"
            style={{ width: `${((active + 1) / steps.length) * 100}%` }}
          />

          <div className="flex gap-2 md:gap-0 md:justify-between overflow-x-auto pb-2 md:pb-0">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-3 shrink-0 md:flex-1 group"
              >
                {/* Dot */}
                <div
                  className={`relative z-10 w-10 h-10 border-2 flex items-center justify-center transition-all duration-300 ${
                    i <= active
                      ? "border-gold bg-gold/15 text-gold"
                      : "border-white/15 bg-black text-white/25 group-hover:border-gold/30"
                  }`}
                >
                  <s.icon size={14} />
                </div>
                {/* Label */}
                <div className="text-center hidden md:block">
                  <p className={`font-sans text-[8px] tracking-[0.3em] uppercase transition-colors duration-300 ${i === active ? "text-gold" : "text-white/25"}`}>
                    {s.number}
                  </p>
                  <p className={`font-sans text-[9px] mt-0.5 transition-colors duration-300 ${i === active ? "text-white/60" : "text-white/20"}`}>
                    {s.phase}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active step content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className={`relative aspect-[4/3] overflow-hidden border ${step.borderColor} transition-all duration-500`}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url('${step.img}')` }}
            />
            <div className="absolute inset-0 bg-black/45" />
            {/* Spotlight */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 70% at 50% 30%, rgba(201,168,76,0.12) 0%, transparent 70%)" }}
            />
            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)" }}
            />

            {/* Phase badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1.5">
              <step.icon size={12} className={step.color} />
              <span className={`font-sans text-[9px] tracking-[0.3em] uppercase ${step.color}`}>{step.phase}</span>
            </div>

            {/* Duration */}
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm border border-gold/20 px-3 py-1.5">
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/70">{step.duration}</span>
            </div>

            {/* Step number watermark */}
            <div className="absolute bottom-4 left-4 font-serif text-6xl text-white/[0.04] font-bold leading-none select-none">
              {step.number}
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className={`font-sans text-[9px] tracking-[0.4em] uppercase mb-2 ${step.color}`}>{step.phase}</p>
              <h3 className="font-serif text-display-md text-white leading-tight">{step.title}</h3>
            </div>

            <p className="font-sans text-sm text-white/45 leading-relaxed">{step.description}</p>

            <div className="space-y-2.5">
              {step.details.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-1 h-1 rounded-full mt-2 shrink-0 ${i <= active ? "bg-gold/60" : "bg-white/20"}`} />
                  <p className="font-sans text-xs text-white/40 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            {/* Step nav */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => setActive(Math.max(0, active - 1))}
                disabled={active === 0}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/25 hover:text-gold transition-colors duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              <div className="flex-1 h-px bg-white/8" />
              <button
                onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                disabled={active === steps.length - 1}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/25 hover:text-gold transition-colors duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* All steps mini-summary */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`p-4 border text-left transition-all duration-300 ${
                active === i
                  ? "border-gold/40 bg-gold/6"
                  : "border-white/5 bg-white/[0.02] hover:border-gold/15"
              }`}
            >
              <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-gold/40 mb-1">{s.number}</p>
              <p className={`font-sans text-[10px] transition-colors duration-300 ${active === i ? "text-white/70" : "text-white/25"}`}>
                {s.phase}
              </p>
              <p className="font-sans text-[9px] text-white/20 mt-0.5">{s.duration}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
