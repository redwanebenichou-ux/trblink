import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(215 20% 90%)",
        input: "hsl(215 20% 86%)",
        ring: "#1557D6",
        background: "#F7F9FC",
        foreground: "#101828",
        primary: {
          DEFAULT: "#1557D6",
          dark: "#0D347E",
          light: "#E8F0FE",
          50: "#EFF5FF",
          100: "#DBE8FE",
          200: "#BFD7FE",
          300: "#93BBFD",
          400: "#609AFA",
          500: "#3B82F6",
          600: "#1557D6",
          700: "#0D347E",
          800: "#0C2C68",
          900: "#0E2450",
        },
        accent: {
          DEFAULT: "#F28A24",
          light: "#FEF3E7",
          dark: "#D96F07",
        },
        muted: {
          DEFAULT: "#667085",
          foreground: "#667085",
          background: "#F2F4F7",
        },
        success: {
          DEFAULT: "#12B76A",
          light: "#E7F8F0",
        },
        warning: {
          DEFAULT: "#F79009",
          light: "#FEF6E7",
        },
        danger: {
          DEFAULT: "#F04438",
          light: "#FEF3F2",
        },
        info: {
          DEFAULT: "#2E90FA",
          light: "#EAF4FE",
        },
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Cairo", "Segoe UI", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06)",
        pop: "0 4px 6px -2px rgba(16,24,40,0.05), 0 12px 16px -4px rgba(16,24,40,0.08)",
        float: "0 8px 24px -6px rgba(21,87,214,0.25)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out",
        "scale-in": "scale-in 0.15s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;