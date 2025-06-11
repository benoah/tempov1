"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Clubs & Contracts",
    description:
      "Daily contact with clubs nationally and internationally. Our track record of maximizing deals is unmatched in Norway.",
  },
  {
    number: "02",
    title: "Health Department",
    description:
      "The only agency in Scandinavia with its own health department. Annual checkups and injury prevention.",
  },
  {
    number: "03",
    title: "Cognitive Training",
    description:
      "Mental performance optimization and psychological support for peak athletic performance.",
  },
  {
    number: "04",
    title: "Media & Sponsorships",
    description:
      "PR handling, media training, and endorsement deal negotiations with calculated exposure.",
  },
  {
    number: "05",
    title: "Global Network",
    description:
      "Established partnerships with teams and agencies worldwide for international opportunities.",
  },
  {
    number: "06",
    title: "Social Responsibility",
    description:
      "National football scholarships and community support programs for young talents.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f9fafb] py-24 md:py-32">
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
            BUILT FOR YOUR JOURNEY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Every career is different. That’s why we go beyond contracts and
            phone calls — we support you physically, mentally, and personally
            from day one to retirement.
          </p>
        </motion.div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <span className="text-6xl font-light text-gray-300 group-hover:text-[#25723e] transition-colors">
                {service.number}
              </span>
              <h3 className="text-xl font-semibold text-black mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* The Tempo Way */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 border-t border-gray-200 pt-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-black mb-6">
                The Tempo Way
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We pride ourselves on personal relationships built on trust,
                understanding and shared goals. Our network across the
                footballing world is built on transparent and respectful
                conduct.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
              {[
                { value: "2014", label: "Established" },
                { value: "100%", label: "Client Focus" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center sm:items-start"
                >
                  <div className="text-5xl font-bold text-[#25723e] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-gray-500 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
