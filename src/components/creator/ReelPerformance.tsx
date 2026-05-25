"use client";

import { useEffect, useRef } from "react";

const mockupContent = [
  {
    type: "educational",
    headline: "The 30° Rule",
    description: "Why camera angles between 15–25° improve engagement retention.",
    visual: "Minimal diagram with angle indicator",
    video: "/content/gow gow.mp4",
    section: "entertainment"
  },
  {
    type: "visual",
    headline: "Color Psychology",
    description: "How warm tones drive 23% higher conversion rates.",
    visual: "Color palette breakdown",
    video: "/content/azaad.mp4",
    section: "entertainment"
  },
  {
    type: "storytelling",
    headline: "The Hook Formula",
    description: "3-second attention windows and how to capture them.",
    visual: "Timeline visualization",
    video: "/content/friends.mp4",
    section: "entertainment"
  },
  {
    type: "analytical",
    headline: "Engagement Loops",
    description: "Understanding viewer behavior patterns in short-form content.",
    visual: "Flow diagram",
    video: "/content/potty.mp4",
    section: "entertainment"
  },
  {
    type: "passionate",
    headline: "Creative Freedom",
    description: "Breaking boundaries through authentic expression.",
    visual: "Artistic composition",
    video: "/content/cpramji.mp4",
    section: "passionate"
  },
  {
    type: "passionate",
    headline: "Artistic Journey",
    description: "The path from inspiration to creation.",
    visual: "Process visualization",
    video: "/content/oil.mp4.mp4",
    section: "passionate"
  },
  {
    type: "passionate",
    headline: "Emotional Depth",
    description: "Connecting through shared human experiences.",
    visual: "Portrait study",
    video: "/content/VID_20260303_033415_592_bsl.mp4",
    section: "passionate"
  },
  {
    type: "passionate",
    headline: "Creative Flow",
    description: "Finding rhythm in the artistic process.",
    visual: "Motion study",
    video: "/content/VID_20260324_013059_319_bsl.mp4",
    section: "passionate"
  }
];

export default function ReelPerformance() {
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null)
  ];

  useEffect(() => {
    // First 3 videos: 10-second loop from start with smooth fade
    [0, 1, 2].forEach((index) => {
      const video = videoRefs[index].current;
      if (!video) return;

      const handleTimeUpdate = () => {
        if (video.currentTime >= 9.5) {
          video.style.transition = 'opacity 0.3s ease';
          video.style.opacity = '0';
        }
        if (video.currentTime >= 10) {
          video.currentTime = 0;
          video.style.opacity = '1';
          setTimeout(() => {
            video.style.transition = 'none';
          }, 300);
          video.play();
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    });

    // Fourth video: last 8 seconds loop with smooth fade
    const video4 = videoRefs[3].current;
    if (video4) {
      const handleLoadedMetadata = () => {
        const duration = video4.duration;
        const startTime = duration - 8;
        video4.currentTime = startTime;
      };

      const handleTimeUpdate = () => {
        const duration = video4.duration;
        const startTime = duration - 8;
        if (video4.currentTime >= duration - 0.5) {
          video4.style.transition = 'opacity 0.3s ease';
          video4.style.opacity = '0';
        }
        if (video4.currentTime >= duration) {
          video4.currentTime = startTime;
          video4.style.opacity = '1';
          setTimeout(() => {
            video4.style.transition = 'none';
          }, 300);
          video4.play();
        }
      };

      video4.addEventListener('loadedmetadata', handleLoadedMetadata);
      video4.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        video4.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video4.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }

    // Videos 5-8: 10-second loop from start with smooth fade
    [4, 5, 6, 7].forEach((index) => {
      const video = videoRefs[index].current;
      if (!video) return;

      const handleTimeUpdate = () => {
        if (video.currentTime >= 9.5) {
          video.style.transition = 'opacity 0.3s ease';
          video.style.opacity = '0';
        }
        if (video.currentTime >= 10) {
          video.currentTime = 0;
          video.style.opacity = '1';
          setTimeout(() => {
            video.style.transition = 'none';
          }, 300);
          video.play();
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    });
  }, []);

  return (
    <section
      id="reels"
      style={{ background: "#0B0B0B", padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 50%)",
          pointerEvents: "none"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ position: "relative", zIndex: 10 }}>
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            className="font-sans"
            style={{
              fontSize: "9px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.5)",
            }}
          >
            Entertainment reels
          </span>
        </div>

        {/* Main heading */}
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(2rem,4vw,3.5rem)",
            lineHeight: 1.1,
            color: "#f5f0e8",
            fontWeight: 300,
            marginBottom: "80px",
            textAlign: "center",
          }}
        >
          Content, designed to
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
            entertain and engage
          </span>
        </h2>

        {/* iPhone mockup showcase - Entertainment reels */}
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", marginBottom: "80px" }}>
          {mockupContent.slice(0, 4).map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              {/* iPhone frame */}
              <div
                style={{
                  width: "200px",
                  height: "400px",
                  background: "#1a1a1a",
                  borderRadius: "40px",
                  padding: "12px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(201,168,76,0.1)",
                  position: "relative",
                }}
              >
                {/* Screen */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#0d0d0d",
                    borderRadius: "32px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Notch */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "80px",
                      height: "24px",
                      background: "#1a1a1a",
                      borderRadius: "12px",
                      zIndex: 10,
                    }}
                  />

                  {/* Content preview */}
                  <div
                    style={{
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <video
                      ref={videoRefs[index]}
                      autoPlay
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={item.video}
                    />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div
                style={{
                  position: "absolute",
                  inset: -20,
                  background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
                  borderRadius: "60px",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />
            </div>
          ))}
        </div>

        {/* Section label - Passionate reels */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            className="font-sans"
            style={{
              fontSize: "9px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.5)",
            }}
          >
            Passionate reels
          </span>
        </div>

        {/* iPhone mockup showcase - Passionate reels */}
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
          {mockupContent.slice(4, 8).map((item, index) => (
            <div
              key={index + 4}
              style={{
                position: "relative",
                transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              {/* iPhone frame */}
              <div
                style={{
                  width: "200px",
                  height: "400px",
                  background: "#1a1a1a",
                  borderRadius: "40px",
                  padding: "12px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(201,168,76,0.1)",
                  position: "relative",
                }}
              >
                {/* Screen */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#0d0d0d",
                    borderRadius: "32px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Notch */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "80px",
                      height: "24px",
                      background: "#1a1a1a",
                      borderRadius: "12px",
                      zIndex: 10,
                    }}
                  />

                  {/* Content preview */}
                  <div
                    style={{
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <video
                      ref={videoRefs[index + 4]}
                      autoPlay
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={item.video}
                    />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div
                style={{
                  position: "absolute",
                  inset: -20,
                  background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
                  borderRadius: "60px",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <p
            className="font-sans"
            style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.4)",
            }}
          >
            Strategic content design · Visual storytelling · Data-driven insights
          </p>
        </div>
      </div>
    </section>
  );
}
