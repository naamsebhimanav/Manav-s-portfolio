"use client";

import DesignNav        from "@/components/design/DesignNav";
import DesignHero       from "@/components/design/DesignHero";
import PosterShowcase   from "@/components/design/PosterShowcase";
import SocialMedia      from "@/components/design/SocialMedia";
import DesignCTA        from "@/components/design/DesignCTA";
import DesignFooter     from "@/components/design/DesignFooter";

export default function DesignPage() {
  return (
    <div className="bg-[#080808] text-white min-h-screen overflow-x-hidden">
      <DesignNav />
      <main>
        <DesignHero />
        <PosterShowcase />
        <SocialMedia />
        <DesignCTA />
      </main>
      <DesignFooter />
    </div>
  );
}
