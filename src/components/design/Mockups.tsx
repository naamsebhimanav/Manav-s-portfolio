"use client";

import { useState } from "react";
import { Monitor, Smartphone, Square, LayoutGrid } from "lucide-react";

type MockupType = "billboard" | "screen" | "phone" | "print";

interface Mockup {
  id: number;
  title: string;
  client: string;
  type: MockupType;
  description: string;
  img: string;
  accent: string;
}

const mockups: Mockup[] = [
  {
    id: 1, title: "Bahurupiya — Billboard", client: "National Theatre Festival",
    type: "billboard",
    description: "The poster scaled to 40×20ft. Designed with large-format printing in mind — every element holds at distance.",
    img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=85",
    accent: "#c9a84c",
  },
  {
    id: 2, title: "Roots & Routes — Digital Screen", client: "Festival Campaign",
    type: "screen",
    description: "Animated digital OOH display. The design adapts from static poster to motion — same visual language, different medium.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    accent: "#e63946",
  },
  {
    id: 3, title: "Rangmanch — Phone Screen", client: "Brand Identity",
    type: "phone",
    description: "The brand identity applied to mobile — app icon, splash screen, and social profile. Consistent at every scale.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=85",
    accent: "#c9a84c",
  },
  {
    id: 4, title: "Kala Manch — Print Collateral", client: "Art Gallery",
    type: "print",
    description: "Business cards, letterhead, and exhibition catalogue. The brand system applied to physical touchpoints.",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=900&q=85",
    accent: "#c9a84c",
  },
];

const typeIcons: Record<MockupType, typeof Monitor> = {
  billboard: LayoutGrid,
  screen:    Monitor,
  phone:     Smartphone,
  print:     Square,
};

const typeLabels: Record<MockupType, string> = {
  billboard: "Billboard OOH",
  screen:    "Digital Screen",
  phone:     "Mobile",
  print:     "Print",
};

