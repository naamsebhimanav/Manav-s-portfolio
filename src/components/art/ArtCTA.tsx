import { Send, Clock, CheckCircle, Brush, Package, Star } from "lucide-react";

const perks = [
  { icon: Clock,        text: "5–7 day delivery" },
  { icon: CheckCircle,  text: "Revision rounds included" },
  { icon: Brush,        text: "Your choice of medium" },
  { icon: Package,      text: "Safely packaged & shipped" },
  { icon: Star,         text: "Certificate of authenticity" },
  { icon: Send,         text: "Digital preview before shipping" },
];

export default function ArtCTA() {
  const mailtoUrl = "mailto:aroramanav787@gmail.com?subject=Art%20Commission%20Inquiry&body=Hi%20Manav,%0D%0A%0D%0AI'd%20like%20to%20commission%20a%20portrait.%0D%0A%0D%0AMedium:%20[Oil%20on%20Canvas%20/%20Charcoal%20/%20Acrylic%20/%20Graphite%20/%20Watercolour]%0D%0ASize:%20[Small%20/%20Medium%20/%20Large%20/%20Custom]%0D%0ADescription:%20[Describe%20your%20subject%20or%20vision]%0D%0A%0D%0AThanks!";

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
        <div className="text-center">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-12">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={mailtoUrl}
              className="bg-gold text-black font-sans font-semibold text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Start My Commission
            </a>
            <a
              href="mailto:aroramanav787@gmail.com"
              className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/30 hover:text-gold transition-colors duration-300"
            >
              aroramanav787@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
