import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          red: "#dc2626",
          redDark: "#b91c1c",
          redLight: "#fef2f2",
          black: "#0a0a0a",
          dark: "#171717",
          slate: "#334155",
          muted: "#64748b",
          border: "#e5e7eb",
          surface: "#ffffff",
          bgLight: "#f8fafc",
          bgAlt: "#f1f5f9",
          orange: "#ea580c",
          amber: "#f59e0b",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-rajdhani)", "sans-serif"],
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-elevated': '0 20px 40px -10px rgba(15, 23, 42, 0.08), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'card-red': '0 15px 35px -5px rgba(220, 38, 38, 0.15)',
        'card-blue': '0 15px 35px -5px rgba(220, 38, 38, 0.15)',
        'nav-light': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
      }
    },
  },
  plugins: [],
};
export default config;
