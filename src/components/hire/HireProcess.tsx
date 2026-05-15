"use client";

import { MessageCircle, Users, Sparkles, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contact",
    subtitle: "You reach out",
    description: "Send a WhatsApp message or email with a brief description of what you need. No lengthy forms, no waiting rooms. Just a conversation.",
    detail: "Response within 24 hours, guaranteed.",
    duration: "Day 1",
    accent: "#c9a84c",
  },
  {
    number: "02",
    icon: Users,
    title: "Discussion",
    subtitle: "We figure it out together",
    description: "A quick call or chat to understand your vision, timeline, and budget. This is where the project takes shape — and where I ask the questions that make the final work better.",
    detail: "15–30 minute conversation. No commitment required.",
    duration: "Day 1–2",
    accent: "#e8c97a",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Creation",
    subtitle: "The work begins",
    description: "Once we agree on scope and timeline, I get to work. You receive progress updates and a preview before anything is finalised. Your feedback shapes the outcome.",
    detail: "Regular updates. Revisions included.",
    duration: "Day 2–6",
    accent: "#a78bfa",
  },
  {
    number: "04",
    icon: Package,
    title: "Delivery",
    subtitle: "In your hands",
    description: "The final work is delivered in the agreed format — digital files, physical artwork, or a live performance. With a certificate of authenticity for commissions, and full source files for design work.",
    detail: "On time. Every time.",
    duration: "Day 5–7",
    accent: "#4ade80",
  },
];

export default function HireProcess() {
  return (
    <section id="process" style={{ background: "#050505", padding: "100px 0", position: "relative", overflow: "hidden" }}>

      {/* Top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.12), transparent)" }} />

      {/* Curtain lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04, backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,168,76,1) 80px, rgba(201,168,76,1) 81px)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div style={{ marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ height: "1px", width: "40px", background: "rgba(201,168,76,0.4)" }} />
            <span className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>The Process</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1.05, marginBottom: "16px" }}>
            From first message
            <br />
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              to final delivery
            </span>
          </h2>
          <p className="font-sans" style={{ fontSize: "14px", color: "rgba(245,240,232,0.4)", maxWidth: "480px", lineHeight: 1.7 }}>
            Simple, transparent, and built around your timeline. No surprises at any stage.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: "3px", marginBottom: "64px" }}>
          {steps.map((s, i) => (
            <div
              key={s.number}
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "32px 24px",
                position: "relative",
                transition: "border-color 0.3s, background 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = s.accent + "35"; e.currentTarget.style.background = "#111111"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.background = "#0f0f0f"; }}
            >
              {/* Step number */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <span className="font-sans" style={{ fontSize: "10px", color: s.accent, fontWeight: 700, letterSpacing: "0.1em" }}>{s.number}</span>
                <span className="font-sans" style={{ fontSize: "9px", color: "rgba(245,240,232,0.2)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{s.duration}</span>
              </div>

              {/* Icon */}
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: s.accent + "15",
                border: `1px solid ${s.accent}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
              }}>
                <s.icon size={20} style={{ color: s.accent }} />
              </div>

              {/* Title */}
              <h3 className="font-serif" style={{ fontSize: "clamp(1.1rem,1.8vw,1.3rem)", color: "#f5f0e8", fontWeight: 400, marginBottom: "4px" }}>{s.title}</h3>
              <p className="font-serif" style={{ fontSize: "12px", fontStyle: "italic", color: s.accent + "aa", marginBottom: "16px" }}>{s.subtitle}</p>

              {/* Description */}
              <p className="font-sans" style={{ fontSize: "12px", color: "rgba(245,240,232,0.45)", lineHeight: 1.7, marginBottom: "16px" }}>{s.description}</p>

              {/* Detail */}
              <div style={{ padding: "10px 14px", background: s.accent + "08", border: `1px solid ${s.accent}15`, borderRadius: "4px" }}>
                <p className="font-sans" style={{ fontSize: "10px", color: s.accent + "cc", letterSpacing: "0.05em" }}>{s.detail}</p>
              </div>

              {/* Arrow connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block" style={{
                  position: "absolute", top: "50%", right: "-14px",
                  transform: "translateY(-50%)",
                  width: "24px", height: "24px",
                  background: "#050505",
                  border: "1px solid rgba(201,168,76,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 2,
                  fontSize: "10px", color: "rgba(201,168,76,0.5)",
                }}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.05)", padding: "24px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <div>
            <p className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", marginBottom: "4px" }}>Typical Timeline</p>
            <p className="font-serif" style={{ fontSize: "clamp(1rem,1.8vw,1.2rem)", color: "#f5f0e8", fontWeight: 300 }}>
              First message to final delivery: <span style={{ color: "#c9a84c", fontStyle: "italic" }}>5–7 working days</span>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
            {["Contact", "Discussion", "Creation", "Delivery"].map((label, i, arr) => (
              <div key={label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.35)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 6px",
                  }}>
                    <span className="font-sans" style={{ fontSize: "8px", color: "#c9a84c", fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="font-sans" style={{ fontSize: "9px", color: "rgba(245,240,232,0.35)", letterSpacing: "0.05em" }}>{label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ width: "40px", height: "1px", background: "linear-gradient(to right, rgba(201,168,76,0.3), rgba(201,168,76,0.1))", margin: "0 4px 20px" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
