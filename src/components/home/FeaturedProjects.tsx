"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      style={styles.section}
    >
      <div style={styles.header}>
        <div>
          <motion.div variants={fadeInUp} style={styles.label}>
            Portfolio
          </motion.div>
          <motion.h2 variants={fadeInUp} style={styles.title}>
            Featured Projects
          </motion.h2>
          <motion.p variants={fadeInUp} style={styles.subtitle}>
            A selection of recent work spanning fintech analytics, enterprise systems, 
            and machine learning applications.
          </motion.p>
        </div>
        <motion.div variants={fadeInUp}>
          <Link href="/projects" style={styles.viewAll}>
            View All Projects
            <span style={styles.arrow}>→</span>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        style={styles.grid}
      >
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}

const styles = {
  section: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "3rem",
    gap: "2rem",
    flexWrap: "wrap" as const,
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    color: "var(--accent-primary)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "clamp(2rem, 4vw, 2.75rem)",
    fontWeight: 700,
    fontFamily: "var(--font-display)",
    color: "var(--text-primary)",
    marginBottom: "0.75rem",
  },
  subtitle: {
    fontSize: "1.05rem",
    color: "var(--text-secondary)",
    maxWidth: "600px",
    lineHeight: 1.6,
  },
  viewAll: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "0.95rem",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    color: "var(--text-primary)",
    background: "transparent",
    border: "2px solid var(--border-light)",
    borderRadius: "var(--radius-md)",
    textDecoration: "none",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap" as const,
  } as React.CSSProperties,
  arrow: {
    transition: "transform 0.3s ease",
    display: "inline-block",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
  },
};
