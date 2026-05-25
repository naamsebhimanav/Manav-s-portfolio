"use client";

import ArtHero from "@/components/art/ArtHero";
import GalleryGrid from "@/components/art/GalleryGrid";
import Categories from "@/components/art/Categories";
import ProcessSection from "@/components/art/ProcessSection";

export default function ArtSection() {
  return (
    <section id="art" className="min-h-screen relative bg-black text-ivory">
      <ArtHero />
      <GalleryGrid />
      <Categories />
      <ProcessSection />
    </section>
  );
}
