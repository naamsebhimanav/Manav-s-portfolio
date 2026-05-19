"use client";

import { useState } from "react";
import { User, Palette, Sparkles, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "portraits",
    icon: User,
    label: "Realistic Portraits",
    tagline: "The face as a universe",
    description:
      "Hyper-realistic and expressive portraits in oil, charcoal, and graphite. Each portrait is a deep study of the subject — their light, their shadow, the story in their eyes.",
    details: [
      "Oil on canvas — rich, luminous depth",
      "Charcoal — raw, immediate, honest",
      "Graphite — precision and patience",
      "Pastel — soft, atmospheric warmth",
    ],
    works: [
      "/theatre/lata ji.jpg",
      "/design/irrfan1.jpg",
      "/design/emma.png",
    ],
    count: "45+ works",
    accent: "rgba(201,168,76,0.12)",
  },
  {
    id: "commissions",
    icon: Palette,
    label: "Custom Commissions",
    tagline: "Your story, painted",
    description:
      "Bespoke portraits and paintings created from your photographs or references. Every commission is a collaboration — Manav works closely with clients to capture not just likeness, but essence.",
    details: [
      "Delivered in 5–7 working days",
      "High-resolution digital preview before final",
      "Multiple revision rounds included",
      "Shipped with certificate of authenticity",
    ],
    works: [
      "/design/rk.png",
      "/design/batman.png",
      "/design/ramji.jpg",
    ],
    count: "60+ commissions",
    accent: "rgba(201,168,76,0.1)",
  },
];

export default function Categories() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="categories" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Side glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 80% at 0% 50%, rgba(20,12,4,0.6) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-sans text-[10px] text-gold/60 tracking-widest">02</span>
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Categories</span>
          </div>
          <h2 className="font-serif text-display-lg text-white mb-3">
            Three ways of<br />
            <span className="italic text-gold-gradient">seeing</span>
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex flex-col md:flex-row gap-3 mb-10">
          {categories.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`flex-1 flex items-center gap-4 px-6 py-5 border text-left transition-all duration-400 ${
                active === i
                  ? "border-gold/50 bg-gold/6"
                  : "border-white/6 bg-white/[0.02] hover:border-gold/20 hover:bg-white/[0.04]"
              }`}
            >
              <c.icon
                size={18}
                className={`shrink-0 transition-colors duration-300 ${active === i ? "text-gold" : "text-white/30"}`}
              />
              <div>
                <p className={`font-sans text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${active === i ? "text-gold" : "text-white/30"}`}>
                  {c.label}
                </p>
                <p className={`font-serif text-sm italic mt-0.5 transition-colors duration-300 ${active === i ? "text-white/70" : "text-white/20"}`}>
                  {c.tagline}
                </p>
              </div>
              {active === i && (
                <div className="ml-auto w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
              )}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
          {/* Left: info */}
          <div className="space-y-7">
            <div className="flex items-center gap-3">
              <cat.icon size={22} className="text-gold/60" />
              <h3 className="font-serif text-display-md text-white">{cat.label}</h3>
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 border border-gold/20 px-2 py-0.5 ml-2">
                {cat.count}
              </span>
            </div>

            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-lg">{cat.description}</p>

            <div className="space-y-2.5">
              {cat.details.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gold/50 rounded-full mt-2 shrink-0" />
                  <p className="font-sans text-xs text-white/45 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-3 font-sans text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-light transition-colors duration-300 group"
            >
              <span>Commission this style</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right: image trio */}
          <div className="grid grid-cols-3 gap-2">
            {cat.works.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden border border-white/5 hover:border-gold/25 transition-all duration-500 ${
                  i === 0 ? "col-span-3 aspect-[16/9]" : "col-span-1 aspect-square"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-600 group-hover:scale-108"
                  style={{ backgroundImage: `url('${img}')` }}
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-colors duration-500" />
                {/* Spotlight */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 70% 70% at 50% 40%, ${cat.accent} 0%, transparent 70%)` }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
