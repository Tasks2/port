"use client";

import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import { staggerContainer } from "@/lib/animations";

export default function HomePage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Hero />
      <FeaturedProjects />
    </motion.main>
  );
}
