"use client";

import { useState, useRef, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";

interface Comparison {
  id: number;
  title: string;
  client: string;
  category: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  before: string;
  after: string;
  accent: string;
}

const comparisons: Comparison[] = [
  {
    id: 1,
    title: "Rangmanch Theatre",
    client: "Theatre Collective",
    category: "Brand Identity",
    beforeLabel: "Old Identity",
    afterLabel: "New Identity",
    beforeDesc: "Generic clip-art logo, inconsistent fonts, no visual hierarchy. The brand looked amateur.",
    afterDesc: "Custom mark, unified typography system, gold on black. The brand now commands respect.",
    before: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    accent: "#c9a84c",
  },
  {
    id: 2,
    title: "Roots & Routes Festival",
    client: "Cultural Festival",
    category: "Poster Design",
    beforeLabel: "First Draft",
    afterLabel: "Final Design",
    beforeDesc: "Cluttered layout, too many fonts, no clear focal point. The poster tried to say everything.",
    afterDesc: "Bold typography, single focal point, breathing room. The poster says one thing — loudly.",
    before: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    accent: "#e63946",
  },
  {
    id: 3,
    title: "Kala Manch Gallery",
    client: "Art Gallery",
    category: "Social Media",
    beforeLabel: "Before Redesign",
    afterLabel: "After Redesign",
    beforeDesc: "Inconsistent grid, random filters, no brand cohesion. The feed looked like a personal account.",
    afterDesc: "Unified colour palette, consistent typography, intentional grid. The feed looks like a gallery.",
    before: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    after: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    accent: "#c9a84c",
  },
];

function SliderComparison({ comp }: { comp: Comparison }) {
  const [pos, setPos]       = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct  = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragging) updatePos(e.clientX);
  }, [dragging, updatePos]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  }, [updatePos]);

  return (
    <div className="space-y-4">
      {/* Labels */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: comp.accent }}>
            {comp.category}
          </p>
          <h3 className="font-sans font-black text-lg text-white uppercase tracking-tight">{comp.title}</h3>
          <p className="font-sans text-xs text-white/30">{comp.client}</p>
        </div>
        <div className="flex items-center gap-2 text-white/25">
          <ArrowLeftRight size={14} />
          <span className="font-sans text-[9px] tracking-widest uppercase">Drag to compare</span>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        className="relative aspect-[16/9] overflow-hidden border border-white/8 cursor-col-resize select-none"
        onMouseMove={onMouseMove}
        onMouseDown={() => setDragging(true)}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchMove={onTouchMove}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
      >
        {/* After (full width, behind) */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${comp.after}')` }} />
        <div className="absolute inset-0 bg-black/30" />

        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${comp.before}')`, width: `${10000 / pos}%` }} />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
          style={{ left: `${pos}%` }}>
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
            <ArrowLeftRight size={14} className="text-black" />
          </div>
        </div>

        {/* Before label */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/70 bg-black/60 backdrop-blur-sm border border-white/10 px-2 py-1">
            {comp.beforeLabel}
          </span>
        </div>

        {/* After label */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase px-2 py-1 border"
            style={{ color: comp.accent, borderColor: comp.accent + "50", background: "rgba(0,0,0,0.6)" }}>
            {comp.afterLabel}
          </span>
        </div>
      </div>

      {/* Descriptions */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 border border-white/5 bg-white/[0.02]">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 mb-2">{comp.beforeLabel}</p>
          <p className="font-sans text-xs text-white/40 leading-relaxed">{comp.beforeDesc}</p>
        </div>
        <div className="p-4 border bg-white/[0.03]" style={{ borderColor: comp.accent + "30" }}>
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: comp.accent + "80" }}>
            {comp.afterLabel}
          </p>
          <p className="font-sans text-xs text-white/50 leading-relaxed">{comp.afterDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section id="before-after" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans font-bold text-[10px] text-gold/70 tracking-widest">04</span>
              <div className="h-px w-10 bg-gold/30" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Before vs After</span>
            </div>
            <h2 className="font-sans font-black text-display-lg text-white uppercase tracking-tight">
              The<br />
              <span className="text-gold-gradient">transformation</span>
            </h2>
          </div>
          <p className="font-sans text-xs text-white/30 max-w-xs leading-relaxed">
            Drag the slider to see the before and after. The difference is the work.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {comparisons.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`shrink-0 flex items-center gap-3 px-5 py-3 border font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                active === i
                  ? "border-white/20 text-white bg-white/5"
                  : "border-white/5 text-white/30 hover:border-white/10 hover:text-white/50"
              }`}
            >
              <span className="font-bold text-[10px]" style={{ color: active === i ? c.accent : undefined }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {c.title}
            </button>
          ))}
        </div>

        {/* Active comparison */}
        <SliderComparison comp={comparisons[active]} />
      </div>
    </section>
  );
}
