"use client";

import { Mail } from "lucide-react";

const EMAIL    = "mailto:aroramanav787@gmail.com?subject=Pricing%20Enquiry";

const tiers = [
  {
    service: "Theatre Performance",
    icon: "🎭",
    ranges: [
      { label: "Solo Performance (30 min)",  price: "On request",  note: "Depends on venue & travel" },
      { label: "Solo Performance (60 min)",  price: "On request",  note: "Includes script & rehearsal" },
      { label: "Workshop Facilitation",      price: "On request",  note: "Per session, group size varies" },
      { label: "Event / Festival Slot",      price: "On request",  note: "Custom quote provided" },
    ],
    accent: "#c9a84c",
    note: "All performance fees are quoted after a brief discussion about the event, audience, and requirements.",
  },
  {
    service: "Portrait Commissions",
    icon: "🎨",
    ranges: [
      { label: "Small — Charcoal (9×12 in)",  price: "From ₹2,500",  note: "2–3 day delivery" },
      { label: "Medium — Oil (12×16 in)",      price: "From ₹4,500",  note: "4–5 day delivery" },
      { label: "Large — Oil (18×24 in)",       price: "From ₹7,500",  note: "5–7 day delivery" },
      { label: "XL — Oil (24×30 in)",          price: "From ₹12,000", note: "7–10 day delivery" },
    ],
    accent: "#e8c97a",
    note: "All commissions include a digital preview before the physical piece is shipped. Revisions included.",
  },
  {
    service: "Graphic Design",
    icon: "✏️",
    ranges: [
      { label: "Single Poster / Flyer",        price: "From ₹1,500",  note: "2–3 day delivery" },
      { label: "Logo & Brand Identity",        price: "From ₹5,000",  note: "5–7 day delivery" },
      { label: "Social Media Kit (10 posts)",  price: "From ₹3,000",  note: "3–5 day delivery" },
      { label: "Full Campaign",                price: "Custom quote", note: "7–14 day delivery" },
    ],
    accent: "#a78bfa",
    note: "All design projects include source files, multiple formats, and revision rounds until you're satisfied.",
  },
  {
    service: "Content Creation",
    icon: "📱",
    ranges: [
      { label: "Single Reel (scripted + edited)", price: "From ₹2,000",  note: "2–3 day delivery" },
      { label: "Monthly Package (8 reels)",       price: "From ₹12,000", note: "Ongoing collaboration" },
      { label: "Strategy Consultation (1hr)",     price: "From ₹1,500",  note: "Video call + written plan" },
      { label: "Full Brand Content Strategy",     price: "Custom quote", note: "Monthly retainer available" },
    ],
    accent: "#4ade80",
    note: "Content packages include scripting, filming guidance, editing, and posting strategy.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: "#0a0a0a", padding: "100px 0", position: "relative", overflow: "hidden" }}>

      {/* Top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.12), transparent)" }} />

      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "500px", background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div style={{ marginBottom: "64px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ height: "1px", width: "40px", background: "rgba(201,168,76,0.4)" }} />
              <span className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>Pricing</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1.05 }}>
              Transparent pricing,
              <br />
              <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                no surprises
              </span>
            </h2>
          </div>
          <p className="font-sans" style={{ fontSize: "13px", color: "rgba(245,240,232,0.35)", maxWidth: "340px", lineHeight: 1.7 }}>
            Starting prices listed below. Final quotes are always discussed before any work begins — no hidden fees, ever.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "3px", marginBottom: "48px" }}>
          {tiers.map(t => (
            <div key={t.service} style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.05)", padding: "32px", transition: "border-color 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = t.accent + "30"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}
            >
              {/* Service header */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <span style={{ fontSize: "22px" }}>{t.icon}</span>
                <h3 className="font-serif" style={{ fontSize: "clamp(1rem,1.8vw,1.3rem)", color: "#f5f0e8", fontWeight: 400 }}>{t.service}</h3>
              </div>

              {/* Price rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {t.ranges.map((r, i) => (
                  <div key={r.label} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
                    padding: "14px 0",
                    borderBottom: i < t.ranges.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="font-sans" style={{ fontSize: "12px", color: "rgba(245,240,232,0.6)", marginBottom: "2px" }}>{r.label}</p>
                      <p className="font-sans" style={{ fontSize: "10px", color: "rgba(245,240,232,0.25)", letterSpacing: "0.05em" }}>{r.note}</p>
                    </div>
                    <span className="font-sans" style={{ fontSize: "13px", color: t.accent, fontWeight: 700, flexShrink: 0, letterSpacing: "0.02em" }}>{r.price}</span>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div style={{ marginTop: "20px", padding: "12px 16px", background: t.accent + "08", border: `1px solid ${t.accent}15`, borderRadius: "4px" }}>
                <p className="font-sans" style={{ fontSize: "11px", color: "rgba(245,240,232,0.4)", lineHeight: 1.6 }}>{t.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", padding: "48px 32px", background: "#0f0f0f", border: "1px solid rgba(201,168,76,0.12)" }}>
          <p className="font-serif" style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)", color: "#f5f0e8", fontWeight: 300, marginBottom: "8px" }}>
            Not sure what you need?
          </p>
          <p className="font-sans" style={{ fontSize: "13px", color: "rgba(245,240,232,0.4)", marginBottom: "28px", lineHeight: 1.7 }}>
            Send a message and we&apos;ll figure it out together. No commitment required.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <a href={EMAIL} className="font-sans" style={{
              display: "flex", alignItems: "center", gap: "8px",
              background: "none", color: "#c9a84c",
              fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
              padding: "14px 24px", textDecoration: "none",
              border: "1px solid rgba(201,168,76,0.4)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "#c9a84c"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
            >
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
