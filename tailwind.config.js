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
        // Oppdaterte merkevarefarger med grønn som primær
        primary: {
          DEFAULT: "#25723e", // Tempo Sports Group grønn
          light: "#2d8347",
          dark: "#1e5b32",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F6F3EC", // Varm off-white
          foreground: "#010103", // Nesten svart tekst
        },
        accent: {
          DEFAULT: "#2563EB", // Blå aksent
          foreground: "#FFFFFF",
        },
      },
      // Her forteller vi Tailwind om fontene våre
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      // Legger til bakgrunnsbilde
      backgroundImage: {
        "paper-texture": "url('/paper-texture.jpg')",
      },
    },
  },
  plugins: [],
};
