import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50:  "#fdf2f2",
          100: "#fce4e4",
          200: "#f9c9c9",
          300: "#f3a0a0",
          400: "#e96b6b",
          500: "#d94040",
          600: "#c42b2b",
          700: "#a32020",
          800: "#8B1A1A",
          900: "#711515",
          950: "#3f0808",
        },
        gold: {
          50:  "#fdfbeb",
          100: "#fbf5cc",
          200: "#f7e99b",
          300: "#f1d660",
          400: "#e9be2e",
          500: "#d4a017",
          600: "#b07c10",
          700: "#8c5d10",
          800: "#744a14",
          900: "#623e16",
          950: "#382008",
        },
        cream: {
          50:  "#fdfcf8",
          100: "#faf7f0",
          200: "#f5efe1",
          300: "#ede2cc",
          400: "#e0cfb0",
          500: "#d0b88e",
          600: "#bc9d6c",
          700: "#a17f52",
          800: "#856743",
          900: "#6d5438",
          950: "#3a2c1c",
        },
        sage: {
          50:  "#f4f7f4",
          100: "#e5ede6",
          200: "#ccdacd",
          300: "#a8bfaa",
          400: "#7fa083",
          500: "#5e8362",
          600: "#496952",
          700: "#3b5443",
          800: "#314438",
          900: "#293830",
          950: "#141f19",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-in": "slideIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
