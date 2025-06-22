"use client";

import { motion } from "framer-motion";

export default function SocialResponsibilitySection() {
  return (
    <section id="social-responsibility" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            FOOTBALL FOR EVERYONE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            We started Tempo because we believe talent should not be limited by
            money, background, or borders. Everyone deserves a chance — and this
            is how we help.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Stipend */}
            <div>
              <h3 className="text-3xl font-semibold text-black mb-4">
                National Football Scholarship (01.01.2024)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Since we started Tempo Sports Group, our motto has always been
                to put the player first. In a world full of injustice, we
                believe everyone should have the chance to play football — no
                matter their financial situation.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Football was once one of the world’s most accessible sports.
                Now, increasing numbers of young people are being left out due
                to costs like equipment, club fees, or training programs.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our national football scholarship aims to help remove those
                barriers. We can’t help everyone — but we’ll do what we can.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                If expensive gear, fees, or other costs are holding you back
                from playing, reach out to us at{" "}
                <a
                  href="mailto:stipend@tempogroup.no"
                  className="text-[#25723e] underline"
                >
                  stipend@tempogroup.no
                </a>{" "}
                and tell us about your situation. We promise a quick response.
              </p>
            </div>

            {/* Donasjon */}
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-3xl font-semibold text-black mb-4">
                Annual Community Donation (01.01.2024)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In the face of this autumn’s tragedies, we chose to support
                Palestinakomiteen in Norway with a NOK 25,000 donation — our
                first community donation.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                For decades, Palestinakomiteen has worked for solidarity and
                justice. They play a key role in raising awareness about the
                effects of occupation and apartheid on daily life and future
                hopes for Palestinians.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 italic">
                “We do not receive government funding, so this donation helps us
                continue working independently and in solidarity with the
                Palestinian people,” said Lene Khateeb, leader of
                Palestinakomiteen.
              </p>
              <p className="text-sm text-gray-500 mt-4">2023 Recipient</p>
            </div>
          </motion.div>

          {/* Right content: Optional quote or placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-4 shadow-inner flex items-center justify-center"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/5e956eee226232107a0bc361/d0092ff1-8308-4825-ac20-d5e45b52ae23/PR_NOR_010124+%283%29.png?format=2500w"
              alt="Tempo Sports Group Donation"
              className="rounded-lg max-h-[500px] w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
