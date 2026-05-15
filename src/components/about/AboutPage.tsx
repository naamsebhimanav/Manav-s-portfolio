"use client";

import AboutNav        from "./AboutNav";
import AboutHero       from "./AboutHero";
import TheJourney      from "./TheJourney";
import Philosophy      from "./Philosophy";
import WhatDrivesMe    from "./WhatDrivesMe";
import InMyOwnWords    from "./InMyOwnWords";
import AboutFooter     from "./AboutFooter";

export default function AboutPage() {
  return (
    <div
      style={{
        background: "#050505",
        color: "#f5f0e8",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <AboutNav />
      <main>
        <AboutHero />
        <TheJourney />
        <Philosophy />
        <WhatDrivesMe />
        <InMyOwnWords />
      </main>
      <AboutFooter />
    </div>
  );
}
