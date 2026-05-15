import Navigation from "@/components/layout/Navigation";
import Footer     from "@/components/layout/Footer";
import Hero       from "@/components/sections/Hero";
import About      from "@/components/sections/About";
import Work       from "@/components/sections/Work";
import Achievements from "@/components/sections/Process";
import SocialProof  from "@/components/sections/Testimonials";
import HireMe       from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-void text-ivory min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Achievements />
        <SocialProof />
        <HireMe />
      </main>
      <Footer />
    </div>
  );
}
