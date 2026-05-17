"use client";

import TheatreNav from "@/components/theatre/TheatreNav";
import TheatreHero from "@/components/theatre/TheatreHero";
import PerformancesTimeline from "@/components/theatre/PerformancesTimeline";
import CharacterGallery from "@/components/theatre/CharacterGallery";
import BehindTheScenes from "@/components/theatre/BehindTheScenes";

import TheatreFooter from "@/components/theatre/TheatreFooter";
import ActDivider from "@/components/theatre/ActDivider";

export default function TheatrePage() {
  return (
    <div className="bg-void text-ivory min-h-screen overflow-x-hidden">
      <TheatreNav />
      <main>
        <TheatreHero />
        <ActDivider act="Act I" title="The Journey" />
        <PerformancesTimeline />
        <ActDivider act="Act II" title="The Characters" />
        <CharacterGallery />
        <ActDivider act="Act III" title="The Craft" />
        <BehindTheScenes />
        <ActDivider act="Act IV" title="The Masterwork" />

      </main>
      <TheatreFooter />
    </div>
  );
}
