"use client";

import { Trophy, Star, Award, Mic } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    number: "01",
    year: "2024",
    title: "Best Solo Performance",
    event: "National Youth Theatre Festival",
    desc: "Awarded for 'The Last Monologue' — a performance the jury called 'the most honest piece of theatre from a young artist this decade.'",
    tags: "Solo Performance · National Level · Gold Award",
    link: "https://youtube.com",
  },
  {
    icon: Star,
    number: "02",
    year: "2024",
    title: "1st Place — Visual Arts",
    event: "Inter-University Art Competition",
    desc: "The 'Shades of Silence' series won first place across 40+ competing institutions, cited for emotional depth and technical maturity.",
    tags: "Mixed Media · 40+ Institutions · First Place",
    link: "https://unsplash.com",
  },
  {
    icon: Award,
    number: "03",
    year: "2023",
    title: "Best Design — Cultural Campaign",
    event: "State Creative Arts Awards",
    desc: "The 'Roots & Routes' identity was recognised as the standout design of the year for its fusion of traditional motifs and contemporary typography.",
    tags: "Brand Identity · State Level · Best Design",
    link: "https://unsplash.com",
  },
  {
    icon: Mic,
    number: "04",
    year: "2023",
    title: "Featured Performer",
    event: "TEDx Campus — Storytelling Edition",
    desc: "Invited to perform and speak on the intersection of performance and visual storytelling, reaching 800+ live and thousands online.",
    tags: "TEDx · 800+ Audience · Keynote Performance",
    link: "https://ted.com",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 lg:py-36 bg-void overflow-hidden">
      {/* Side glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 80% at 0% 50%, rgba(29,20,8,0.4) 0%, transparent 60%)" }}
      />
      {/* Curtain lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,168,76,0.015) 80px, rgba(201,168,76,0.015) 81px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-sans text-[10px] text-gold/60 tracking-widest">03</span>
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/40">Achievements</span>
          </div>
          <h2 className="font-serif text-display-lg text-ivory mb-4">
            Moments that<br />
            <span className="italic text-gold-gradient">marked the stage</span>
          </h2>
          <p className="font-sans text-sm text-ivory/40 leading-relaxed">
            Each award is not a trophy — it&apos;s a reminder that the work resonated. That someone in the audience felt something real.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

          <div className="space-y-0">
            {achievements.map((item, i) => (
              <div
                key={item.number}
                className={`relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 py-14 ${
                  i < achievements.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                {/* Left side (even) or empty (odd) */}
                <div className={`${i % 2 === 0 ? "md:pr-16 md:text-right" : "hidden md:block"}`}>
                  {i % 2 === 0 && (
                    <AchievementContent item={item} />
                  )}
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center px-4">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-gold/70 shadow-[0_0_16px_rgba(201,168,76,0.5)]" />
                    <div className="absolute inset-0 -m-2 rounded-full border border-gold/20 animate-pulse-slow" />
                  </div>
                </div>

                {/* Right side (odd) or empty (even) */}
                <div className={`${i % 2 !== 0 ? "md:pl-16" : "hidden md:block"}`}>
                  {i % 2 !== 0 && (
                    <AchievementContent item={item} />
                  )}
                </div>

                {/* Mobile: always show */}
                <div className="md:hidden pl-10">
                  <div className="absolute left-4 top-16 w-3 h-3 rounded-full bg-gold/70 shadow-[0_0_12px_rgba(201,168,76,0.4)]" />
                  <AchievementContent item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-20 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-12" />
          <p className="font-serif text-display-md italic text-ivory/25 max-w-2xl mx-auto">
            &ldquo;The applause fades. The story stays.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

function AchievementContent({ item }: { item: typeof achievements[0] }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <item.icon size={16} className="text-gold/50" />
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/50">{item.year}</span>
      </div>
      <h3 className="font-serif text-display-md text-ivory">{item.title}</h3>
      <p className="font-sans text-xs text-gold/60 tracking-wider">{item.event}</p>
      <p className="font-sans text-sm text-ivory/40 leading-relaxed max-w-sm">{item.desc}</p>
      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/35">{item.tags}</p>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase text-ivory/25 hover:text-gold transition-colors duration-300 group"
      >
        <span>View</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
      </a>
    </div>
  );
}
