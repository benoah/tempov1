"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface ScholarshipFormData {
  name: string;
  email: string;
  age: string;
  situation: string;
}

export default function SocialResponsibilitySection() {
  const [formData, setFormData] = useState<ScholarshipFormData>({
    name: "",
    email: "",
    age: "",
    situation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

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
            We started Tempo because we believe talent shouldn't be limited by
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
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-semibold text-black mb-4">
                National Football Scholarship
              </h3>
              <p className="text-[#25723e] font-medium mb-4">
                Because no one should miss out on football because of money.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Football used to be one of the most accessible sports in the
                world. Today, for many families, even a pair of boots or club
                fees are out of reach. We believe every kid deserves a fair shot
                — no matter where they come from.
              </p>

              <blockquote className="border-l-4 border-[#00DC82] pl-6 my-8">
                <p className="text-xl text-black font-medium italic">
                  “This scholarship gave me the chance to keep chasing my
                  dream.”
                </p>
                <footer className="mt-2 text-sm text-gray-500">
                  — Scholarship Recipient, Age 16
                </footer>
              </blockquote>

              <p className="text-gray-600 leading-relaxed">
                That’s why we created the national football scholarship — to
                make sure finances never block passion, talent, or friendship on
                the pitch.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-12 mt-12">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Annual Community Donation
              </h3>
              <p className="text-gray-600 mb-2">
                In 2023, we donated NOK 25,000 to the Palestine Committee — our
                first of many annual contributions to causes we believe in.
              </p>
              <span className="text-sm text-gray-500">2023 Recipient</span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="text-center py-20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-[#00DC82] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg
                    className="w-8 h-8 text-white"
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
                </motion.div>
                <h3 className="text-2xl font-semibold text-[#00DC82] mb-2">
                  Application Sent ✅
                </h3>
                <p className="text-gray-600">
                  Thank you! We promise you a quick response.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-xl font-semibold text-black mb-4">
                  Apply for Scholarship
                </h4>
                <p className="text-sm text-gray-500 mb-6">
                  We review all submissions personally.
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-black focus:outline-none focus:border-[#00DC82] transition"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-black focus:outline-none focus:border-[#00DC82] transition"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="8"
                      max="25"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-black focus:outline-none focus:border-[#00DC82] transition"
                      placeholder="Your age"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Your situation
                  </label>
                  <textarea
                    name="situation"
                    value={formData.situation}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-black focus:outline-none focus:border-[#00DC82] transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00DC82] text-white font-semibold py-4 rounded-full hover:bg-[#00c26e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Application"}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Or email{" "}
                  <a
                    href="mailto:stipend@tempogroup.no"
                    className="text-[#25723e] underline"
                  >
                    stipend@tempogroup.no
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
