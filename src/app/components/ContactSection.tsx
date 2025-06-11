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
                href="mailto:hello@temposportsgroup.no"
                className="text-black hover:text-gray-600 transition-colors"
              >
                hello@temposportsgroup.no
              </a>
            </div>

            <div>
              <a
                href="tel:+4712345678"
                className="text-black hover:text-gray-600 transition-colors"
              >
                +47 123 45 678
              </a>
            </div>

            <div className="text-gray-600">Storgata 1, 0155 Oslo</div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                Or send us a message and we&rsquo;ll respond within 24 hours.
              </p>
              <a
                href="mailto:hello@temposportsgroup.no?subject=Player%20Inquiry"
                className="inline-block mt-6 px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-colors"
              >
                Start Conversation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
