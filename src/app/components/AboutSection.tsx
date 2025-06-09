// src/components/AboutSection.tsx

import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bilde av teamet eller kontoret */}
          <div className="order-last lg:order-first">
            <Image
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070"
              alt="Profesjonelt team i møte"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>

          {/* Tekstinnhold */}
          <div className="text-center lg:text-left">
            <p className="font-semibold text-primary uppercase">Hvem vi er</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Mer enn et agentur – en karrierepartner
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Vi ble grunnlagt med en enkel visjon: å sette spillerens karriere
              og velvære først. Vårt team består av erfarne agenter, jurister og
              markedsførere som brenner for fotball og for å realisere
              potensialet til hver enkelt spiller vi jobber med.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Vi tror på ærlighet, transparens og hardt arbeid som grunnlaget
              for langvarig suksess, både på og utenfor banen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
