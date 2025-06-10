// src/components/SocialResponsibilitySection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface ScholarshipFormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  club: string;
  position: string;
  situation: string;
}

export default function SocialResponsibilitySection() {
  const [formData, setFormData] = useState<ScholarshipFormData>({
    name: "",
    email: "",
    phone: "",
    age: "",
    club: "",
    position: "",
    situation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        club: "",
        position: "",
        situation: "",
      });
    }, 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section
      id="social-responsibility"
      className="bg-white dark:bg-gray-950 py-24"
    >
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
            Social Responsibility
          </div>

          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
            We put the player first
          </h2>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Since we started Tempo Sports Group, our motto has always been
            putting player needs first
          </p>
        </motion.div>

        {/* National Football Scholarship */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start mb-20"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <div className="w-2 h-2 bg-green-500 rounded-full mb-4"></div>

              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
                National Football Scholarship
              </h3>

              <div className="text-sm text-gray-400 mb-6">January 1, 2024</div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                In a world marked by deep injustice, it has always been
                important to us that everyone should be able to play football.
                Football should be a sanctuary and provide opportunities for
                all.
              </p>

              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
                <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                  We experience that an increasing group of young football
                  players struggle to participate in teams or development due to
                  finances.{" "}
                  <strong>
                    What was once one of the world's cheapest sports has become
                    an expensive and difficult challenge for many.
                  </strong>
                </p>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                We want to take social responsibility so that finances do not
                hinder development or playing football with your friends.
                Therefore, we have started our national football scholarship.
              </p>

              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
                  Do you need support?
                </h4>
                <p className="text-blue-800 dark:text-blue-200 font-light">
                  Do expensive equipment, training fees, membership fees, or
                  other costs prevent you from developing as a football player?
                  We can't help everyone, but we want to contribute as much as
                  we can.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Apply for Scholarship
            </h4>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Application Sent
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  We promise you a quick response.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="8"
                      max="25"
                      className="w-full px-3 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Age"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="+47 123 45 678"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Current Club
                    </label>
                    <input
                      type="text"
                      name="club"
                      value={formData.club}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Club name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Position
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors"
                    >
                      <option value="">Select position</option>
                      <option value="goalkeeper">Goalkeeper</option>
                      <option value="defender">Defender</option>
                      <option value="midfielder">Midfielder</option>
                      <option value="forward">Forward</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tell us about your situation *
                  </label>
                  <textarea
                    name="situation"
                    value={formData.situation}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                    placeholder="Describe your financial situation and how the scholarship would help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white dark:border-gray-900/30 dark:border-t-gray-900 rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Application
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
                    </>
                  )}
                </motion.button>

                <div className="text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Or send an email to{" "}
                    <a
                      href="mailto:stipend@tempogroup.no"
                      className="text-gray-900 dark:text-white hover:underline font-medium"
                    >
                      stipend@tempogroup.no
                    </a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Annual Donation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="w-2 h-2 bg-red-500 rounded-full mb-4"></div>

                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  Annual Community Donation
                </h3>

                <div className="text-sm text-gray-400 mb-6">
                  January 1, 2024
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Essential Work
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    We have all been shaken by the events this fall, where
                    atrocities know no bounds. The Palestine Committee in Norway
                    has carried out important work for solidarity and
                    Palestinian freedom for many decades.
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Therefore, we chose to support the Palestine Committee with
                  NOK 25,000 as this year's community donation, the first of its
                  kind.
                </p>

                <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium">
                    2023: Palestine Committee
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5e956eee226232107a0bc361/d0092ff1-8308-4825-ac20-d5e45b52ae23/PR_NOR_010124+%283%29.png?format=2500w"
                  alt="Tempo Sports Group community donation announcement"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
