// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav style={styles.nav}>
//       <Link href="/" style={styles.logo}>
//         Amy Wanjala Portfolio
//       </Link>

//       <div style={styles.links}>
//         <Link href="/projects">Projects</Link>
//         <Link href="/skills">Skills</Link>
//         <Link href="/about">About</Link>
//         <Link href="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// }

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "1.25rem 2rem",
//     borderBottom: "1px solid var(--border-light)",
//     background: "var(--bg-card)",
//   },
//   logo: {
//     fontWeight: 600,
//     fontSize: "1.05rem",
//     color: "var(--text-primary)",
//   },
//   links: {
//     display: "flex",
//     gap: "1.5rem",
//     fontSize: "0.95rem",
//   },
// };

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link href="/" style={styles.logo}>
          <span style={styles.logoInitial}>AW</span>
          <span style={styles.logoText}>Amy Wanjala</span>
        </Link>

        <div style={styles.links}>
          <Link 
            href="/projects" 
            style={{
              ...styles.link,
              ...(isActive('/projects') ? styles.linkActive : {}),
            }}
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            style={{
              ...styles.link,
              ...(isActive('/skills') ? styles.linkActive : {}),
            }}
          >
            Skills
          </Link>
          <Link 
            href="/about" 
            style={{
              ...styles.link,
              ...(isActive('/about') ? styles.linkActive : {}),
            }}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            style={styles.contactButton}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky" as const,
    top: 0,
    zIndex: 100,
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--border-subtle)",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "72px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    textDecoration: "none",
    transition: "opacity 0.2s ease",
  } as React.CSSProperties,
  logoInitial: {
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, var(--accent-primary) 0%, #0052cc 100%)",
    color: "white",
    borderRadius: "var(--radius-sm)",
    fontWeight: 700,
    fontSize: "0.875rem",
    fontFamily: "var(--font-display)",
  },
  logoText: {
    fontWeight: 600,
    fontSize: "1.05rem",
    color: "var(--text-primary)",
    fontFamily: "var(--font-display)",
  },
  links: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },
  link: {
    padding: "0.5rem 1rem",
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "var(--text-secondary)",
    textDecoration: "none",
    fontFamily: "var(--font-display)",
    borderRadius: "var(--radius-sm)",
    transition: "all 0.2s ease",
  } as React.CSSProperties,
  linkActive: {
    color: "var(--accent-primary)",
    background: "var(--accent-soft)",
  },
  contactButton: {
    padding: "0.625rem 1.25rem",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "white",
    background: "var(--accent-primary)",
    textDecoration: "none",
    fontFamily: "var(--font-display)",
    borderRadius: "var(--radius-md)",
    marginLeft: "0.5rem",
    transition: "all 0.2s ease",
    boxShadow: "var(--shadow-sm)",
  } as React.CSSProperties,
};
