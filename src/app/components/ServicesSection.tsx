// src/components/ServicesSection.tsx

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Modern Professional Icons
const ContractIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const HealthIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const BrainIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const MediaIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
);

const NetworkIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const SocialIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const mainServices = [
  {
    title: "Clubs & Contracts",
    description:
      "Daily contact with clubs nationally and internationally. Our track record of maximizing deals is unmatched in Norway.",
    icon: <ContractIcon />,
    features: [
      "Contract negotiations",
      "Financial security",
      "Best possible terms",
      "International network",
    ],
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "Health Department",
    description:
      "The only agency in Scandinavia with its own health department. Annual checkups and injury prevention.",
    icon: <HealthIcon />,
    features: [
      "Annual health checkups",
      "Injury prevention",
      "Mental health support",
      "Rehabilitation guidance",
    ],
    color: "from-green-600 to-green-800",
  },
  {
    title: "Cognitive Training",
    description:
      "Mental performance optimization and psychological support for peak athletic performance.",
    icon: <BrainIcon />,
    features: [
      "Mental coaching",
      "Performance psychology",
      "Stress management",
      "Focus enhancement",
    ],
    color: "from-purple-600 to-purple-800",
  },
];

const additionalServices = [
  {
    title: "Media & Sponsorships",
    description:
      "PR handling, media training, and endorsement deal negotiations.",
    icon: <MediaIcon />,
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Global Network",
    description: "Established partnerships with teams and agencies worldwide.",
    icon: <NetworkIcon />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Social Responsibility",
    description:
      "National football scholarships and community support programs.",
    icon: <SocialIcon />,
    color: "from-emerald-500 to-green-600",
  },
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="football"
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=80 height=80 viewBox=0 0 80 80 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23000000 fill-opacity=0.1%3E%3Cpath d=M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-opacity=0.05/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider text-sm">
              Complete Service Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            We do{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 bg-clip-text text-transparent">
              more
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We differ from traditional agencies that limit to only contract
            negotiations. Our aim is to take care of every aspect of our
            clients' careers with complete service coverage.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full mx-auto mt-8"></div>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Icon */}
              <div
                className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                      ></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredService === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                  style={{ transformOrigin: "left" }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} mb-4 shadow-md`}
              >
                {service.icon}
              </div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* The Tempo Way Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The <span className="text-blue-600">Tempo</span> Way
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              We pride ourselves in our personal relationship with our clients,
              based on trust, understanding and mutual aim. Our established
              network across the footballing world is the result of transparent
              and respectful conduct.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">2014</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Established
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Client Focus
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Support
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
