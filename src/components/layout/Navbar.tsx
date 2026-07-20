"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const linkStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 0.9rem",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: active ? "var(--text-primary)" : "var(--text-secondary)",
    textDecoration: "none",
    borderRadius: "var(--radius-sm)",
    transition: "color 0.2s ease, background 0.2s ease",
    background: active ? "var(--bg-elevated)" : "transparent",
  });

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link href="/" style={styles.logo}>
          <span style={styles.logoInitial}>AW</span>
          <span style={styles.logoText}>
            Amy Wanjala <span style={styles.logoDot}>·</span>{" "}
            <span style={styles.logoRole}>Software Engineer</span>
          </span>
        </Link>

        <div style={styles.links}>
          <Link href="/projects" style={linkStyle(isActive("/projects"))}>Projects</Link>
          <Link href="/skills" style={linkStyle(isActive("/skills"))}>Skills</Link>
          <Link href="/about" style={linkStyle(isActive("/about"))}>About</Link>
          <Link href="/contact" style={styles.contactButton}>Contact</Link>
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
    background: "rgba(247, 244, 238, 0.78)",
    backdropFilter: "blur(14px) saturate(1.2)",
    WebkitBackdropFilter: "blur(14px) saturate(1.2)",
    borderBottom: "1px solid var(--border-subtle)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "68px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    textDecoration: "none",
  } as React.CSSProperties,
  logoInitial: {
    width: "34px",
    height: "34px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--bg-inverse)",
    color: "#f7f4ee",
    borderRadius: "var(--radius-sm)",
    fontWeight: 600,
    fontSize: "0.8rem",
    letterSpacing: "0.02em",
  },
  logoText: {
    fontWeight: 600,
    fontSize: "0.95rem",
    color: "var(--text-primary)",
    letterSpacing: "-0.005em",
  },
  logoDot: { color: "var(--border-light)", margin: "0 0.15rem" } as React.CSSProperties,
  logoRole: {
    fontWeight: 400,
    color: "var(--text-tertiary)",
    fontStyle: "italic",
    fontFamily: "var(--font-display)",
    fontSize: "1rem",
  } as React.CSSProperties,
  links: {
    display: "flex",
    gap: "0.25rem",
    alignItems: "center",
  },
  contactButton: {
    padding: "0.55rem 1.1rem",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#f7f4ee",
    background: "var(--bg-inverse)",
    textDecoration: "none",
    borderRadius: "var(--radius-md)",
    marginLeft: "0.5rem",
    transition: "opacity 0.2s ease",
  } as React.CSSProperties,
};
