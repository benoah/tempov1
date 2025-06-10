// src/components/AboutSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const slideInLeft = {
    hidden: { x: -80, opacity: 0 },
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
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      value: "120+",
      label: "Active Players",
      description: "Professional footballers represented worldwide",
      icon: "⚽",
    },
    {
      value: "€250M+",
      label: "Transfer Value",
      description: "Combined market value of our player portfolio",
      icon: "💰",
    },
    {
      value: "25+",
      label: "Countries",
      description: "Global reach across major football markets",
      icon: "🌍",
    },
    {
      value: "98%",
      label: "Success Rate",
      description: "Successful contract negotiations and transfers",
      icon: "📊",
    },
  ];

  const achievements = [
    "Official FIFA-licensed agent company",
    "Partnerships with top European clubs",
    "Specialized in Scandinavian talent development",
    "Award-winning player development programs",
  ];

  return (
    <section
      id="social-responsibility"
      className="relative bg-gradient-to-br from-white via-gray-50/50 to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23000000 fill-opacity=0.1%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content Section */}
          <motion.div variants={slideInLeft} className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider text-sm">
                Premier Football Agency
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                More than an agency –{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
                  your career partner
                </span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded with a simple vision: to put the player's career and
                well-being first. Our team consists of experienced agents,
                lawyers, and marketers who are passionate about football and
                realizing the potential of every player we work with.
              </p>

              <blockquote className="relative pl-6 border-l-4 border-green-500/50 bg-green-50/50 dark:bg-green-900/20 py-4 rounded-r-lg">
                <p className="text-lg text-gray-700 dark:text-gray-200 italic">
                  "We believe in honesty, transparency, and hard work as the
                  foundation for long-term success, both on and off the pitch."
                </p>
                <cite className="block mt-2 text-sm font-semibold text-green-600 dark:text-green-400">
                  — Tempo Sports Group Philosophy
                </cite>
              </blockquote>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Key Achievements & Credentials:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image and Stats Section */}
          <motion.div variants={slideInRight} className="space-y-8">
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl transform scale-105 group-hover:scale-110 transition-transform duration-500"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070"
                  alt="Professional team meeting at Tempo Sports Group"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">T</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Tempo Sports Group
                      </div>
                      <div className="text-sm text-gray-600">Since 2014</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="relative group p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center space-y-2">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                      {stat.label}
                    </div>

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredStat === index ? 1 : 0,
                        scale: hoveredStat === index ? 1 : 0.8,
                      }}
                      className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10"
                    >
                      {stat.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </motion.div>
                  </div>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Ready to elevate your football career?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join the elite group of players who trust Tempo Sports Group with
              their professional journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Get in Touch</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
