"use client";

import { Link2, Share2, Video, Globe } from "lucide-react";

const navLinks = ["About", "Work", "Achievements", "Social", "Contact"];
const socials = [
  { icon: Share2, label: "Instagram", href: "https://www.instagram.com" },
  { icon: Link2,  label: "LinkedIn",  href: "https://www.linkedin.com" },
  { icon: Video,  label: "YouTube",   href: "https://www.youtube.com" },
  { icon: Globe,  label: "Behance",   href: "https://www.behance.net" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id.toLowerCase().replace(" ", "-")}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-void pt-16 pb-8 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <div className="absolute inset-0 border border-gold/40 rotate-45" />
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              </div>
              <span className="font-serif text-base tracking-wider text-ivory/80">Manav Arora</span>
            </div>
            <p className="font-sans text-xs text-smoke leading-relaxed max-w-xs">
              Performer, visual artist, and storyteller — crafting experiences that make people feel something real.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/8 flex items-center justify-center text-smoke hover:border-gold/40 hover:text-gold transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/50">Navigate</p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="font-sans text-xs text-ivory/40 hover:text-gold transition-colors duration-300 w-fit gold-line-hover text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/50">Contact</p>
            <div className="space-y-2">
              <a
                href="mailto:manav@manavarora.com"
                className="font-sans text-xs text-ivory/40 hover:text-gold transition-colors duration-300 block gold-line-hover w-fit"
              >
                manav@manavarora.com
              </a>
              <p className="font-sans text-xs text-ivory/30">India</p>
              <p className="font-sans text-xs text-gold/50">Open for 2025 projects</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/15 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-widest text-smoke uppercase">
            © {new Date().getFullYear()} Manav Arora. All rights reserved.
          </p>
          <p className="font-serif text-xs italic text-smoke/50">
            &ldquo;Where stories breathe through performance and visuals.&rdquo;
          </p>
          <p className="font-sans text-[10px] tracking-widest text-smoke uppercase">
            Performer · Artist · Designer
          </p>
        </div>
      </div>
    </footer>
  );
}
