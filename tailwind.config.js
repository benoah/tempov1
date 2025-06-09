/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f3ec", // Direkte verdi
        foreground: "#010103",
        primary: {
          DEFAULT: "#25723e", // Direkte verdi
          light: "#2d8347",
          dark: "#1e5b32",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        "paper-texture": "url('/public/paper-texture.jpg')",
      },
    },
  },
  plugins: [],
};
