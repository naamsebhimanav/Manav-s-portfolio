"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Clock, Share2, Link2, Video, Globe } from "lucide-react";

const projectTypes = [
  "Theatre Performance / Direction",
  "Visual Art Commission",
  "Design Project",
  "Brand Collaboration",
  "Workshop / Masterclass",
  "Other",
];

const hiringCards = [
  { icon: "🎭", title: "Performer",     desc: "Solo shows, ensemble casts, spoken word, and immersive experiences." },
  { icon: "🎨", title: "Visual Artist", desc: "Commissions, exhibitions, installations, and live art events." },
  { icon: "✏️", title: "Designer",      desc: "Brand identities, posters, campaign visuals, and art direction." },
];

const socials = [
  { icon: Share2, label: "Instagram", href: "https://www.instagram.com" },
  { icon: Link2,  label: "LinkedIn",  href: "https://www.linkedin.com" },
  { icon: Video,  label: "YouTube",   href: "https://www.youtube.com" },
  { icon: Globe,  label: "Behance",   href: "https://www.behance.net" },
];

export default function HireMe() {
  const [form, setForm]   = useState({ name: "", email: "", type: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent]   = useState(false);
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

  const inputCls = "w-full bg-transparent border-b border-white/10 focus:border-gold/50 py-3 font-sans text-sm text-ivory/80 placeholder:text-smoke/50 outline-none transition-colors duration-300";

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-void overflow-hidden">
      {/* Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 70% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Top CTA Banner ── */}
        <div className="text-center mb-20 pb-20 border-b border-white/5">
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold/60 mb-5">
            Available for Projects
          </p>
          <h2 className="font-serif text-display-xl text-ivory leading-tight mb-5">
            Let&apos;s create something<br />
            <span className="italic text-gold-gradient">the world won&apos;t forget</span>
          </h2>
          <p className="font-sans text-sm text-ivory/40 max-w-lg mx-auto mb-10 leading-relaxed">
            Whether you need a performer who commands a stage, an artist who transforms a wall,
            or a designer who makes people stop and stare — Manav is ready.
          </p>

          {/* Hiring cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {hiringCards.map((c) => (
              <div
                key={c.title}
                className="p-5 border border-white/5 hover:border-gold/20 bg-charcoal/20 hover:bg-charcoal/50 transition-all duration-500"
              >
                <span className="text-2xl mb-3 block">{c.icon}</span>
                <p className="font-sans text-xs font-medium text-ivory/70 mb-1 tracking-wider">{c.title}</p>
                <p className="font-sans text-[10px] text-smoke leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#hire-form"
              onClick={(e) => { e.preventDefault(); document.querySelector("#hire-form")?.scrollIntoView({ behavior: "smooth" }); }}
              className="bg-gold text-void font-sans font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Hire Me
            </a>
            <a
              href="mailto:manav@manavarora.com"
              className="font-sans text-[11px] tracking-[0.3em] uppercase text-ivory/40 hover:text-gold transition-colors duration-300"
            >
              manav@manavarora.com
            </a>
          </div>
        </div>

        {/* ── Contact Form ── */}
        <div id="hire-form" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left info */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-[10px] text-gold/60 tracking-widest">05</span>
                <div className="h-px w-10 bg-gold/30" />
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/40">Get in Touch</span>
              </div>
              <h2 className="font-serif text-display-lg text-ivory leading-tight mb-4">
                Start the<br />
                <span className="italic text-gold-gradient">conversation</span>
              </h2>
              <p className="font-sans text-sm text-ivory/40 leading-relaxed max-w-sm">
                Have a vision? A stage that needs a story? A wall that needs a painting?
                Tell Manav about it. He responds within 24 hours.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: Mail,    label: "Email",       value: "manav@manavarora.com", href: "mailto:manav@manavarora.com" },
                { icon: MapPin,  label: "Based in",    value: "India",                href: null },
                { icon: Clock,   label: "Availability",value: "Open for 2025 projects", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon size={16} className="text-gold/40 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300 gold-line-hover">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-sans text-sm text-ivory/60">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-smoke hover:border-gold/40 hover:text-gold transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center gap-6 py-20">
                <div className="w-16 h-16 border border-gold/40 rotate-45 flex items-center justify-center">
                  <span className="text-gold text-xl -rotate-45">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-ivory">Message received</h3>
                <p className="font-sans text-sm text-ivory/40 max-w-xs">
                  Thank you for reaching out. Manav will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", type: "", message: "" }); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold/60 hover:text-gold transition-colors duration-300 mt-2"
                >
                  Send another message
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

                {/* Type */}
                <div>
                  <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">I need Manav for</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className={`${inputCls} cursor-pointer`}
                    style={{ appearance: "none" }}
                  >
                    <option value="" className="bg-charcoal text-smoke">Select a project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-charcoal text-ivory">{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">Tell me about your project</label>
                  <textarea
                    placeholder="Describe your vision, timeline, and what you're looking for..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                  />
                  {errors.message && <p className="font-sans text-[10px] text-red-400/70 mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-gold text-void font-sans font-semibold text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold-light transition-colors duration-300 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-void/30 border-t-void rounded-full animate-spin" />
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
