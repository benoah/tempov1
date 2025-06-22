"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// Types
interface Employee {
  id: string;
  name: string;
  position: string;
  club: string;
  imageUrl: string;
  nationality?: string;
  jerseyNumber?: string;
}

interface EmployeeCardProps {
  player: Employee;
  priority?: boolean;
}

// Design Tokens
const DESIGN = {
  colors: { accent: "#00DC82", gray600: "#4B5563" },
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
  h2: "clamp(2.5rem, 5vw + 1rem, 3.75rem)",
  body: "clamp(1rem, 1.5vw, 1.125rem)",
};

// Team Data
const EMPLOYEES_DATA: Employee[] = [
  {
    id: "mikail-adampour",
    name: "Mikail Adampour",
    position: "CEO",
    club: "Licensed Agent by the English and Norwegian FA",
    imageUrl: "/Mikail.jpg",
  },
  {
    id: "william-israelsen",
    name: "William Israelsen",
    position: "Head of Football",
    club: "",
    imageUrl: "/william.jpg",
  },
  {
    id: "mathias-martens",
    name: "Mathias Martens",
    position: "Agent",
    club: "",
    imageUrl: "/Mathias.jpeg",
  },
  {
    id: "efe-ozulu",
    name: "Efe Özulu",
    position: "Social Media Manager & Scout",
    club: "",
    imageUrl: "/efe.jpg",
  },
  {
    id: "mirza-sahman",
    name: "Mirza Sahman",
    position: "Agent & Scout",
    club: "",
    imageUrl: "",
  },
];

// Animations
const animation = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DESIGN.duration, ease: DESIGN.ease },
    },
  },
};

// Image Component
function EmployeeImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {error ? (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <p className="text-sm text-gray-500">Bilde ikke tilgjengelig</p>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          priority={priority}
        />
      )}
    </div>
  );
}

// Card Component
function EmployeeCard({ player, priority }: EmployeeCardProps) {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={animation.card}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={`/team/${player.id}`}
        className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00DC82] rounded-lg"
        aria-label={`Se profil for ${player.name}`}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <div
            className={`
              relative w-full h-full
              ${!reduceMotion ? "transition-transform duration-700" : ""}
              ${hovered && !reduceMotion ? "scale-105" : "scale-100"}
            `}
          >
            <EmployeeImage
              src={player.imageUrl}
              alt={`${player.name} – ${player.position}`}
              priority={priority}
            />
          </div>

          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex items-end transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <p className="text-white text-sm font-medium mb-2">SE PROFIL</p>
              {player.jerseyNumber && (
                <p className="text-white/70 text-xs">
                  #{player.jerseyNumber} • {player.nationality}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3
            className={`text-xl font-bold ${
              hovered ? "text-[#00DC82]" : "text-black"
            }`}
          >
            {player.name}
          </h3>
          <p className="mt-1 text-gray-600 text-sm">
            {player.position} • {player.club}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

// Main Component
export default function EmployeeShowcase() {
  const reduceMotion = useReducedMotion();
  const [showMore, setShowMore] = useState(false);

  const firstRow = EMPLOYEES_DATA.slice(0, 3);
  const secondRow = EMPLOYEES_DATA.slice(3);

  return (
    <section
      id="our-team"
      className="bg-gray-50 py-24 md:py-32"
      aria-labelledby="team-heading"
    >
      <div className="max-w-[90rem] mx-auto px-6 lg:px-20">
        <motion.header
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            id="team-heading"
            className="font-bold text-black"
            style={{ fontSize: DESIGN.h2 }}
          >
            MEET OUR TEAM
          </h2>
          <p
            className="mt-4 text-gray-600 max-w-2xl"
            style={{ fontSize: DESIGN.body }}
          >
            We are an experienced team dedicated to helping professional
            footballers build their careers — on and off the pitch.
          </p>
        </motion.header>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={!reduceMotion ? animation.container : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {firstRow.map((player, index) => (
            <EmployeeCard
              key={player.id}
              player={player}
              priority={index < 3}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {secondRow.map((player) => (
                <EmployeeCard key={player.id} player={player} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 text-[#00DC82] font-semibold hover:text-[#00B86F] transition-colors"
          >
            <span>{showMore ? "Vis færre" : "Se hele teamet"}</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
