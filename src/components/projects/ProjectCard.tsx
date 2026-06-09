
// import Link from "next/link";
// import { Project } from "@/data/projects";

// export default function ProjectCard({ project }: { project: Project }) {
//   return (
//     <div style={styles.card}>
//       <h3>{project.title}</h3>
//       <p style={styles.desc}>{project.shortDescription}</p>

//       <div style={styles.tags}>
//         {project.tags.map((tag) => (
//           <span key={tag} style={styles.tag}>
//             {tag}
//           </span>
//         ))}
//       </div>

//       <Link href={`/projects/${project.slug}`} style={styles.link}>
//         View Case Study →
//       </Link>
//     </div>
//   );
// }

// const styles = {
//   card: {
//     border: "1px solid #eee",
//     borderRadius: "10px",
//     padding: "1.2rem",
//     display: "flex",
//     flexDirection: "column" as const,
//     gap: "0.8rem",
//   },
//   desc: {
//     color: "#555",
//     fontSize: "0.95rem",
//   },
//   tags: {
//     display: "flex",
//     gap: "0.5rem",
//     flexWrap: "wrap" as const,
//   },
//   tag: {
//     background: "#f3f4f6",
//     padding: "0.2rem 0.6rem",
//     borderRadius: "999px",
//     fontSize: "0.75rem",
//   },
//   link: {
//     marginTop: "auto",
//     fontWeight: "bold",
//     textDecoration: "none",
//   },
// };

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { fadeInUp } from "@/lib/animations";

// export default function ProjectCard({ project }: any) {
//   return (
//     <motion.div
//       variants={fadeInUp}
//       whileHover={{ y: -6, scale: 1.01, 
//         boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
//       transition={{ type: "spring", stiffness: 200 }}
//       style={styles.card}
//     >
//       <h3>{project.title}</h3>
//       <p>{project.shortDescription}</p>
//       <Link href={`/projects/${project.slug}`}>
//         View Case Study →
//       </Link>
//     </motion.div>
//   );
// }

// const styles = {
//   card: {
//     padding: "1.75rem",
//     background: "var(--bg-card)",
//     borderRadius: "var(--radius-md)",
//     border: "1px solid var(--border-light)",
//     boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
//     transition: "box-shadow 0.2s ease",
//   },
// };

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ 
        y: -8, 
        scale: 1.01,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        damping: 20,
      }}
      style={styles.card}
    >
      {/* Gradient overlay on hover */}
      <div style={styles.cardGlow}></div>
      
      <div style={styles.cardHeader}>
        <h3 style={styles.title}>{project.title}</h3>
        <div style={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <p style={styles.description}>{project.shortDescription}</p>

      <div style={styles.footer}>
        <div style={styles.techStack}>
          {project.tech.slice(0, 3).map((tech) => (
            <code key={tech} style={styles.tech}>
              {tech}
            </code>
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} style={styles.link}>
          View Details
          <span style={styles.arrow}>→</span>
        </Link>
      </div>
    </motion.div>
  );
}

const styles = {
  card: {
    position: "relative" as const,
    padding: "2rem",
    background: "var(--bg-card)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "var(--shadow-sm)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.25rem",
    height: "100%",
  },
  cardGlow: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, var(--accent-primary), #0052cc)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
  },
  title: {
    fontSize: "1.35rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    fontFamily: "var(--font-display)",
    lineHeight: 1.3,
  },
  tags: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap" as const,
  },
  tag: {
    padding: "0.25rem 0.75rem",
    fontSize: "0.75rem",
    fontWeight: 500,
    fontFamily: "var(--font-display)",
    color: "var(--accent-dark)",
    background: "var(--accent-soft)",
    borderRadius: "999px",
    border: "1px solid rgba(0, 102, 255, 0.15)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.025em",
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
  },
  techStack: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap" as const,
    flex: 1,
  },
  tech: {
    fontSize: "0.8rem",
    fontFamily: "var(--font-mono)",
    color: "var(--text-tertiary)",
    background: "var(--bg-elevated)",
    padding: "0.25rem 0.5rem",
    borderRadius: "var(--radius-sm)",
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    fontSize: "0.9rem",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    color: "var(--accent-primary)",
    textDecoration: "none",
    transition: "gap 0.2s ease",
  } as React.CSSProperties,
  arrow: {
    transition: "transform 0.2s ease",
    display: "inline-block",
  },
};
