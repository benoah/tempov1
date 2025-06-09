// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Importer Navbar og Footer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css"; // Denne linjen sikrer at alle globale stiler gjelder

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
      <div className="fixed inset-0 bg-paper-texture bg-cover bg-center opacity-[0.03] pointer-events-none"></div>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        {/* This background texture div is fine here. It sits behind everything. */}

        {/*
          KORREKSJON:
          Navbar, main, og Footer skal være *inni* denne div-en.
          Denne div-en fungerer som hoved-container for alt synlig innhold,
          plasserer det over bakgrunnsteksturen (med relative z-10) og
          strukturerer layouten (med flex flex-col min-h-screen).
        */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* 3. Legg til Navbar øverst */}
          <Navbar />

          {/* 4. Wrap 'children' i en <main>-tag med 'flex-grow'. */}
          <main className="flex-grow">{children}</main>

          {/* 5. Legg til Footer nederst */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
