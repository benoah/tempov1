"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <header className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />

      {/* Layout Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-20 w-full pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column – Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WELCOME TO <br />
              <span className="text-[#00DC82]">TEMPO SPORTS GROUP</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We assist and elevate our client’s careers – both on and off the
              pitch.
            </motion.p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
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
            </motion.a>
          </motion.div>

          {/* Right Column – Video */}
          <motion.div
            className="flex-1 w-full relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <video
                src="/images/farge.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/videos/tempo-intro-poster.jpg"
                className="w-full h-auto max-h-[500px] object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="mt-8 flex justify-end space-x-6">
                <a
                  href="https://www.instagram.com/temposportsgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-[#00DC82] transition-colors text-2xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/temposportsgroup/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 hover:text-[#00DC82] transition-colors text-2xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </header>
  );
}
