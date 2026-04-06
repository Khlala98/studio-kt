import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f1629",
          light: "#1a2138",
          medium: "#243055",
        },
        gold: {
          DEFAULT: "#d4a74a",
          light: "#e8c97a",
          dim: "rgba(212,167,74,0.12)",
        },
        "bg-main": "#fafbfe",
        "bg-alt": "#f0f2f8",
        text: {
          DEFAULT: "#0f1629",
          muted: "#475569",
          light: "#94a3b8",
        },
        "gray-light": "#cbd5e1",
        border: {
          DEFAULT: "#e2e8f0",
          dark: "rgba(212,167,74,0.15)",
        },
        white: "#f8fafc",
        success: "#16a34a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        sans: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
