import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ca-cream":         "#FAFAFA",
        "ca-cream-mid":     "#F4F4F5",
        "ca-cream-footer":  "#EBEBED",
        "ca-border":        "#E4E4E7",
        "ca-text":          "#18181B",
        "ca-muted":         "#71717A",
        "ca-light":         "#A1A1AA",
        "ca-accent":        "#F4511E",
        "ca-accent-hover":  "#E64A19",
        "ca-accent-light":  "#FFF3E0",
        "ca-white":         "#FFFFFF",
        // Legacy aliases
        "ca-bg":            "#FAFAFA",
        "ca-surface":       "#FFFFFF",
        "ca-cyan":          "#F4511E",
        "ca-purple":        "#F4511E",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        "2xl": "12px",
        "3xl": "16px",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        nodePulse: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.55" },
        },
        connectorFill: {
          "0%":   { transform: "translateX(-101%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeSlideUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        accordionOpen: {
          "0%":   { opacity: "0", transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee:        "marquee 40s linear infinite",
        nodePulse:      "nodePulse 2.5s ease-in-out infinite",
        connectorFill:  "connectorFill 0.5s ease-out forwards",
        fadeSlideUp:    "fadeSlideUp 0.4s ease-out forwards",
        fadeIn:         "fadeIn 0.3s ease-out forwards",
        accordionOpen:  "accordionOpen 0.15s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
