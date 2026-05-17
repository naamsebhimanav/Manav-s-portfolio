"use client";

import { useState } from "react";
import { Send, Zap, Clock, CheckCircle, Layers } from "lucide-react";

const services = [
  { icon: Layers,       label: "Brand Identity",   price: "From ₹5,000",  time: "5–7 days" },
  { icon: Zap,          label: "Poster Design",    price: "From ₹1,500",  time: "2–3 days" },
  { icon: CheckCircle,  label: "Social Media Kit", price: "From ₹3,000",  time: "3–5 days" },
  { icon: Clock,        label: "Full Campaign",    price: "Custom quote", time: "7–14 days" },
];

const projectTypes = [
  "Brand Identity / Logo",
  "Poster / Event Design",
  "Social Media Kit",
  "Full Campaign",
  "Other",
];

export default function DesignCTA() {
  const [form, setForm]     = useState({ name: "", email: "", type: "", brief: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())  e.name  = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.brief.trim()) e.brief = "Required";
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

  const inputCls = "w-full bg-transparent border-b border-white/10 focus:border-gold/50 py-3 font-sans text-sm text-white/80 placeholder:text-white/15 outline-none transition-colors duration-300";

  return (
    <section id="cta" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 70% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top banner */}
        <div className="text-center mb-20 pb-20 border-b border-white/5">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="font-sans text-[9px] tracking-[0.6em] uppercase text-gold/60">Available for Projects</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <h2 className="font-sans font-black text-display-xl text-white uppercase tracking-tight leading-[0.9] mb-5">
            Let&apos;s build<br />
            <span className="text-gold-gradient">something bold</span>
          </h2>

          <p className="font-sans text-sm text-white/35 max-w-lg mx-auto mb-10 leading-relaxed">
            Posters, logos, social media, full campaigns — fast turnaround, zero compromise on quality.
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
            {services.map((s) => (
              <div key={s.label}
                className="p-4 border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300 text-left">
                <s.icon size={16} className="text-gold/50 mb-3" />
                <p className="font-sans font-semibold text-xs text-white/70 mb-1">{s.label}</p>
                <p className="font-sans text-[10px] text-gold/60">{s.price}</p>
                <p className="font-sans text-[9px] text-white/25 mt-0.5">{s.time}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.querySelector("#brief-form")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-3 bg-gold text-black font-sans font-bold text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300">
              <Zap size={14} />
              Start a Project
            </button>
            <a href="mailto:aroramanav787@gmail.com"
              className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/25 hover:text-gold transition-colors duration-300">
              aroramanav787@gmail.com
            </a>
          </div>
        </div>

        {/* Form */}
        <div id="brief-form" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="font-sans font-bold text-[10px] text-gold/70 tracking-widest">06</span>
                <div className="h-px w-10 bg-gold/30" />
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">Brief</span>
              </div>
              <h3 className="font-sans font-black text-display-md text-white uppercase tracking-tight mb-3">
                Tell me what<br />you need
              </h3>
              <p className="font-sans text-sm text-white/35 leading-relaxed">
                Fill in the brief. Manav responds within 24 hours with a quote, timeline, and first thoughts.
              </p>
            </div>

            {/* Process */}
            <div className="space-y-0">
              {[
                { step: "01", text: "You send the brief" },
                { step: "02", text: "Quote + timeline in 24h" },
                { step: "03", text: "First concepts in 48h" },
                { step: "04", text: "Revisions until perfect" },
                { step: "05", text: "Final files delivered" },
              ].map((p, i, arr) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 border border-gold/30 flex items-center justify-center shrink-0">
                      <span className="font-sans font-bold text-[8px] text-gold/60">{p.step}</span>
                    </div>
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-white/5 my-1" />}
                  </div>
                  <div className="pb-4 pt-1">
                    <p className="font-sans text-xs text-white/40">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Turnaround note */}
            <div className="flex items-start gap-3 p-4 border border-gold/15 bg-gold/4">
              <Clock size={14} className="text-gold/50 mt-0.5 shrink-0" />
              <p className="font-sans text-xs text-white/40 leading-relaxed">
                <span className="text-gold/70 font-semibold">Fast turnaround guaranteed.</span> Most projects delivered in 2–7 days. Rush delivery available.
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
                <h3 className="font-sans font-black text-2xl text-white uppercase">Brief received</h3>
                <p className="font-sans text-sm text-white/35 max-w-xs leading-relaxed">
                  Manav will review your brief and respond within 24 hours with a quote and timeline.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", type: "", brief: "" }); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold/50 hover:text-gold transition-colors duration-300 mt-2">
                  Send another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                <div>
                  <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">Your Name</label>
                  <input type="text" placeholder="Full name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                  {errors.name && <p className="font-sans text-[10px] text-red-400/70 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                  {errors.email && <p className="font-sans text-[10px] text-red-400/70 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">Project Type</label>
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className={`${inputCls} cursor-pointer`} style={{ appearance: "none" }}>
                    <option value="" className="bg-black text-white/30">Select type</option>
                    {projectTypes.map((t) => <option key={t} value={t} className="bg-black text-white">{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 block mb-2">Project Brief</label>
                  <textarea placeholder="What do you need? Who is it for? Any references or inspiration?" rows={5}
                    value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })}
                    className={`${inputCls} resize-none`} />
                  {errors.brief && <p className="font-sans text-[10px] text-red-400/70 mt-1">{errors.brief}</p>}
                </div>

                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-gold text-black font-sans font-bold text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold-light transition-colors duration-300 disabled:opacity-60">
                  {loading
                    ? <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    : <Send size={14} />}
                  {loading ? "Sending..." : "Send Brief"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
