// src/components/Hero.tsx

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Tekst-innhold */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white sm:text-5xl lg:text-6xl">
            Bygg Fremtiden med Vår Teknologi
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Vi leverer innovative og skalerbare løsninger som hjelper din
            bedrift med å vokse i en digital verden. Utforsk våre tjenester i
            dag.
          </p>

          {/* Call-to-Action Knapper */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/get-started"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
            >
              Kom i Gang
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
            >
              Lær Mer
            </Link>
          </div>
        </div>

        {/* Bilde/Grafikk */}
        <div className="hidden lg:block">
          <Image
            src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Din+Grafikk+Her"
            alt="En beskrivende tekst for bildet"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
            priority // Viktig for LCP (Largest Contentful Paint) i en hero
          />
        </div>
      </div>
    </section>
  );
}
