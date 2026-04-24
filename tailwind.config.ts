import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        "navy-deep": "#060e1d",
        "navy-warm": "#0d1a2e",
        surface: "#111E35",
        "surface-hi": "#17253c",
        white: "#FFFFFF",
        offwhite: "#F4F8FB",
        "gray-1": "#D1D5DB",
        "gray-2": "#9CA3AF",
        "gray-3": "#6B7280",
        pureblack: "#000000",
      },
      fontFamily: {
        display: ["var(--font-syne)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
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
