"use client";

import { useState } from "react";
import { ExternalLink, Play, X } from "lucide-react";

type Category = "All" | "Theatre" | "Art" | "Design";

type Project = {
  id: number; title: string; subtitle: string; category: Category; year: string;
  tags: string[]; desc: string; img: string; video: string | null; link: string; large: boolean; hoverVideo?: string; youtubeHover?: string; fit?: boolean; maxDuration?: number;
};

const projects: Project[] = [
  {
    id: 1, title: "Dilli ka dil jeet Gaye", subtitle: "India International centre, New Delhi",
    category: "Theatre", year: "2025",
    tags: [],
    desc: "some heartful words from Shri Aushim Khetarpal ji after we Anvaratt family performed the play \"Usne Kaha tha\" and won 2nd in it.",
    img: "https://img.youtube.com/vi/avygxi2PU6c/maxresdefault.jpg",
    youtubeHover: "avygxi2PU6c",
    video: null,
    link: "",
    large: true,
  },
  {
    id: 2, title: "Lata Mangeshkar ji", subtitle: "graphite pencils",
    category: "Art" as const, year: "2025",
    tags: ["Graphite pencils", "A2"],
    desc: "A 16*23 inches pencil work made in 40 hours",
    img: "/theatre/lata ji.jpg",
    video: null, link: "https://unsplash.com", large: false,
    fit: true,
  },
  {
    id: 3, title: "Sutradhar ( A national level theatre competition)", subtitle: " A play poster",
    category: "Design" as const, year: "2025",
    tags: ["Branding", "designing", "typography"],
    desc: "Visual identity for a play in cultural theatre festival of India named SUTRADHAR",
    img: "/theatre/samadhi.jpg",
    video: null, link: "https://unsplash.com", large: false,
    fit: true,
  },
  {
    id: 4, title: "Curtain Call", subtitle: "Anvaratt Theatre",
    category: "Theatre" as const, year: "2025",
    tags: ["Acting", "Moral", "thoughtful"],
    desc: " The ending of a thoughtful play named  ['gaay ' (hindi) ] ",
    img: "/theatre/gaay 1.png",
    hoverVideo: "/theatre/gaay v 1.MOV",
    video: null,
    link: "https://youtube.com", large: false,
    maxDuration: 12,
  },
  {
    id: 5, title: "Customized painting", subtitle: "Oil on Canvas",
    category: "Art" as const, year: "2025",
    tags: ["Oil Painting", "Series", "Portrait"],
    desc: "gift your loved ones a customized painting of their own from us",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    hoverVideo: "/content/oil.mp4.mp4",
    video: null, link: "https://unsplash.com", large: false,
  },
  {
    id: 6, title: "Landing page for an app (UI)", subtitle: "UI/UX",
    category: "Design" as const, year: "2025",
    tags: ["User Interface", "User Experience"],
    desc: "",
    img: "/design/Scene.jpg",
    video: null, link: "https://unsplash.com", large: false,
  },
];

const cats: Category[] = ["All", "Theatre", "Art", "Design"];

