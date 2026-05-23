import React from 'react';

export default function ContentStyles() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gold-gradient">Content Styles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Self‑help', 'Artistic visuals', 'Storytelling', 'Short‑form engagement'].map((style, i) => (
          <div key={i} className="p-4 border border-gold/20 rounded-lg">
            <h3 className="font-semibold text-gold-gradient mb-2">{style}</h3>
            <p className="text-sm text-ivory/80">Brief description of {style.toLowerCase()} style.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
