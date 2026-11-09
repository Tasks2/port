"use client";

import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import { staggerContainer } from "@/lib/animations";

export default function HomePage() {
  // A div, not <main>: the root layout already renders <main>.
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <Hero />
      <FeaturedProjects />
    </motion.div>
  );
}
