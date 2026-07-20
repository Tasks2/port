"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={styles.card}
    >
      <span style={styles.accentBar} aria-hidden />

      <div style={styles.cardHeader}>
        <h3 style={styles.title}>{project.title}</h3>
        <div style={styles.tags}>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <p style={styles.description}>{project.shortDescription}</p>

      <div style={styles.footer}>
        <div style={styles.techStack}>
          {project.tech.slice(0, 4).map((tech) => (
            <code key={tech} style={styles.tech}>{tech}</code>
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} style={styles.link}>
          Case study <span style={styles.arrow}>→</span>
        </Link>
      </div>
    </motion.div>
  );
}

const styles = {
  card: {
    position: "relative" as const,
    padding: "1.75rem",
    background: "var(--bg-card)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "var(--shadow-sm)",
    transition: "box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.25rem",
    height: "100%",
  },
  accentBar: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "3px",
    height: "100%",
    background: "var(--accent-primary)",
    opacity: 0.9,
  } as React.CSSProperties,
  cardHeader: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: "1.6rem",
    fontWeight: 400,
    color: "var(--text-primary)",
    lineHeight: 1.15,
    letterSpacing: "-0.015em",
  } as React.CSSProperties,
  tags: {
    display: "flex",
    gap: "0.4rem",
    flexWrap: "wrap" as const,
  },
  tag: {
    padding: "0.2rem 0.6rem",
    fontSize: "0.7rem",
    fontWeight: 500,
    color: "var(--text-secondary)",
    background: "var(--bg-elevated)",
    borderRadius: "999px",
    letterSpacing: "0.03em",
  },
  description: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "var(--text-secondary)",
    flex: 1,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    paddingTop: "1rem",
    borderTop: "1px solid var(--border-subtle)",
    flexWrap: "wrap" as const,
  },
  techStack: {
    display: "flex",
    gap: "0.4rem",
    flexWrap: "wrap" as const,
    flex: 1,
  },
  tech: {
    fontSize: "0.72rem",
    fontFamily: "var(--font-mono)",
    color: "var(--text-tertiary)",
    background: "transparent",
    padding: "0.2rem 0.45rem",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--border-subtle)",
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    textDecoration: "none",
    borderBottom: "1px solid var(--text-primary)",
    paddingBottom: "1px",
  } as React.CSSProperties,
  arrow: { display: "inline-block", transition: "transform 0.2s ease" } as React.CSSProperties,
};
