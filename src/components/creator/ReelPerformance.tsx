"use client";

import { Eye, Heart, MessageCircle, Share2 } from "lucide-react";

const reels = [
  {
    title: "The Mask We Wear",
    category: "Self-help",
    views: "1.2M",
    viewsNum: 1200000,
    likes: "89K",
    comments: "4.2K",
    shares: "12K",
    img: "photo-1507003211169-0a1dd7228f2d",
  },
  {
    title: "Art is Therapy",
    category: "Artistic",
    views: "847K",
    viewsNum: 847000,
    likes: "62K",
    comments: "3.1K",
    shares: "8.9K",
    img: "photo-1579783902614-a3fb3927b6a5",
  },
  {
    title: "Stage Fright is a Lie",
    category: "Performance",
    views: "634K",
    viewsNum: 634000,
    likes: "48K",
    comments: "2.8K",
    shares: "7.2K",
    img: "photo-1547036967-23d11aacaee0",
  },
  {
    title: "Why I Paint Every Day",
    category: "Artistic",
    views: "412K",
    viewsNum: 412000,
    likes: "31K",
    comments: "1.9K",
    shares: "5.1K",
    img: "photo-1541961017774-22349e4a1262",
  },
  {
    title: "The Story Behind Bahurupiya",
    category: "Storytelling",
    views: "389K",
    viewsNum: 389000,
    likes: "28K",
    comments: "1.7K",
    shares: "4.8K",
    img: "photo-1516450360452-9312f5e86fc7",
  },
  {
    title: "Identity is a Performance",
    category: "Self-help",
    views: "298K",
    viewsNum: 298000,
    likes: "22K",
    comments: "1.4K",
    shares: "3.9K",
    img: "photo-1518611012118-696072aa579a",
  },
];

const totalStats = [
  { label: "Total Views",    value: "3.78M" },
  { label: "Total Likes",    value: "280K" },
  { label: "Avg Engagement", value: "9.2%" },
  { label: "Viral Reels",    value: "3" },
];

const categoryColors: Record<string, string> = {
  "Self-help":    "#c9a84c",
  "Artistic":     "#e8c97a",
  "Performance":  "#a78bfa",
  "Storytelling": "#60a5fa",
};

export default function ReelPerformance() {
  return (
    <section
      id="reels"
      style={{ background: "#080808", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>
            02 · Reel Performance
          </span>
          <div style={{ height: "1px", flex: 1, background: "rgba(201,168,76,0.15)" }} />
        </div>

        {/* Headline */}
        <h2
          className="font-serif"
          style={{ fontSize: "clamp(2.2rem,5vw,5rem)", lineHeight: 1, color: "#f5f0e8", fontWeight: 300, marginBottom: "64px" }}
        >
          Viral moments,{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            by the numbers
          </span>
        </h2>

        {/* Reels grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {reels.map((reel) => {
            const isViral = reel.viewsNum >= 500000;
            const catColor = categoryColors[reel.category] || "#c9a84c";
            return (
              <div
                key={reel.title}
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  aspectRatio: "9/16",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {/* Background image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(https://images.unsplash.com/photo-${reel.img}?w=600&q=80)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Dark overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%)",
                  }}
                />

                {/* Viral badge */}
                {isViral && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                      color: "#080808",
                      fontSize: "8px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}
                    className="font-sans"
                  >
                    🔥 Viral
                  </div>
                )}

                {/* Category badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(0,0,0,0.6)",
                    border: `1px solid ${catColor}40`,
                    color: catColor,
                    fontSize: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    backdropFilter: "blur(4px)",
                  }}
                  className="font-sans"
                >
                  {reel.category}
                </div>

                {/* Bottom content */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
                  <p
                    className="font-serif"
                    style={{ fontSize: "14px", color: "#ffffff", fontWeight: 500, marginBottom: "12px", lineHeight: 1.3 }}
                  >
                    {reel.title}
                  </p>

                  {/* Stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Eye size={10} style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
                      <span className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{reel.views}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Heart size={10} style={{ color: "#f87171", flexShrink: 0 }} />
                      <span className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{reel.likes}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <MessageCircle size={10} style={{ color: "#60a5fa", flexShrink: 0 }} />
                      <span className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{reel.comments}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Share2 size={10} style={{ color: "#4ade80", flexShrink: 0 }} />
                      <span className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{reel.shares}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total stats summary bar */}
        <div
          style={{
            background: "#111111",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "12px",
            padding: "32px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "24px",
          }}
        >
          {totalStats.map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", display: "flex", alignItems: "center", gap: "32px" }}>
              <div>
                <p
                  className="font-serif"
                  style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", color: "#c9a84c", fontWeight: 300, lineHeight: 1, marginBottom: "6px" }}
                >
                  {s.value}
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}
                >
                  {s.label}
                </p>
              </div>
              {i < totalStats.length - 1 && (
                <div style={{ width: "1px", height: "40px", background: "rgba(201,168,76,0.15)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
