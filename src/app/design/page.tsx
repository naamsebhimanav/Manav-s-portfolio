"use client";

import DesignNav        from "@/components/design/DesignNav";
import DesignHero       from "@/components/design/DesignHero";
import PosterShowcase   from "@/components/design/PosterShowcase";
import LogoDesigns      from "@/components/design/LogoDesigns";
import SocialMedia      from "@/components/design/SocialMedia";
import BeforeAfter      from "@/components/design/BeforeAfter";
import Mockups          from "@/components/design/Mockups";
import DesignCTA        from "@/components/design/DesignCTA";
import DesignFooter     from "@/components/design/DesignFooter";

export default function DesignPage() {
  return (
    <div className="bg-[#080808] text-white min-h-screen overflow-x-hidden">
      <DesignNav />
      <main>
        <DesignHero />
        <PosterShowcase />
        <LogoDesigns />
        <SocialMedia />
        <BeforeAfter />
        <Mockups />
        <DesignCTA />
      </main>
      <DesignFooter />
    </div>
  );
}
