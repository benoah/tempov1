// src/components/Hero.tsx
import Link from "next/link";
// Image import is present but not used for the main hero visual.
// Keep it if used elsewhere in your project, otherwise you can remove it.
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-white/90 to-secondary/30 dark:from-gray-900/80 dark:via-gray-900/95 dark:to-gray-900 backdrop-blur-sm overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 dark:bg-primary/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/20 dark:bg-secondary/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            Din Partner for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">
                Profesjonell Fotballkarriere
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/40 dark:bg-primary/60 -rotate-1 -z-0"></span>
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Tempo Sports Group representerer talentfulle fotballspillere og
            bygger{" "}
            <span className="font-semibold text-primary dark:text-primary-light">
              bærekraftige karrierer
            </span>{" "}
            gjennom profesjonell veiledning og strategisk planlegging.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="relative px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] group
             custom-primary-textured-bg" // <-- ADDED CUSTOM CLASS
            >
              <span className="relative z-10 ">Kontakt Oss</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
            </Link>

            <Link
              href="/about"
              className="relative px-8 py-4 bg-white/90 dark:bg-gray-800 text-gray-800 dark:text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] group border border-gray-200 dark:border-gray-700"
            >
              <span className="relative z-10 ">Les Mer Om Oss</span>
              <span className="absolute inset-0 bg-gray-100/70 dark:bg-gray-700/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
            </Link>
          </div>
        </div>

        {/* Video/Graphics */}
        <div className="hidden lg:block relative">
          {/* Main container for the video, applying the same styling as the previous image */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* The video element */}
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              // Corrected: Video is now expected in public/images/
              src="/images/hero-football.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata" // Preload metadata to show poster quickly
              // Corrected: Poster image is also expected in public/images/
              poster="/images/hero-football-poster.jpg"
              aria-label="Background video of a professional football player in action"
            >
              {/* Corrected: Source paths for video formats */}
              <source src="/images/hero-football.webm" type="video/webm" />
              <source src="/images/hero-football.mp4" type="video/mp4" />
              {/* Fallback content for browsers that don't support video */}
              Your browser does not support the video tag.
            </video>

            {/* Gradient overlay on top of the video for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-2xl"></div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 animate-float">
            <div className="flex items-center">
              <div className="bg-primary w-3 h-3 rounded-full mr-2 animate-pulse"></div>
              <span className="font-bold  dark:text-white">+120 Spillere</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Representert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
