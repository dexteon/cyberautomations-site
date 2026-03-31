import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ca-cream":         "#FAFAF7",
        "ca-cream-mid":     "#F0EDE6",
        "ca-cream-footer":  "#EDEAE3",
        "ca-border":        "#E8E4DC",
        "ca-text":          "#1A1614",
        "ca-muted":         "#6B6560",
        "ca-light":         "#9C9490",
        "ca-accent":        "#FF5C35",
        "ca-accent-hover":  "#E84A24",
        "ca-accent-light":  "#FFF0EC",
        "ca-white":         "#FFFFFF",
        // Legacy aliases — prevent build errors from any leftover refs
        "ca-bg":            "#FAFAF7",
        "ca-surface":       "#FFFFFF",
        "ca-cyan":          "#FF5C35",
        "ca-purple":        "#FF5C35",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
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
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        accordionOpen: {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee:        "marquee 40s linear infinite",
        nodePulse:      "nodePulse 2.5s ease-in-out infinite",
        connectorFill:  "connectorFill 0.5s ease-out forwards",
        fadeSlideUp:    "fadeSlideUp 0.5s ease-out forwards",
        fadeIn:         "fadeIn 0.4s ease-out forwards",
        accordionOpen:  "accordionOpen 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
