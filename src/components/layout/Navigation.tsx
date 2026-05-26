"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const mainLinks = [
  { label: "Home",       href: "#hero" },
  { label: "Portfolio",  href: "#creator" },
];

export default function Navigation() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-void/95 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="flex items-center gap-3 group shrink-0"
          >
            {/* Profile image as logo */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-gold/50 group-hover:border-gold transition-colors duration-300">
              <Image
                src="/theatre/navp.jpg"
                alt="Manav Arora"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <span className="font-serif text-base text-ivory/90 group-hover:text-gold transition-colors duration-300 tracking-wide hidden sm:block font-semibold">
              Manav Arora
            </span>
          </a>

          {/* ── Desktop: main section links ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-sans text-[12px] tracking-[0.2em] uppercase text-ivory/80 hover:text-gold transition-colors duration-300 gold-line-hover whitespace-nowrap font-medium"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop: right side actions ── */}
          <div className="hidden lg:flex items-center">
            {/* No dropdown needed for single-page layout */}
          </div>

          {/* ── Mobile: hamburger ── */}
          <button
            className="lg:hidden text-ivory/70 hover:text-gold transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      {open && (
        <div className="fixed inset-0 z-40 bg-void flex flex-col items-center justify-center overflow-y-auto">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
          />

          <nav className="relative flex flex-col items-center gap-6 py-16 w-full max-w-sm px-8">
            {/* Section links */}
            <p className="font-sans text-[8px] tracking-[0.5em] uppercase text-gold/40 mb-2">Sections</p>
            {mainLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-serif text-3xl text-ivory/75 hover:text-gold transition-colors duration-300 w-full text-center font-bold"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <p className="absolute bottom-8 font-sans text-[9px] tracking-[0.4em] uppercase text-smoke">
            Performer · Visual Artist · Storyteller
          </p>
        </div>
      )}
    </>
  );
}
