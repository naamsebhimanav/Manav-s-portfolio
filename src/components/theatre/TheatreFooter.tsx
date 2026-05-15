"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function TheatreFooter() {
  return (
    <footer className="relative bg-void pt-16 pb-10 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centre statement */}
        <div className="text-center mb-14">
          <p className="font-serif text-display-lg italic text-ivory/20 mb-4">
            &ldquo;The curtain falls. The story lives.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
            <div className="w-1.5 h-1.5 bg-gold/40 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
        </div>

        {/* Links row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Back to portfolio */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-ivory/40 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Back to Portfolio</span>
          </Link>

          {/* Page sections */}
          <nav className="flex items-center gap-8">
            {[
              { label: "Timeline",   href: "#timeline" },
              { label: "Characters", href: "#characters" },
              { label: "Backstage",  href: "#backstage" },
              { label: "Bahurupiya",href: "#bahurupiya" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); }}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-ivory/30 hover:text-gold transition-colors duration-300 gold-line-hover cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Hire CTA */}
          <a
            href="/#contact"
            className="flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-5 py-2.5 hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            Hire Manav
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/12 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-widest text-smoke uppercase">
            © {new Date().getFullYear()} Manav Arora · Theatre Portfolio
          </p>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-gold/30 rounded-full" />
            <p className="font-sans text-[10px] tracking-widest text-smoke uppercase">
              Performer · Director · Storyteller
            </p>
            <div className="w-1 h-1 bg-gold/30 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
