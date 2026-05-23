import React from 'react';

// Placeholder data – replace with real featured items
const placeholderItems = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `Featured Piece ${i + 1}`,
  hook: `Hook idea ${i + 1}`,
  insight: `Why it works ${i + 1}`,
  image: '/placeholder.png', // place a placeholder image in public folder
}));

export default function FeaturedContent() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {placeholderItems.map((item) => (
        <div
          key={item.id}
          className="group rounded-xl overflow-hidden border border-gold/20 hover:shadow-lg transition-shadow"
        >
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-gold-gradient mb-2">{item.title}</h3>
            <p className="text-sm text-ivory/80 mb-2">{item.hook}</p>
            <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.insight}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
