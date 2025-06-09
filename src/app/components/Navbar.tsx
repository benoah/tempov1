"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { FocusTrap } from "focus-trap-react";
import { AnimatedMenuButton } from "./AnimatedMenuButton";

// Navigation sections for SPA
const navLinks = [
  { name: "Hjem", href: "#hjem", id: "hjem" },
  { name: "Om Oss", href: "#om-oss", id: "om-oss" },
  { name: "Spillere", href: "#spillere", id: "spillere" },
  { name: "Kontakt", href: "#kontakt", id: "kontakt" },
];

// Modern desktop link styling with improved typography
const desktopLinkClasses = (isActive: boolean) =>
  clsx(
    // Modern sans-serif with improved spacing and sizing
    "relative font-sans text-sm lg:text-[15px] font-medium tracking-[0.08em]",
    "no-underline transition-all duration-300 ease-out py-2.5 px-5 block",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
    "focus-visible:ring-offset-secondary rounded-full",
    {
      // Active state with primary color
      "text-primary font-semibold": isActive,
      // Inactive state with hover effects
      "text-foreground/70 hover:text-primary": !isActive,
    }
  );

// Mobile link styling with modern touch-friendly design
const mobileLinkClasses = (isActive: boolean) =>
  clsx(
    // Large touch targets with modern typography
    "font-sans font-medium tracking-[0.05em] no-underline",
    "text-lg py-6 px-8 block w-full text-center rounded-3xl",
    "transition-all duration-300 ease-out transform",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    "focus-visible:ring-offset-4 focus-visible:ring-offset-secondary",
    {
      // Active state with enhanced visual feedback
      "bg-primary text-primary-foreground shadow-2xl scale-[1.02]": isActive,
      // Inactive state with subtle animations
      "text-foreground/80 hover:text-primary hover:bg-primary/5 hover:shadow-lg active:scale-95":
        !isActive,
    }
  );

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hjem");
  const pathname = usePathname();

  // Smooth scroll handler for SPA navigation
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Height of navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsMobileMenuOpen(false);
    },
    []
  );

  // Intersection Observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Lock scrolling and handle Escape key
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

  // Enhanced animation variants
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const navContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const navLinkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const mobileNavLinksContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const mobileNavLinkVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-b from-secondary to-secondary/90 backdrop-blur-xl shadow-xl sticky top-0 z-50"
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "hjem")}
            className="relative group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-4 focus-visible:ring-offset-secondary"
            aria-label="Gå til hjemmesiden for Tempo Sports Group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/tempologo1black.png"
                alt="Tempo Sports Group Logo"
                width={280}
                height={56}
                priority
                className="w-48 lg:w-56 h-auto transition-all duration-300"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.ul
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-2 lg:gap-3"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={navLinkVariants}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={desktopLinkClasses(activeSection === link.id)}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Modern pill-shaped indicator */}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      layoutId="active-section-indicator-desktop"
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {/* Subtle dot indicator on hover */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
          <FocusTrap active={isMobileMenuOpen}>
            <motion.div
              onClick={() => setIsMobileMenuOpen(false)}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden fixed inset-0 bg-gradient-to-br from-secondary via-secondary/98 to-primary/5 backdrop-blur-3xl z-50 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigasjonsmeny"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="container mx-auto px-4 flex flex-col h-full"
              >
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center h-24 flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.3, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Image
                      src="/tempologo1black.png"
                      alt="Tempo Sports Group Logo"
                      width={200}
                      height={40}
                      className="w-36 h-auto"
                    />
                  </motion.div>
                  <AnimatedMenuButton
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>

                {/* Mobile Navigation Links */}
                <motion.ul
                  variants={mobileNavLinksContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col items-center justify-center gap-4 flex-grow py-8"
                >
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      variants={mobileNavLinkVariants}
                      custom={index}
                      className="w-full max-w-sm"
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.id)}
                        className={mobileLinkClasses(activeSection === link.id)}
                        aria-current={
                          activeSection === link.id ? "page" : undefined
                        }
                      >
                        <motion.span className="flex items-center justify-center gap-3">
                          {activeSection === link.id && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-primary-foreground rounded-full"
                            />
                          )}
                          {link.name}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="py-8 text-center text-foreground/30 text-xs tracking-widest"
                >
                  <p>TEMPO SPORTS GROUP &copy; 2024</p>
                </motion.div>
              </div>
            </motion.div>
          </FocusTrap>
        )}
      </AnimatePresence>
    </>
  );
}
