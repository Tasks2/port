import type { Variants } from "framer-motion";

// Animation presets. Pages use them through <Reveal> / <RevealGroup>
// (components/motion/Reveal.tsx). ProjectCard uses fadeInUp directly
// because it also needs its own whileHover on the same element.

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
