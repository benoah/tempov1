// src/components/AboutSection.tsx

import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bilde av teamet eller kontoret */}
          <div className="order-last lg:order-first">
            <Image
              src="https://placehold.co/600x400/E5E7EB/4B5563?text=Vårt+Team"
              alt="Teamet bak agenturet"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>

          {/* Tekstinnhold */}
          <div className="text-center lg:text-left">
            <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase">
              Hvem vi er
            </p>
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
