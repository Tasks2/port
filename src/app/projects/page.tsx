"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ProjectsPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1 variants={fadeInUp}>Projects</motion.h1>
      <motion.p variants={fadeInUp} style={{ color: "#555" }}>
        Fintech, data, and product-focused projects.
      </motion.p>

      <div style={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </motion.main>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  },
};
