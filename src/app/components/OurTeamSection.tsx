// src/components/OurTeamSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface TeamMember {
  name: string;
  position: string;
  specialization: string;
  experience: string;
  imageUrl: string;
  email: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Marcus Eriksen",
    position: "Founder & CEO",
    specialization: "Player Representation",
    experience: "15+ years",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
    email: "marcus@temposportsgroup.no",
    linkedin: "#",
  },
  {
    name: "Sofia Lindberg",
    position: "Head of Player Development",
    specialization: "Youth Academy Relations",
    experience: "12+ years",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1b5?q=80&w=1000",
    email: "sofia@temposportsgroup.no",
    linkedin: "#",
  },
  {
    name: "Andreas Mueller",
    position: "Legal Counsel",
    specialization: "Contract Negotiations",
    experience: "10+ years",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    email: "andreas@temposportsgroup.no",
    linkedin: "#",
  },
  {
    name: "Emma Johansson",
    position: "Marketing Director",
    specialization: "Brand Development",
    experience: "8+ years",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    email: "emma@temposportsgroup.no",
    linkedin: "#",
  },
  {
    name: "David Chen",
    position: "Scout Manager",
    specialization: "Talent Identification",
    experience: "14+ years",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1000",
    email: "david@temposportsgroup.no",
    linkedin: "#",
  },
  {
    name: "Lisa Anderson",
    position: "Operations Manager",
    specialization: "Client Relations",
    experience: "9+ years",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000",
    email: "lisa@temposportsgroup.no",
    linkedin: "#",
  },
];

export default function OurTeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="our-team" className="bg-white dark:bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            Our Team
          </div>

          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
            Meet the experts
          </h2>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Dedicated professionals with decades of combined experience in
            football representation
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Profile Image */}
                <div className="relative h-80 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded-md">
                      {member.experience}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {member.position}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {member.specialization}
                    </p>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {member.email}
                    </a>

                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: hoveredMember === index ? 1 : 0,
                          x: hoveredMember === index ? 0 : -10,
                        }}
                        transition={{ duration: 0.2 }}
                        className="w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                  65+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Years Combined Experience
                </div>
              </div>

              <div>
                <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                  25+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Countries Represented
                </div>
              </div>

              <div>
                <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                  8
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Languages Spoken
                </div>
              </div>

              <div>
                <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Dedicated to Excellence
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
            Want to join our team?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
            We're always looking for passionate professionals to join our
            mission.
          </p>

          <motion.a
            href="mailto:careers@temposportsgroup.no"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            <span>View Open Positions</span>
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
      </div>
    </section>
  );
}
