import Link from 'next/link';

export default function Offer() {
  const services = [
    { title: 'UGC Video Production', desc: 'Craft short‑form videos that capture attention.', icon: '📹' },
    { title: 'Creative Direction', desc: 'Define visual style & narrative for campaigns.', icon: '🎨' },
    { title: 'Trend‑Based Concepts', desc: 'Identify & adapt emerging trends for brand relevance.', icon: '🚀' },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <div key={i} className="p-6 rounded-xl border border-gold/20 group hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-4">{s.icon}</div>
          <h3 className="font-bold text-gold-gradient mb-2">{s.title}</h3>
          <p className="text-sm text-ivory/80 mb-4">{s.desc}</p>
          <Link href="#contact" className="inline-block px-4 py-2 bg-gold text-black rounded-full font-medium hover:bg-gold/80 transition">
            Inquire
          </Link>
        </div>
      ))}
    </section>
  );
}
