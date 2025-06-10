// src/components/PlayerShowcase.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const players = [
  {
    name: "Omar Elabdellaoui",
    position: "Right Back",
    club: "Galatasaray SK",
    nationality: "🇳🇴",
    marketValue: "€2.5M",
    imageUrl:
      "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?q=80&w=1000",
    profileUrl: "/players/omar-elabdellaoui",
    stats: { matches: 156, goals: 8 },
    featured: true,
  },
  {
    name: "Mikail Adampour",
    position: "Midfielder",
    club: "Lillestrøm SK",
    nationality: "🇳🇴",
    marketValue: "€800K",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000",
    profileUrl: "/players/mikail-adampour",
    stats: { matches: 89, goals: 12 },
    featured: false,
  },
  {
    name: "Erik Sandberg",
    position: "Forward",
    club: "Molde FK",
    nationality: "🇳🇴",
    marketValue: "€1.2M",
    imageUrl:
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?q=80&w=1000",
    profileUrl: "/players/erik-sandberg",
    stats: { matches: 67, goals: 23 },
    featured: false,
  },
  {
    name: "Andreas Hansen",
    position: "Goalkeeper",
    club: "FC Copenhagen",
    nationality: "🇩🇰",
    marketValue: "€1.8M",
    imageUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000",
    profileUrl: "/players/andreas-hansen",
    stats: { matches: 134, saves: 421 },
    featured: false,
  },
  {
    name: "Sofia Lindström",
    position: "Midfielder",
    club: "Arsenal WFC",
    nationality: "🇸🇪",
    marketValue: "€650K",
    imageUrl:
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=1000",
    profileUrl: "/players/sofia-lindstrom",
    stats: { matches: 78, goals: 15 },
    featured: false,
  },
  {
    name: "Lars Andersen",
    position: "Defender",
    club: "Ajax Amsterdam",
    nationality: "🇳🇱",
    marketValue: "€3.2M",
    imageUrl:
      "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=1000",
    profileUrl: "/players/lars-andersen",
    stats: { matches: 112, goals: 4 },
    featured: false,
  },
];

export default function PlayerShowcase() {
  const [hoveredPlayer, setHoveredPlayer] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="our-team" className="bg-white dark:bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            Our Athletes
          </div>

          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
            Elite Players
          </h2>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Meet the exceptional athletes who trust us with their careers
          </p>
        </motion.div>

        {/* Clean Players Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {players.map((player, index) => (
            <motion.div
              key={player.name}
              variants={cardVariants}
              onHoverStart={() => setHoveredPlayer(index)}
              onHoverEnd={() => setHoveredPlayer(null)}
              className="group relative"
            >
              <Link href={player.profileUrl}>
                <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Featured Badge */}
                  {player.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  )}

                  {/* Player Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={player.imageUrl}
                      alt={player.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Market Value */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded-md">
                        {player.marketValue}
                      </div>
                    </div>
                  </div>

                  {/* Player Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {player.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {player.club}
                        </p>
                      </div>
                      <span className="text-lg">{player.nationality}</span>
                    </div>

                    {/* Position */}
                    <div className="inline-block text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md mb-4">
                      {player.position}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">
                          Matches:
                        </span>
                        <span className="ml-1 font-medium text-gray-900 dark:text-white">
                          {player.stats.matches}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">
                          {player.position === "Goalkeeper"
                            ? "Saves:"
                            : "Goals:"}
                        </span>
                        <span className="ml-1 font-medium text-gray-900 dark:text-white">
                          {player.stats.goals || player.stats.saves}
                        </span>
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{
                        x: hoveredPlayer === index ? 0 : -10,
                        opacity: hoveredPlayer === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-6 right-6"
                    >
                      <div className="w-6 h-6 text-gray-400 dark:text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              <span>Apply for Representation</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
