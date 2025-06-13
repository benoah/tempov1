// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tempo Sports Group | Fotballagentfirma i Norge",
  description:
    "Tempo Sports Group representerer profesjonelle fotballspillere som Lasse Nordås, Taofeek Ismaheel og Lars Olden Larsen. Ledet av Mikail Adampour, med Efe Özulu og William Israelsen i teamet, tilbyr vi helhetlig karriereutvikling for både spillere og trenere.",
  keywords: [
    // Firma og tjeneste
    "Tempo Sports Group",
    "fotballagent",
    "idrettsagent",
    "fotballkarriere",
    "sports management",
    "fotball Norge",
    "spillerovergang",
    "profesjonell fotballspiller",

    // Ansatte og ledelse
    "Mikail Adampour",
    "Mikail Adampour agent",
    "Mikail Adampour Tempo Sports",
    "Efe Özulu",
    "Efe Özulu Chelsea",
    "William Israelsen",
    "William Israelsen Chelsea",
    "licensed football agent",
    "UEFA A Licence Coach",

    // Trenere
    "Christian Michelsen Sarpsborg 08",
    "Magnus Aadland",
    "Marius Jacobsen Tromsø",

    // Spillere (utvalg av mest profilerte + generelle søk)
    "Lasse Nordås",
    "Taofeek Ismaheel",
    "Mikkel Rakneberg",
    "Stian Kristiansen",
    "Lars Olden Larsen",
    "Simen Hestnes",
    "Kristoffer Tønnessen",
    "Mustapha Isah",
    "Bo Åsulv Hegland",
    "Kristian Strømland Lien",
    "Mats Pedersen",
    "Vegard Solheim",
    "Fredrik Berglie",
    "Morten Konradsen",
    "Adrian Kurd Rønning",
    "Parfait Bizoza",
    "Nicolas Pignatel Jenssen",
    "Sondre Liseth",
    "Sander Sjøkvist",
    "Philip Slørdahl",
    "Ayoub Aleesami",
    "Jesper Gregersen",
    "Wilfred George Igor",
    "Martin Sjølstad",
    "Håkon Vold Krohg",
    "Mathias Enger Eriksen",
    "Marius Cassidy",
    "Ian Hoffmann",
    "Artan Memedov",
    "Sivert Øverby",
    "Blerton Isufi",
    "Kristoffer Lassen Harrison",
    "Yasir Abdiqadir Sa'Ad",
    "Mirza Mulac",
    "Brinder Singh",
    "Sander Bratvold",
    "Awet Ermias Alemseged",
    "Isak Gabriel Skotheim",
    "Niclas Schjøth Semmen",
    "Simo Lampinen-Skaug",
    "Aleksander van der Spa",
    "Theodor Martin Agelin",
    "Abbati Abdullahi",
    "Bendik Brevik",
    "Jakob Rømo Skille",
    "Davod Arzani",
    "Jonas Sørensen Selnæs",
    "Andreas Endresen",
    "Daniel Arrocha",
    "Max Bjurström",
  ],
  authors: [
    { name: "Tempo Sports Group", url: "https://www.temposportsgroup.no" },
  ],
  metadataBase: new URL("https://www.temposportsgroup.no"),
  alternates: {
    canonical: "https://www.temposportsgroup.no",
  },
  openGraph: {
    title: "Tempo Sports Group | Bygger karrierer – ikke bare kontrakter",
    description:
      "Vi representerer toppspillere som Lasse Nordås, Taofeek Ismaheel og flere. Med Mikail Adampour som CEO og et sterkt team av trenere og speidere bygger vi fremtidens fotballkarrierer.",
    url: "https://www.temposportsgroup.no",
    siteName: "Tempo Sports Group",
    type: "website",
    locale: "no_NO",
    images: [
      {
        url: "https://www.temposportsgroup.no/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tempo Sports Group logo og slagord",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempo Sports Group",
    description:
      "Fotballagentfirma i Norge. Vi representerer både spillere og trenere – med fokus på langsiktig utvikling.",
    images: ["https://www.temposportsgroup.no/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={inter.variable}>
      <body className="font-sans bg-white text-black antialiased">
        <main>
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
