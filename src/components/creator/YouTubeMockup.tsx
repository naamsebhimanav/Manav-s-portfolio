"use client";

import { useState, useEffect, useRef } from "react";

export default function YouTubeMockup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const iframe = entry.target as HTMLIFrameElement;
        if (!entry.isIntersecting && iframe.contentWindow) {
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*');
        }
      });
    }, { threshold: 0.1 });

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-sans text-[10px] text-gold/60 tracking-widest uppercase">
            02 · Featured Video
          </span>
          <div className="h-px flex-1 bg-gold/15" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-display-lg text-ivory mb-16">
          Watch my{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            short film
          </span>
        </h2>

        {/* Desktop mockup */}
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-gold/10">
          {/* Desktop frame */}
          <div className="bg-[#1a1a1a] rounded-xl p-3">
            {/* Browser header */}
            <div className="flex items-center gap-2 mb-3 p-2 bg-[#2a2a2a] rounded-lg">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="flex-1 ml-4 px-3 py-1 bg-[#1a1a1a] rounded text-xs text-white/40 font-sans">
                youtube.com/watch?v=...
              </div>
            </div>

            {/* Video container */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              {/* YouTube iframe */}
              <iframe
                ref={iframeRef}
                className="absolute inset-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/wbEJgkgbg7U?rel=0&enablejsapi=1"
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
