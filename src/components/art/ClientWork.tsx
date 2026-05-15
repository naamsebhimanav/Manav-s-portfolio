"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Commission {
  id: number;
  clientName: string;
  location: string;
  type: string;
  medium: string;
  size: string;
  deliveredIn: string;
  review: string;
  rating: number;
  before: string;
  after: string;
  year: string;
}

const commissions: Commission[] = [
  {
    id: 1,
    clientName: "Priya & Rahul",
    location: "Delhi",
    type: "Wedding Portrait",
    medium: "Oil on Canvas",
    size: "24 × 30 in",
    deliveredIn: "6 days",
    review: "We gave Manav a single photograph from our wedding and he gave us back something that made us cry. The painting captured not just our faces but the feeling of that day. It hangs in our living room and every guest asks about it.",
    rating: 5,
    before: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80",
    after: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=80",
    year: "2024",
  },
  {
    id: 2,
    clientName: "Arjun Kapoor",
    location: "Mumbai",
    type: "Family Portrait",
    medium: "Charcoal",
    size: "18 × 24 in",
    deliveredIn: "5 days",
    review: "I wanted a portrait of my late father from an old photograph. Manav treated the project with such care and sensitivity. The result was beyond anything I imagined — my mother wept when she saw it. This is a treasure.",
    rating: 5,
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    after: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
    year: "2024",
  },
  {
    id: 3,
    clientName: "Meera Iyer",
    location: "Bangalore",
    type: "Pet Portrait",
    medium: "Acrylic on Canvas",
    size: "12 × 16 in",
    deliveredIn: "4 days",
    review: "My dog Bruno passed away last year and I wanted something to remember him by. Manav captured his personality perfectly — the tilt of his head, the brightness in his eyes. I couldn't believe how alive it looked.",
    rating: 5,
    before: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
    after: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&q=80",
    year: "2023",
  },
  {
    id: 4,
    clientName: "Roots & Routes Festival",
    location: "Chandigarh",
    type: "Event Artwork",
    medium: "Mixed Media",
    size: "36 × 48 in",
    deliveredIn: "7 days",
    review: "We commissioned Manav to create the centrepiece artwork for our cultural festival. He delivered something that became the visual identity of the entire event. Visitors kept stopping to photograph it. Exceptional work.",
    rating: 5,
    before: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&q=80",
    after: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80",
    year: "2023",
  },
];

export default function ClientWork() {
  const [active, setActive]   = useState(0);
  const [showAfter, setShowAfter] = useState(true);
  const c = commissions[active];

  const prev = () => setActive((p) => (p - 1 + commissions.length) % commissions.length);
  const next = () => setActive((p) => (p + 1) % commissions.length);

  return (
    <section id="commissions" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-sans text-[10px] text-gold/60 tracking-widest">04</span>
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Client Work</span>
          </div>
          <h2 className="font-serif text-display-lg text-white mb-3">
            Commissioned<br />
            <span className="italic text-gold-gradient">with love</span>
          </h2>
          <p className="font-sans text-sm text-white/35 leading-relaxed max-w-lg">
            Real commissions, real clients, real stories. Every piece delivered within 5–7 days.
          </p>
        </div>

        {/* Main commission showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">

          {/* Image comparison */}
          <div className="space-y-3">
            {/* Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAfter(false)}
                className={`font-sans text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 border transition-all duration-300 ${
                  !showAfter ? "border-gold/50 text-gold bg-gold/8" : "border-white/10 text-white/30 hover:border-gold/20"
                }`}
              >
                Reference Photo
              </button>
              <div className="h-px flex-1 bg-white/8" />
              <button
                onClick={() => setShowAfter(true)}
                className={`font-sans text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 border transition-all duration-300 ${
                  showAfter ? "border-gold/50 text-gold bg-gold/8" : "border-white/10 text-white/30 hover:border-gold/20"
                }`}
              >
                Final Artwork
              </button>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden border border-white/8 hover:border-gold/25 transition-colors duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url('${showAfter ? c.after : c.before}')` }}
              />
              <div className="absolute inset-0 bg-black/30" />
              {/* Spotlight */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 70% at 50% 30%, rgba(201,168,76,0.1) 0%, transparent 70%)" }}
              />
              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)" }}
              />

              {/* Label */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1.5">
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/50">
                  {showAfter ? "Final Artwork" : "Reference Photo"}
                </span>
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </div>

            {/* Commission details */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Medium",    value: c.medium },
                { label: "Size",      value: c.size },
                { label: "Delivered", value: c.deliveredIn },
              ].map((d) => (
                <div key={d.label} className="p-3 border border-white/5 bg-white/[0.02]">
                  <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-gold/40 mb-1">{d.label}</p>
                  <p className="font-sans text-xs text-white/55">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Client info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl text-white">{c.clientName}</h3>
                  <p className="font-sans text-xs text-white/35 mt-0.5">{c.location} · {c.type} · {c.year}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: c.rating }).map((_, i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-white/5" />

              {/* Review text */}
              <div className="relative">
                <Quote size={28} className="text-gold/10 absolute -top-2 -left-1" />
                <p className="font-serif italic text-base text-white/55 leading-relaxed pl-6">
                  {c.review}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/35 hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex-1 flex items-center gap-2">
                  {commissions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-px flex-1 transition-all duration-300 ${i === active ? "bg-gold" : "bg-white/15 hover:bg-gold/30"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/35 hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              <button
                onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-gold text-black font-sans font-semibold text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Get Your Custom Portrait
              </button>
            </div>
          </div>
        </div>

        {/* Mini commission grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {commissions.map((com, i) => (
            <button
              key={com.id}
              onClick={() => setActive(i)}
              className={`group relative aspect-square overflow-hidden border transition-all duration-300 ${
                active === i ? "border-gold/50" : "border-white/5 hover:border-gold/20"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${com.after}')` }}
              />
              <div className={`absolute inset-0 transition-colors duration-300 ${active === i ? "bg-black/20" : "bg-black/55 group-hover:bg-black/35"}`} />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="font-sans text-[8px] tracking-[0.2em] uppercase text-white/50 leading-tight">{com.type}</p>
                <p className="font-sans text-[9px] text-white/30">{com.clientName}</p>
              </div>
              {active === i && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
