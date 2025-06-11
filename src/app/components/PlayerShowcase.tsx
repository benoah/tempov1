"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useCallback, useMemo } from "react";

// ============================================
// Type Definitions
// ============================================
interface Player {
  id: string;
  name: string;
  position: string;
  club: string;
  imageUrl: string;
  nationality?: string;
  jerseyNumber?: string;
}

interface PlayerCardProps {
  player: Player;
  index: number;
  priority?: boolean;
}

// ============================================
// Design System
// ============================================
const DESIGN_SYSTEM = {
  colors: {
    accent: "#00DC82",
    black: "#000000",
    gray: {
      500: "#6B7280",
      600: "#4B5563",
    },
  },
  animation: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  typography: {
    h2: "clamp(2.5rem, 5vw + 1rem, 3.75rem)",
    body: "clamp(1rem, 1.5vw, 1.125rem)",
  },
} as const;

// ============================================
// Data (would typically come from API/CMS)
// ============================================
const PLAYERS_DATA: Player[] = [
  {
    id: "Mikail Adampour",
    name: "Mikail Adampour",
    position: "CEO",
    club: "Licensed Agent by the English and Norwegian FA",
    nationality: "Norge",
    jerseyNumber: "8",
    imageUrl: "/Mikail.jpeg", // <- updated path
  },
  {
    id: "erling-haaland",
    name: "Erling Haaland",
    position: "Angrep",
    club: "Manchester City",
    nationality: "Norge",
    jerseyNumber: "9",
    imageUrl: "/images/players/haaland.jpg",
  },
  {
    id: "caroline-graham",
    name: "Caroline Graham",
    position: "Forsvar",
    club: "Chelsea FC",
    nationality: "Norge",
    jerseyNumber: "14",
    imageUrl: "/images/players/graham.jpg",
  },
];

// ============================================
// Animation Variants
// ============================================
const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DESIGN_SYSTEM.animation.duration,
        ease: DESIGN_SYSTEM.animation.ease,
      },
    },
  },
};

// ============================================
// Sub-components
// ============================================

// Image component with proper loading states
function PlayerImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => setIsLoaded(true), []);
  const handleError = useCallback(() => setHasError(true), []);

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Error fallback */}
      {hasError ? (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center p-4">
            <svg
              className="w-12 h-12 mx-auto text-gray-400 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p className="text-sm text-gray-500">Bilde ikke tilgjengelig</p>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className={`
            object-cover transition-all duration-700
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
          onLoad={handleLoad}
          onError={handleError}
          priority={priority}
          quality={90}
        />
      )}
    </div>
  );
}

// Individual Player Card
function PlayerCard({ player, index, priority = false }: PlayerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const cardContent = useMemo(
    () => (
      <>
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <div
            className={`
          relative w-full h-full
          ${
            !shouldReduceMotion
              ? "transition-transform duration-700 ease-out"
              : ""
          }
          ${isHovered && !shouldReduceMotion ? "scale-105" : "scale-100"}
        `}
          >
            <PlayerImage
              src={player.imageUrl}
              alt={`${player.name} - ${player.position} for ${player.club}`}
              priority={priority}
            />

            {/* Grayscale filter overlay */}
            <div
              className={`
            absolute inset-0 bg-black transition-opacity duration-500
            ${isHovered ? "opacity-0" : "opacity-0"}
            mix-blend-color
          `}
            />
          </div>

          {/* Hover Overlay */}
          <div
            className={`
          absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
          flex items-end justify-start p-6
          transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
          >
            <div className="transform transition-transform duration-300">
              <p className="text-white text-sm font-medium tracking-wide mb-2">
                SE PROFIL
              </p>
              {player.jerseyNumber && (
                <p className="text-white/70 text-xs">
                  #{player.jerseyNumber} • {player.nationality}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className={`
          text-xl font-bold transition-colors duration-300
          ${isHovered ? "text-[#00DC82]" : "text-black"}
        `}
          >
            {player.name}
          </h3>
          <p className="mt-1 text-gray-600 text-sm">
            {player.position} • {player.club}
          </p>
        </div>
      </>
    ),
    [player, isHovered, priority, shouldReduceMotion]
  );

  return (
    <motion.article
      variants={animationVariants.card}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/players/${player.id}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00DC82] rounded-lg"
        aria-label={`View profile of ${player.name}, ${player.position} for ${player.club}`}
      >
        {cardContent}
      </Link>
    </motion.article>
  );
}

// View All Players Link
function ViewAllPlayersLink() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <Link
        href="/players"
        className="inline-flex items-center gap-2 text-[#00DC82] font-semibold hover:text-[#00B86F] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00DC82] rounded-md px-2 py-1"
      >
        <span>Se alle 47 spillere</span>
        <svg
          className="w-5 h-5 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </motion.div>
  );
}

// ============================================
// Main PlayerShowcase Component
// ============================================
export default function PlayerShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="our-team"
      className="bg-gray-50 py-24 md:py-32"
      aria-labelledby="players-heading"
    >
      <div className="max-w-[90rem] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            id="players-heading"
            className="font-bold text-black leading-tight"
            style={{ fontSize: DESIGN_SYSTEM.typography.h2 }}
          >
            VÅRE ANSATTE
          </h2>
          <p
            className="mt-4 text-gray-600 max-w-2xl"
            style={{ fontSize: DESIGN_SYSTEM.typography.body }}
          >
            Vi representerer 47 profesjonelle spillere i Europas toppligaer.
          </p>
        </motion.header>

        {/* Players Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={
            !shouldReduceMotion ? animationVariants.container : undefined
          }
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PLAYERS_DATA.map((player, index) => (
            <PlayerCard
              key={player.id}
              player={player}
              index={index}
              priority={index < 3} // Prioritize first 3 images
            />
          ))}
        </motion.div>

        {/* View All Link */}
        <ViewAllPlayersLink />
      </div>
    </section>
  );
}
