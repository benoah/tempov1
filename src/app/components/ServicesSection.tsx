"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";

// ============================================
// Type Definitions
// ============================================
interface Service {
  id: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}

interface ServiceItemProps {
  service: Service;
  index: number;
  isExpanded?: boolean;
  onToggle?: (id: string) => void;
}

// ============================================
// Design System
// ============================================
const DESIGN_SYSTEM = {
  colors: {
    accent: "#00DC82",
    text: {
      primary: "#000000",
      secondary: "#4B5563",
      muted: "#6B7280",
    },
  },
  animation: {
    duration: 0.5,
    stagger: 0.08,
    ease: [0.25, 0.46, 0.45, 0.94],
    spring: { damping: 20, stiffness: 300 },
  },
  typography: {
    h2: "clamp(2.5rem, 5vw + 1rem, 3.75rem)",
    body: "clamp(1rem, 1.5vw, 1.125rem)",
  },
  spacing: {
    container: "max-w-[90rem] mx-auto px-6 lg:px-20",
    section: "py-24 md:py-32",
  },
} as const;

// ============================================
// Data Configuration
// ============================================
const SERVICES_DATA: Service[] = [
  {
    id: "clubs-contracts",
    title: "Clubs & Contracts",
    description:
      "Daily contact with top clubs nationally and internationally. Expert negotiation for optimal terms.",
  },
  {
    id: "health-department",
    title: "Health Department",
    description:
      "Scandinavia's only agency with dedicated health department. Annual checkups and injury prevention.",
  },
  {
    id: "cognitive-training",
    title: "Cognitive Training",
    description:
      "Mental performance optimization and psychological support for peak athletic performance.",
  },
  {
    id: "media-sponsorships",
    title: "Media & Sponsorships",
    description:
      "Strategic PR handling and endorsement negotiations with calculated media exposure.",
  },
  {
    id: "global-network",
    title: "Global Network",
    description:
      "Established partnerships with teams and agencies worldwide for international opportunities.",
  },
  {
    id: "social-responsibility",
    title: "Social Responsibility",
    description:
      "National football scholarships and community programs supporting young talent development.",
  },
];

// ============================================
// Animation Variants
// ============================================
const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: DESIGN_SYSTEM.animation.stagger,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: DESIGN_SYSTEM.animation.duration,
        ease: DESIGN_SYSTEM.animation.ease,
      },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: DESIGN_SYSTEM.animation.ease,
      },
    },
  },
};

// ============================================
// Sub-components
// ============================================

// Service Item Component with Expandable Details
function ServiceItem({
  service,
  index,
  isExpanded,
  onToggle,
}: ServiceItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleClick = () => {
    if (onToggle && service.description) {
      onToggle(service.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.article
      variants={animationVariants.item}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        role={service.description ? "button" : undefined}
        tabIndex={service.description ? 0 : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`
          flex items-start gap-4 py-3 transition-all duration-200
          ${service.description ? "cursor-pointer" : ""}
          ${isHovered ? "translate-x-2" : "translate-x-0"}
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
          focus-visible:ring-[#00DC82] rounded-lg px-2 -mx-2
        `}
        aria-expanded={service.description ? isExpanded : undefined}
      >
        {/* Service Number */}
        <span className="text-sm font-mono text-gray-400 mt-0.5 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon */}
        <div className="relative mt-0.5">
          <CheckCircle
            className={`
              w-5 h-5 transition-all duration-300
              ${
                isHovered || isExpanded
                  ? "text-[#00DC82] scale-110"
                  : "text-gray-400"
              }
            `}
            aria-hidden="true"
          />

          {/* Pulse effect on hover */}
          {isHovered && !shouldReduceMotion && (
            <div className="absolute inset-0 -m-2">
              <div className="w-9 h-9 bg-[#00DC82] rounded-full opacity-20 animate-ping" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className={`
            text-lg font-medium transition-colors duration-200
            ${isHovered || isExpanded ? "text-black" : "text-gray-800"}
          `}
          >
            {service.title}
          </h3>

          {/* Expandable Description */}
          {service.description && (
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <p className="text-sm text-gray-600 mt-2 pr-4 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Expand Indicator */}
        {service.description && (
          <svg
            className={`
              w-4 h-4 mt-1 text-gray-400 transition-transform duration-200
              ${isExpanded ? "rotate-180" : "rotate-0"}
            `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>

      {/* Accent Line */}
      <motion.div
        className="absolute left-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00DC82] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "center" }}
      />
    </motion.article>
  );
}

// ============================================
// Main ServicesSection Component
// ============================================
export default function ServicesSection() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const shouldReduceMotion = useReducedMotion();

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const containerClass = useMemo(
    () => `${DESIGN_SYSTEM.spacing.container} ${DESIGN_SYSTEM.spacing.section}`,
    []
  );

  return (
    <section className="bg-gray-50" aria-labelledby="services-heading">
      <div className={containerClass}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Statement */}
          <motion.div
            variants={animationVariants.fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              id="services-heading"
              className="font-bold text-black mb-6 leading-[1.1]"
              style={{ fontSize: DESIGN_SYSTEM.typography.h2 }}
            >
              BUILT FOR
              <br />
              <span className="relative">
                THE MODERN PLAYER
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#00DC82] opacity-20"
                  aria-hidden="true"
                />
              </span>
            </h2>
            <p
              className="text-gray-600 leading-relaxed max-w-xl"
              style={{ fontSize: DESIGN_SYSTEM.typography.body }}
            >
              From your first deal to your final game, we’re with you. Tempo
              handles every part of your career — contracts, health, mindset,
              media — so you can focus on performing.
            </p>

            <blockquote className="mt-8 border-l-4 border-[#00DC82] pl-6 text-black text-lg italic">
              “They didn’t just negotiate my contract. They helped me become a
              better pro.”
              <footer className="mt-2 text-sm text-gray-500">
                — Tempo Client
              </footer>
            </blockquote>

            {/* Optional: Stats or Additional Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-light text-black">6</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Core Services
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-black">24/7</div>
                  <div className="text-sm text-gray-500 mt-1">Support</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Services List */}
          <motion.div
            variants={
              !shouldReduceMotion ? animationVariants.container : undefined
            }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-2"
            role="list"
          >
            {SERVICES_DATA.map((service, index) => (
              <div key={service.id} role="listitem">
                <ServiceItem
                  service={service}
                  index={index}
                  isExpanded={expandedItems.has(service.id)}
                  onToggle={toggleExpanded}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
