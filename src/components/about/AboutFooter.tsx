"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const pages = [
  { label: "Theatre",  href: "/theatre" },
  { label: "Art",      href: "/art" },
  { label: "Design",   href: "/design" },
  { label: "Creator",  href: "/creator" },
];

const sections = [
  { label: "The Journey",    href: "#journey" },
  { label: "Philosophy",     href: "#philosophy" },
  { label: "What Drives Me", href: "#drives" },
  { label: "In My Words",    href: "#words" },
];

export default function AboutFooter() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        paddingTop: "64px",
        paddingBottom: "32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Spotlight */}
      <div
        style={{
          position: "absolute",
          top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: "400px", height: "200px",
          background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "48px",
            marginBottom: "56px",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "28px", height: "28px",
                  border: "1px solid rgba(201,168,76,0.4)",
                  transform: "rotate(45deg)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "6px", height: "6px",
                    background: "#c9a84c",
                    borderRadius: "50%",
                    transform: "rotate(-45deg)",
                  }}
                />
              </div>
              <span
                className="font-serif"
                style={{ fontSize: "15px", color: "rgba(245,240,232,0.75)", letterSpacing: "0.05em" }}
              >
                Manav Arora
              </span>
            </div>
            <p
              className="font-sans"
              style={{ fontSize: "12px", color: "rgba(107,107,107,1)", lineHeight: 1.7 }}
            >
              Performer, visual artist, and storyteller. Still in the middle of the scene.
            </p>
          </div>

          {/* Sections */}
          <div>
            <p
              className="font-sans"
              style={{
                fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase",
                color: "rgba(201,168,76,0.45)", marginBottom: "16px",
              }}
            >
              This Page
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {sections.map((s) => (
                <button
                  key={s.href}
                  onClick={() => go(s.href)}
                  className="font-sans gold-line-hover"
                  style={{
                    fontSize: "12px",
                    color: "rgba(245,240,232,0.35)",
                    background: "none", border: "none",
                    cursor: "pointer", textAlign: "left",
                    transition: "color 0.3s ease", padding: 0,
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.35)")}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio pages */}
          <div>
            <p
              className="font-sans"
              style={{
                fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase",
                color: "rgba(201,168,76,0.45)", marginBottom: "16px",
              }}
            >
              Portfolio
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="font-sans gold-line-hover"
                  style={{
                    fontSize: "12px",
                    color: "rgba(245,240,232,0.35)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    width: "fit-content",
                    display: "block",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.35)")}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p
              className="font-sans"
              style={{
                fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase",
                color: "rgba(201,168,76,0.45)", marginBottom: "4px",
              }}
            >
              Get in Touch
            </p>
            <Link
              href="/#contact"
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "#c9a84c",
                color: "#050505",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "12px 20px",
                textDecoration: "none",
                transition: "background 0.3s ease",
              }}
              className="font-sans"
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
            >
              Hire Me
              <ArrowUpRight size={12} />
            </Link>
            <a
              href="mailto:manav@manavarora.com"
              className="font-sans"
              style={{
                fontSize: "11px",
                color: "rgba(245,240,232,0.3)",
                textDecoration: "none",
                transition: "color 0.3s ease",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.3)")}
            >
              manav@manavarora.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(201,168,76,0.1), transparent)",
            marginBottom: "28px",
          }}
        />

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
          <Link
            href="/"
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "rgba(245,240,232,0.25)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            className="font-sans"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.25)")}
          >
            <ArrowLeft size={12} />
            Back to Portfolio
          </Link>

          <p
            className="font-serif"
            style={{
              fontSize: "12px",
              fontStyle: "italic",
              color: "rgba(245,240,232,0.2)",
            }}
          >
            &ldquo;The curtain hasn&apos;t fallen yet.&rdquo;
          </p>

          <p
            className="font-sans"
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.2)",
            }}
          >
            © {new Date().getFullYear()} Manav Arora
          </p>
        </div>
      </div>
    </footer>
  );
}
