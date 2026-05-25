import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manav Arora — Performer | Visual Artist | Storyteller",
  description:
    "Where stories breathe through performance and visuals. Manav Arora is a multi-disciplinary artist working across theatre, visual arts, and design.",
  authors: [{ name: "Manav Arora" }],
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable} ${openSans.variable}`}>
      <body className="antialiased overflow-x-hidden font-primary">
        {children}
      </body>
    </html>
  );
}
