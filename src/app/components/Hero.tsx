// src/components/Hero.tsx

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Tekst-innhold */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white sm:text-5xl lg:text-6xl">
            Din Partner for{" "}
            <span className="text-primary">Profesjonell Fotballkarriere</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Tempo Sports Group representerer talentfulle fotballspillere og
            bygger bærekraftige karrierer gjennom profesjonell veiledning og
            strategisk planlegging.
          </p>

          {/* Call-to-Action Knapper */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 transition-all duration-200 transform hover:scale-105"
            >
              Kontakt Oss
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all duration-200 transform hover:scale-105"
            >
              Les Mer Om Oss
            </Link>
          </div>
        </div>

        {/* Bilde/Grafikk */}
        <div className="hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2493"
            alt="Profesjonell fotballspiller i aksjon"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
