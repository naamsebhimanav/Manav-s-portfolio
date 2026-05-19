export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Curtain lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,168,76,1) 80px, rgba(201,168,76,1) 81px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section content removed */}
      </div>
    </section>
  );
}
