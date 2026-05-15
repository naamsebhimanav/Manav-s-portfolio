"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Gallery",     href: "#gallery" },
  { label: "Categories",  href: "#categories" },
  { label: "Process",     href: "#process" },
  { label: "Commissions", href: "#commissions" },
  { label: "Commission",  href: "#cta" },
];

export default function ArtFooter() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative bg-black pt-14 pb-8 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centre quote */}
        <div className="text-center mb-12">
          <p className="font-serif text-display-md italic text-white/15 mb-4">
            &ldquo;Every portrait is a love letter to the subject.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/25" />
            <div className="w-1.5 h-1.5 bg-gold/30 rotate-45" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/25" />
          </div>
        </div>

        {/* Links row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <Link
            href="/"
            className="flex items-center gap-2 group text-white/30 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Back to Portfolio</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/25 hover:text-gold transition-colors duration-300 gold-line-hover"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); go("#cta"); }}
            className="flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-4 py-2 hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            Commission
            <ArrowUpRight size={11} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-7" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-widest text-white/20 uppercase">
            © {new Date().getFullYear()} Manav Arora · Art Portfolio
          </p>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-gold/25 rounded-full" />
            <p className="font-sans text-[10px] tracking-widest text-white/20 uppercase">
              Portraits · Paintings · Commissions
            </p>
            <div className="w-1 h-1 bg-gold/25 rounded-full" />
          </div>
          <p className="font-sans text-[10px] text-white/20">5–7 day delivery · 100% satisfaction</p>
        </div>
      </div>
    </footer>
  );
}
