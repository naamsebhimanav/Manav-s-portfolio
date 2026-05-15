"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";

const acts = [
  { label: "Timeline",   href: "#timeline" },
  { label: "Characters", href: "#characters" },
  { label: "Backstage",  href: "#backstage" },
  { label: "Bahurupiya", href: "#bahurupiya" },
];

export default function TheatreNav() {
  const [open, setOpen]       = useState(false);
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

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-void/95 backdrop-blur-md border-b border-gold/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Back to portfolio */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-ivory/50 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Portfolio</span>
          </Link>

          {/* Centre title */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="w-px h-4 bg-gold/30" />
            <span className="font-serif text-base tracking-widest text-ivory/80 italic">Theatre</span>
            <div className="w-px h-4 bg-gold/30" />
          </div>

          {/* Desktop acts */}
          <nav className="hidden md:flex items-center gap-8">
            {acts.map((a) => (
              <button
                key={a.href}
                onClick={() => go(a.href)}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-ivory/40 hover:text-gold transition-colors duration-300 gold-line-hover"
              >
                {a.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-ivory/60 hover:text-gold transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-void flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)" }}
          />
          <nav className="relative flex flex-col items-center gap-8">
            {acts.map((a, i) => (
              <button
                key={a.href}
                onClick={() => go(a.href)}
                className="font-serif text-4xl italic text-ivory/70 hover:text-gold transition-colors duration-300"
              >
                <span className="font-sans text-xs text-gold/40 tracking-widest mr-3 not-italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {a.label}
              </button>
            ))}
          </nav>
          <Link
            href="/"
            className="absolute bottom-10 flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-smoke hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={12} /> Back to Portfolio
          </Link>
        </div>
      )}
    </>
  );
}
