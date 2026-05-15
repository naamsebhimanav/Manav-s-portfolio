"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

const sections = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Reels",     href: "#reels" },
  { label: "Style",     href: "#style" },
  { label: "Strategy",  href: "#strategy" },
];

export default function CreatorNav() {
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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.5s ease",
          background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "1px solid transparent",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Back to portfolio */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            style={{ color: "rgba(245,240,232,0.5)", transition: "color 0.3s ease", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
          >
            <ArrowLeft
              size={14}
              style={{ transition: "transform 0.3s ease" }}
              className="group-hover:-translate-x-1"
            />
            <span
              className="font-sans"
              style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase" }}
            >
              Portfolio
            </span>
          </Link>

          {/* Centre title */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div style={{ width: "1px", height: "14px", background: "rgba(201,168,76,0.3)" }} />
            <span
              className="font-sans"
              style={{
                fontSize: "11px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                fontVariant: "small-caps",
                color: "rgba(245,240,232,0.7)",
              }}
            >
              Content Creator
            </span>
            <div style={{ width: "1px", height: "14px", background: "rgba(201,168,76,0.3)" }} />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <button
                key={s.href}
                onClick={() => go(s.href)}
                className="font-sans gold-line-hover"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.4)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.4)")}
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => go("#cta")}
              className="font-sans"
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.4)",
                padding: "8px 16px",
                background: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                e.currentTarget.style.borderColor = "#c9a84c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
              }}
            >
              Collaborate
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              color: "rgba(245,240,232,0.6)",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "#080808",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
            }}
          />
          <nav style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
            {sections.map((s) => (
              <button
                key={s.href}
                onClick={() => go(s.href)}
                className="font-serif"
                style={{
                  fontSize: "clamp(2rem,6vw,2.5rem)",
                  fontStyle: "italic",
                  color: "rgba(245,240,232,0.7)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.7)")}
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => go("#cta")}
              className="font-sans"
              style={{
                marginTop: "8px",
                fontSize: "12px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.4)",
                padding: "12px 32px",
                background: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Collaborate
            </button>
          </nav>
          <Link
            href="/"
            style={{
              position: "absolute",
              bottom: "40px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(107,107,107,1)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(107,107,107,1)")}
          >
            <ArrowLeft size={12} /> Back to Portfolio
          </Link>
        </div>
      )}
    </>
  );
}
