"use client";

import { useState } from "react";
import { Mail, Send, Clock, CheckCircle } from "lucide-react";

const EMAIL    = "mailto:aroramanav787@gmail.com?subject=Let's%20Work%20Together";

const serviceTypes = [
  "Theatre Performance",
  "Portrait Commission",
  "Graphic Design",
  "Content Creation",
  "Multiple Services",
  "Not Sure Yet",
];

export default function HireCTA() {
  const [form, setForm]     = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Tell me a little about what you need";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "transparent",
    borderBottom: "1px solid rgba(245,240,232,0.1)",
    padding: "12px 0", fontSize: "14px",
    color: "rgba(245,240,232,0.8)",
    outline: "none", transition: "border-color 0.3s",
    fontFamily: "inherit",
  };

  return (
    <section id="cta" style={{ background: "#0a0a0a", padding: "100px 0", position: "relative", overflow: "hidden" }}>

      {/* Top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)" }} />

      {/* Spotlight */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "700px", height: "500px", background: "radial-gradient(ellipse 55% 80% at 50% 0%, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.03) 50%, transparent 75%)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Big CTA banner ── */}
        <div style={{ textAlign: "center", marginBottom: "80px", paddingBottom: "80px", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} />
            <span className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>Ready to Begin</span>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} />
          </div>

          <h2 className="font-serif" style={{ fontSize: "clamp(2.5rem,6vw,6rem)", fontWeight: 300, lineHeight: "0.92", letterSpacing: "-0.02em", color: "#f5f0e8", marginBottom: "24px" }}>
            Let&apos;s create
            <br />
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              something meaningful
            </span>
          </h2>

          <p className="font-sans" style={{ fontSize: "clamp(0.85rem,1.4vw,1rem)", color: "rgba(245,240,232,0.4)", maxWidth: "520px", margin: "0 auto 40px", lineHeight: 1.8 }}>
            Whether you have a clear brief or just a feeling — reach out. The best projects start with a conversation, not a contract.
          </p>

          {/* Quick contact buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "32px" }}>
            <a href={EMAIL} className="font-sans" style={{
              display: "flex", alignItems: "center", gap: "10px",
              background: "none", color: "#c9a84c",
              fontWeight: 600, fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase",
              padding: "18px 32px", textDecoration: "none",
              border: "1px solid rgba(201,168,76,0.45)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "#c9a84c"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"; }}
            >
              <Mail size={18} />
              Send an Email
            </a>
          </div>

          {/* Trust row */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "24px" }}>
            {[
              { icon: Clock,        text: "Responds within 24 hours" },
              { icon: CheckCircle,  text: "No commitment to enquire" },
            ].map(t => (
              <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <t.icon size={13} style={{ color: "rgba(201,168,76,0.5)" }} />
                <span className="font-sans" style={{ fontSize: "11px", color: "rgba(245,240,232,0.35)", letterSpacing: "0.05em" }}>{t.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "64px", alignItems: "start" }}>

          {/* Left: context */}
          <div>
            <p className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", marginBottom: "20px" }}>Or fill in the form</p>
            <h3 className="font-serif" style={{ fontSize: "clamp(1.3rem,2.5vw,2rem)", color: "#f5f0e8", fontWeight: 300, lineHeight: 1.2, marginBottom: "16px" }}>
              Prefer to write it out?
            </h3>
            <p className="font-sans" style={{ fontSize: "13px", color: "rgba(245,240,232,0.4)", lineHeight: 1.8, marginBottom: "40px" }}>
              Fill in the form below and I&apos;ll get back to you within 24 hours with a quote and next steps. No spam, no newsletters — just a reply from me.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Email",        value: "aroramanav787@gmail.com",  href: EMAIL },
                { label: "Based in",     value: "India",                 href: null },
                { label: "Availability", value: "Open for 2025 projects", href: null },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "16px", paddingBottom: "20px", borderBottom: "1px solid rgba(245,240,232,0.04)" }}>
                  <span className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.45)", width: "80px", flexShrink: 0, paddingTop: "2px" }}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-sans gold-line-hover" style={{ fontSize: "13px", color: "rgba(245,240,232,0.6)", textDecoration: "none", transition: "color 0.3s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(245,240,232,0.6)"}
                    >{item.value}</a>
                  ) : (
                    <span className="font-sans" style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)" }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "24px", padding: "80px 0" }}>
                <div style={{ width: "64px", height: "64px", border: "1px solid rgba(201,168,76,0.4)", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#c9a84c", fontSize: "20px", transform: "rotate(-45deg)" }}>✓</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "24px", color: "#f5f0e8" }}>Message received</h3>
                <p className="font-sans" style={{ fontSize: "13px", color: "rgba(245,240,232,0.4)", maxWidth: "280px", lineHeight: 1.6 }}>
                  I&apos;ll get back to you within 24 hours. Looking forward to working together.
                </p>
                <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }} className="font-sans" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", background: "none", border: "1px solid rgba(201,168,76,0.3)", padding: "12px 20px", cursor: "pointer" }}>
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px" }} noValidate>

                {/* Name */}
                <div>
                  <label className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", display: "block", marginBottom: "8px" }}>Your Name *</label>
                  <input type="text" placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{ ...inputStyle, borderBottomColor: errors.name ? "rgba(248,113,113,0.5)" : "rgba(245,240,232,0.1)" }}
                    onFocus={e => e.currentTarget.style.borderBottomColor = "rgba(201,168,76,0.5)"}
                    onBlur={e => e.currentTarget.style.borderBottomColor = errors.name ? "rgba(248,113,113,0.5)" : "rgba(245,240,232,0.1)"}
                  />
                  {errors.name && <p className="font-sans" style={{ fontSize: "10px", color: "rgba(248,113,113,0.7)", marginTop: "4px" }}>{errors.name}</p>}
                </div>

                {/* Email + Phone */}
                <div>
                  <label className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", display: "block", marginBottom: "8px" }}>Email *</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ ...inputStyle, borderBottomColor: errors.email ? "rgba(248,113,113,0.5)" : "rgba(245,240,232,0.1)" }}
                    onFocus={e => e.currentTarget.style.borderBottomColor = "rgba(201,168,76,0.5)"}
                    onBlur={e => e.currentTarget.style.borderBottomColor = errors.email ? "rgba(248,113,113,0.5)" : "rgba(245,240,232,0.1)"}
                  />
                  {errors.email && <p className="font-sans" style={{ fontSize: "10px", color: "rgba(248,113,113,0.7)", marginTop: "4px" }}>{errors.email}</p>}
                </div>

                {/* Service */}
                <div>
                  <label className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", display: "block", marginBottom: "8px" }}>I need help with</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const }}
                    onFocus={e => e.currentTarget.style.borderBottomColor = "rgba(201,168,76,0.5)"}
                    onBlur={e => e.currentTarget.style.borderBottomColor = "rgba(245,240,232,0.1)"}
                  >
                    <option value="" style={{ background: "#111", color: "rgba(245,240,232,0.4)" }}>Select a service</option>
                    {serviceTypes.map(t => <option key={t} value={t} style={{ background: "#111", color: "#f5f0e8" }}>{t}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", display: "block", marginBottom: "8px" }}>Tell me about your project *</label>
                  <textarea placeholder="What do you need? When do you need it? Any references or ideas?" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      ...inputStyle, resize: "none",
                      borderBottom: "none",
                      border: `1px solid ${errors.message ? "rgba(248,113,113,0.3)" : "rgba(245,240,232,0.08)"}`,
                      borderRadius: "4px", padding: "12px",
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"}
                    onBlur={e => e.currentTarget.style.borderColor = errors.message ? "rgba(248,113,113,0.3)" : "rgba(245,240,232,0.08)"}
                  />
                  {errors.message && <p className="font-sans" style={{ fontSize: "10px", color: "rgba(248,113,113,0.7)", marginTop: "4px" }}>{errors.message}</p>}
                </div>

                {/* Submit */}
                <button type="submit" disabled={loading} className="font-sans" style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                  background: "#c9a84c", color: "#050505",
                  fontWeight: 700, fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase",
                  padding: "18px", border: "none", cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1, transition: "background 0.3s",
                }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "#e8c97a"; }}
                  onMouseLeave={e => { if (!loading) e.currentTarget.style.background = "#c9a84c"; }}
                >
                  {loading
                    ? <span style={{ width: "16px", height: "16px", border: "2px solid rgba(5,5,5,0.3)", borderTopColor: "#050505", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
                    : <Send size={15} />}
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
