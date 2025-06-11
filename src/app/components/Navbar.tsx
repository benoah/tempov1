"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { name: "Football", href: "#football", id: "football" },
  { name: "Our Team", href: "#our-team", id: "our-team" },
  {
    name: "Social Responsibility",
    href: "#social-responsibility",
    id: "social-responsibility",
  },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#00DC82] z-[60] transition-all duration-200"
        style={{ width: "0%" }}
      />

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-2 sm:px-0 md:px-8 lg:px-10 flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 mr-16 sm:mr-0"
            aria-label="Go to homepage"
          >
            <div className="relative w-28 h-28">
              <Image
                src="/tempologo1white.png"
                alt="Tempo Logo - White"
                fill
                className={`absolute inset-0 object-contain transition-opacity duration-300 ease-in-out ${
                  isScrolled ? "opacity-0" : "opacity-100"
                }`}
                priority
              />
              <Image
                src="/tempologo1black.png"
                alt="Tempo Logo - Black"
                fill
                className={`absolute inset-0 object-contain transition-opacity duration-300 ease-in-out ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
              <div className="absolute inset-0 rounded-md transition-transform duration-300 hover:scale-105 will-change-transform" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-[#00DC82]"
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2 bg-black"
                    : isScrolled
                    ? "bg-black"
                    : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0"
                    : isScrolled
                    ? "bg-black"
                    : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-black"
                    : isScrolled
                    ? "bg-black"
                    : "bg-white"
                }`}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-40 md:hidden overflow-y-auto max-h-screen"
            >
              <nav className="px-6 py-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="block py-4 text-lg font-medium text-gray-900 hover:text-[#00DC82] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Social Media Icons */}
                <div className="mt-10 flex justify-center space-x-6">
                  <a
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-gray-600 hover:text-[#00DC82] transition-colors text-2xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/yourcompany"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-600 hover:text-[#00DC82] transition-colors text-2xl"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
