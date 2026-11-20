import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  safelist: [
    // Section tones and accents chosen at runtime from content files
    "bg-ivory", "bg-white", "bg-mint", "bg-mint-soft", "bg-peach", "bg-forest",
    "bg-emerald", "bg-coral", "text-coral-deep", "text-emerald",
  ],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#0B3D2E", deep: "#072A20", ink: "#062419" },
        emerald: { DEFAULT: "#126B56", bright: "#1C8C6F", glow: "#9FE3C4" },
        mint: { DEFAULT: "#D9F0E6", soft: "#EAF7F0" },
        coral: { DEFAULT: "#FF6B57", deep: "#B8432F", soft: "#FFB3A6", text: "#E8503A" },
        peach: { DEFAULT: "#FFE7DE", soft: "#FFF3EE" },
        ivory: "#FFFBF6",
        ink: "#0B3D2E",
        body: "#4B5E56",
        line: "#E8E2D8",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6.4vw, 5.75rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.25rem, 4.6vw, 4rem)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.875rem, 3.4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,61,46,0.04), 0 12px 32px -12px rgba(11,61,46,0.14)",
        lift: "0 2px 4px rgba(11,61,46,0.05), 0 28px 56px -20px rgba(11,61,46,0.28)",
        island: "0 10px 40px -12px rgba(6,36,25,0.35)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-reverse": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        pulseDot: { "0%,100%": { transform: "scale(1)", opacity: "1" }, "50%": { transform: "scale(1.6)", opacity: "0" } },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "marquee-reverse": "marquee-reverse 46s linear infinite",
        "pulse-dot": "pulseDot 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
