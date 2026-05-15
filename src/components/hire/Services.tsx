"use client";

import { useState } from "react";
import { Drama, Palette, PenTool, TrendingUp, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Drama,
    number: "01",
    title: "Theatre Performance",
    tagline: "The stage, brought to your event",
    description: "Solo performances, ensemble direction, and theatrical experiences for festivals, corporate events, college fests, and cultural programmes. Every performance is tailored — no two shows are the same.",
    deliverables: [
      "Solo monologue performances (30–60 min)",
      "Ensemble direction & choreography",
      "Original script writing",
      "Workshop facilitation for groups",
      "TEDx / keynote performance slots",
      "Festival & cultural event appearances",
    ],
    accent: "#c9a84c",
    bg: "#0f0d08",
    cta: "Book a Performance",
    href: "#cta",
    img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80",
  },
  {
    icon: Palette,
    number: "02",
    title: "Portrait Commissions",
    tagline: "Your story, painted by hand",
    description: "Hyper-realistic and expressive portraits in oil, charcoal, acrylic, and graphite. Commissioned from your photographs. Delivered in 5–7 days with a digital preview before the final piece ships.",
    deliverables: [
      "Oil on canvas portraits",
      "Charcoal & graphite drawings",
      "Acrylic paintings",
      "Pet portraits",
      "Family & wedding portraits",
      "Digital preview before delivery",
    ],
    accent: "#e8c97a",
    bg: "#0d0c08",
    cta: "Commission a Portrait",
    href: "#cta",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Graphic Design",
    tagline: "Visual identity that means something",
    description: "Brand identities, event posters, social media kits, and campaign design. Built with the same narrative instinct as a stage production — every visual element serves the story.",
    deliverables: [
      "Logo & brand identity systems",
      "Event & theatre poster design",
      "Social media content kits",
      "Typography & layout design",
      "Print collateral & merchandise",
      "Full campaign art direction",
    ],
    accent: "#a78bfa",
    bg: "#0a0810",
    cta: "Start a Design Project",
    href: "#cta",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Content Creation",
    tagline: "Content that moves people, not just numbers",
    description: "Instagram reels, carousels, and social media strategy for brands and individuals. Scripted, filmed, edited, and posted with the same quality as organic content. 50K+ audience, 8.4% engagement rate.",
    deliverables: [
      "Instagram Reels (scripted & edited)",
      "Carousel & static post design",
      "Content strategy & calendar",
      "Brand storytelling campaigns",
      "Collaboration & sponsored content",
      "Monthly content packages",
    ],
    accent: "#4ade80",
    bg: "#080f09",
    cta: "Discuss Content Strategy",
    href: "#cta",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" style={{ background: "#050505", padding: "100px 0", position: "relative", overflow: "hidden" }}>

      {/* Top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ height: "1px", width: "40px", background: "rgba(201,168,76,0.4)" }} />
            <span className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>Services</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1.05, marginBottom: "16px" }}>
            What I can do
            <br />
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              for you
            </span>
          </h2>
          <p className="font-sans" style={{ fontSize: "14px", color: "rgba(245,240,232,0.4)", maxWidth: "480px", lineHeight: 1.7 }}>
            Four disciplines. One creative mind. Every project gets the same obsessive attention to craft.
          </p>
        </div>

        {/* Service cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          {services.map((s, i) => {
            const isOpen = active === i;
            return (
              <div
                key={s.number}
                style={{
                  background: isOpen ? s.bg : "#0a0a0a",
                  border: `1px solid ${isOpen ? s.accent + "30" : "rgba(255,255,255,0.05)"}`,
                  transition: "all 0.4s ease",
                  overflow: "hidden",
                }}
              >
                {/* Header row — always visible */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "28px 32px",
                    display: "flex", alignItems: "center", gap: "24px",
                    background: "none", border: "none", cursor: "pointer",
                  }}
                >
                  {/* Number */}
                  <span className="font-sans" style={{ fontSize: "11px", color: isOpen ? s.accent : "rgba(245,240,232,0.2)", fontWeight: 700, letterSpacing: "0.1em", flexShrink: 0, width: "28px" }}>
                    {s.number}
                  </span>

                  {/* Icon */}
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "10px", flexShrink: 0,
                    background: isOpen ? s.accent + "18" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isOpen ? s.accent + "35" : "rgba(255,255,255,0.08)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.4s",
                  }}>
                    <s.icon size={18} style={{ color: isOpen ? s.accent : "rgba(245,240,232,0.35)", transition: "color 0.4s" }} />
                  </div>

                  {/* Title + tagline */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="font-serif" style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)", color: isOpen ? "#f5f0e8" : "rgba(245,240,232,0.75)", fontWeight: 400, lineHeight: 1.2, marginBottom: "4px", transition: "color 0.4s" }}>
                      {s.title}
                    </p>
                    <p className="font-serif" style={{ fontSize: "13px", fontStyle: "italic", color: isOpen ? s.accent + "cc" : "rgba(245,240,232,0.3)", transition: "color 0.4s" }}>
                      {s.tagline}
                    </p>
                  </div>

                  {/* Toggle */}
                  <div style={{
                    width: "32px", height: "32px", flexShrink: 0,
                    border: `1px solid ${isOpen ? s.accent + "50" : "rgba(255,255,255,0.1)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.4s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}>
                    <span style={{ fontSize: "18px", color: isOpen ? s.accent : "rgba(245,240,232,0.3)", lineHeight: 1, transition: "color 0.4s" }}>+</span>
                  </div>
                </button>

                {/* Expanded content */}
                <div style={{
                  maxHeight: isOpen ? "600px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.5s ease",
                }}>
                  <div style={{ padding: "0 32px 36px", paddingLeft: "128px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px", alignItems: "start" }}>

                      {/* Left: description + deliverables */}
                      <div>
                        <p className="font-sans" style={{ fontSize: "14px", color: "rgba(245,240,232,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>
                          {s.description}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          {s.deliverables.map(d => (
                            <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                              <Check size={13} style={{ color: s.accent, flexShrink: 0, marginTop: "3px" }} />
                              <span className="font-sans" style={{ fontSize: "13px", color: "rgba(245,240,232,0.55)", lineHeight: 1.5 }}>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: image + CTA */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", border: `1px solid ${s.accent}20` }}>
                          <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${s.img}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                          <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.4)" }} />
                          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 70% at 50% 30%, ${s.accent}12 0%, transparent 70%)` }} />
                        </div>
                        <a href={s.href} onClick={e => { e.preventDefault(); document.querySelector(s.href)?.scrollIntoView({ behavior: "smooth" }); }} className="font-sans" style={{
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                          background: s.accent, color: "#050505",
                          fontWeight: 700, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase",
                          padding: "14px 24px", textDecoration: "none", transition: "opacity 0.3s",
                        }}
                          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                        >
                          {s.cta} <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
