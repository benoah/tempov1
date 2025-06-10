// src/components/VideoSection.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";

interface VideoSectionProps {
  videoSrc: string;
  className?: string;
}

export default function VideoSection({
  videoSrc,
  className = "",
}: VideoSectionProps) {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      title: "Clubs & Contracts",
      description:
        "Daily contact with clubs nationally and internationally. Our track record of maximizing deals is unmatched in Norway.",
      features: [
        "Contract negotiations",
        "Financial security",
        "Club relations",
        "Deal optimization",
      ],
    },
    {
      title: "Health Department",
      description:
        "The only agency in Scandinavia with its own health department. Annual checkups and injury prevention.",
      features: [
        "Annual health checkups",
        "Mental health support",
        "Injury prevention",
        "Rehabilitation guidance",
      ],
    },
    {
      title: "Sponsorships & Media",
      description:
        "Expert handling of PR situations and endorsement deal negotiations with calculated media exposure.",
      features: [
        "Media training",
        "PR management",
        "Endorsement deals",
        "Brand development",
      ],
    },
  ];

  return (
    <section
      id="football"
      className={`relative w-full min-h-screen overflow-hidden ${className}`}
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace(".mp4", ".webm")} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-green-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Header */}
              <div>
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6">
                  Football Excellence
                </div>

                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
                  Proudly representing{" "}
                  <span className="font-semibold">elite athletes</span> since
                  2014
                </h2>
              </div>

              {/* Main Description */}
              <div className="space-y-6">
                <p className="text-lg text-white/90 leading-relaxed font-light">
                  Our aim is to assist and elevate our client's careers. Whether
                  an established athlete is looking to elevate their career or a
                  parent is looking for advice and guidance: We are here!
                </p>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    We do more
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    We differ from traditional agencies that limit to only
                    contract negotiations. We provide complete service including
                    guidance on contracts, education, mental health, wealth
                    management and media training.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    The Tempo Way
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    We pride ourselves in our personal relationship with
                    clients, based on trust, understanding and mutual aim. Our
                    established network puts clients in position to move to the
                    right club nationally and internationally.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Services */}
            <motion.div variants={itemVariants} className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                        <span className="text-white/70 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom Section - Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-2xl font-light text-white mb-2">2014</div>
                <div className="text-white/70 text-sm">Established</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-2xl font-light text-white mb-2">
                  Only in Scandinavia
                </div>
                <div className="text-white/70 text-sm">
                  Own Health Department
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-2xl font-light text-white mb-2">
                  Norway #1
                </div>
                <div className="text-white/70 text-sm">
                  Deal Maximization Track Record
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <span>Become a Tempo Client</span>
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
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
