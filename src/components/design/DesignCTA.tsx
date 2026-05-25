import { Send, Zap, Clock, CheckCircle, Layers } from "lucide-react";

const services = [
  { icon: Layers,       label: "Brand Identity",   time: "5–7 days" },
  { icon: Zap,          label: "Poster Design",    time: "2–3 days" },
  { icon: CheckCircle,  label: "Social Media Kit", time: "3–5 days" },
  { icon: Clock,        label: "Full Campaign",    time: "7–14 days" },
];

export default function DesignCTA() {
  const mailtoUrl = "mailto:aroramanav787@gmail.com?subject=Design%20Project%20Inquiry&body=Hi%20Manav,%0D%0A%0D%0AI'd%20like%20to%20start%20a%20design%20project%20with%20you.%0D%0A%0D%0AProject%20Type:%20[Brand%20Identity%20/%20Poster%20/%20Social%20Media%20/%20Campaign%20/%20Other]%0D%0ABrief%20Details:%20[Describe%20your%20needs,%20deliverables,%20or%20ideas]%0D%0A%0D%0AThanks!";

  return (
    <section id="cta" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 70% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top banner */}
        <div className="text-center">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
            {services.map((s) => (
              <div key={s.label}
                className="p-4 border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300 text-left">
                <s.icon size={16} className="text-gold/50 mb-3" />
                <p className="font-sans font-semibold text-xs text-white/70 mb-1">{s.label}</p>
                <p className="font-sans text-[9px] text-white/25 mt-0.5">{s.time}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={mailtoUrl}
              className="flex items-center gap-3 bg-gold text-black font-sans font-bold text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              <Zap size={14} />
              Start a Project
            </a>
            <a href="mailto:aroramanav787@gmail.com"
              className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/25 hover:text-gold transition-colors duration-300"
            >
              aroramanav787@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
