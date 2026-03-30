import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ca-navy":     "#0A0F1E",
        "ca-charcoal": "#111827",
        "ca-electric": "#00D4FF",
        "ca-mint":     "#00FFB2",
        "ca-slate":    "#1E293B",
        "ca-muted":    "#64748B",
        "ca-offwhite": "#F8FAFC",
        "ca-white":    "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-electric": "linear-gradient(135deg, #00D4FF 0%, #00FFB2 100%)",
        "gradient-dark": "linear-gradient(180deg, #0A0F1E 0%, #111827 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
