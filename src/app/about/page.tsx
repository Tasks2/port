// export default function AboutPage() {
//   return (
//     <main style={styles.container}>
//       <h1>About Me</h1>

//       <section style={styles.section}>
//         <p>
//           I’m a frontend-focused developer with a strong interest in data,
//           fintech systems, and applied machine learning. I enjoy building
//           clean, user-friendly web interfaces for data-heavy applications and
//           business tools.
//         </p>

//         <p>
//           My work sits at the intersection of frontend engineering and data:
//           transforming complex workflows, dashboards, and ML outputs into
//           usable, intuitive products. I’m particularly interested in fintech
//           platforms, internal enterprise tools, and decision-support systems.
//         </p>
//       </section>

//       <section style={styles.section}>
//         <h2>What I Work On</h2>
//         <ul>
//           <li>Data-driven dashboards and internal tools</li>
//           <li>Frontend interfaces for ML-powered systems</li>
//           <li>Product-focused web applications</li>
//           <li>Prototyping with modern web and AI tools</li>
//         </ul>
//       </section>

//       <section style={styles.section}>
//         <h2>Career Direction</h2>
//         <p>
//           I’m currently targeting frontend, fintech, data, and graduate-level
//           roles where I can grow into building large-scale, reliable web
//           platforms that support real-world business decisions.
//         </p>
//       </section>
//     </main>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "900px",
//     margin: "0 auto",
//     padding: "4rem 1rem",
//   },
//   section: {
//     marginTop: "2rem",
//   },
// };

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
        <h1 style={styles.title}>Building at the Intersection of Frontend & Data</h1>
      </motion.div>

      <motion.section variants={fadeInUp} style={styles.section}>
        <p style={styles.intro}>
          I'm a frontend developer who thrives on transforming complex data systems 
          into intuitive, powerful web experiences. My background spans fintech platforms, 
          machine learning applications, and enterprise tools where clean code meets 
          real business impact.
        </p>

        <p style={styles.paragraph}>
          What excites me most is the challenge of taking ML models, financial analytics, 
          or intricate workflows and crafting interfaces that make them accessible and 
          actionable. I believe the best software doesn't just work—it empowers users 
          to make better decisions faster.
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
            <div style={styles.icon}>🤖</div>
            <h3 style={styles.cardTitle}>ML-Powered Interfaces</h3>
            <p style={styles.cardText}>
              Designing frontends for machine learning systems—predictive analytics, 
              classification models, and decision-support tools. I bridge the gap 
              between model outputs and user understanding.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>💼</div>
            <h3 style={styles.cardTitle}>Fintech Solutions</h3>
            <p style={styles.cardText}>
              Creating robust, user-friendly financial applications with a focus on 
              data visualization, workflow automation, and seamless user experiences 
              for enterprise-scale platforms.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>⚡</div>
            <h3 style={styles.cardTitle}>Rapid Prototyping</h3>
            <p style={styles.cardText}>
              Leveraging modern tools and AI-assisted development to quickly validate 
              ideas, build MVPs, and iterate on product concepts with React, Next.js, 
              and TypeScript.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeInUp} style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Approach</h2>
        <p style={styles.paragraph}>
          I prioritize clarity, maintainability, and user experience. My development 
          philosophy centers on:
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
          I'm currently seeking frontend, fintech, or data-focused roles where I can 
          contribute to large-scale platforms that solve real business problems. I'm 
          particularly interested in positions that combine my technical skills with 
          opportunities to learn from experienced teams and grow into building 
          production-grade systems.
        </p>
        <p style={styles.paragraph}>
          Whether it's a fintech startup, a data analytics company, or an enterprise 
          developing internal tools, I'm looking for environments where craftsmanship 
          matters and where I can make a meaningful impact.
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
