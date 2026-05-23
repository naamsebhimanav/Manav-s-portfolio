/* src/components/creator/HeroCreator.tsx */
"use client";

import Link from "next/link";

export default function HeroCreator() {
  return (
    <section className="creator-hero min-h-screen flex items-center justify-center bg-void text-ivory p-8" id="hero">
      <div className="max-w-3xl text-center">
        <h1 className="font-bold text-5xl md:text-6xl tracking-tight mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
          Content That Moves People, Not Numbers
        </h1>
        <p className="text-lg md:text-xl mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          I craft reels, stories, and visual essays that capture attention, spark emotion, and drive action.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="#featured" className="px-6 py-3 bg-gold text-black rounded-full font-medium hover:bg-gold/80 transition">
            View Work
          </Link>
          <Link href="#contact" className="px-6 py-3 border border-gold rounded-full font-medium hover:bg-gold/10 transition">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
