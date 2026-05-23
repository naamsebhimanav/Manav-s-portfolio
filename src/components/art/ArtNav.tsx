"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

const sections = [
  { label: "Gallery",    href: "#gallery" },
  { label: "Categories", href: "#categories" },
  { label: "Process",    href: "#process" },
];

export default function ArtNav() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Back */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-white/40 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Portfolio</span>
          </Link>

          {/* Centre wordmark */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-px h-3 bg-gold/30" />
              <span className="font-serif text-sm tracking-[0.3em] text-white/70 italic">Art & Portraits</span>
              <div className="w-px h-3 bg-gold/30" />
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <button
                key={s.href}
                onClick={() => go(s.href)}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/35 hover:text-gold transition-colors duration-300 gold-line-hover"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => go("#cta")}
              className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/40 px-4 py-2 hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              Commission
            </button>
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden text-white/50 hover:text-gold transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
          />
          <nav className="relative flex flex-col items-center gap-8">
            {sections.map((s) => (
              <button
                key={s.href}
                onClick={() => go(s.href)}
                className="font-serif text-4xl italic text-white/60 hover:text-gold transition-colors duration-300"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => go("#cta")}
              className="mt-2 font-sans text-xs tracking-[0.3em] uppercase text-gold border border-gold/40 px-8 py-3 hover:bg-gold/10 transition-all duration-300"
            >
              Commission a Portrait
            </button>
          </nav>
          <Link
            href="/"
            className="absolute bottom-10 flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={12} /> Back to Portfolio
          </Link>
        </div>
      )}
    </>
  );
}
