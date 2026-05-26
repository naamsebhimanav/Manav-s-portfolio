"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, BehanceIcon } from "@/components/ui/SocialIcons";

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
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/naamsebhimanav/?hl=en" },
  { icon: LinkedinIcon,  label: "LinkedIn",  href: "https://www.linkedin.com/in/manav-arora-2780ba319" },
  { icon: YoutubeIcon,   label: "YouTube",   href: "https://www.youtube.com/@Naamsebhimanav" },
  { icon: BehanceIcon,   label: "Behance",   href: "https://www.behance.net/manavarora17" },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/aroramanav787@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
    setLoading(false);
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
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold/60 mb-5 font-semibold">
            Available for Projects
          </p>
          <h2 className="font-serif text-display-xl text-ivory leading-tight mb-5 font-bold">
            Let&apos;s create something<br />
            <span className="text-gold-gradient">the world won&apos;t forget</span>
          </h2>
          <p className="font-sans text-sm text-ivory/40 max-w-lg mx-auto mb-10 leading-relaxed font-semibold">
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
        </div>

        {/* ── Contact Info & Form ── */}
        <div id="hire-form" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Info */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-[11px] text-gold/80 tracking-widest font-bold">05</span>
                <div className="h-px w-10 bg-gold/50" />
                <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-ivory/70 font-semibold">Get in Touch</span>
              </div>
              <h2 className="font-serif text-display-lg text-ivory leading-tight mb-4 font-bold">
                Start the<br />
                <span className="text-gold-gradient">conversation</span>
              </h2>
              <p className="font-sans text-sm text-ivory/40 leading-relaxed max-w-sm">
                Have a vision? A stage that needs a story? A wall that needs a painting?
                Tell Manav about it. He responds within 24 hours.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: Mail,    label: "Email",       value: "aroramanav787@gmail.com", href: "mailto:aroramanav787@gmail.com" },
                { icon: MapPin,  label: "Based in",    value: "India",                href: null },
                { icon: Clock,   label: "Availability",value: "Open for projects", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon size={16} className="text-gold/40 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40 mb-1 font-semibold">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300 gold-line-hover font-semibold">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-sans text-sm text-ivory/60 font-semibold">{item.value}</p>
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

          {/* Right: Form */}
          <div className="bg-charcoal/20 border border-white/5 p-8 lg:p-10 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 to-transparent opacity-50" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New inquiry from portfolio website!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2 font-semibold">Name</label>
                  <input type="text" id="name" name="name" required className={inputCls} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2 font-semibold">Email</label>
                  <input type="email" id="email" name="email" required className={inputCls} placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2 font-semibold">Project Type</label>
                <select id="type" name="Project Type" required className={`${inputCls} appearance-none bg-void/50 text-ivory/80`}>
                  <option value="" disabled selected>Select an area of interest</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2 font-semibold">Message</label>
                <textarea id="message" name="message" required rows={4} className={`${inputCls} resize-none`} placeholder="Tell me about your project..." />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-gold text-void font-sans font-semibold text-xs tracking-[0.2em] uppercase py-4 hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={14} />}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-sm mt-4 text-center font-semibold">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm mt-4 text-center font-semibold">Failed to send message. Please try again or email directly.</p>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
