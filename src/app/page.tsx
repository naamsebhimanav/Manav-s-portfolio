import Navigation from "@/components/layout/Navigation";
import Footer     from "@/components/layout/Footer";
import Hero       from "@/components/sections/Hero";
import About      from "@/components/sections/About";
import Work       from "@/components/sections/Work";
import CreatorSection from "@/components/sections/CreatorSection";
import ArtSection from "@/components/sections/ArtSection";
import TheatreSection from "@/components/sections/TheatreSection";
import DesignSection from "@/components/sections/DesignSection";
import Contact from "@/components/sections/Contact";
import NotebookPage from "@/components/ui/NotebookPage";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <div className="bg-void text-ivory min-h-screen scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <NotebookPage><About /></NotebookPage>
        <NotebookPage><Work /></NotebookPage>
        <CreatorSection />
        <ArtSection />
        <TheatreSection />
        <DesignSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
