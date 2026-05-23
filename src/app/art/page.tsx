"use client";

import ArtNav from "@/components/art/ArtNav";
import ArtHero from "@/components/art/ArtHero";
import GalleryGrid from "@/components/art/GalleryGrid";
import Categories from "@/components/art/Categories";
import ProcessSection from "@/components/art/ProcessSection";
import ArtCTA from "@/components/art/ArtCTA";
import ArtFooter from "@/components/art/ArtFooter";

export default function ArtPage() {
  return (
    <div className="bg-black text-ivory min-h-screen overflow-x-hidden">
      <ArtNav />
      <main>
        <ArtHero />
        <GalleryGrid />
        <Categories />
        <ProcessSection />
        <ArtCTA />
      </main>
      <ArtFooter />
    </div>
  );
}
