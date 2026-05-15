"use client";

import { MessageCircle, Mail, ArrowDown } from "lucide-react";

const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Manav%2C%20I%27d%20like%20to%20work%20with%20you.";
const EMAIL    = "mailto:manav@manavarora.com?subject=Let's%20Work%20Together";

export default function HireHero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#050505" }}>

      {/* Spotlight */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "100%", background: "radial-gradient(ellipse 45% 80% at 50% 0%, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.05) 50%, transparent 78%)", pointerEvents: "none" }} />

      {/* Vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 25%, rgba(5,5,5,0.92) 100%)", pointerEvents: "none" }} />

      {/* Grain */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "256px 256px", opacity: 0.2, mixBlendMode: "overlay", pointerEvents: "none" }} />

      {/* Curtain sides */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100px", height: "100%", background: "linear-gradient(90deg, rgba(5,5,5,0.85) 0%, transparent 100%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: "100px", height: "100%", background: "linear-gradient(270deg, rgba(5,5,5,0.85) 0%, transparent 100%)", pointerEvents: "none" }} />

      {/* Corner brackets */}
      {[
        { top: "96px", left: "40px", borderLeft: "2px solid rgba(201,168,76,0.2)", borderTop: "2px solid rgba(201,168,76,0.2)" },
        { top: "96px", right: "40px", borderRight: "2px solid rgba(201,168,76,0.2)", borderTop: "2px solid rgba(201,168,76,0.2)" },
        { bottom: "64px", left: "40px", borderLeft: "2px solid rgba(201,168,76,0.2)", borderBottom: "2px solid rgba(201,168,76,0.2)" },
        { bottom: "64px", right: "40px", borderRight: "2px solid rgba(201,168,76,0.2)", borderBottom: "2px solid rgba(201,168,76,0.2)" },
      ].map((s, i) => <div key={i} style={{ position: "absolute", width: "28px", height: "28px", ...s }} />)}

      {/* Watermark */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", userSelect: "none" }} aria-hidden="true">
        <span className="font-serif" style={{ fontSize: "clamp(5rem,20vw,18rem)", fontWeight: 700, color: "rgba(245,240,232,0.015)", letterSpacing: "-0.04em", lineHeight: 1 }}>HIRE</span>
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "860px", margin: "0 auto", paddingTop: "96px" }}>

        {/* Pre-title */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
          <span className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>Available for Work · 2025</span>
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(to left, transparent, rgba(201,168,76,0.5))" }} />
        </div>

        {/* Headline */}
        <h1 className="font-serif" style={{ fontWeight: 300, fontSize: "clamp(2.8rem,7vw,7rem)", lineHeight: "0.92", letterSpacing: "-0.02em", color: "#f5f0e8", marginBottom: "24px" }}>
          Let&apos;s create
          <br />
          <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            something meaningful
          </span>
        </h1>

        {/* Sub */}
        <p className="font-sans" style={{ fontSize: "clamp(0.85rem,1.4vw,1rem)", color: "rgba(245,240,232,0.45)", maxWidth: "560px", margin: "0 auto 48px", lineHeight: 1.8 }}>
          Theatre performances, portrait commissions, graphic design, and content creation — all under one roof. Delivered with craft, care, and a deadline you can trust.
        </p>

        {/* Primary CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "48px" }}>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-sans" style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: "#25D366", color: "#ffffff",
            fontWeight: 700, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "16px 28px", textDecoration: "none", transition: "background 0.3s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#1ebe5d"}
            onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
          >
            <MessageCircle size={16} /> WhatsApp Me
          </a>
          <a href={EMAIL} className="font-sans" style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: "none", color: "#c9a84c",
            fontWeight: 600, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "16px 28px", textDecoration: "none",
            border: "1px solid rgba(201,168,76,0.45)", transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "#c9a84c"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"; }}
          >
            <Mail size={16} /> Email Me
          </a>
          <button onClick={() => go("#services")} className="font-sans" style={{
            background: "none", color: "rgba(245,240,232,0.4)",
            fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "16px 28px", border: "1px solid rgba(245,240,232,0.1)",
            cursor: "pointer", transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.color = "rgba(245,240,232,0.7)"; e.currentTarget.style.borderColor = "rgba(245,240,232,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(245,240,232,0.4)"; e.currentTarget.style.borderColor = "rgba(245,240,232,0.1)"; }}
          >
            See Services ↓
          </button>
        </div>

        {/* Trust signals */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "32px" }}>
          {[
            { val: "24h",  label: "Response time" },
            { val: "100%", label: "Satisfaction" },
            { val: "5–7",  label: "Days delivery" },
            { val: "60+",  label: "Happy clients" },
          ].map((s, i, arr) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "32px" }}>
              <div style={{ textAlign: "center" }}>
                <p className="font-serif" style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "#c9a84c", fontWeight: 300, lineHeight: 1 }}>{s.val}</p>
                <p className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(107,107,107,1)", marginTop: "4px" }}>{s.label}</p>
              </div>
              {i < arr.length - 1 && <div style={{ width: "1px", height: "28px", background: "rgba(201,168,76,0.15)" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 10 }}>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)", position: "relative", overflow: "hidden" }}>
          <div className="animate-scroll-line" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", background: "#c9a84c" }} />
        </div>
        <ArrowDown size={11} style={{ color: "rgba(201,168,76,0.35)" }} />
      </div>
    </section>
  );
}
