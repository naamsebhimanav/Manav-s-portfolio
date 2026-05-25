"use client";

import { Brain, Palette, BookOpen } from "lucide-react";

const pillars = [
  {
    Icon: Brain,
    title: "Self-Help",
    tagline: "Turning personal growth into public conversation",
    description:
      "Content that challenges the way people think about identity, fear, and potential. Rooted in lived experience, not theory.",
    topics: [
      "Overcoming stage fright",
      "The psychology of performance",
      "Why vulnerability is strength",
      "Reframing failure",
    ],
    stats: ["45% of content", "Highest saves rate", "2.3x avg reach"],
    accent: "#c9a84c",
  },
  {
    Icon: Palette,
    title: "Artistic",
    tagline: "The creative process, unfiltered",
    description:
      "Behind-the-scenes of paintings, performances, and design work. Showing the mess, the doubt, and the breakthrough.",
    topics: [
      "Painting time-lapses",
      "Costume & character design",
      "Sketchbook tours",
      "Creative block solutions",
    ],
    stats: ["35% of content", "Highest shares", "3.1x avg reach"],
    accent: "#e8c97a",
  },
  {
    Icon: BookOpen,
    title: "Storytelling",
    tagline: "Every post is a scene",
    description:
      "Narrative-driven content that treats each reel like a short film. Hook, tension, resolution — the three-act structure applied to 60 seconds.",
    topics: [
      "Performance stories",
      "Character studies",
      "Cultural narratives",
      "Personal essays in video",
    ],
    stats: ["20% of content", "Highest comments", "4.2x avg reach"],
    accent: "#ffffff",
  },
];

export default function ContentStyle() {
  return (
    <section
      id="style"
      style={{ background: "#050505", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>
            02 · Content Style
          </span>
          <div style={{ height: "1px", flex: 1, background: "rgba(201,168,76,0.15)" }} />
        </div>

        {/* Headline */}
        <h2
          className="font-serif"
          style={{ fontSize: "clamp(2.2rem,5vw,5rem)", lineHeight: 1, color: "#f5f0e8", fontWeight: 300, marginBottom: "64px" }}
        >
          Three pillars of{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            the feed
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#0f0f0f",
                border: `1px solid rgba(255,255,255,0.06)`,
                borderRadius: "12px",
                padding: "36px 28px",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${p.accent}30`;
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: `${p.accent}15`,
                  border: `1px solid ${p.accent}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <p.Icon size={22} style={{ color: p.accent }} />
              </div>

              {/* Title */}
              <h3
                className="font-serif"
                style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", color: "#ffffff", fontWeight: 400, marginBottom: "8px" }}
              >
                {p.title}
              </h3>

              {/* Tagline */}
              <p
                className="font-serif"
                style={{ fontSize: "13px", fontStyle: "italic", color: p.accent, marginBottom: "16px", lineHeight: 1.4 }}
              >
                {p.tagline}
              </p>

              {/* Description */}
              <p
                className="font-sans"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "24px" }}
              >
                {p.description}
              </p>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "20px" }} />

              {/* Sample topics */}
              <div style={{ marginBottom: "24px" }}>
                <p className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "12px" }}>
                  Sample Topics
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {p.topics.map((t) => (
                    <div key={t} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: p.accent, flexShrink: 0 }} />
                      <span className="font-sans" style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {p.stats.map((s) => (
                  <div
                    key={s}
                    style={{
                      background: `${p.accent}08`,
                      border: `1px solid ${p.accent}15`,
                      borderRadius: "6px",
                      padding: "6px 12px",
                    }}
                  >
                    <span className="font-sans" style={{ fontSize: "10px", color: p.accent, letterSpacing: "0.05em" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
