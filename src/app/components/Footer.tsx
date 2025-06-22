"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-10 lg:px-20 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TEMPO</h3>
            <p className="text-gray-400 font-light">
              Building careers, not just contracts.
            </p>
          </div>

          {/* Right side - Navigation and Contact */}
          <div className="lg:text-right space-y-6">
            {/* Navigation */}
            <nav className="flex flex-wrap justify-start lg:justify-end gap-6 text-sm font-medium">
              <a
                href="#football"
                className="text-gray-400 hover:text-white transition-colors"
              >
                FOOTBALL
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ABOUT
              </a>
              <a
                href="#our-team"
                className="text-gray-400 hover:text-white transition-colors"
              >
                OUR TEAM
              </a>
              <a
                href="#social-responsibility"
                className="text-gray-400 hover:text-white transition-colors"
              >
                SOCIAL RESPONSIBILITY
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                CONTACT
              </a>
            </nav>

            {/* Contact Info */}
            <div className="space-x-4 text-gray-400 text-sm">
              <a
                href="tel:+4740761888"
                className="hover:text-white transition-colors"
              >
                +47 407 61 888
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="mailto:hello@temposportsgroup.no"
                className="hover:text-white transition-colors"
              >
                hello@temposportsgroup.no
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-start lg:justify-end space-x-6 pt-2">
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.instagram.com/temposportsgroup/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {currentYear} Tempo Sports Group AS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
