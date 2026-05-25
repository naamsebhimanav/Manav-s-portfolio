"use client";

import DesignHero from "@/components/design/DesignHero";
import PosterShowcase from "@/components/design/PosterShowcase";
import SocialMedia from "@/components/design/SocialMedia";
import Testimonials from "@/components/design/Testimonials";

export default function DesignSection() {
  return (
    <section id="design" className="min-h-screen relative bg-[#080808] text-white">
      <DesignHero />
      <PosterShowcase />
      <SocialMedia />
      <Testimonials />
    </section>
  );
}
