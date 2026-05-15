"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Posters",      href: "#posters" },
  { label: "Logos",        href: "#logos" },
  { label: "Social",       href: "#social" },
  { label: "Before/After", href: "#before-after" },
  { label: "Mockups",      href: "#mockups" },
];

export default function DesignFooter() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative bg-[#080808] pt-14 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Statement */}
        <div className="text-center mb-12">
          <p className="font-sans font-black text-display-md text-white/10 uppercase tracking-tight">
            Design that demands attention
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/25" />
            <div className="w-1.5 h-1.5 bg-gold/30 rotate-45" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/25" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <Link href="/" className="flex items-center gap-2 group text-white/25 hover:text-gold transition-colors duration-300">
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Back to Portfolio</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/20 hover:text-gold transition-colors duration-300 gold-line-hover">
                {l.label}
              </button>
            ))}
          </nav>

          <button onClick={() => go("#cta")}
            className="flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-4 py-2 hover:bg-gold/10 hover:border-gold transition-all duration-300">
            Hire Me <ArrowUpRight size={11} />
          </button>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-7" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-widest text-white/15 uppercase">
            © {new Date().getFullYear()} Manav Arora · Design Portfolio
          </p>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-gold/20 rounded-full" />
            <p className="font-sans text-[10px] tracking-widest text-white/15 uppercase">
              Posters · Logos · Social · Campaigns
            </p>
            <div className="w-1 h-1 bg-gold/20 rounded-full" />
          </div>
          <p className="font-sans text-[10px] text-white/15">Fast delivery · Zero compromise</p>
        </div>
      </div>
    </footer>
  );
}
