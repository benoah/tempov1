// src/components/Hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const buttonTap = {
    scale: 0.98,
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23000000 fill-opacity=0.02%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 bg-green-400/10 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Tekstinnhold - med forbedrede animasjoner */}
          <motion.div
            variants={slideInLeft}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge/Tag */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Professional Football Agent
            </motion.div>

            {/* Hovedtittel med gradient tekst */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
            >
              Welcome to the{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-green-600 bg-clip-text text-transparent animate-gradient">
                Tempo family
              </span>
            </motion.h1>

            {/* Undertekst */}
            <motion.p
              variants={fadeInUp}
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              We assist and elevate our client's careers{" "}
              <span className="font-semibold text-primary">
                – both on and off the pitch.
              </span>
            </motion.p>

            {/* Statistikk/Tillitsindikatorer */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-8 justify-center lg:justify-start py-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">120+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Players
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Leagues
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years experience
                </div>
              </div>
            </motion.div>

            {/* CTA Knapper med forbedret design */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get Represented
                    <motion.svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>

              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Why Choose Us?
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Video seksjon med forbedret design */}
          <motion.div
            variants={slideInRight}
            className="relative hidden lg:block"
          >
            {/* Glowing effect behind video */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-400/20 rounded-3xl blur-3xl transform scale-110"></div>

            {/* Main video container */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <video
                  className="w-full h-[450px] object-cover rounded-3xl"
                  src="/images/hero-football.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/hero-football-poster.jpg"
                  aria-label="Background video of a professional football player in action"
                >
                  <source src="/images/hero-football.webm" type="video/webm" />
                  <source src="/images/hero-football.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </motion.div>

              {/* Floating cards with player stats/info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Active now
                    </div>
                    <div className="text-sm text-gray-600">
                      25 players online
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-primary/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl text-white"
              >
                <div className="font-bold text-2xl">98%</div>
                <div className="text-sm opacity-90">Success rate</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
