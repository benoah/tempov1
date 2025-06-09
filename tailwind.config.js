/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Her forteller vi Tailwind om fargene våre
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Vi kan også legge til egne merkevarefarger
        primary: {
          DEFAULT: "#2563EB", // En fin blåfarge
          foreground: "#FFFFFF", // Tekst som passer oppå primærfargen
        },
        secondary: {
          DEFAULT: "#F6F3EC", // Varm off-white
          foreground: "#010103", // Nesten svart tekst
        },
      },
      // Her forteller vi Tailwind om fontene våre
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
