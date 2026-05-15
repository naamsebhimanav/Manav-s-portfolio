"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const mainLinks = [
  { label: "About",        href: "#about" },
  { label: "Work",         href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact" },
];

const portfolioPages = [
  { label: "About Me",   href: "/about" },
  { label: "Theatre",    href: "/theatre" },
  { label: "Art",        href: "/art" },
  { label: "Design",     href: "/design" },
  { label: "Creator",    href: "/creator" },
  { label: "Hire Me",    href: "/hire" },
  { label: "Contact",    href: "/contact" },
];

export default function Navigation() {
  const [open, setOpen]         = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    setMenuOpen(false);
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
            <div className="relative w-7 h-7 flex items-center justify-center">
              <div className="absolute inset-0 border border-gold/50 rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
              <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-125 transition-transform duration-300" />
            </div>
            <span className="font-serif text-base text-ivory/90 group-hover:text-gold transition-colors duration-300 tracking-wide hidden sm:block">
              Manav Arora
            </span>
          </a>

          {/* ── Desktop: main section links ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-ivory/45 hover:text-gold transition-colors duration-300 gold-line-hover whitespace-nowrap"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop: right side actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Portfolio dropdown trigger */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-ivory/40 hover:text-gold transition-colors duration-300 border border-white/10 hover:border-gold/30 px-3 py-2 flex items-center gap-1.5"
              >
                Portfolio
                <span className={`transition-transform duration-300 text-[8px] ${menuOpen ? "rotate-180" : ""}`}>▾</span>
              </button>

              {menuOpen && (
                <>
                  {/* Backdrop */}
                  <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                  {/* Dropdown */}
                  <div className="absolute right-0 top-full mt-2 w-44 bg-void border border-gold/15 z-20 shadow-2xl">
                    {portfolioPages.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setMenuOpen(false)}
                        className="block font-sans text-[10px] tracking-[0.2em] uppercase text-ivory/45 hover:text-gold hover:bg-gold/5 transition-all duration-200 px-4 py-3 border-b border-white/5 last:border-0"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Hire Me CTA */}
            <Link
              href="/hire"
              className="font-sans text-[10px] tracking-[0.3em] uppercase font-semibold px-5 py-2.5 transition-colors duration-300 whitespace-nowrap"
              style={{ background: "#c9a84c", color: "#050505" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#e8c97a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#c9a84c"; }}
            >
              Hire Me
            </Link>
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
            <p className="font-sans text-[8px] tracking-[0.5em] uppercase text-gold/40 mb-2">This Page</p>
            {mainLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-serif text-3xl italic text-ivory/75 hover:text-gold transition-colors duration-300 w-full text-center"
              >
                {l.label}
              </button>
            ))}

            <div className="w-full h-px bg-gold/10 my-2" />

            {/* Portfolio pages */}
            <p className="font-sans text-[8px] tracking-[0.5em] uppercase text-gold/40 mb-2">Portfolio</p>
            {portfolioPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm tracking-[0.2em] uppercase text-ivory/45 hover:text-gold transition-colors duration-300 w-full text-center py-1"
              >
                {p.label}
              </Link>
            ))}

            {/* Hire CTA */}
            <Link
              href="/hire"
              onClick={() => setOpen(false)}
              className="mt-4 font-sans text-xs tracking-[0.3em] uppercase font-semibold px-10 py-4 w-full text-center"
              style={{ background: "#c9a84c", color: "#050505" }}
            >
              Hire Me
            </Link>
          </nav>

          <p className="absolute bottom-8 font-sans text-[9px] tracking-[0.4em] uppercase text-smoke">
            Performer · Visual Artist · Storyteller
          </p>
        </div>
      )}
    </>
  );
}
