"use client";

import { ArrowDown } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      {/* ── Spotlight from above ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "100%",
          background:
            "radial-gradient(ellipse 45% 85% at 50% 0%, rgba(201,168,76,0.16) 0%, rgba(201,168,76,0.04) 50%, transparent 78%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Warm floor glow ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background:
            "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Deep vignette ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 25%, rgba(5,5,5,0.92) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Film grain ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
          opacity: 0.22,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* ── Curtain side shadows ── */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "120px", height: "100%",
          background: "linear-gradient(90deg, rgba(5,5,5,0.9) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: "120px", height: "100%",
          background: "linear-gradient(270deg, rgba(5,5,5,0.9) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Corner brackets ── */}
      {[
        { top: "96px", left: "40px", borderLeft: "2px solid rgba(201,168,76,0.2)", borderTop: "2px solid rgba(201,168,76,0.2)" },
        { top: "96px", right: "40px", borderRight: "2px solid rgba(201,168,76,0.2)", borderTop: "2px solid rgba(201,168,76,0.2)" },
        { bottom: "64px", left: "40px", borderLeft: "2px solid rgba(201,168,76,0.2)", borderBottom: "2px solid rgba(201,168,76,0.2)" },
        { bottom: "64px", right: "40px", borderRight: "2px solid rgba(201,168,76,0.2)", borderBottom: "2px solid rgba(201,168,76,0.2)" },
      ].map((s, i) => (
        <div key={i} style={{ position: "absolute", width: "28px", height: "28px", ...s }} />
      ))}

      {/* ── Watermark name ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        <span
          className="font-serif"
          style={{
            fontSize: "clamp(5rem,18vw,18rem)",
            fontWeight: 700,
            color: "rgba(245,240,232,0.018)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          MANAV
        </span>
      </div>

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "820px",
          margin: "0 auto",
          paddingTop: "96px",
        }}
      >
        {/* Pre-title */}
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "16px", marginBottom: "40px",
          }}
        >
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
          <span
            className="font-sans"
            style={{ fontSize: "9px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}
          >
            A Personal Story
          </span>
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(to left, transparent, rgba(201,168,76,0.5))" }} />
        </div>

        {/* Opening line — like a stage direction */}
        <p
          className="font-serif"
          style={{
            fontSize: "clamp(0.75rem,1.2vw,0.9rem)",
            fontStyle: "italic",
            color: "rgba(201,168,76,0.45)",
            letterSpacing: "0.2em",
            marginBottom: "28px",
            textTransform: "uppercase",
          }}
        >
          [ Lights rise slowly. A single figure. Centre stage. ]
        </p>

        {/* Headline */}
        <h1
          className="font-serif"
          style={{
            fontWeight: 300,
            fontSize: "clamp(2.8rem,7vw,7rem)",
            lineHeight: "0.92",
            letterSpacing: "-0.02em",
            color: "#f5f0e8",
            marginBottom: "32px",
          }}
        >
          I am not
          <br />
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            what I perform.
          </span>
          <br />
          <span style={{ color: "rgba(245,240,232,0.5)", fontSize: "0.7em" }}>
            I am everything I have felt.
          </span>
        </h1>

        {/* Opening monologue line */}
        <p
          className="font-serif"
          style={{
            fontSize: "clamp(1rem,1.8vw,1.25rem)",
            fontStyle: "italic",
            color: "rgba(245,240,232,0.45)",
            maxWidth: "560px",
            margin: "0 auto 56px",
            lineHeight: 1.8,
          }}
        >
          &ldquo;This is not a biography. It&apos;s a confession.
          The kind you only make when the house lights are down
          and you&apos;re not sure anyone is listening.&rdquo;
        </p>

        {/* Scroll CTA */}
        <button
          onClick={() => document.querySelector("#journey")?.scrollIntoView({ behavior: "smooth" })}
          className="font-sans"
          style={{
            background: "none",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "rgba(201,168,76,0.7)",
            fontSize: "10px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            padding: "14px 32px",
            cursor: "pointer",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#c9a84c";
            e.currentTarget.style.color = "#c9a84c";
            e.currentTarget.style.background = "rgba(201,168,76,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
            e.currentTarget.style.color = "rgba(201,168,76,0.7)";
            e.currentTarget.style.background = "none";
          }}
        >
          Read the story
        </button>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: "absolute", bottom: "40px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "1px", height: "40px",
            background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)",
            position: "relative", overflow: "hidden",
          }}
        >
          <div
            className="animate-scroll-line"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", background: "#c9a84c" }}
          />
        </div>
        <ArrowDown size={11} style={{ color: "rgba(201,168,76,0.35)" }} />
      </div>
    </section>
  );
}
