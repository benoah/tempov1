// src/components/Footer.tsx

import Link from "next/link";

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
              Bygger karrierer, ikke bare kontrakter.
            </p>
          </div>

          {/* Right side - Links in rows */}
          <div className="lg:text-right space-y-6">
            {/* Navigation Links */}
            <nav className="space-x-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Hjem
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Om oss
              </Link>
              <Link
                href="/players"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Spillere
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Kontakt
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="space-x-6 text-gray-400">
              <a
                href="tel:+4712345678"
                className="hover:text-white transition-colors"
              >
                +47 123 45 678
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="mailto:hello@temposportsgroup.no"
                className="hover:text-white transition-colors"
              >
                hello@temposportsgroup.no
              </a>
            </div>

            {/* Social Links - Text only */}
            <div className="space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {currentYear} Tempo Sports Group AS. Alle rettigheter forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
}
