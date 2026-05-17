"use client";

import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function TheatreHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void"
    >
      {/* ── Stage floor gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/theatre/lm 3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ── Primary spotlight — centre beam ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 100% at 50% 0%, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.06) 45%, transparent 75%)",
        }}
      />

      {/* ── Secondary fill lights ── */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 20%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 100% 20%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ── Footlight glow from bottom ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, rgba(201,168,76,0.08) 0%, transparent 100%)",
        }}
      />

      {/* ── Stage floor line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 25%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* ── Film grain removed due to performance issues ── */}

      {/* ── Curtain side panels ── */}
      <div
        className="absolute top-0 left-0 w-16 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,4,2,0.95) 0%, rgba(8,4,2,0.4) 60%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-16 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg, rgba(8,4,2,0.95) 0%, rgba(8,4,2,0.4) 60%, transparent 100%)",
        }}
      />

      {/* ── Corner brackets ── */}
      <div className="absolute top-24 left-10 w-8 h-8 border-l-2 border-t-2 border-gold/25" />
      <div className="absolute top-24 right-10 w-8 h-8 border-r-2 border-t-2 border-gold/25" />
      <div className="absolute bottom-16 left-10 w-8 h-8 border-l-2 border-b-2 border-gold/25" />
      <div className="absolute bottom-16 right-10 w-8 h-8 border-r-2 border-b-2 border-gold/25" />

      {/* ── Silhouette figure ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[65vh] pointer-events-none">
        {/* Body silhouette */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] h-[90%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(201,168,76,0.03) 0%, rgba(5,5,5,0.95) 70%, #050505 100%)",
            clipPath:
              "polygon(35% 100%, 28% 68%, 18% 50%, 15% 32%, 22% 14%, 35% 4%, 50% 0%, 65% 4%, 78% 14%, 85% 32%, 82% 50%, 72% 68%, 65% 100%)",
          }}
        />
        {/* Rim light left */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] h-[90%]"
          style={{
            background:
              "linear-gradient(100deg, rgba(201,168,76,0.15) 0%, transparent 25%, transparent 75%, rgba(201,168,76,0.1) 100%)",
            clipPath:
              "polygon(35% 100%, 28% 68%, 18% 50%, 15% 32%, 22% 14%, 35% 4%, 50% 0%, 65% 4%, 78% 14%, 85% 32%, 82% 50%, 72% 68%, 65% 100%)",
          }}
        />
        {/* Ground pool of light */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[60px]"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(201,168,76,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Pre-title */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="font-sans text-[9px] tracking-[0.6em] uppercase text-gold/60">
            Theatre Portfolio · Manav Arora
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Main headline */}
        <h1 className="font-serif font-light text-display-2xl text-ivory leading-[0.9] tracking-tight mb-6">
          The Stage is
          <br />
          <span className="italic text-gold-gradient">My Truth</span>
        </h1>

        {/* Sub-quote */}
        <p className="font-serif italic text-lg text-ivory/40 max-w-md mx-auto mb-12 leading-relaxed">
          &ldquo;Every character I wear is a mirror. Every performance, a confession.&rdquo;
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => document.querySelector("#timeline")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gold text-void font-sans font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            See My Journey
          </button>
          <button
            onClick={() => document.querySelector("#bahurupiya")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-gold/40 text-gold font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            Bahurupiya Project
          </button>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-10">
          {[
            { num: "15+",  label: "Performances" },
            { num: "5+",   label: "Competitions" },
            { num: "10+",  label: "Characters" },
            { num: "3",    label: "Years on Stage" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-2xl text-gold font-light">{s.num}</p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-smoke mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-scroll-line" />
        </div>
        <ArrowDown size={12} className="text-gold/40" />
      </div>
    </section>
  );
}
