"use client";

import { useState } from "react";

export default function YouTubeMockup2() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0",
        background: "#080808",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.6)",
              fontFamily: "sans-serif",
            }}
          >
            03 · More Videos
          </span>
          <div style={{ height: "1px", flex: 1, background: "rgba(201,168,76,0.15)" }} />
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(2.2rem,5vw,5rem)",
            lineHeight: 1,
            color: "#f5f0e8",
            fontWeight: 300,
            marginBottom: "64px",
            fontFamily: "serif",
          }}
        >
          Stand up{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            + Mimicry
          </span>
        </h2>

        {/* Desktop mockup */}
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(201,168,76,0.1)",
          }}
        >
          {/* Desktop frame */}
          <div
            style={{
              background: "#1a1a1a",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            {/* Browser header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
                padding: "8px 12px",
                background: "#2a2a2a",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#ff5f57",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#28c840",
                }}
              />
              <div
                style={{
                  flex: 1,
                  marginLeft: "16px",
                  padding: "6px 12px",
                  background: "#1a1a1a",
                  borderRadius: "4px",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "sans-serif",
                }}
              >
                youtube.com/watch?v=...
              </div>
            </div>

            {/* Video container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%", // 16:9 aspect ratio
                background: "#000",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {/* YouTube iframe */}
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/gjehw9uEAzE?rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
