// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Importer Navbar og Footer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Denne linjen sikrer at alle globale stiler gjelder

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        {/* Move the texture div inside the body */}
        <div className="fixed inset-0 bg-paper-texture bg-cover bg-center opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Test div - midlertidig */}
          <div className="bg-primary text-primary-foreground p-4 text-center">
            Test: Denne bør være grønn med hvit tekst
          </div>

          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
