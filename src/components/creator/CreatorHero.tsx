"use client";

import { ArrowDown } from "lucide-react";

export default function CreatorHero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
        style={{ backgroundImage: "url('/content/content thumb.png')" }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808] pointer-events-none" />
      
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Central spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.05) 50%, transparent 75%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 20%, rgba(8,8,8,0.92) 100%)",
        }}
      />

      {/* Floating decorative circles - hidden on mobile to prevent overflow */}
      <div className="absolute top-[15%] left-[8%] w-[180px] h-[180px] rounded-full border border-gold/10 pointer-events-none hidden md:block" />
      <div className="absolute top-[20%] left-[10%] w-[100px] h-[100px] rounded-full border border-gold/15 pointer-events-none hidden md:block" />
      <div className="absolute bottom-[20%] right-[8%] w-[220px] h-[220px] rounded-full border border-gold/5 pointer-events-none hidden md:block" />
      <div className="absolute bottom-[25%] right-[11%] w-[120px] h-[120px] rounded-full border border-gold/10 pointer-events-none hidden md:block" />

      {/* Floating lines - hidden on mobile to prevent overflow */}
      <div className="absolute top-[35%] left-[5%] w-[60px] h-px bg-gold/20 pointer-events-none hidden md:block" />
      <div className="absolute top-[38%] left-[5%] w-[30px] h-px bg-gold/10 pointer-events-none hidden md:block" />
      <div className="absolute top-[60%] right-[5%] w-[60px] h-px bg-gold/20 pointer-events-none hidden md:block" />
      <div className="absolute top-[63%] right-[5%] w-[30px] h-px bg-gold/10 pointer-events-none hidden md:block" />

      {/* Corner brackets */}
      <div className="absolute top-24 left-6 sm:left-10 w-7 h-7 border-l-2 border-t-2 border-gold/20" />
      <div className="absolute top-24 right-6 sm:right-10 w-7 h-7 border-r-2 border-t-2 border-gold/20" />
      <div className="absolute bottom-16 left-6 sm:left-10 w-7 h-7 border-l-2 border-b-2 border-gold/20" />
      <div className="absolute bottom-16 right-6 sm:right-10 w-7 h-7 border-r-2 border-b-2 border-gold/20" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[900px] mx-auto pt-24 sm:pt-20">
        {/* Pre-title */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="font-sans text-[9px] tracking-[0.4em] sm:tracking-[0.6em] uppercase text-gold/60">
            Content Creator · Naamsebhimanav
          </span>
          <div className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Headline */}
        <h1 className="font-serif font-light text-display-2xl text-ivory tracking-tight mb-6">
          Creating content that
          <br />
          <span className="italic text-gold-gradient">
            entertains people
          </span>
        </h1>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto mb-16">
          <button
            onClick={() => go("#reels")}
            className="w-full sm:w-auto justify-center flex items-center bg-white text-void font-sans font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer"
          >
            Explore fun
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto justify-center flex items-center border border-gold/50 text-gold font-sans font-medium text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold/10 hover:border-gold transition-all duration-300 cursor-pointer"
          >
            Collaborate
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-scroll-line" />
        </div>
        <ArrowDown size={12} className="text-gold/40" />
      </div>
    </section>
  );
}
