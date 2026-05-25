"use client";

import TheatreHero from "@/components/theatre/TheatreHero";
import PerformancesTimeline from "@/components/theatre/PerformancesTimeline";
import CharacterGallery from "@/components/theatre/CharacterGallery";
import ActDivider from "@/components/theatre/ActDivider";

export default function TheatreSection() {
  return (
    <section id="theatre" className="min-h-screen relative bg-void text-ivory">
      <TheatreHero />
      <ActDivider act="Act I" title="The Journey" />
      <PerformancesTimeline />
      <ActDivider act="Act II" title="The Characters" />
      <CharacterGallery />
    </section>
  );
}
