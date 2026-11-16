import type { Config } from "tailwindcss";

/**
 * PALETA-TESTE-COREVO
 * Midnight #0E1015 · Charcoal #17191C · Steel Grey #929DA7 · Cobalt #246BFF
 *
 * Rollback: restaurar os hex marcados como "anterior" neste arquivo,
 * em src/app/globals.css e o themeColor em src/app/layout.tsx.
 * Os componentes não foram alterados — só as escalas blue/indigo/purple/slate.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        corevo: {
          // anterior: blue #2563eb, indigo #4f46e5, violet #7c3aed, purple #9333ea, deep #0a0e1a, surface #0f1629, muted #64748b
          blue: "#246BFF",
          indigo: "#246BFF",
          violet: "#929DA7",
          purple: "#929DA7",
          deep: "#0E1015",
          surface: "#17191C",
          muted: "#929DA7",
        },
        // anterior: escala padrão do Tailwind (azul/índigo/violeta)
        blue: {
          300: "#B7CFFF",
          400: "#8EB4FF",
          500: "#4D86FF",
          600: "#246BFF",
        },
        indigo: {
          300: "#B7CFFF",
          400: "#6B9DFF",
          500: "#246BFF",
          600: "#1A4ED0",
        },
        purple: {
          300: "#C5CED6",
          400: "#929DA7",
          500: "#7A868F",
          600: "#4A545E",
        },
        slate: {
          100: "#EEF1F4",
          200: "#D5DCE1",
          300: "#B4BEC6",
          400: "#929DA7",
          500: "#7C8791",
          600: "#5A656E",
          900: "#17191C",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // anterior: linear-gradient(135deg, #2563eb 0%, #4f46e5 35%, #7c3aed 70%, #9333ea 100%)
        "gradient-corevo":
          "linear-gradient(135deg, #246BFF 0%, #1A4ED0 100%)",
        // anterior: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.35), transparent)
        "gradient-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(36,107,255,0.28), transparent)",
        // anterior: índigo rgba(79,70,229,0.25), violeta rgba(147,51,234,0.2), azul rgba(37,99,235,0.15)
        mesh: "radial-gradient(at 40% 18%, rgba(36,107,255,0.20) 0px, transparent 52%), radial-gradient(at 82% 0%, rgba(146,157,167,0.07) 0px, transparent 42%), radial-gradient(at 0% 55%, rgba(36,107,255,0.10) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
