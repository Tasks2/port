"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      style={styles.container}
    >
      <motion.div variants={fadeInUp}>
        <div style={styles.label}>About</div>
        <h1 style={styles.title}>Building Software That Solves Real Problems</h1>
      </motion.div>

      <motion.section variants={fadeInUp} style={styles.section}>
        <p style={styles.intro}>
         I'm a software engineer passionate about building applications that transform 
         complex processes into intuitive digital experiences.

        </p>

        <p style={styles.paragraph}>
         My work spans healthcare systems, business management platforms, workflow automation 
         tools, and data-driven applications. I enjoy designing solutions that are not only 
         technically sound but also genuinely useful to the people who rely on them every day. 
        </p>
        <p style={styles.paragraph}>
          Whether developing frontend interfaces, designing APIs, or structuring databases, 
          I approach software development with a focus on reliability, scalability, 
          and long-term maintainability.
          </p>
      </motion.section>

      <motion.section variants={fadeInUp} style={styles.section}>
        <h2 style={styles.sectionTitle}>What I Work On</h2>
        
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>📊</div>
            <h3 style={styles.cardTitle}>Data Dashboards</h3>
            <p style={styles.cardText}>
              Building interactive analytics platforms and internal tools that turn 
              data into insights. From customer churn prediction to attendance tracking, 
              I create interfaces that make complex data approachable.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>💼</div>
            <h3 style={styles.cardTitle}>Business Systems</h3>
            <p style={styles.cardText}>
             Building software that supports operational workflows, reporting, 
             inventory management, and enterprise processes.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🏥</div>
            <h3 style={styles.cardTitle}>Healthcare Applications</h3>
            <p style={styles.cardText}>
              Developing tools that help users track, manage, 
              and understand important health information.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>💻</div>
            <h3 style={styles.cardTitle}>Fullstack Development</h3>
            <p style={styles.cardText}>
              Designing complete solutions from user interfaces to 
              backend services, APIs, and databases.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeInUp} style={styles.section}>
        <h2 style={styles.sectionTitle}>Data & Reporting</h2>
        <p style={styles.paragraph}>
          Creating dashboards and reporting tools that transform 
          raw data into actionable insights.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Component-driven architecture</strong> for scalable, reusable code
          </li>
          <li style={styles.listItem}>
            <strong>Data-first thinking</strong> to ensure interfaces serve the underlying information architecture
          </li>
          <li style={styles.listItem}>
            <strong>Performance optimization</strong> especially for data-heavy applications
          </li>
          <li style={styles.listItem}>
            <strong>Accessible design</strong> that works for all users
          </li>
        </ul>
      </motion.section>

      <motion.section variants={fadeInUp} style={styles.section}>
        <h2 style={styles.sectionTitle}>Career Direction</h2>
        <p style={styles.paragraph}>
          I'm currently seeking software engineering opportunities where I can contribute to building 
          reliable, scalable, and impactful applications.

          I'm particularly interested in roles involving full-stack development, backend engineering, 
          system design, workflow automation, and data-driven solutions. I enjoy working on products 
          that solve meaningful problems and improve how people or organizations operate.
        </p>
        <p style={styles.paragraph}>
          Whether in healthcare, agriculture, enterprise software, logistics, or emerging technology, 
          I'm motivated by opportunities to build software that creates measurable value.
        </p>
      </motion.section>

      <motion.section variants={fadeInUp} style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Let's Work Together</h2>
          <p style={styles.ctaText}>
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
        </div>
        <a href="/contact" style={styles.ctaButton}>
          Get In Touch
          <span style={styles.arrow}>→</span>
        </a>
      </motion.section>
    </motion.main>
  );
}

const styles = {
  container: {
    maxWidth: "850px",
    margin: "0 auto",
    paddingTop: "3rem",
    paddingBottom: "4rem",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    color: "var(--accent-primary)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    marginBottom: "0.75rem",
  },
  title: {
    fontSize: "clamp(2.25rem, 5vw, 3rem)",
    fontWeight: 700,
    fontFamily: "var(--font-display)",
    lineHeight: 1.2,
    marginBottom: "3rem",
    color: "var(--text-primary)",
  },
  section: {
    marginBottom: "4rem",
  },
  intro: {
    fontSize: "1.25rem",
    lineHeight: 1.7,
    color: "var(--text-primary)",
    marginBottom: "1.5rem",
    fontWeight: 400,
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "var(--text-secondary)",
    marginBottom: "1.25rem",
  },
  sectionTitle: {
    fontSize: "1.75rem",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    marginBottom: "1.5rem",
    color: "var(--text-primary)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  card: {
    padding: "1.75rem",
    background: "var(--bg-elevated)",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--border-subtle)",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  cardTitle: {
    fontSize: "1.125rem",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    marginBottom: "0.5rem",
    color: "var(--text-primary)",
  },
  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "var(--text-secondary)",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "1.5rem",
  },
  listItem: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "var(--text-secondary)",
    marginBottom: "0.75rem",
    paddingLeft: "1.5rem",
    position: "relative" as const,
  },
  cta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    padding: "2.5rem",
    background: "linear-gradient(135deg, var(--accent-soft) 0%, #f0f4ff 100%)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid rgba(0, 102, 255, 0.15)",
    marginTop: "5rem",
    flexWrap: "wrap" as const,
  },
  ctaContent: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: "1.75rem",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    marginBottom: "0.5rem",
    color: "var(--text-primary)",
  },
  ctaText: {
    fontSize: "1rem",
    color: "var(--text-secondary)",
  },
  ctaButton: {
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
    transition: "all 0.3s ease",
    boxShadow: "var(--shadow-md)",
    whiteSpace: "nowrap" as const,
  } as React.CSSProperties,
  arrow: {
    transition: "transform 0.3s ease",
    display: "inline-block",
  },
};
