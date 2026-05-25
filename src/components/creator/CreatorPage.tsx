"use client";

import CreatorNav from "./CreatorNav";
import CreatorHero from "./CreatorHero";
import GrowthDashboard from "./GrowthDashboard";
import ReelPerformance from "./ReelPerformance";
import ContentStyle from "./ContentStyle";
import StrategyInsight from "./StrategyInsight";
import CreatorCTA from "./CreatorCTA";

export default function CreatorPage() {
  return (
    <div style={{ background: "#080808", color: "#ffffff", minHeight: "100vh" }}>
      <CreatorNav />
      <CreatorHero />
      <GrowthDashboard />
      <ReelPerformance />
      <ContentStyle />
      <StrategyInsight />
      <CreatorCTA />
    </div>
  );
}
