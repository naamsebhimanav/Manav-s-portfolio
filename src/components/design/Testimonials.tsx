"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "(while engaging the audience ) After seeing Manav's performance, I told him that you do not belong here, you should be in cinema.",
    name: "Aushim Khetarpal",
    role: "Actor Director Producer",
    initials: "AK",
  },
  {
    id: 2,
    quote: "बहुत खूब! सच में, मैं तुम्हारा अभिनय देखने में इतना खो गया कि वीडियो ही नहीं बना पाया। तुमने अपने एक्सप्रेशन से कमाल कर दिया भाई, ऐसे ही आगे बढ़ते रहो ❤️",
    name: "Kratik Moyde",
    role: "Mpsd Alumni",
    initials: "KM",
  },
  {
    id: 3,
    quote: "Your artwork has truly touched my heart. came across many artists till date but I consider this my best decision to pick you above them all. My parents and sister literally got the biggest smile after seeing their portraits. thank you for such fine and creative work.",
    name: "Harshita popli",
    role: "Freelancing client",
    initials: "HP",
  },
  {
    id: 4,
    quote: "You must be a very hardworking guy in theatre. Mai acting se hi samajh gaya tha, isliye aake jhappi leli.",
    name: "Abhyuday Mishra",
    role: "A fellow competant",
    initials: "AM",
  },
  {
    id: 5,
    quote: "Thankyou Manav for the sketch, I really appreciate your efforts, the sketch really made my day, It was super amazing. I hope your talent keeps shining and grow even more, and you achieve a lot of success in life.",
    name: "Janvi Tiwari",
    role: "Freelancing client",
    initials: "Jt",
  },
  {
    id: 6,
    quote: "You go Manav! Can already tell this batman sketch is gonna be epic.can't wait to see the final piece",
    name: "An Instagram follower",
    role: "Instagram",
    initials: "IF",
  },
  {
    id: 7,
    quote: "The poster you made for my play was so amazing. got so many compliments about that. thank you so much",
    name: "Aman chaudhary",
    role: "Afreelancing client",
    initials: "AC",
  },
];

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="testimonials" className="relative py-28 lg:py-36 bg-[#080808] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/content/thumb 2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 100%)",
        }}
      />
      {/* Spotlight glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold/80 font-bold">Testimonials</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <h2 className="font-serif text-display-lg text-ivory mb-4 font-bold">
            What People{" "}
            <span className="text-gold-gradient">
              Say
            </span>
          </h2>
          <p className="font-sans text-sm text-ivory/40 max-w-2xl mx-auto leading-relaxed">
            Voices from collaborators, clients & audiences
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative w-full max-w-[100vw] overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-0">

          {/* Gradient masks for fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#080808] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#080808] to-transparent z-20 pointer-events-none" />

          <div className="marquee-track py-4">
            {/* Duplicate array four times to ensure enough width to prevent negative space on wide screens */}
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="group relative bg-[#0f0f0f] border border-white/5 rounded-lg p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 shrink-0 w-[300px] md:w-[400px] lg:w-[450px]"
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Quote icon */}
                <div
                  className="absolute top-6 left-6 text-gold/20 font-serif text-6xl leading-none"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  "
                </div>

                {/* Quote */}
                <p className="font-serif text-base md:text-lg text-ivory/90 leading-relaxed mb-6 relative z-10 pl-8">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pl-8">
                  {/* Initials circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-sans font-semibold text-sm text-gold border border-gold/30 transition-colors duration-300 group-hover:border-gold/60"
                    style={{
                      background: hoveredId === testimonial.id
                        ? "rgba(201,168,76,0.1)"
                        : "rgba(201,168,76,0.05)",
                    }}
                  >
                    {testimonial.initials}
                  </div>

                  {/* Name and role */}
                  <div>
                    <p className="font-sans font-semibold text-sm text-ivory mb-1">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-xs text-ivory/40 tracking-wide">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
