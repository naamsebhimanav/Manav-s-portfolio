"use client";

import { useState } from "react";
import { Send, Clock, CheckCircle, Brush, Package, Star } from "lucide-react";

const mediums = ["Oil on Canvas", "Charcoal", "Acrylic", "Graphite", "Watercolour", "Mixed Media"];
const sizes   = ["Small (9×12 in)", "Medium (12×16 in)", "Large (18×24 in)", "XL (24×30 in)", "Custom Size"];

const perks = [
  { icon: Clock,        text: "5–7 day delivery" },
  { icon: CheckCircle,  text: "Revision rounds included" },
  { icon: Brush,        text: "Your choice of medium" },
  { icon: Package,      text: "Safely packaged & shipped" },
  { icon: Star,         text: "Certificate of authenticity" },
  { icon: Send,         text: "Digital preview before shipping" },
];

export default function ArtCTA() {
  const [form, setForm]     = useState({ name: "", email: "", medium: "", size: "", description: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())        e.name        = "Name is required";
    if (!form.email.trim())       e.email       = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.description.trim()) e.description = "Please describe what you'd like";
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

  const inputCls =
    "w-full bg-transparent border-b border-white/10 focus:border-gold/50 py-3 font-sans text-sm text-white/80 placeholder:text-white/20 outline-none transition-colors duration-300";

  return (
    <section id="cta" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Dramatic spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 80% at 50% 0%, rgba(201,168,76,0.13) 0%, rgba(201,168,76,0.03) 50%, transparent 75%)" }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.8) 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Top banner ── */}
        <div className="text-center mb-20 pb-20 border-b border-white/5">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="font-sans text-[9px] tracking-[0.6em] uppercase text-gold/60">Commission · 5–7 Days</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <h2 className="font-serif text-display-xl text-white leading-tight mb-5">
            Get Your<br />
            <span className="italic text-gold-gradient">Custom Portrait</span>
          </h2>

          <p className="font-sans text-sm text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Send a photograph. Choose your medium and size. Receive a hand-crafted original artwork
            in 5–7 working days — with a digital preview before it ships.
          </p>

          {/* Perks grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10">
            {perks.map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-3 p-3 border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-colors duration-300"
              >
                <p.icon size={14} className="text-gold/50 shrink-0" />
                <span className="font-sans text-[10px] text-white/45 tracking-wide">{p.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.querySelector("#commission-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gold text-black font-sans font-semibold text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Start My Commission
            </button>
            <a
              href="mailto:aroramanav787@gmail.com"
              className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/30 hover:text-gold transition-colors duration-300"
            >
              aroramanav787@gmail.com
            </a>
          </div>
        </div>

        {/* ── Commission form ── */}
        <div id="commission-form" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="font-sans text-[10px] text-gold/60 tracking-widest">05</span>
                <div className="h-px w-10 bg-gold/30" />
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Commission</span>
              </div>
              <h3 className="font-serif text-display-md text-white leading-tight mb-3">
                How it works
              </h3>
              <p className="font-sans text-sm text-white/40 leading-relaxed">
                Fill in the form with your details and vision. Manav will respond within 24 hours
                with a quote and timeline. Once confirmed, the artwork begins.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {[
                { day: "Day 1",   step: "You send reference + brief" },
                { day: "Day 1–2", step: "Manav confirms and begins sketch" },
                { day: "Day 3–5", step: "Painting in progress" },
                { day: "Day 6",   step: "Digital preview sent for approval" },
                { day: "Day 7",   step: "Final piece shipped to you" },
              ].map((t, i, arr) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-gold/50 mt-1.5 shrink-0" />
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-white/8 my-1" />}
                  </div>
                  <div className="pb-4">
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/50 mb-0.5">{t.day}</p>
                    <p className="font-sans text-xs text-white/45">{t.step}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing note */}
            <div className="p-5 border border-gold/15 bg-gold/4">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/50 mb-2">Pricing</p>
              <p className="font-sans text-xs text-white/40 leading-relaxed">
                Pricing varies by size, medium, and complexity. Small charcoal portraits start from ₹2,500.
                Large oil paintings from ₹8,000. Custom quotes provided within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center gap-6 py-20">
                <div className="w-16 h-16 border border-gold/40 rotate-45 flex items-center justify-center">
                  <span className="text-gold text-xl -rotate-45">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-white">Commission request received</h3>
                <p className="font-sans text-sm text-white/40 max-w-xs leading-relaxed">
                  Manav will review your request and respond within 24 hours with a quote and timeline.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", medium: "", size: "", description: "" }); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold/60 hover:text-gold transition-colors duration-300 mt-2"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                {/* Name */}
                <div>
                  <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">Your Name</label>
                  <input
                    type="text" placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                  />
                  {errors.name && <p className="font-sans text-[10px] text-red-400/70 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">Email Address</label>
                  <input
                    type="email" placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputCls}
                  />
                  {errors.email && <p className="font-sans text-[10px] text-red-400/70 mt-1">{errors.email}</p>}
                </div>

                {/* Medium + Size */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">Medium</label>
                    <select
                      value={form.medium}
                      onChange={(e) => setForm({ ...form, medium: e.target.value })}
                      className={`${inputCls} cursor-pointer`}
                      style={{ appearance: "none" }}
                    >
                      <option value="" className="bg-black text-white/40">Select medium</option>
                      {mediums.map((m) => <option key={m} value={m} className="bg-black text-white">{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">Size</label>
                    <select
                      value={form.size}
                      onChange={(e) => setForm({ ...form, size: e.target.value })}
                      className={`${inputCls} cursor-pointer`}
                      style={{ appearance: "none" }}
                    >
                      <option value="" className="bg-black text-white/40">Select size</option>
                      {sizes.map((s) => <option key={s} value={s} className="bg-black text-white">{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">
                    Describe your commission
                  </label>
                  <textarea
                    placeholder="Who is the subject? What's the occasion? Any specific style or mood you have in mind?"
                    rows={5}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className={`${inputCls} resize-none`}
                  />
                  {errors.description && <p className="font-sans text-[10px] text-red-400/70 mt-1">{errors.description}</p>}
                </div>

                {/* Delivery note */}
                <div className="flex items-center gap-3 p-3 border border-gold/15 bg-gold/4">
                  <Clock size={14} className="text-gold/50 shrink-0" />
                  <p className="font-sans text-[10px] text-white/40 leading-relaxed">
                    <span className="text-gold/70">5–7 working days</span> from confirmation to delivery. Digital preview included.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-gold text-black font-sans font-semibold text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold-light transition-colors duration-300 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  {loading ? "Sending..." : "Request My Custom Portrait"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
