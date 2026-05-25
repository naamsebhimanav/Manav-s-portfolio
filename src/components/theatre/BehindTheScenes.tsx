"use client";

import { useState } from "react";
import { BookOpen, Mic, Users, Camera, Lightbulb, Music } from "lucide-react";

interface BtsItem {
  category: string;
  icon: typeof BookOpen;
  title: string;
  description: string;
  quote?: string;
  img: string;
  tags: string[];
}

const btsItems: BtsItem[] = [
  {
    category: "Script Work",
    icon: BookOpen,
    title: "Living inside the text",
    description:
      "Before a single line is spoken on stage, Manav spends weeks with the script — annotating, questioning, rewriting in his own words. Every character begins as a conversation with the playwright.",
    quote: "I don't memorise lines. I memorise the reason behind every word.",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    tags: ["Script Analysis", "Character Research", "Annotation"],
  },
  {
    category: "Voice & Body",
    icon: Mic,
    title: "The instrument of the actor",
    description:
      "Daily voice exercises, breath work, and physical training. The body is the actor's instrument — it must be tuned before every performance. Manav trains in Kathak, yoga, and classical voice.",
    quote: "Your body tells the truth even when your words lie.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tags: ["Voice Training", "Physical Theatre", "Kathak", "Breath Work"],
  },
  {
    category: "Rehearsal",
    icon: Users,
    title: "Finding the scene together",
    description:
      "Rehearsal is where the magic — and the mess — happens. Manav believes in deep collaboration, often spending hours in improvisation before locking a scene. The best moments are never planned.",
    quote: "The rehearsal room is the most honest place I know.",
    img: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    tags: ["Improvisation", "Ensemble Work", "Scene Study"],
  },
  {
    category: "Costume & Makeup",
    icon: Camera,
    title: "Wearing the character",
    description:
      "Costume and makeup are not decoration — they are transformation. Manav works closely with designers to ensure every visual element serves the character's psychology.",
    quote: "When I put on the costume, I stop being Manav.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    tags: ["Character Design", "Makeup", "Transformation"],
  },
  {
    category: "Lighting & Space",
    icon: Lightbulb,
    title: "The stage as a living canvas",
    description:
      "Manav is deeply involved in the technical aspects of production — working with lighting designers to sculpt the emotional landscape of each scene. Light is the fourth actor.",
    quote: "Shadow is as important as light. What you hide is as powerful as what you reveal.",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    tags: ["Lighting Design", "Stage Craft", "Technical Theatre"],
  },
  {
    category: "Music & Sound",
    icon: Music,
    title: "The rhythm beneath the words",
    description:
      "Every performance has a sonic landscape. Manav collaborates with composers and sound designers to build the emotional undercurrent that the audience feels before they understand it.",
    quote: "Music is the emotion the character can't say out loud.",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    tags: ["Sound Design", "Music Collaboration", "Atmosphere"],
  },
];

export default function BehindTheScenes() {
  const [active, setActive] = useState(0);
  const current = btsItems[active];

  return (
    <section id="backstage" className="relative py-28 lg:py-36 bg-void overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/content/thumb 2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      />
      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      {/* Side glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 80% at 100% 50%, rgba(29,20,8,0.35) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-sans text-[10px] text-gold/60 tracking-widest">03</span>
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/40">Behind the Scenes</span>
          </div>
          <h2 className="font-serif text-display-lg text-ivory mb-4">
            The work before<br />
            <span className="italic text-gold-gradient">the curtain rises</span>
          </h2>
          <p className="font-sans text-sm text-ivory/40 leading-relaxed max-w-xl">
            Performance is the tip of the iceberg. Here is everything beneath the surface.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-10">

          {/* Left: Category tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {btsItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 border text-left shrink-0 lg:shrink transition-all duration-300 ${
                  active === i
                    ? "border-gold/50 bg-gold/8 text-gold"
                    : "border-white/5 bg-charcoal/20 text-ivory/40 hover:border-gold/20 hover:text-ivory/70"
                }`}
              >
                <item.icon size={15} className={active === i ? "text-gold" : "text-smoke"} />
                <div className="hidden lg:block">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase mb-0.5">{item.category}</p>
                  <p className="font-serif text-sm text-current leading-tight">{item.title}</p>
                </div>
                <span className="lg:hidden font-sans text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">
                  {item.category}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Content panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden border border-white/5">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url('${current.img}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-void/40" />
              {/* Spotlight */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 70% at 50% 30%, rgba(201,168,76,0.12) 0%, transparent 70%)" }}
              />
              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)" }}
              />
              {/* Category badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-void/70 backdrop-blur-sm border border-gold/20 px-3 py-1.5">
                <current.icon size={12} className="text-gold/70" />
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/70">{current.category}</span>
              </div>
              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center space-y-5">
              <h3 className="font-serif text-display-md text-ivory leading-tight">{current.title}</h3>

              <p className="font-sans text-sm text-ivory/50 leading-relaxed">{current.description}</p>

              {current.quote && (
                <blockquote className="border-l-2 border-gold/40 pl-5 py-1">
                  <p className="font-serif italic text-base text-ivory/55 leading-relaxed">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </blockquote>
              )}

              <div className="flex flex-wrap gap-2">
                {current.tags.map((t) => (
                  <span
                    key={t}
                    className="font-sans text-[9px] tracking-[0.2em] uppercase text-smoke border border-white/8 px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2 pt-2">
                {btsItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-px transition-all duration-300 ${
                      i === active ? "w-8 bg-gold" : "w-3 bg-white/15 hover:bg-gold/30"
                    }`}
                    aria-label={`Go to ${btsItems[i].category}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
