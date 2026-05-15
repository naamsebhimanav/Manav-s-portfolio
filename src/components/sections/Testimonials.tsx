"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Share2, Users, TrendingUp, Eye } from "lucide-react";

const testimonials = [
  {
    quote: "Manav doesn't just perform — he transforms the room. The moment he stepped on stage, every person forgot they were watching a show. They were living it.",
    author: "Priya Sharma",
    role: "Artistic Director",
    company: "Rangmanch Theatre Collective",
  },
  {
    quote: "His visual work carries a silence that speaks. The 'Shades of Silence' series stopped me in my tracks. There is a maturity in his art that most artists spend a lifetime chasing.",
    author: "Arjun Mehta",
    role: "Curator",
    company: "The Art House, Mumbai",
  },
  {
    quote: "We hired Manav to design our festival identity and he gave us something we didn't know we needed. The work was rooted, bold, and completely unforgettable. Our audience doubled.",
    author: "Kavya Nair",
    role: "Festival Director",
    company: "Roots & Routes Cultural Festival",
  },
];

const stats = [
  { icon: Share2,      metric: "50K+",  label: "Followers",       sub: "Organic reach across performance & art content" },
  { icon: TrendingUp,  metric: "8.4%",  label: "Engagement Rate", sub: "3× the industry average for creative accounts" },
  { icon: Eye,         metric: "2.1M",  label: "Impressions",     sub: "Performance reels consistently hit 100K+ views" },
  { icon: Users,       metric: "12K+",  label: "Story Views",     sub: "Highly engaged community of artists & creators" },
];

export default function SocialProof() {
  const [active, setActive]       = useState(0);
  const [autoPlay, setAutoPlay]   = useState(true);

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [autoPlay, next]);

  return (
    <section id="social-proof" className="relative py-28 lg:py-36 bg-stage overflow-hidden">
      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
      />

      {/* Decorative quote */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 font-serif text-[18rem] text-white/[0.015] leading-none pointer-events-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* ── Testimonials ── */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="font-sans text-[10px] text-gold/60 tracking-widest">04</span>
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/40">Voices</span>
          </div>
          <h2 className="font-serif text-display-lg text-ivory mb-14">
            What people say
          </h2>

          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <blockquote className="mb-8 min-h-[120px] flex items-center justify-center">
              <p className="font-serif text-xl md:text-2xl text-ivory/70 italic leading-relaxed">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
            </blockquote>

            <div className="flex flex-col items-center gap-1 mb-10">
              <div className="w-8 h-px bg-gold/40 mb-3" />
              <p className="font-sans text-sm font-medium text-ivory/80 tracking-wider">
                {testimonials[active].author}
              </p>
              <p className="font-sans text-xs text-smoke tracking-widest">
                {testimonials[active].role} · {testimonials[active].company}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-ivory/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-px transition-all duration-300 ${
                      i === active ? "w-8 bg-gold" : "w-4 bg-white/15 hover:bg-gold/30"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-ivory/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Social Stats ── */}
        <div className="border-t border-white/5 pt-16">
          <div className="text-center mb-10">
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold/50 mb-2">
              Audience Engagement
            </p>
            <h3 className="font-serif text-display-md text-ivory/80">
              A community that shows up
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <a
                key={s.label}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-white/5 hover:border-gold/25 bg-charcoal/20 hover:bg-charcoal/50 transition-all duration-500 text-center"
              >
                <s.icon
                  size={20}
                  className="text-gold/40 mb-3 mx-auto group-hover:text-gold transition-colors duration-300"
                />
                <p className="font-serif text-3xl text-gold mb-1 group-hover:text-gold-light transition-colors duration-300">
                  {s.metric}
                </p>
                <p className="font-sans text-xs font-medium text-ivory/60 mb-1 tracking-wider">
                  {s.label}
                </p>
                <p className="font-sans text-[10px] text-smoke leading-relaxed">{s.sub}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/30 hover:text-gold transition-colors duration-300"
            >
              <span className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
              Follow on Instagram
              <span className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
