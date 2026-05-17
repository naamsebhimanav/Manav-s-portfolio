"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

const EMAIL    = "mailto:aroramanav787@gmail.com?subject=Let's%20Work%20Together";

const pages = [
  { label: "Theatre",  href: "/theatre" },
  { label: "Art",      href: "/art" },
  { label: "Design",   href: "/design" },
  { label: "Creator",  href: "/creator" },
];

export default function HireFooter() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: "56px", paddingBottom: "28px", position: "relative", overflow: "hidden" }}>

      {/* Spotlight */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "400px", height: "200px", background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top row */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "40px", marginBottom: "48px" }}>

          {/* Brand */}
          <div style={{ maxWidth: "260px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "26px", height: "26px", border: "1px solid rgba(201,168,76,0.4)", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ width: "6px", height: "6px", background: "#c9a84c", borderRadius: "50%", transform: "rotate(-45deg)" }} />
              </div>
              <span className="font-serif" style={{ fontSize: "14px", color: "rgba(245,240,232,0.7)", letterSpacing: "0.05em" }}>Manav Arora</span>
            </div>
            <p className="font-sans" style={{ fontSize: "11px", color: "rgba(107,107,107,1)", lineHeight: 1.7 }}>
              Performer · Visual Artist · Storyteller<br />Available for work in 2025.
            </p>
          </div>

          {/* Quick contact */}
          <div>
            <p className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.45)", marginBottom: "14px" }}>Quick Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href={EMAIL} className="font-sans" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "rgba(201,168,76,0.7)", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(201,168,76,0.7)"}
              >
                <Mail size={13} /> aroramanav787@gmail.com
              </a>
            </div>
          </div>

          {/* Portfolio */}
          <div>
            <p className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.45)", marginBottom: "14px" }}>Portfolio</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {pages.map(p => (
                <Link key={p.href} href={p.href} className="font-sans gold-line-hover" style={{ fontSize: "12px", color: "rgba(245,240,232,0.35)", textDecoration: "none", transition: "color 0.3s", width: "fit-content" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(245,240,232,0.35)"}
                >{p.label}</Link>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div>
            <p className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.45)", marginBottom: "14px" }}>This Page</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Services", href: "#services" },
                { label: "Pricing",  href: "#pricing" },
                { label: "Process",  href: "#process" },
                { label: "Contact",  href: "#cta" },
              ].map(l => (
                <button key={l.href} onClick={() => go(l.href)} className="font-sans gold-line-hover" style={{ fontSize: "12px", color: "rgba(245,240,232,0.35)", background: "none", border: "none", cursor: "pointer", textAlign: "left", transition: "color 0.3s", padding: 0, width: "fit-content" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(245,240,232,0.35)"}
                >{l.label}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.1), transparent)", marginBottom: "24px" }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,240,232,0.25)", textDecoration: "none", transition: "color 0.3s" }} className="font-sans"
            onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(245,240,232,0.25)"}
          >
            <ArrowLeft size={12} /> Back to Portfolio
          </Link>

          <p className="font-serif" style={{ fontSize: "12px", fontStyle: "italic", color: "rgba(245,240,232,0.2)" }}>
            &ldquo;Let&apos;s create something meaningful.&rdquo;
          </p>

          <button onClick={() => go("#cta")} className="font-sans" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", background: "none", border: "1px solid rgba(201,168,76,0.3)", padding: "8px 16px", cursor: "pointer", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "#c9a84c"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; }}
          >
            Hire Me <ArrowUpRight size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
}
