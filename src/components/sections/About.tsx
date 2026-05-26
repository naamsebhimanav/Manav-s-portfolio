"use client";

import { Drama, Palette, Pen, Mic } from "lucide-react";
import Image from "next/image";

const facets = [
  { icon: Drama, title: "Theatre & Performance", desc: "From intimate black-box stages to open-air festivals — every performance is a conversation with the audience." },
  { icon: Palette, title: "Visual Art", desc: "Paintings, installations, and mixed-media works that translate raw emotion into form, texture, and light." },
  { icon: Pen, title: "Design", desc: "Visual identities, posters, and campaigns built with the same narrative instinct as a stage production." },
  { icon: Mic, title: "Storytelling", desc: "Whether spoken, painted, or performed — every story I tell carries a heartbeat." },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-24 lg:py-0 bg-void overflow-hidden">
      {/* Warm side glow */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(29,20,8,0.5) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">

          {/* Portrait */}
          <div className="relative order-2 lg:order-1 -mt-8 lg:-mt-12">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              {/* Outer frame */}
              <div className="absolute -inset-2 sm:-inset-3 border border-gold/10" />
              <div className="absolute -inset-1 border border-gold/20" />

              {/* Portrait placeholder */}
              <div className="relative w-full h-full overflow-hidden bg-charcoal">
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(160deg, #2d1f0e 0%, #1a1a1a 40%, #0a0a0a 100%)" }}
                />
                {/* Spotlight on portrait */}
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse 70% 80% at 40% 30%, rgba(201,168,76,0.15) 0%, transparent 60%)" }}
                />
                {/* Actual Performance Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/theatre/gaay%201.png"
                    alt="Manav Arora Performance"
                    fill
                    className="object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700 opacity-80"
                    priority
                  />
                </div>
                {/* Vignette */}
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
                />
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 -right-6 w-12 h-12 sm:w-20 sm:h-20 border-r-2 border-b-2 border-gold/30" />

              {/* Badge */}
              <div className="absolute -bottom-3 left-2 sm:left-4 sm:-bottom-4 bg-charcoal border border-gold/20 px-3 sm:px-4 py-1.5 sm:py-2">
                <p className="font-secondary text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gold/60">
                  India · On Stage & On Canvas
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            {/* Section label */}
            <div className="flex items-center gap-4">
              <span className="font-primary text-[11px] text-gold/80 tracking-widest font-bold">01</span>
              <div className="h-px w-10 bg-gold/50" />
              <span className="font-primary text-[11px] tracking-[0.3em] uppercase text-ivory/70 font-semibold">About</span>
            </div>

            <h2 className="font-serif text-display-lg text-ivory leading-tight">
              I didn&apos;t choose art —<br />
              <span className="text-gold-gradient">art chose me</span>
            </h2>

            <div className="space-y-4">
              <p className="font-secondary text-base md:text-lg text-ivory/55 leading-relaxed">
                I grew up watching stories unfold — on stages, in sketchbooks, in the quiet
                spaces between words. I learned early that the most powerful thing a person can
                do is make someone else feel less alone.
              </p>
              <p className="font-secondary text-base md:text-lg text-ivory/40 leading-relaxed">
                Today I work across theatre, visual art, and design — not as separate disciplines,
                but as one continuous act of expression. Every brushstroke carries the rhythm of a
                monologue. Every performance holds the composition of a painting.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold/50 pl-4 sm:pl-6 py-1.5 sm:py-2">
              <p className="font-serif text-base sm:text-lg text-ivory/60 leading-relaxed">
                &ldquo;I don&apos;t perform to be seen. I perform so others can see themselves.&rdquo;
              </p>
            </blockquote>

            {/* Divider */}
            <div className="h-px w-24 bg-gradient-to-r from-gold/60 to-transparent" />

            {/* Facets */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {facets.map((f) => (
                <div
                  key={f.title}
                  className="group p-3 sm:p-4 border border-white/5 hover:border-gold/25 bg-charcoal/30 hover:bg-charcoal/60 transition-all duration-500"
                >
                  <f.icon size={16} className="text-gold/50 mb-2 group-hover:text-gold transition-colors duration-300" />
                  <p className="font-primary text-[11px] sm:text-xs font-medium text-ivory/70 mb-1 group-hover:text-ivory transition-colors duration-300">
                    {f.title}
                  </p>
                  <p className="font-secondary text-[9px] sm:text-[10px] text-smoke leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
