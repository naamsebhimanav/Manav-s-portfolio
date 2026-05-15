"use client";

import { useState } from "react";
import { Send, Handshake, Video, BarChart3 } from "lucide-react";

const collabCards = [
  {
    Icon: Handshake,
    title: "Brand Partnership",
    desc: "Authentic integrations that feel native to the content. No forced promotions — only brands that align with the audience's values.",
    tags: ["Sponsored Reels", "Story Series", "Long-term Deals"],
  },
  {
    Icon: Video,
    title: "Content Creation",
    desc: "Full-service content production for brands — scripting, filming, editing, and posting. Delivered with the same quality as organic content.",
    tags: ["Scripting", "Production", "Editing"],
  },
  {
    Icon: BarChart3,
    title: "Strategy Consultation",
    desc: "One-on-one sessions to audit your content strategy, identify growth opportunities, and build a content calendar that actually works.",
    tags: ["Content Audit", "Growth Strategy", "1:1 Sessions"],
  },
];

const collabTypes = [
  "Brand Partnership",
  "Content Creation",
  "Strategy Consultation",
  "Other",
];

export default function CreatorCTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    padding: "12px 0",
    fontSize: "14px",
    color: "rgba(255,255,255,0.8)",
    outline: "none",
    transition: "border-color 0.3s ease",
    fontFamily: "inherit",
  };

  return (
    <section
      id="cta"
      style={{ background: "#050505", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Spotlight */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse 55% 80% at 50% 0%, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.03) 50%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top headline */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} />
            <span className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>
              Let&apos;s Work Together
            </span>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} />
          </div>

          <h2
            className="font-serif"
            style={{ fontSize: "clamp(2rem,5vw,4.5rem)", lineHeight: 1, color: "#f5f0e8", fontWeight: 300, marginBottom: "20px" }}
          >
            Let&apos;s create content that
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
              moves people
            </span>
          </h2>

          <p
            className="font-sans"
            style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}
          >
            Whether you&apos;re a brand looking for authentic reach, or a creator wanting to level up your strategy —
            let&apos;s build something that resonates.
          </p>
        </div>

        {/* Collaboration cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {collabCards.map((c) => (
            <div
              key={c.title}
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                padding: "32px 24px",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <c.Icon size={20} style={{ color: "#c9a84c" }} />
              </div>
              <h3 className="font-sans" style={{ fontSize: "15px", color: "#ffffff", fontWeight: 600, marginBottom: "10px" }}>
                {c.title}
              </h3>
              <p className="font-sans" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: "20px" }}>
                {c.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="font-sans"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(201,168,76,0.7)",
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.15)",
                      padding: "4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <div>
            <p className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "24px" }}>
              Get in Touch
            </p>
            <h3
              className="font-serif"
              style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "#ffffff", fontWeight: 300, lineHeight: 1.2, marginBottom: "16px" }}
            >
              Ready to start a conversation?
            </h3>
            <p className="font-sans" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: "40px" }}>
              Fill in the form and I&apos;ll get back to you within 24 hours. Let&apos;s talk about what we can build together.
            </p>

            {/* Quick stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Response Time", value: "Within 24 hours" },
                { label: "Audience",      value: "50K+ engaged followers" },
                { label: "Avg Reach",     value: "2.1M impressions/month" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="font-sans" style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>{s.label}</span>
                  <span className="font-sans" style={{ fontSize: "12px", color: "#c9a84c", fontWeight: 600 }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "24px", padding: "80px 0" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    border: "1px solid rgba(201,168,76,0.4)",
                    transform: "rotate(45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "#c9a84c", fontSize: "20px", transform: "rotate(-45deg)" }}>✓</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "24px", color: "#ffffff" }}>Message received</h3>
                <p className="font-sans" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", maxWidth: "280px", lineHeight: 1.6 }}>
                  I&apos;ll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", type: "", message: "" }); }}
                  className="font-sans"
                  style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", background: "none", border: "none", cursor: "pointer", marginTop: "8px" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px" }} noValidate>
                {/* Name */}
                <div>
                  <label className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", display: "block", marginBottom: "8px" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ ...inputStyle, borderBottomColor: errors.name ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(201,168,76,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = errors.name ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)")}
                  />
                  {errors.name && <p className="font-sans" style={{ fontSize: "10px", color: "rgba(248,113,113,0.7)", marginTop: "4px" }}>{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", display: "block", marginBottom: "8px" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ ...inputStyle, borderBottomColor: errors.email ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(201,168,76,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = errors.email ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)")}
                  />
                  {errors.email && <p className="font-sans" style={{ fontSize: "10px", color: "rgba(248,113,113,0.7)", marginTop: "4px" }}>{errors.email}</p>}
                </div>

                {/* Collaboration type */}
                <div>
                  <label className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", display: "block", marginBottom: "8px" }}>
                    Collaboration Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(201,168,76,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" style={{ background: "#111111", color: "rgba(255,255,255,0.4)" }}>Select type</option>
                    {collabTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#111111", color: "#ffffff" }}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", display: "block", marginBottom: "8px" }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project, brand, or what you have in mind..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: "none",
                      borderBottom: "none",
                      border: `1px solid ${errors.message ? "rgba(248,113,113,0.3)" : "rgba(255,255,255,0.08)"}`,
                      borderRadius: "6px",
                      padding: "12px",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? "rgba(248,113,113,0.3)" : "rgba(255,255,255,0.08)")}
                  />
                  {errors.message && <p className="font-sans" style={{ fontSize: "10px", color: "rgba(248,113,113,0.7)", marginTop: "4px" }}>{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="font-sans"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    background: "#c9a84c",
                    color: "#080808",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    padding: "16px",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    transition: "background 0.3s ease",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#e8c97a"; }}
                  onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#c9a84c"; }}
                >
                  {loading ? (
                    <span style={{ width: "16px", height: "16px", border: "2px solid rgba(8,8,8,0.3)", borderTopColor: "#080808", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
                  ) : (
                    <Send size={14} />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
