// export default function Footer() {
//   return (
//     <footer style={styles.footer}>
//       <p>© {new Date().getFullYear()} Amy Wanjala. Built with Next.js.</p>
//     </footer>
//   );
// }

// const styles = {
//   footer: {
//     textAlign: "center" as const,
//     padding: "2rem",
//     borderTop: "1px solid #eee",
//     marginTop: "3rem",
//     color: "#555",
//   },
// };

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <div style={styles.logoInitial}>AW</div>
            <div>
              <h3 style={styles.brandName}>Amy Wanjala</h3>
              <p style={styles.tagline}>Frontend Developer • Fintech • Data</p>
            </div>
          </div>

          <div style={styles.links}>
            <div style={styles.linkGroup}>
              <h4 style={styles.linkGroupTitle}>Navigate</h4>
              <Link href="/projects" style={styles.link}>Projects</Link>
              <Link href="/skills" style={styles.link}>Skills</Link>
              <Link href="/about" style={styles.link}>About</Link>
              <Link href="/contact" style={styles.link}>Contact</Link>
            </div>

            <div style={styles.linkGroup}>
              <h4 style={styles.linkGroupTitle}>Connect</h4>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.link}
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.link}
              >
                LinkedIn
              </a>
              <a 
                href="mailto:your.email@example.com"
                style={styles.link}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © {currentYear} Amy Wanjala. All rights reserved.
          </p>
          <p style={styles.built}>
            Built with Next.js • React • TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "var(--bg-card)",
    borderTop: "1px solid var(--border-subtle)",
    marginTop: "auto",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 2rem 2rem",
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    paddingBottom: "3rem",
    borderBottom: "1px solid var(--border-subtle)",
  } as React.CSSProperties,
  brand: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
  },
  logoInitial: {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, var(--accent-primary) 0%, #0052cc 100%)",
    color: "white",
    borderRadius: "var(--radius-md)",
    fontWeight: 700,
    fontSize: "1.125rem",
    fontFamily: "var(--font-display)",
  },
  brandName: {
    fontSize: "1.25rem",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    color: "var(--text-primary)",
    marginBottom: "0.25rem",
  },
  tagline: {
    fontSize: "0.875rem",
    color: "var(--text-tertiary)",
    fontFamily: "var(--font-display)",
  },
  links: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem",
  },
  linkGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
  },
  linkGroupTitle: {
    fontSize: "0.875rem",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    color: "var(--text-primary)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: "0.25rem",
  },
  link: {
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    textDecoration: "none",
    transition: "color 0.2s ease",
    fontFamily: "var(--font-body)",
  } as React.CSSProperties,
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "2rem",
    gap: "1rem",
    flexWrap: "wrap" as const,
  },
  copyright: {
    fontSize: "0.875rem",
    color: "var(--text-tertiary)",
  },
  built: {
    fontSize: "0.875rem",
    color: "var(--text-tertiary)",
    fontFamily: "var(--font-mono)",
  },
};
