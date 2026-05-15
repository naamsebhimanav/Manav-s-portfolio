import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Mail, ArrowRight } from "lucide-react";

const Instagram = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


export const metadata = {
  title: "Contact - Manav Arora",
  description: "Get in touch with Manav Arora.",
};

export default function ContactPage() {
  return (
    <div className="bg-void text-ivory min-h-screen flex flex-col font-sans selection:bg-gold/30 selection:text-gold-light">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle background grain */}
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          
          {/* Left: Info */}
          <div className="space-y-12">
            <div>
              <h1 className="font-serif text-display-md mb-4 text-ivory/90 leading-tight">
                Let&apos;s <span className="italic text-gold">create</span><br />
                something together.
              </h1>
              <p className="text-smoke text-sm leading-relaxed max-w-sm">
                Whether you have a project in mind, a collaboration proposal, or just want to say hello—I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-3">Email</p>
                <a href="mailto:manav@manavarora.com" className="flex items-center gap-4 text-ivory/70 hover:text-gold transition-colors duration-300 group w-fit">
                  <span className="w-12 h-12 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors">
                    <Mail size={18} className="text-ivory/50 group-hover:text-gold" />
                  </span>
                  <span className="text-sm tracking-wide">manav@manavarora.com</span>
                </a>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-3">Social</p>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-ivory/70 hover:text-gold transition-colors duration-300 group w-fit">
                  <span className="w-12 h-12 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors">
                    <Instagram size={18} className="text-ivory/50 group-hover:text-gold" />
                  </span>
                  <span className="text-sm tracking-wide">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 sm:p-10 relative">
            <div className="absolute top-0 left-0 w-8 h-px bg-gold/50" />
            <div className="absolute top-0 left-0 w-px h-8 bg-gold/50" />
            <div className="absolute bottom-0 right-0 w-8 h-px bg-gold/50" />
            <div className="absolute bottom-0 right-0 w-px h-8 bg-gold/50" />
            
            <form className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-smoke ml-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/10 focus:border-gold px-1 py-2 text-sm text-ivory placeholder:text-ivory/20 outline-none transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-smoke ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-white/10 focus:border-gold px-1 py-2 text-sm text-ivory placeholder:text-ivory/20 outline-none transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-smoke ml-1">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-gold px-1 py-2 text-sm text-ivory placeholder:text-ivory/20 outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <button 
                type="button"
                className="group flex items-center justify-center gap-3 w-full bg-gold hover:bg-gold-light text-void py-4 mt-4 transition-colors duration-300 font-semibold text-xs tracking-[0.2em] uppercase"
              >
                Send Message
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
