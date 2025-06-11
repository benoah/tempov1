"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white py-24 md:py-32 border-t border-gray-100"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            THE TEMPO STORY
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            We’re not just agents — we’re mentors, strategists, and lifelong
            partners. Since 2014, Tempo Sports Group has helped athletes build
            real, lasting careers — on and off the pitch.
          </p>
        </motion.div>

        {/* Two Column Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-16"
        >
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Our Philosophy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A football career is more than just games and goals. We help
              players grow — as athletes and as people. Mental health, financial
              security, and long-term planning matter just as much as talent.
            </p>

            <blockquote className="mt-12 border-l-4 border-[#00DC82] pl-6 text-black text-lg italic">
              &ldquo;Tempo believed in me before anyone else did.&rdquo;
              <footer className="mt-2 text-sm text-gray-500">
                — Former Tempo Athlete
              </footer>
            </blockquote>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              What Sets Us Apart
            </h3>
            <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
              <li>
                <strong>Health-first approach:</strong> The only agency in
                Scandinavia with its own in-house medical team.
              </li>
              <li>
                <strong>Global reach:</strong> We connect players with top clubs
                across Europe, Africa, and Asia.
              </li>
              <li>
                <strong>Full-circle support:</strong> From contracts to media
                training and post-career planning.
              </li>
              <li>
                <strong>Built on values:</strong> Our social commitment is more
                than words — it’s action.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
