"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing",  href: "#pricing" },
  { label: "Process",  href: "#process" },
  { label: "Contact",  href: "#cta" },
];

export default function HireNav() {
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
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(5,5,5,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "1px solid transparent",
        padding: scrolled ? "12px 0" : "20px 0",
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Back */}
          <Link href="/" className="font-sans" style={{
            display: "flex", alignItems: "center", gap: "8px",
            fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase",
            color: "rgba(245,240,232,0.4)", textDecoration: "none", transition: "color 0.3s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(245,240,232,0.4)"}
          >
            <ArrowLeft size={13} /> Portfolio
          </Link>

          {/* Centre */}
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "1px", height: "12px", background: "rgba(201,168,76,0.3)" }} />
            <span className="font-serif" style={{ fontSize: "13px", letterSpacing: "0.2em", color: "rgba(245,240,232,0.65)", fontStyle: "italic" }}>
              Hire Me
            </span>
            <div style={{ width: "1px", height: "12px", background: "rgba(201,168,76,0.3)" }} />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "28px" }}>
            {links.map(l => (
              <button key={l.href} onClick={() => go(l.href)} className="font-sans gold-line-hover" style={{
                fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase",
                color: "rgba(245,240,232,0.35)", background: "none", border: "none",
                cursor: "pointer", transition: "color 0.3s", padding: 0,
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(245,240,232,0.35)"}
              >{l.label}</button>
            ))}
            <button onClick={() => go("#cta")} className="font-sans" style={{
              fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#050505", background: "#c9a84c", border: "none",
              padding: "10px 20px", cursor: "pointer", fontWeight: 700,
              transition: "background 0.3s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#e8c97a"}
              onMouseLeave={e => e.currentTarget.style.background = "#c9a84c"}
            >Let&apos;s Talk</button>
          </nav>

          {/* Mobile */}
          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(245,240,232,0.5)" }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "#050505", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
          <nav style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
            {links.map(l => (
              <button key={l.href} onClick={() => go(l.href)} className="font-serif" style={{
                fontSize: "clamp(2rem,6vw,2.5rem)", fontStyle: "italic",
                color: "rgba(245,240,232,0.7)", background: "none", border: "none",
                cursor: "pointer", transition: "color 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(245,240,232,0.7)"}
              >{l.label}</button>
            ))}
            <button onClick={() => go("#cta")} className="font-sans" style={{
              marginTop: "8px", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#050505", background: "#c9a84c", border: "none",
              padding: "14px 36px", cursor: "pointer", fontWeight: 700,
            }}>Let&apos;s Talk</button>
          </nav>
          <Link href="/" style={{ position: "absolute", bottom: "40px", display: "flex", alignItems: "center", gap: "8px", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(107,107,107,1)", textDecoration: "none" }} className="font-sans">
            <ArrowLeft size={12} /> Back to Portfolio
          </Link>
        </div>
      )}
    </>
  );
}
