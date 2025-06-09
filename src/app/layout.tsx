// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Importer Navbar og Footer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Oppdater metadata med din egen informasjon
export const metadata: Metadata = {
  title: "Ditt Agentur AS - Fotballagentur", // Endre til ditt navn
  description:
    "Vi representerer profesjonelle fotballspillere og bygger karrierer.", // Endre til din beskrivelse
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      {/*
        VIKTIG ENDRING HER:
        Vi legger til 'bg-background' og 'text-foreground'.
        Disse klassene kommer fra din tailwind.config.js og henter
        verdiene fra CSS-variablene --background og --foreground
        som er definert i globals.css.
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased flex flex-col min-h-screen`}
      >
        {/* 3. Legg til Navbar øverst */}
        <Navbar />

        {/* 4. Wrap 'children' i en <main>-tag med 'flex-grow'.
          Dette sørger for at innholdet fyller plassen og dytter footeren pent ned på sider med lite innhold.
        */}
        <main className="flex-grow">{children}</main>

        {/* 5. Legg til Footer nederst */}
        <Footer />
      </body>
    </html>
  );
}
