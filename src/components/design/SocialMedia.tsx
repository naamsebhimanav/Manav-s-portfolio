"use client";

import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, X } from "lucide-react";

interface SocialPost {
  id: number;
  type: "square" | "story" | "carousel";
  brand: string;
  caption: string;
  likes: string;
  comments: string;
  category: string;
  img: string;
  accent: string;
  tags: string[];
}

const posts: SocialPost[] = [
  {
    id: 1, type: "square", brand: "@rangmanch.theatre",
    caption: "The stage is not a place. It's a state of mind. 🎭 #Theatre #Performance #Bahurupiya",
    likes: "2.4K", comments: "186", category: "Theatre Brand",
    img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=85",
    accent: "#c9a84c", tags: ["Brand Post", "Event Promo"],
  },
  {
    id: 2, type: "story", brand: "@rootsandroutes.fest",
    caption: "Tickets dropping tomorrow. Set your alarms. 🔥 #Festival #Culture #Chandigarh",
    likes: "5.1K", comments: "342", category: "Festival Promo",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85",
    accent: "#e63946", tags: ["Story", "Countdown"],
  },
  {
    id: 3, type: "square", brand: "@manavarora.art",
    caption: "New commission complete. Oil on canvas, 24×30. DM to commission yours. 🎨",
    likes: "3.8K", comments: "214", category: "Art Portfolio",
    img: "https://images.unsplash.com/photo-1579203902614-a3fb3927b6a5?w=600&q=85",
    accent: "#c9a84c", tags: ["Portfolio", "Commission"],
  },
  {
    id: 4, type: "square", brand: "@monsoon.collective",
    caption: "New single out now. Link in bio. 🌧️ #Music #Indie #Monsoon",
    likes: "1.9K", comments: "97", category: "Music Release",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=85",
    accent: "#4cc9f0", tags: ["Music", "Release"],
  },
  {
    id: 5, type: "story", brand: "@kalamanch.gallery",
    caption: "Opening night. 7pm. Be there. 🖼️ #Art #Gallery #Opening",
    likes: "4.2K", comments: "289", category: "Gallery Event",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=85",
    accent: "#c9a84c", tags: ["Event", "Story"],
  },
  {
    id: 6, type: "square", brand: "@natak.co",
    caption: "Behind the curtain. The work that never makes it to the stage. 🎬 #Theatre #BTS",
    likes: "2.7K", comments: "153", category: "Behind the Scenes",
    img: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=85",
    accent: "#ffd60a", tags: ["BTS", "Brand"],
  },
];

export default function SocialMedia() {
  const [active, setActive] = useState<number | null>(null);
  const [liked, setLiked]   = useState<Set<number>>(new Set());

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="social" className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans font-bold text-[10px] text-gold/70 tracking-widest">03</span>
              <div className="h-px w-10 bg-gold/30" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Social Media</span>
            </div>
            <h2 className="font-sans font-black text-display-lg text-white uppercase tracking-tight">
              Scroll-stopping<br />
              <span className="text-gold-gradient">creatives</span>
            </h2>
          </div>
          <p className="font-sans text-xs text-white/30 max-w-xs leading-relaxed">
            Instagram posts, stories, and carousels designed to stop the thumb and start the conversation.
          </p>
        </div>

        {/* Instagram-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {posts.map((p, i) => (
            <div
              key={p.id}
              className={`group relative cursor-pointer overflow-hidden ${p.type === "story" ? "aspect-[9/16]" : "aspect-square"}`}
              onClick={() => setActive(i)}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${p.img}')` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Accent tint */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${p.accent}15 0%, transparent 70%)` }} />

              {/* Hover stats */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Heart size={18} className="fill-white" />
                    <span className="font-sans font-bold text-sm">{p.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={18} className="fill-white" />
                    <span className="font-sans font-bold text-sm">{p.comments}</span>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-[8px] tracking-[0.2em] uppercase border px-2 py-0.5 bg-black/70 backdrop-blur-sm"
                  style={{ color: p.accent, borderColor: p.accent + "50" }}>
                  {p.category}
                </span>
              </div>

              {/* Story indicator */}
              {p.type === "story" && (
                <div className="absolute top-3 right-3">
                  <div className="w-1.5 h-6 rounded-full" style={{ background: p.accent + "80" }} />
                </div>
              )}

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: p.accent }} />
            </div>
          ))}
        </div>

        {/* Engagement stats bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Avg. Reach",      value: "12K+",  sub: "per post" },
            { label: "Engagement Rate", value: "8.4%",  sub: "above industry avg" },
            { label: "Brands Served",   value: "20+",   sub: "social clients" },
            { label: "Posts Designed",  value: "500+",  sub: "across platforms" },
          ].map((s) => (
            <div key={s.label} className="p-4 border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-colors duration-300">
              <p className="font-sans font-black text-xl text-white mb-0.5">{s.value}</p>
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/40">{s.label}</p>
              <p className="font-sans text-[9px] text-white/20 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Post detail modal */}
      {active !== null && (
        <div className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4"
          onClick={() => setActive(null)}>
          <div className="relative w-full max-w-sm bg-[#0f0f0f] border border-white/8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}>

            {/* Instagram-style header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                  style={{ borderColor: posts[active].accent, color: posts[active].accent }}>
                  M
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold text-white">{posts[active].brand}</p>
                  <p className="font-sans text-[9px] text-white/30">{posts[active].category}</p>
                </div>
              </div>
              <button onClick={() => setActive(null)} className="text-white/30 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Image */}
            <div className={`relative w-full ${posts[active].type === "story" ? "aspect-[9/16]" : "aspect-square"}`}>
              <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${posts[active].img}')` }} />
              <div className="absolute inset-0 bg-black/20" />
              {/* Accent overlay */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 60% at 50% 30%, ${posts[active].accent}12 0%, transparent 70%)` }} />
            </div>

            {/* Actions */}
            <div className="px-4 py-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button onClick={(e) => toggleLike(posts[active].id, e)}
                    className="transition-transform duration-200 active:scale-125">
                    <Heart size={22} className={liked.has(posts[active].id) ? "fill-red-500 text-red-500" : "text-white/60 hover:text-white"} />
                  </button>
                  <MessageCircle size={22} className="text-white/60 hover:text-white transition-colors cursor-pointer" />
                  <Share2 size={22} className="text-white/60 hover:text-white transition-colors cursor-pointer" />
                </div>
                <Bookmark size={22} className="text-white/60 hover:text-white transition-colors cursor-pointer" />
              </div>

              <p className="font-sans font-semibold text-xs text-white">
                {liked.has(posts[active].id)
                  ? `${parseInt(posts[active].likes.replace("K", "")) * 1000 + 1} likes`
                  : `${posts[active].likes} likes`}
              </p>

              <p className="font-sans text-xs text-white/60 leading-relaxed">
                <span className="font-semibold text-white">{posts[active].brand.replace("@", "")} </span>
                {posts[active].caption}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {posts[active].tags.map((t) => (
                  <span key={t} className="font-sans text-[9px] tracking-wider uppercase text-white/25 border border-white/8 px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
