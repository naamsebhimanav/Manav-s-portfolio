"use client";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 lg:py-28 bg-void overflow-hidden">
      {/* Side glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 80% at 0% 50%, rgba(29,20,8,0.4) 0%, transparent 60%)" }}
      />
      {/* Curtain lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,168,76,0.015) 80px, rgba(201,168,76,0.015) 81px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-12" />
          <p className="font-serif text-display-md italic text-ivory/25 max-w-2xl mx-auto">
            &ldquo;The applause fades. The story stays.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
