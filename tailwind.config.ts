import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Legacy aliases kept for backward compat
        navy: "#09111F",
        "navy-deep": "#060810",
        "navy-warm": "#0E1A2E",
        surface: "#0E1A2E",
        "surface-hi": "#1A2540",
        white: "#FFFFFF",
        offwhite: "#F2F4F7",
        "gray-1": "#C8D4E0",
        "gray-2": "#8A9AAF",
        "gray-3": "#4A5A70",
        pureblack: "#000000",
        // Ink ramp — canonical v2 tokens
        "ink-00": "#060810",
        "ink-05": "#09111F",
        "ink-10": "#0E1A2E",
        "ink-20": "#1A2540",
        "ink-30": "#2C3A50",
        "ink-50": "#4A5A70",
        "ink-70": "#8A9AAF",
        "ink-90": "#C8D4E0",
        "ink-100": "#F2F4F7",
        // Accent
        parchment: "#D4C9A8",
        "parchment-dim": "#8A7A5A",
        // Semantic
        success: "#3A6A52",
        pass: "#6A3A3A",
        live: "#2A6A40",
        warning: "#6A5020",
      },
      fontFamily: {
        display: ["var(--font-syne)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "20px",
        btn: "14px",
        input: "12px",
        badge: "999px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 55s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
