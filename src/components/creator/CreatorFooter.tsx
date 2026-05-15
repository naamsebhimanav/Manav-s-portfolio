"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Reels",     href: "#reels" },
  { label: "Style",     href: "#style" },
  { label: "Strategy",  href: "#strategy" },
  { label: "Collaborate", href: "#cta" },
];

export default function CreatorFooter() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        position: "relative",
        background: "#080808",
        paddingTop: "56px",
        paddingBottom: "32px",
        overflow: "hidden",
      }}
    >
      {/* Top gold line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "320px",
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)",
        }}
      />

      {/* Spotlight */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "200px",
          background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centre quote */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            className="font-serif"
            style={{ fontSize: "clamp(1.3rem,2.5vw,2rem)", fontStyle: "italic", color: "rgba(255,255,255,0.12)", marginBottom: "16px" }}
          >
            &ldquo;Content that moves people, not just numbers.&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25))" }} />
            <div style={{ width: "6px", height: "6px", background: "rgba(201,168,76,0.3)", transform: "rotate(45deg)" }} />
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to left, transparent, rgba(201,168,76,0.25))" }} />
          </div>
        </div>

        {/* Links row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            <ArrowLeft size={13} />
            <span className="font-sans">Back to Portfolio</span>
          </Link>

          <nav style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "24px" }}>
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="font-sans gold-line-hover"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("#cta")}
            className="font-sans"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a84c",
              border: "1px solid rgba(201,168,76,0.3)",
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
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
            }}
          >
            Collaborate
            <ArrowUpRight size={11} />
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)", marginBottom: "28px" }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Manav Arora · Content Creator
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(201,168,76,0.25)" }} />
            <p className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
              50K+ Followers · 2.1M Impressions
            </p>
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(201,168,76,0.25)" }} />
          </div>
          <p className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)" }}>
            Self-Help · Artistic · Storytelling
          </p>
        </div>
      </div>
    </footer>
  );
}