export default function Work() {
  const [active, setActive]     = useState<Category>("All");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative py-28 lg:py-36 bg-stage overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans text-[10px] text-gold/60 tracking-widest">02</span>
              <div className="h-px w-10 bg-gold/30" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/40">Featured Work</span>
            </div>
            <h2 className="font-serif text-display-lg text-ivory">Theatre, Art &amp; Design</h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`font-sans text-[10px] tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-300 ${
                  active === c
                    ? "border-gold/70 text-gold bg-gold/8"
                    : "border-white/10 text-smoke hover:border-gold/30 hover:text-ivory/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <div
              key={p.id}
              className={`group relative overflow-hidden border border-white/5 hover:border-gold/25 transition-all duration-500 ${
                p.large ? "md:col-span-2 aspect-video" : "aspect-[4/3]"
              }`}
              onMouseEnter={(e) => {
                setHoveredId(p.id);
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  // Browsers block unmuted autoplay if no user interaction has occurred.
                  // Try to play unmuted first, if it fails, fallback to muted.
                  video.play().catch((err) => {
                    console.warn("Audio playback blocked by browser, falling back to muted:", err);
                    video.muted = true;
                    video.play().catch(() => {});
                  });
                }
                const iframe = e.currentTarget.querySelector("iframe");
                if (iframe && iframe.contentWindow) {
                  iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'unMute', args: [] }), '*');
                }
              }}
              onMouseLeave={(e) => {
                setHoveredId(null);
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                  // Reset muted state for next hover in case they interact later
                  video.muted = false;
                }
                const iframe = e.currentTarget.querySelector("iframe");
                if (iframe && iframe.contentWindow) {
                  iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'mute', args: [] }), '*');
                }
              }}
            >
              {/* Background image / video */}
              {p.youtubeHover ? (
                <>
                  <div
                    className={`absolute inset-0 bg-center transition-all duration-700 group-hover:scale-105 group-hover:opacity-0 ${p.fit ? 'bg-contain bg-no-repeat' : 'bg-cover'}`}
                    style={{ backgroundImage: `url('${p.img}')` }}
                  />
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <iframe
                      src={`https://www.youtube.com/embed/${p.youtubeHover}?enablejsapi=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${p.youtubeHover}&playsinline=1`}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      className="w-full h-full scale-[1.5] origin-center"
                      style={{ border: 'none' }}
                    />
                  </div>
                </>
              ) : p.hoverVideo ? (
                <video
                  src={p.hoverVideo}
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  onTimeUpdate={(e) => {
                    if (p.maxDuration && e.currentTarget.currentTime >= p.maxDuration) {
                      e.currentTarget.currentTime = 0;
                    }
                  }}
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-center transition-transform duration-700 group-hover:scale-105 ${p.fit ? 'bg-contain bg-no-repeat' : 'bg-cover'}`}
                  style={{ backgroundImage: `url('${p.img}')` }}
                />
              )}
              {/* Dark overlay */}
              <div className={`absolute inset-0 transition-colors duration-500 ${(p.hoverVideo || p.youtubeHover) ? "bg-void/65 group-hover:bg-transparent" : "bg-void/65 group-hover:bg-void/45"}`} />
              {/* Gold spotlight on hover */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)" }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/80 border border-gold/30 px-2 py-1 bg-void/50 backdrop-blur-sm">
                    {p.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.video && (
                      <button
                        onClick={() => setVideoUrl(p.video)}
                        className="flex items-center gap-1.5 font-sans text-[9px] tracking-widest uppercase text-gold/70 border border-gold/25 px-2 py-1 bg-void/50 backdrop-blur-sm hover:border-gold/60 hover:text-gold transition-all duration-300"
                      >
                        <Play size={10} /> Watch
                      </button>
                    )}
                    <span className="font-sans text-[10px] text-ivory/40">{p.year}</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl md:text-2xl text-ivory leading-tight drop-shadow-lg">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs text-ivory/50">{p.subtitle}</p>
                  <p className="font-sans text-xs text-ivory/40 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map((t) => (
                      <span key={t} className="font-sans text-[9px] tracking-wider uppercase text-smoke/70">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* External link */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-5 right-5 w-8 h-8 border border-gold/30 bg-void/50 backdrop-blur-sm flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold/20 z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={12} />
                </a>
              )}

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 font-sans text-xs tracking-[0.3em] uppercase text-ivory/30 hover:text-gold transition-colors duration-300"
          >
            <span className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
            View Full Portfolio
            <span className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* Video modal */}
      {videoUrl && (
        <div
          className="fixed inset-0 z-50 bg-void/95 flex items-center justify-center p-6"
          onClick={() => setVideoUrl(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`${videoUrl}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              title="Project video"
            />
            <button
              onClick={() => setVideoUrl(null)}
              className="absolute -top-10 right-0 text-ivory/60 hover:text-gold transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
