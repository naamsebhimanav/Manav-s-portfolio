"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

const sections = [
  { label: "The Journey",  href: "#journey" },
  { label: "Philosophy",   href: "#philosophy" },
  { label: "What Drives Me", href: "#drives" },
  { label: "In My Words",  href: "#words" },
];

export default function AboutNav() {
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

  const navBg   = scrolled ? "rgba(5,5,5,0.96)" : "transparent";
  const navBdr  = scrolled ? "1px solid rgba(201,168,76,0.08)" : "1px solid transparent";
  const navPad  = scrolled ? "12px 0" : "20px 0";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "all 0.5s ease",
          background: navBg,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: navBdr,
          padding: navPad,
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {/* Back */}
          <Link
            href="/"
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              color: "rgba(245,240,232,0.4)",
              textDecoration: "none",
              transition: "color 0.3s ease",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
            className="font-sans group"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.4)")}
          >
            <ArrowLeft size={13} />
            Portfolio
          </Link>

          {/* Centre */}
          <div
            style={{
              position: "absolute", left: "50%", transform: "translateX(-50%)",
              display: "flex", alignItems: "center", gap: "12px",
            }}
          >
            <div style={{ width: "1px", height: "12px", background: "rgba(201,168,76,0.3)" }} />
            <span
              className="font-serif"
              style={{ fontSize: "13px", letterSpacing: "0.25em", color: "rgba(245,240,232,0.6)", fontStyle: "italic" }}
            >
              About
            </span>
            <div style={{ width: "1px", height: "12px", background: "rgba(201,168,76,0.3)" }} />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "28px" }}>
            {sections.map((s) => (
              <button
                key={s.href}
                onClick={() => go(s.href)}
                className="font-sans gold-line-hover"
                style={{
                  fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase",
                  color: "rgba(245,240,232,0.35)",
                  background: "none", border: "none", cursor: "pointer",
                  transition: "color 0.3s ease", padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.35)")}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(245,240,232,0.5)" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 40,
            background: "#050505",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
            }}
          />
          <nav style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
            {sections.map((s) => (
              <button
                key={s.href}
                onClick={() => go(s.href)}
                className="font-serif"
                style={{
                  fontSize: "clamp(1.8rem,5vw,2.5rem)", fontStyle: "italic",
                  color: "rgba(245,240,232,0.7)",
                  background: "none", border: "none", cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.7)")}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <Link
            href="/"
            style={{
              position: "absolute", bottom: "40px",
              display: "flex", alignItems: "center", gap: "8px",
              fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "rgba(107,107,107,1)", textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            className="font-sans"
          >
            <ArrowLeft size={12} /> Back to Portfolio
          </Link>
        </div>
      )}
    </>
  );
}
