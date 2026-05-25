import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, BehanceIcon } from "@/components/ui/SocialIcons";
import Link from "next/link";


export const metadata = {
  title: "Contact - Manav Arora",
  description: "Get in touch with Manav Arora.",
};

export default function ContactPage() {
  return (
    <div className="bg-void text-ivory min-h-screen flex flex-col font-sans selection:bg-gold/30 selection:text-gold-light">
      <Navigation />

      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Back button */}
        <div className="absolute top-20 left-6 lg:left-12 z-20">
          <Link
            href="/"
            className="flex items-center gap-2 group text-ivory/40 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Back to Home</span>
          </Link>
        </div>
        {/* Subtle background grain */}
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-2xl w-full relative z-10 space-y-16 mt-8">
          {/* Heading */}
          <div className="text-center">
            <h1 className="font-serif text-display-md mb-4 text-ivory/90 leading-tight">
              Let&apos;s <span className="italic text-gold">create</span><br />
              something together.
            </h1>
            <p className="text-smoke text-sm leading-relaxed max-w-md mx-auto">
              Whether you have a project in mind, a collaboration proposal, or just want to say hello—I&apos;d love to hear from you.
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60">Email</p>
            <a href="mailto:aroramanav787@gmail.com" className="flex items-center gap-4 text-ivory/70 hover:text-gold transition-colors duration-300 group">
              <span className="w-12 h-12 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors">
                <Mail size={18} className="text-ivory/50 group-hover:text-gold" />
              </span>
              <span className="text-sm tracking-wide">aroramanav787@gmail.com</span>
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60">Social</p>
            <div className="flex flex-wrap justify-center gap-4">

              <a href="https://www.instagram.com/naamsebhimanav/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors duration-300 group">
                <span className="w-12 h-12 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors">
                  <InstagramIcon size={18} className="text-ivory/50 group-hover:text-gold" />
                </span>
                <span className="text-sm tracking-wide">Instagram</span>
              </a>

              <a href="https://www.linkedin.com/in/manav-arora-2780ba319" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors duration-300 group">
                <span className="w-12 h-12 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors">
                  <LinkedinIcon size={18} className="text-ivory/50 group-hover:text-gold" />
                </span>
                <span className="text-sm tracking-wide">LinkedIn</span>
              </a>

              <a href="https://www.youtube.com/@Naamsebhimanav" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors duration-300 group">
                <span className="w-12 h-12 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors">
                  <YoutubeIcon size={18} className="text-ivory/50 group-hover:text-gold" />
                </span>
                <span className="text-sm tracking-wide">YouTube</span>
              </a>

              <a href="https://www.behance.net/manavarora17" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors duration-300 group">
                <span className="w-12 h-12 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors">
                  <BehanceIcon size={18} className="text-ivory/50 group-hover:text-gold" />
                </span>
                <span className="text-sm tracking-wide">Behance</span>
              </a>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
