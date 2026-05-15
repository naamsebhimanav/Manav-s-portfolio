"use client";

import { useState } from "react";
import { MapPin, Trophy, Users, Star } from "lucide-react";

type PerformanceType = "competition" | "production" | "festival" | "workshop";

interface Performance {
  year: string;
  title: string;
  role: string;
  venue: string;
  type: PerformanceType;
  result?: string;
  description: string;
  tags: string[];
}

const performances: Performance[] = [
  {
    year: "2024",
    title: "Bahurupiya",
    role: "The Shape-Shifter (Lead)",
    venue: "National Youth Theatre Festival, Delhi",
    type: "competition",
    result: "Best Solo Performance — Gold",
    description:
      "A one-man show exploring identity, masks, and the many faces we wear. Manav played 7 distinct characters within a single 45-minute performance.",
    tags: ["Solo", "Original Script", "National Level"],
  },
  {
    year: "2024",
    title: "Andha Yug",
    role: "Ashwatthama",
    venue: "Prithvi Theatre, Mumbai",
    type: "production",
    result: "Standing Ovation — 3 Nights",
    description:
      "Dharamvir Bharati's post-war epic. Manav's portrayal of the cursed warrior brought a raw, visceral energy that critics called 'unforgettable.'",
    tags: ["Ensemble", "Classical", "Hindi Theatre"],
  },
  {
    year: "2023",
    title: "Ek Tha Raja",
    role: "The Narrator / King",
    venue: "Inter-University Drama Competition, Pune",
    type: "competition",
    result: "Best Actor — First Place",
    description:
      "A folk-theatre adaptation blending Rajasthani storytelling traditions with contemporary staging. Dual role as narrator and protagonist.",
    tags: ["Folk Theatre", "Dual Role", "State Level"],
  },
  {
    year: "2023",
    title: "Waiting for Godot",
    role: "Vladimir",
    venue: "Alliance Française, Bangalore",
    type: "production",
    description:
      "Beckett's absurdist masterpiece staged in a minimalist black-box setting. Manav's Vladimir was praised for its quiet, devastating humour.",
    tags: ["Absurdist", "English Theatre", "Black Box"],
  },
  {
    year: "2023",
    title: "TEDx Storytelling Performance",
    role: "Performer & Speaker",
    venue: "TEDx Campus, Chandigarh",
    type: "festival",
    result: "800+ Live Audience",
    description:
      "Invited to perform a 12-minute piece on the intersection of identity and performance, followed by a talk on theatre as a tool for empathy.",
    tags: ["TEDx", "Spoken Word", "Keynote"],
  },
  {
    year: "2022",
    title: "Mughal-E-Azam (Musical)",
    role: "Prince Salim",
    venue: "City Cultural Festival, Chandigarh",
    type: "festival",
    result: "Best Supporting Actor",
    description:
      "A grand musical production with live orchestra. Manav's portrayal of the conflicted prince balanced romance and rebellion with precision.",
    tags: ["Musical", "Historical", "Live Orchestra"],
  },
  {
    year: "2022",
    title: "Devdas — A Retelling",
    role: "Devdas",
    venue: "Zonal Theatre Competition",
    type: "competition",
    result: "Best Actor — Zonal Level",
    description:
      "A contemporary reimagining of Sarat Chandra's classic, set in modern urban India. Manav's performance was described as 'heartbreakingly real.'",
    tags: ["Contemporary", "Lead Role", "Zonal Level"],
  },
  {
    year: "2021",
    title: "Street Theatre — Awareness Campaign",
    role: "Multiple Characters",
    venue: "Various Locations, Punjab",
    type: "workshop",
    description:
      "Performed in 12 street theatre shows across Punjab as part of a social awareness campaign on mental health. Reached 5,000+ audience members.",
    tags: ["Street Theatre", "Social Impact", "Outreach"],
  },
];

const typeConfig: Record<PerformanceType, { label: string; color: string; icon: typeof Trophy }> = {
  competition: { label: "Competition",  color: "text-gold border-gold/40 bg-gold/8",       icon: Trophy },
  production:  { label: "Production",   color: "text-ivory/70 border-white/20 bg-white/5", icon: Users },
  festival:    { label: "Festival",     color: "text-amber-400 border-amber-400/40 bg-amber-400/8", icon: Star },
  workshop:    { label: "Workshop",     color: "text-ivory/50 border-white/15 bg-white/3", icon: MapPin },
};

export default function PerformancesTimeline() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="timeline" className="relative py-28 lg:py-36 bg-void overflow-hidden">
      {/* Curtain lines bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,1) 60px, rgba(201,168,76,1) 61px)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-sans text-[10px] text-gold/60 tracking-widest">01</span>
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/40">
              Performances Timeline
            </span>
          </div>
          <h2 className="font-serif text-display-lg text-ivory mb-4">
            Every stage,<br />
            <span className="italic text-gold-gradient">every character</span>
          </h2>
          <p className="font-sans text-sm text-ivory/40 leading-relaxed max-w-xl">
            From street corners to national stages — a chronological record of performances,
            competitions, and the roles that shaped the artist.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-0">
            {performances.map((p, i) => {
              const cfg = typeConfig[p.type];
              const Icon = cfg.icon;
              const isOpen = expanded === i;

              return (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-[16px] top-8 hidden md:flex items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        isOpen ? "bg-gold border-gold shadow-[0_0_12px_rgba(201,168,76,0.6)]" : "bg-void border-gold/30"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`md:ml-14 border-b border-white/5 transition-all duration-300 ${
                      isOpen ? "bg-charcoal/30" : "hover:bg-charcoal/15"
                    }`}
                  >
                    {/* Header row — always visible */}
                    <button
                      className="w-full text-left px-6 py-6 flex items-start gap-4"
                      onClick={() => setExpanded(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      {/* Year */}
                      <span className="font-serif text-2xl text-gold/50 font-light leading-none shrink-0 w-14 text-right hidden sm:block">
                        {p.year}
                      </span>

                      {/* Main info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="font-serif text-xl text-ivory leading-tight">{p.title}</span>
                          <span className={`font-sans text-[9px] tracking-[0.2em] uppercase border px-2 py-0.5 ${cfg.color}`}>
                            {cfg.label}
                          </span>
                          <span className="font-sans text-[9px] text-gold/50 sm:hidden">{p.year}</span>
                        </div>
                        <p className="font-sans text-xs text-gold/70 mb-1 italic">{p.role}</p>
                        <div className="flex items-center gap-1.5 text-smoke">
                          <MapPin size={10} />
                          <span className="font-sans text-[10px] tracking-wide">{p.venue}</span>
                        </div>
                      </div>

                      {/* Result badge */}
                      <div className="shrink-0 text-right hidden sm:block">
                        {p.result && (
                          <div className="flex items-center gap-1.5 text-gold/70">
                            <Icon size={12} />
                            <span className="font-sans text-[10px] tracking-wide">{p.result}</span>
                          </div>
                        )}
                        <span className={`font-sans text-[10px] mt-2 block transition-transform duration-300 ${isOpen ? "rotate-180" : ""} text-smoke`}>
                          ▾
                        </span>
                      </div>
                    </button>

                    {/* Expanded content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 md:pl-[4.5rem] space-y-3">
                        <p className="font-sans text-sm text-ivory/50 leading-relaxed">{p.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="font-sans text-[9px] tracking-[0.2em] uppercase text-smoke border border-white/8 px-2 py-0.5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
