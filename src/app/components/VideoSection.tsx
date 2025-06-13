"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VideoSection({
  className = "",
}: {
  className?: string;
}) {
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
      id="about-tempo"
      className={`scroll-mt-20 relative w-full bg-black text-white ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-20"
        >
          {/* Hidden heading for accessibility & SEO */}
          <h2 className="sr-only">Tempo Sports Group Services</h2>

          {/* Left Column */}
          <div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ELEVATING <br />
              <span className="text-[#00DC82]">ELITE ATHLETES</span> <br />
              SINCE 2014
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-10 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              From seasoned pros to rising talents, we guide every athlete with
              strategy, care, and precision. Whether you're chasing your next
              contract or just starting your journey — we're in your corner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                title="Contact Tempo Sports Group to become a client"
                className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-300"
                aria-label="Join Tempo Sports Group as a client"
              >
                Join Tempo Sports Group
              </a>
            </motion.div>
          </div>

          {/* Right Column – Services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <motion.h3 className="text-2xl font-semibold tracking-tight mb-3">
                  {service.title}
                </motion.h3>
                <motion.p className="text-gray-300 text-[17px] leading-relaxed font-light tracking-wide">
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-3 gap-8 border-t border-white/20 pt-12 text-center"
        >
          <div>
            <div className="text-3xl font-light">2014</div>
            <div className="text-gray-500 text-sm mt-1">Established</div>
          </div>
          <div>
            <div className="text-3xl font-light">47+</div>
            <div className="text-gray-500 text-sm mt-1">Elite Athletes</div>
          </div>
          <div>
            <div className="text-3xl font-light">#1</div>
            <div className="text-gray-500 text-sm mt-1">In Norway</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
