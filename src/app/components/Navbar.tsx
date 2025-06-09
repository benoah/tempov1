"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { FocusTrap } from "focus-trap-react";
import { AnimatedMenuButton } from "./AnimatedMenuButton"; // Importer den nye knappen

const navLinks = [
  { name: "Hjem", href: "/" },
  { name: "Om Oss", href: "/about" },
  { name: "Spillere", href: "/players" },
  { name: "Kontakt", href: "/contact" },
];

// --- STYLING-FUNKSJONER (Flyttet utenfor komponenten for ytelse) ---

const desktopLinkClasses = (isActive: boolean) =>
  clsx(
    "relative font-medium text-sm md:text-base no-underline transition-colors duration-200 ease-in-out py-2 px-3 block",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
    {
      "text-primary font-semibold": isActive,
      "text-foreground/70 hover:text-primary": !isActive,
    }
  );

const mobileLinkClasses = (isActive: boolean) =>
  clsx(
    "font-semibold no-underline text-xl py-4 block w-full text-center rounded-lg transition-all duration-200 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    {
      "bg-primary/10 text-primary scale-105": isActive,
      "text-foreground/80 hover:text-primary hover:bg-primary/10 active:scale-95":
        !isActive,
    }
  );

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lås scrolling og håndter Escape-tast når mobilmenyen er åpen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // --- ANIMATION VARIANTS ---
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const navContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
  };

  const navLinkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: "easeOut" } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const mobileNavLinksContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  const mobileNavLinkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="bg-background/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-foreground/5"
      >
        <nav className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
          <Link
            href="/"
            className="relative group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            aria-label="Gå til hjemmesiden for Tempo Sports Group"
          >
            <Image
              src="/tempo.png"
              alt="Tempo Sports Group Logo"
              width={280}
              height={56}
              priority
              className="w-48 h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <motion.ul
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden sm:flex space-x-1 lg:space-x-2 items-center"
          >
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={navLinkVariants}>
                <Link
                  href={link.href}
                  className={desktopLinkClasses(pathname === link.href)}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.name}
                  {/* FORBEDRING: Animerende understrek for aktiv lenke */}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary"
                      layoutId="active-link-indicator-desktop"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <AnimatedMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          // FORBEDRING: `FocusTrap` for tilgjengelighet
          <FocusTrap active={isMobileMenuOpen}>
            <motion.div
              // FORBEDRING: Lukk meny ved klikk på bakgrunn/overlay
              onClick={() => setIsMobileMenuOpen(false)}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="sm:hidden fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex flex-col"
              // FORBEDRING: Bedre semantikk for skjermlesere
              role="dialog"
              aria-modal="true"
            >
              {/* FORBEDRING: `e.stopPropagation` for å unngå at klikk inne i menyen lukker den */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="container mx-auto px-4 sm:px-6 flex flex-col h-full"
              >
                <div className="flex justify-between items-center h-20 flex-shrink-0">
                  <span className="w-48 h-auto" aria-hidden="true" />
                  <AnimatedMenuButton
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>

                <motion.ul
                  variants={mobileNavLinksContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col items-center justify-center space-y-4 flex-grow"
                >
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.name}
                      variants={mobileNavLinkVariants}
                      className="w-full max-w-xs"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={mobileLinkClasses(pathname === link.href)}
                        aria-current={
                          pathname === link.href ? "page" : undefined
                        }
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </FocusTrap>
        )}
      </AnimatePresence>
    </>
  );
}
