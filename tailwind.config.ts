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
        corevo: {
          blue: "#2563eb",
          indigo: "#4f46e5",
          violet: "#7c3aed",
          purple: "#9333ea",
          deep: "#0a0e1a",
          surface: "#0f1629",
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-corevo":
          "linear-gradient(135deg, #2563eb 0%, #4f46e5 35%, #7c3aed 70%, #9333ea 100%)",
        "gradient-radial": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.35), transparent)",
        "mesh":
          "radial-gradient(at 40% 20%, rgba(79,70,229,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(147,51,234,0.2) 0px, transparent 45%), radial-gradient(at 0% 50%, rgba(37,99,235,0.15) 0px, transparent 50%)",
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
