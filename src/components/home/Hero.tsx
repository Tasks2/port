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
        <span style={styles.badgeIcon}>●</span> Available for opportunities
      </div>

      <h1 style={styles.title}>
        Software Engineer | Fullstack Developer 
        <br />
        {/* <span style={styles.highlight}>Data-Driven</span>  */}
        
      </h1>
      <h2>Building Software Solutions for Real-World Problems</h2>

      <p style={styles.subtitle}>
        I design and develop full-stack applications that streamline workflows, improve decision-making, 
        and solve operational challenges. From healthcare platforms and business management systems to 
        data-driven applications, I focus on creating reliable software that delivers meaningful impact. 
        
      </p>

      <div style={styles.stats}>
        <div style={styles.statItem}>
          <div style={styles.statValue}>5+</div>
          <div style={styles.statLabel}>Applications Built</div>
        </div>
        <div style={styles.divider}></div>
        <div style={styles.statItem}>
          <div style={styles.statValue}>3</div>
          <div style={styles.statLabel}>Systems Designed</div>
        </div>
        <div style={styles.divider}></div>
        <div style={styles.statItem}>
          <div style={styles.statValue}>React</div>
          <div style={styles.statLabel}>Full-stack focus</div>
        </div>
      </div>

      <div style={styles.cta}>
        <a href="/projects" style={styles.primaryButton}>
          View Projects
          <span style={styles.arrow}>→</span>
        </a>
        <a href="/contact" style={styles.secondaryButton}>
          Get In Touch
        </a>
      </div>
    </motion.section>
  );
}

const styles = {
  hero: {
    paddingTop: "5rem",
    paddingBottom: "4rem",
    maxWidth: "900px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    background: "var(--accent-soft)",
    color: "var(--accent-dark)",
    borderRadius: "999px",
    fontSize: "0.875rem",
    fontWeight: 500,
    fontFamily: "var(--font-display)",
    marginBottom: "2rem",
    border: "1px solid var(--accent-primary)",
  } as React.CSSProperties,
  badgeIcon: {
    color: "var(--success)",
    fontSize: "0.625rem",
  },
  title: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: "1.5rem",
    color: "var(--text-primary)",
    fontFamily: "var(--font-display)",
  } as React.CSSProperties,
  highlight: {
    background: "linear-gradient(135deg, var(--accent-primary) 0%, #0052cc 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  } as React.CSSProperties,
  subtitle: {
    fontSize: "1.15rem",
    lineHeight: 1.7,
    color: "var(--text-secondary)",
    maxWidth: "700px",
    marginBottom: "3rem",
  } as React.CSSProperties,
  stats: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    marginBottom: "3rem",
    flexWrap: "wrap" as const,
  },
  statItem: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.25rem",
  },
  statValue: {
    fontSize: "1.75rem",
    fontWeight: 700,
    color: "var(--accent-primary)",
    fontFamily: "var(--font-display)",
  },
  statLabel: {
    fontSize: "0.875rem",
    color: "var(--text-tertiary)",
    fontFamily: "var(--font-display)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  },
  divider: {
    width: "1px",
    height: "40px",
    background: "var(--border-light)",
  },
  cta: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap" as const,
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "1rem 2rem",
    background: "var(--accent-primary)",
    color: "white",
    borderRadius: "var(--radius-md)",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "var(--shadow-md)",
  } as React.CSSProperties,
  arrow: {
    transition: "transform 0.3s ease",
    display: "inline-block",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "transparent",
    color: "var(--text-primary)",
    border: "2px solid var(--border-light)",
    borderRadius: "var(--radius-md)",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  } as React.CSSProperties,
};
