import React from 'react';

export default function CaseStudy() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gold-gradient">Case Study</h2>
      <div className="max-w-2xl mx-auto p-4 border border-gold/20 rounded-lg">
        <p className="text-ivory/80 mb-4">"This reel achieved 12.3K views"</p>
        <ul className="list-disc list-inside text-left text-sm text-ivory/70 space-y-2">
          <li><strong>Hook:</strong> Unexpected visual contrast grabs attention.</li>
          <li><strong>Relatability:</strong> Taps into a common creator pain point.</li>
          <li><strong>Timing:</strong> Posted during peak engagement window.</li>
        </ul>
      </div>
    </section>
  );
}
