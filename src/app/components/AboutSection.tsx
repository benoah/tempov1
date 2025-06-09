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
          <div className="text-center lg:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 lg:mb-5">
              <div className="w-3 h-0.5 bg-green-500"></div>
              <p className="font-semibold text-green-500 uppercase tracking-wider text-sm">
                Hvem vi er
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 dark:text-white leading-tight md:leading-tight">
              Mer enn et agentur –{" "}
              <span className="text-green-500">din karrierepartner</span>
            </h2>

            <div className="mt-8 space-y-5">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Vi ble grunnlagt med en enkel visjon: å sette spillerens
                karriere og velvære først. Vårt team består av erfarne agenter,
                jurister og markedsførere som brenner for fotball og for å
                realisere potensialet til hver enkelt spiller vi jobber med.
              </p>

              <div className="pl-5 border-l-2 border-green-500/30">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  Vi tror på ærlighet, transparens og hardt arbeid som
                  grunnlaget for langvarig suksess, både på og utenfor banen.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
