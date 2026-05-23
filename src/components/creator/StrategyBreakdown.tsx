import React from 'react';

export default function StrategyBreakdown() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gold-gradient">
        My Content Strategy
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {['Hook', 'Retention', 'Emotion', 'Payoff'].map((step, i) => (
          <div key={i} className="flex-1 p-4 border border-gold/30 rounded-lg">
            <h3 className="text-xl font-semibold text-gold-gradient mb-2">{step}</h3>
            <p className="text-sm text-ivory/80">
              {/* short placeholder description */}
              {step} – brief insight about how I approach this stage.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
