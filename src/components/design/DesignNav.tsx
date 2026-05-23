"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

const sections = [
  { label: "Posters",  href: "#posters" },
  { label: "User Interfaces",   href: "#social" },
];

export default function DesignNav() {
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-white/40 hover:text-gold transition-colors duration-300">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Portfolio</span>
          </Link>

          {/* Wordmark */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="w-px h-3 bg-gold/30" />
            <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-white/60 font-medium">Design</span>
            <div className="w-px h-3 bg-gold/30" />
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {sections.map((s) => (
              <button key={s.href} onClick={() => go(s.href)}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-white transition-colors duration-300 gold-line-hover">
                {s.label}
              </button>
            ))}
            <button onClick={() => go("#cta")}
              className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/40 px-4 py-2 hover:bg-gold/10 hover:border-gold transition-all duration-300">
              Hire
            </button>
          </nav>

          <button className="md:hidden text-white/50 hover:text-white transition-colors"
            onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
          <nav className="relative flex flex-col items-center gap-8">
            {sections.map((s) => (
              <button key={s.href} onClick={() => go(s.href)}
                className="font-sans text-2xl tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300">
                {s.label}
              </button>
            ))}
            <button onClick={() => go("#cta")}
              className="mt-2 font-sans text-xs tracking-[0.3em] uppercase text-gold border border-gold/40 px-8 py-3 hover:bg-gold/10 transition-all duration-300">
              Hire Me
            </button>
          </nav>
          <Link href="/" className="absolute bottom-10 flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-white/25 hover:text-gold transition-colors duration-300">
            <ArrowLeft size={12} /> Back to Portfolio
          </Link>
        </div>
      )}
    </>
  );
}
