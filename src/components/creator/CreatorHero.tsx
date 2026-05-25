"use client";

import { ArrowDown } from "lucide-react";

export default function CreatorHero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/content/content thumb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />
      {/* Dark overlay for contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.5) 50%, rgba(8,8,8,0.7) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Central spotlight */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "100%",
          background:
            "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.05) 50%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 20%, rgba(8,8,8,0.92) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "8%",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          right: "11%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.1)",
          pointerEvents: "none",
        }}
      />

      {/* Floating lines */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "5%",
          width: "60px",
          height: "1px",
          background: "rgba(201,168,76,0.2)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "5%",
          width: "30px",
          height: "1px",
          background: "rgba(201,168,76,0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          right: "5%",
          width: "60px",
          height: "1px",
          background: "rgba(201,168,76,0.2)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "63%",
          right: "5%",
          width: "30px",
          height: "1px",
          background: "rgba(201,168,76,0.12)",
          pointerEvents: "none",
        }}
      />

      {/* Corner brackets */}
      <div style={{ position: "absolute", top: "96px", left: "40px", width: "28px", height: "28px", borderLeft: "2px solid rgba(201,168,76,0.2)", borderTop: "2px solid rgba(201,168,76,0.2)" }} />
      <div style={{ position: "absolute", top: "96px", right: "40px", width: "28px", height: "28px", borderRight: "2px solid rgba(201,168,76,0.2)", borderTop: "2px solid rgba(201,168,76,0.2)" }} />
      <div style={{ position: "absolute", bottom: "64px", left: "40px", width: "28px", height: "28px", borderLeft: "2px solid rgba(201,168,76,0.2)", borderBottom: "2px solid rgba(201,168,76,0.2)" }} />
      <div style={{ position: "absolute", bottom: "64px", right: "40px", width: "28px", height: "28px", borderRight: "2px solid rgba(201,168,76,0.2)", borderBottom: "2px solid rgba(201,168,76,0.2)" }} />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
          margin: "0 auto",
          paddingTop: "96px",
        }}
      >
        {/* Pre-title */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
          <span
            className="font-sans"
            style={{ fontSize: "9px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}
          >
            Content Creator · Naamsebhimanav
          </span>
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(to left, transparent, rgba(201,168,76,0.5))" }} />
        </div>

        {/* Headline */}
        <h1
          className="font-serif"
          style={{
            fontWeight: 300,
            fontSize: "clamp(3rem,7vw,7rem)",
            lineHeight: "0.95",
            letterSpacing: "-0.02em",
            color: "#f5f0e8",
            marginBottom: "24px",
          }}
        >
          Creating content that
          <br />
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            entertains people
          </span>
        </h1>


        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          <button
            onClick={() => go("#dashboard")}
            className="font-sans"
            style={{
              background: "#ffffff",
              color: "#080808",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "16px 32px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
          >
            Explore fun
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-sans"
            style={{
              background: "none",
              color: "#c9a84c",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "16px 32px",
              border: "1px solid rgba(201,168,76,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(201,168,76,0.1)";
              e.currentTarget.style.borderColor = "#c9a84c";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "none";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
            }}
          >
            Collaborate
          </button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="animate-scroll-line" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", background: "#c9a84c" }} />
        </div>
        <ArrowDown size={12} style={{ color: "rgba(201,168,76,0.4)" }} />
      </div>
    </section>
  );
}
