"use client";

import { motion, SVGMotionProps } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

// Define props specifically for SVG path elements
const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export function AnimatedMenuButton({ isOpen, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-foreground focus:outline-none p-2 -mr-2 rounded-md active:bg-foreground/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
      aria-expanded={isOpen}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          variants={{
            closed: { d: "M 4 6 L 20 6" },
            open: { d: "M 6 18 L 18 6" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <Path
          d="M 4 12 L 20 12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <Path
          variants={{
            closed: { d: "M 4 18 L 20 18" },
            open: { d: "M 6 6 L 18 18" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
}
