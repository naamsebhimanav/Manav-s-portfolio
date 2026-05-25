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
      className="relative bg-[#0B0B0B] py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <div className="text-center mb-6">
          <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold/50">
            Entertainment reels
          </span>
        </div>

        {/* Main heading */}
        <h2 className="font-serif text-display-lg text-ivory mb-20 text-center">
          Content, designed to
          <br />
          <span
            className="italic"
            style={{
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
        <div className="flex justify-center gap-8 lg:gap-10 flex-wrap mb-20">
          {mockupContent.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="relative transition-all duration-500 hover:-translate-y-3 hover:scale-105"
            >
              {/* iPhone frame */}
              <div className="w-[160px] h-[320px] lg:w-[200px] lg:h-[400px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl shadow-black/50 border border-gold/10 relative">
                {/* Screen */}
                <div className="w-full h-full bg-[#0d0d0d] rounded-[32px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-[#1a1a1a] rounded-[12px] z-10" />

                  {/* Content preview */}
                  <div className="h-full relative overflow-hidden">
                    <video
                      ref={videoRefs[index]}
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src={item.video}
                    />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-[-20px] bg-gradient-to-br from-gold/10 to-transparent rounded-[60px] opacity-0 transition-opacity duration-400 pointer-events-none group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Section label - Passionate reels */}
        <div className="text-center mb-6">
          <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold/50">
            Passionate reels
          </span>
        </div>

        {/* iPhone mockup showcase - Passionate reels */}
        <div className="flex justify-center gap-8 lg:gap-10 flex-wrap">
          {mockupContent.slice(4, 8).map((item, index) => (
            <div
              key={index + 4}
              className="relative transition-all duration-500 hover:-translate-y-3 hover:scale-105"
            >
              {/* iPhone frame */}
              <div className="w-[160px] h-[320px] lg:w-[200px] lg:h-[400px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl shadow-black/50 border border-gold/10 relative">
                {/* Screen */}
                <div className="w-full h-full bg-[#0d0d0d] rounded-[32px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-[#1a1a1a] rounded-[12px] z-10" />

                  {/* Content preview */}
                  <div className="h-full relative overflow-hidden">
                    <video
                      ref={videoRefs[index + 4]}
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src={item.video}
                    />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-[-20px] bg-gradient-to-br from-gold/10 to-transparent rounded-[60px] opacity-0 transition-opacity duration-400 pointer-events-none group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-20">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/40">
            Strategic content design · Visual storytelling · Data-driven insights
          </p>
        </div>
      </div>
    </section>
  );
}
