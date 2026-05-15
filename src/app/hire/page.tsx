"use client";

import HireNav      from "@/components/hire/HireNav";
import HireHero     from "@/components/hire/HireHero";
import Services     from "@/components/hire/Services";
import Pricing      from "@/components/hire/Pricing";
import HireProcess  from "@/components/hire/HireProcess";
import HireCTA      from "@/components/hire/HireCTA";
import HireFooter   from "@/components/hire/HireFooter";

export default function HirePage() {
  return (
    <div style={{ background: "#050505", color: "#f5f0e8", minHeight: "100vh", overflowX: "hidden" }}>
      <HireNav />
      <main>
        <HireHero />
        <Services />
        <Pricing />
        <HireProcess />
        <HireCTA />
      </main>
      <HireFooter />
    </div>
  );
}
