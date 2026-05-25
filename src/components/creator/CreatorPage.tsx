"use client";

import CreatorHero from "./CreatorHero";
import ReelPerformance from "./ReelPerformance";
import YouTubeMockup from "./YouTubeMockup";
import YouTubeMockup2 from "./YouTubeMockup2";

export default function CreatorPage() {
  return (
    <div style={{ background: "#080808", color: "#ffffff", minHeight: "100vh" }}>
      <CreatorHero />
      <ReelPerformance />
      <YouTubeMockup />
      <YouTubeMockup2 />
    </div>
  );
}
