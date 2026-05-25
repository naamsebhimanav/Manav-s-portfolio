"use client";

import { useEffect, useRef, useState } from "react";

const mockupContent = [
  {
    type: "educational",
    headline: "The 30° Rule",
    description: "Why camera angles between 15–25° improve engagement retention.",
    visual: "Minimal diagram with angle indicator",
    video: "/content/gow_gow.mp4",
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
    video: "/content/oil.mp4",
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
  const [videoErrors, setVideoErrors] = useState<Set<number>>(new Set());

  const handleVideoError = (index: number) => {
    setVideoErrors(prev => new Set(prev).add(index));
  };

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const activeRefs = videoRefs.map(r => r.current);
    
    activeRefs.forEach((video, index) => {
      if (!video) return;
      const isVideo4 = index === 3;
      let rafId: number;
      
      const checkLoop = () => {
        const duration = video.duration;
        if (duration && !isNaN(duration)) {
          const maxDur = isVideo4 ? duration : Math.min(10, duration);
          const start = isVideo4 ? Math.max(0, duration - 8) : 0;
          const fadeStart = Math.max(start, maxDur - 0.5);
          
          if (video.currentTime >= maxDur) {
            video.currentTime = start;
            video.style.opacity = "1";
            video.play().catch(() => {});
          } else if (video.currentTime >= fadeStart) {
            const ratio = (video.currentTime - fadeStart) / (maxDur - fadeStart);
            video.style.opacity = Math.max(0, 1 - ratio).toString();
          } else {
            video.style.opacity = "1";
          }
        }
        rafId = requestAnimationFrame(checkLoop);
      };
      
      // Initialize start time for video 4 once metadata is ready
      if (isVideo4) {
        const initVideo4 = () => {
          const duration = video.duration;
          if (duration && !isNaN(duration)) {
            video.currentTime = Math.max(0, duration - 8);
          }
        };
        if (video.readyState >= 1) {
          initVideo4();
        } else {
          video.addEventListener('loadedmetadata', initVideo4);
          cleanups.push(() => video.removeEventListener('loadedmetadata', initVideo4));
        }
      }
      // Initialize start time for the first video (index 0) to 3 seconds
      if (index === 0) {
        const initFirst = () => {
          const duration = video.duration;
          if (duration && !isNaN(duration)) {
            video.currentTime = Math.min(3, duration);
          }
        };
        if (video.readyState >= 1) {
          initFirst();
        } else {
          video.addEventListener('loadedmetadata', initFirst);
          cleanups.push(() => video.removeEventListener('loadedmetadata', initFirst));
        }
      }

      rafId = requestAnimationFrame(checkLoop);
      cleanups.push(() => cancelAnimationFrame(rafId));
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  // Pause videos when they scroll out of view using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (!entry.isIntersecting) {
          video.pause();
          video.currentTime = 0;
          video.muted = true;
        }
      });
    }, { threshold: 0.1 });

    videoRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
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
        <div className="grid grid-cols-2 gap-3 justify-items-center max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center sm:gap-8 lg:gap-10 sm:flex-wrap mb-20">
          {mockupContent.slice(0, 4).map((item, index) => (
                        <div
              key={index}
              className="relative transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              onMouseLeave={() => {
                const vid = videoRefs[index].current;
                if (vid) {
                  vid.pause();
                  vid.currentTime = 0;
                  vid.muted = true;
                }
              }}
            >
              {/* iPhone frame */}
              <div className="w-[160px] h-[320px] lg:w-[200px] lg:h-[400px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl shadow-black/50 border border-gold/10 relative">
                {/* Screen */}
                <div className="w-full h-full bg-[#0d0d0d] rounded-[32px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-[#1a1a1a] rounded-[12px] z-10" />

                  {/* Content preview */}
                  <div className="h-full relative overflow-hidden">
                    {videoErrors.has(index) ? (
                      <div className="w-full h-full flex items-center justify-center bg-[#0d0d0d]">
                        <p className="text-gold/40 text-xs text-center px-4">Video unavailable</p>
                      </div>
                    ) : (
                        <video
                          ref={videoRefs[index]}
                          playsInline
                          muted
                          className="w-full h-full object-cover"
                          src={item.video}
                          onError={() => handleVideoError(index)}
                          onMouseEnter={() => {
                            const vid = videoRefs[index].current;
                            if (vid) {
                              vid.muted = false;
                              vid.play().catch(() => {});
                            }
                          }}
                          onMouseLeave={() => {
                            const vid = videoRefs[index].current;
                            if (vid) {
                              vid.pause();
                              vid.currentTime = 0;
                              vid.muted = true;
                            }
                          }}
                          onTouchStart={() => {
                            const vid = videoRefs[index].current;
                            if (vid) {
                              vid.muted = false;
                              vid.play().catch(() => {});
                            }
                          }}
                          onTouchEnd={() => {
                            const vid = videoRefs[index].current;
                            if (vid) {
                              vid.pause();
                              vid.currentTime = 0;
                              vid.muted = true;
                            }
                          }}
                        />
                    )}
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
        <div className="grid grid-cols-2 gap-3 justify-items-center max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center sm:gap-8 lg:gap-10 sm:flex-wrap">
          {mockupContent.slice(4, 8).map((item, index) => (
                        <div
              key={index + 4}
              className="relative transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              onMouseLeave={() => {
                const vid = videoRefs[index + 4].current;
                if (vid) {
                  vid.pause();
                  vid.currentTime = 0;
                  vid.muted = true;
                }
              }}
            >
              {/* iPhone frame */}
              <div className="w-[160px] h-[320px] lg:w-[200px] lg:h-[400px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl shadow-black/50 border border-gold/10 relative">
                {/* Screen */}
                <div className="w-full h-full bg-[#0d0d0d] rounded-[32px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-[#1a1a1a] rounded-[12px] z-10" />

                  {/* Content preview */}
                  <div className="h-full relative overflow-hidden">
                    {videoErrors.has(index + 4) ? (
                      <div className="w-full h-full flex items-center justify-center bg-[#0d0d0d]">
                        <p className="text-gold/40 text-xs text-center px-4">Video unavailable</p>
                      </div>
                    ) : (
                        <video
                          ref={videoRefs[index + 4]}
                          playsInline
                          muted
                          className="w-full h-full object-cover"
                          src={item.video}
                          onError={() => handleVideoError(index + 4)}
                          onMouseEnter={() => {
                            const vid = videoRefs[index + 4].current;
                            if (vid) {
                              vid.muted = false;
                              vid.play().catch(() => {});
                            }
                          }}
                          onMouseLeave={() => {
                            const vid = videoRefs[index + 4].current;
                            if (vid) {
                              vid.pause();
                              vid.currentTime = 0;
                              vid.muted = true;
                            }
                          }}
                          onTouchStart={() => {
                            const vid = videoRefs[index + 4].current;
                            if (vid) {
                              vid.muted = false;
                              vid.play().catch(() => {});
                            }
                          }}
                          onTouchEnd={() => {
                            const vid = videoRefs[index + 4].current;
                            if (vid) {
                              vid.pause();
                              vid.currentTime = 0;
                              vid.muted = true;
                            }
                          }}
                        />
                    )}
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
