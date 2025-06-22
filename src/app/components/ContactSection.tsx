"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12">
            GET IN TOUCH
          </h2>

          <div className="space-y-8 text-lg">
            <div>
              <a
                href="mailto:william@tempogroup.no"
                className="text-black hover:text-gray-600 transition-colors"
              >
                @tempogroup.no
              </a>
            </div>

            <div>
              <a
                href="tel:+4740761888"
                className="text-black hover:text-gray-600 transition-colors"
              >
                +47 407 61 888
              </a>
            </div>

            <div>
              <a
                href="https://maps.google.com/?q=Pilestredet+75C,+0155+Oslo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Pilestredet 75C, 0155 Oslo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
