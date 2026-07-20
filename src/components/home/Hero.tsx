"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      style={styles.hero}
    >
      <div style={styles.badge}>
        <span style={styles.badgeDot} /> Available for graduate opportunities
      </div>

      <h1 style={styles.title}>
        Software engineer building <em style={styles.italic}>useful</em>,
        <br /> dependable products.
      </h1>

      <p style={styles.subtitle}>
        I&rsquo;m Amy, a software engineer who ships full-stack applications
        for healthcare, operations, and analytics. I care about clean architecture,
        readable code, and interfaces that stay out of the user&rsquo;s way.
      </p>

      <div style={styles.stats}>
        <div style={styles.statItem}>
          <div style={styles.statValue}>5+</div>
          <div style={styles.statLabel}>Apps shipped</div>
        </div>
        <div style={styles.divider} />
        <div style={styles.statItem}>
          <div style={styles.statValue}>3</div>
          <div style={styles.statLabel}>Systems designed</div>
        </div>
        <div style={styles.divider} />
        <div style={styles.statItem}>
          <div style={styles.statValue}>Full-stack</div>
          <div style={styles.statLabel}>React · Node · SQL</div>
        </div>
      </div>

      <div style={styles.cta}>
        <a href="/projects" style={styles.primaryButton}>
          View projects <span style={styles.arrow}>→</span>
        </a>
        <a href="/contact" style={styles.secondaryButton}>Get in touch</a>
      </div>
    </motion.section>
  );
}

const styles = {
  hero: {
    paddingTop: "6rem",
    paddingBottom: "5rem",
    maxWidth: "920px",
  } as React.CSSProperties,
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.4rem 0.9rem",
    background: "var(--bg-card)",
    color: "var(--text-primary)",
    borderRadius: "999px",
    fontSize: "0.8rem",
    fontWeight: 500,
    marginBottom: "2.25rem",
    border: "1px solid var(--border-light)",
    boxShadow: "var(--shadow-sm)",
  } as React.CSSProperties,
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "var(--success)",
    boxShadow: "0 0 0 3px rgba(74, 124, 89, 0.15)",
  } as React.CSSProperties,
  title: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(2.75rem, 6.5vw, 4.75rem)",
    fontWeight: 400,
    lineHeight: 1.05,
    letterSpacing: "-0.025em",
    marginBottom: "1.5rem",
    color: "var(--text-primary)",
  } as React.CSSProperties,
  italic: {
    fontStyle: "italic",
    color: "var(--accent-primary)",
  } as React.CSSProperties,
  subtitle: {
    fontSize: "1.1rem",
    lineHeight: 1.65,
    color: "var(--text-secondary)",
    maxWidth: "640px",
    marginBottom: "3rem",
  } as React.CSSProperties,
  stats: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    marginBottom: "3rem",
    flexWrap: "wrap" as const,
    paddingTop: "1.75rem",
    borderTop: "1px solid var(--border-subtle)",
  },
  statItem: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.25rem",
  },
  statValue: {
    fontFamily: "var(--font-display)",
    fontSize: "2rem",
    fontWeight: 400,
    color: "var(--text-primary)",
    letterSpacing: "-0.02em",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "0.75rem",
    color: "var(--text-tertiary)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    fontWeight: 500,
  },
  divider: {
    width: "1px",
    height: "36px",
    background: "var(--border-light)",
  },
  cta: {
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap" as const,
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.9rem 1.6rem",
    background: "var(--bg-inverse)",
    color: "#f7f4ee",
    borderRadius: "var(--radius-md)",
    fontWeight: 500,
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "transform 0.2s ease, background 0.2s ease",
    border: "1px solid var(--bg-inverse)",
  } as React.CSSProperties,
  arrow: { display: "inline-block", transition: "transform 0.2s ease" } as React.CSSProperties,
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.9rem 1.6rem",
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-light)",
    borderRadius: "var(--radius-md)",
    fontWeight: 500,
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "background 0.2s ease, border-color 0.2s ease",
  } as React.CSSProperties,
};
