/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        stage: "#0a0a0a",
        curtain: "#111111",
        charcoal: "#1a1a1a",
        ash: "#2a2a2a",
        smoke: "#6b6b6b",
        gold: "#c9a84c",
        "gold-light": "#e8c97a",
        "gold-dim": "#8a6f2e",
        ivory: "#f5f0e8",
        "ivory-dim": "#c8c0b0",
        mahogany: "#1c1008",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        secondary: ["var(--font-open-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2rem,6.5vw,7rem)", { lineHeight: "0.95" }],
        "display-xl":  ["clamp(1.6rem,5vw,5rem)", { lineHeight: "1" }],
        "display-lg":  ["clamp(1.4rem,3.5vw,3.5rem)", { lineHeight: "1.05" }],
        "display-md":  ["clamp(1.1rem,2.5vw,2.5rem)", { lineHeight: "1.1" }],
      },
      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "scroll-line": "scrollLine 1.8s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        scrollLine: {
          "0%":   { transform: "translateY(-100%)", opacity: "0" },
          "30%":  { opacity: "1" },
          "100%": { transform: "translateY(200%)", opacity: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};
