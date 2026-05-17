import Navigation from "@/components/layout/Navigation";
import Footer     from "@/components/layout/Footer";
import Hero       from "@/components/sections/Hero";
import About      from "@/components/sections/About";
import Work       from "@/components/sections/Work";
import Achievements from "@/components/sections/Process";

import HireMe       from "@/components/sections/Contact";
import NotebookPage from "@/components/ui/NotebookPage";

export default function Home() {
  return (
    <div className="bg-void text-ivory min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <NotebookPage><About /></NotebookPage>
        <NotebookPage><Work /></NotebookPage>
        <NotebookPage><Achievements /></NotebookPage>
        <NotebookPage><HireMe /></NotebookPage>
      </main>
      <Footer />
    </div>
  );
}
