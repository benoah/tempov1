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
  const services = [
    {
      title: "Clubs & Contracts",
      description:
        "Daily contact with clubs nationally and internationally. Our track record of maximizing deals is unmatched in Norway.",
    },
    {
      title: "Health Department",
      description:
        "The only agency in Scandinavia with its own health department. Annual checkups and injury prevention.",
    },
    {
      title: "Sponsorships & Media",
      description:
        "Expert handling of PR situations and endorsement deal negotiations with calculated media exposure.",
    },
  ];

  return (
    <section
      id="football"
      className={`relative w-full h-[50vh] min-h-[400px] bg-black overflow-hidden ${className}`}
    >
      {/* Background Video */}
      <div className="absolute inset-0 h-full w-full">
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-20 py-10 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Left Column */}
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                ELEVATING <br />
                <span className="text-[#00DC82]">ELITE ATHLETES</span>
              </motion.h2>

              <motion.p
                className="text-sm md:text-base text-gray-300 mb-6 font-light leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                From pros to prospects — we help athletes grow, win, and
                maximize their careers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm"
                >
                  Become a Tempo Client
                </a>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-snug font-light">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