// Mockup frame components
function BillboardFrame({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="relative w-full aspect-[16/7] bg-[#1a1a1a] rounded-sm overflow-hidden border border-white/10">
      {/* Billboard structure */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-full h-full border-4 border-[#2a2a2a] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${img}')` }} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
      {/* Billboard legs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-16">
        <div className="w-2 h-8 bg-[#2a2a2a]" />
        <div className="w-2 h-8 bg-[#2a2a2a]" />
      </div>
      {/* Accent glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 60% at 50% 40%, ${accent}08 0%, transparent 70%)` }} />
    </div>
  );
}

function ScreenFrame({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="relative w-full aspect-[16/10] flex items-center justify-center">
      {/* Monitor body */}
      <div className="relative w-full h-full">
        {/* Screen bezel */}
        <div className="absolute inset-0 bg-[#1a1a1a] rounded-lg border border-white/10 shadow-2xl overflow-hidden">
          {/* Screen area */}
          <div className="absolute inset-3 bg-black overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')` }} />
            <div className="absolute inset-0 bg-black/15" />
            {/* Screen reflection */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)" }} />
          </div>
          {/* Status bar */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#2a2a2a] rounded-full" />
        </div>
        {/* Stand */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] border border-white/5 rounded-b" />
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#2a2a2a] rounded" />
      </div>
    </div>
  );
}

function PhoneFrame({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="relative mx-auto w-48 aspect-[9/19]">
      {/* Phone body */}
      <div className="absolute inset-0 bg-[#1a1a1a] rounded-[2rem] border border-white/15 shadow-2xl overflow-hidden">
        {/* Screen */}
        <div className="absolute inset-2 bg-black rounded-[1.6rem] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${img}')` }} />
          <div className="absolute inset-0 bg-black/10" />
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-full z-10" />
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full z-10" />
        </div>
        {/* Side buttons */}
        <div className="absolute right-0 top-20 w-0.5 h-8 bg-[#2a2a2a] rounded-l" />
        <div className="absolute left-0 top-16 w-0.5 h-6 bg-[#2a2a2a] rounded-r" />
        <div className="absolute left-0 top-24 w-0.5 h-6 bg-[#2a2a2a] rounded-r" />
      </div>
    </div>
  );
}

function PrintFrame({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center gap-6 bg-[#111] p-8">
      {/* Business card */}
      <div className="relative w-48 h-28 shadow-2xl border border-white/10 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${img}')` }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 p-3 flex flex-col justify-between">
          <div className="w-6 h-6 border border-white/30 flex items-center justify-center">
            <span className="text-[8px]" style={{ color: accent }}>◈</span>
          </div>
          <div>
            <p className="font-sans font-bold text-[8px] text-white uppercase tracking-widest">Manav Arora</p>
            <p className="font-sans text-[7px] text-white/40 tracking-wider">Designer · Artist</p>
          </div>
        </div>
      </div>
      {/* Letterhead */}
      <div className="relative flex-1 h-full shadow-xl border border-white/8 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: accent }} />
        <div className="absolute inset-0 p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border flex items-center justify-center" style={{ borderColor: accent + "60" }}>
              <span className="text-[6px]" style={{ color: accent }}>◈</span>
            </div>
            <p className="font-sans font-bold text-[8px] text-white uppercase tracking-widest">Manav Arora</p>
          </div>
          <div className="flex-1 flex flex-col gap-1 mt-2">
            {[80, 60, 70, 40, 65].map((w, i) => (
              <div key={i} className="h-1 bg-white/10 rounded" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Mockups() {
  const [active, setActive] = useState(0);
  const m = mockups[active];
  const Icon = typeIcons[m.type];

  return (
    <section id="mockups" className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans font-bold text-[10px] text-gold/70 tracking-widest">05</span>
              <div className="h-px w-10 bg-gold/30" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Mockups</span>
            </div>
            <h2 className="font-sans font-black text-display-lg text-white uppercase tracking-tight">
              Design in<br />
              <span className="text-gold-gradient">the real world</span>
            </h2>
          </div>
          <p className="font-sans text-xs text-white/30 max-w-xs leading-relaxed">
            Billboards, screens, phones, and print — seeing the work in context changes everything.
          </p>
        </div>

        {/* Type selector */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {mockups.map((mk, i) => {
            const MkIcon = typeIcons[mk.type];
            return (
              <button key={mk.id} onClick={() => setActive(i)}
                className={`shrink-0 flex items-center gap-3 px-5 py-3 border transition-all duration-300 ${
                  active === i
                    ? "border-white/20 bg-white/5 text-white"
                    : "border-white/5 text-white/30 hover:border-white/10 hover:text-white/50"
                }`}>
                <MkIcon size={14} className={active === i ? "text-gold" : ""} />
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase">{typeLabels[mk.type]}</span>
              </button>
            );
          })}
        </div>

        {/* Mockup display */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">

          {/* Mockup frame */}
          <div className="relative bg-[#0f0f0f] border border-white/5 p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${m.accent}06 0%, transparent 70%)` }} />

            {m.type === "billboard" && <BillboardFrame img={m.img} accent={m.accent} />}
            {m.type === "screen"    && <ScreenFrame    img={m.img} accent={m.accent} />}
            {m.type === "phone"     && <PhoneFrame     img={m.img} accent={m.accent} />}
            {m.type === "print"     && <PrintFrame     img={m.img} accent={m.accent} />}

            {/* Type badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/8 px-3 py-1.5">
              <Icon size={12} className="text-white/40" />
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">
                {typeLabels[m.type]}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <span className="font-sans text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ color: m.accent }}>
                {typeLabels[m.type]} · {m.client}
              </span>
              <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight leading-tight">
                {m.title}
              </h3>
            </div>

            <div className="h-px w-12 bg-white/10" />

            <p className="font-sans text-sm text-white/45 leading-relaxed">{m.description}</p>

            {/* Mockup type info */}
            <div className="space-y-2">
              {[
                { label: "Format",   value: typeLabels[m.type] },
                { label: "Project",  value: m.client },
                { label: "Approach", value: "Context-first design" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/20 w-20 shrink-0">{d.label}</span>
                  <span className="font-sans text-xs text-white/45">{d.value}</span>
                </div>
              ))}
            </div>

            {/* Nav dots */}
            <div className="flex items-center gap-2 pt-2">
              {mockups.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-px transition-all duration-300 ${i === active ? "w-8 bg-gold" : "w-3 bg-white/15 hover:bg-white/30"}`} />
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
              className="font-sans font-bold text-xs tracking-[0.25em] uppercase py-3 px-6 border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 w-fit">
              Get This For Your Brand
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
