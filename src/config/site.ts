// Single source of truth for personal details, links and navigation.
// Anything that appears in more than one component belongs here, so that
// changing your email, role or a nav link is a one-line edit.

export type NavLink = {
  label: string;
  href: string;
  /** Rendered as a highlighted button in the navbar instead of a plain link. */
  cta?: boolean;
};

export type ContactLink = {
  label: string;
  href: string;
  /** Human-readable form of the link, e.g. "github.com/Tasks2". */
  display: string;
  icon: string;
  /** External links open in a new tab. */
  external: boolean;
};

const roles = ["Software Engineer", "Junior Security Analyst"];

export const siteConfig = {
  name: "Amy Wanjala",
  initials: "AW",
  /** Short role shown where space is tight (navbar). */
  role: roles[0],
  /** Full role line shown in the footer and page title. */
  roleLine: roles.join(" • "),
  description:
    "Software engineer specializing in data-driven fintech solutions and machine learning applications. Building elegant interfaces for complex business problems.",
  keywords: ["Software Engineer", "Fintech", "Data Science", "Machine Learning", "React", "Next.js"],
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact", cta: true },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:amywanjala@gmail.com",
    display: "amywanjala@gmail.com",
    icon: "📧",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amy-wanjala",
    display: "linkedin.com/in/amy-wanjala",
    icon: "💼",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Tasks2",
    display: "github.com/Tasks2",
    icon: "🧑‍💻",
    external: true,
  },
];

/** Spread onto an <a> so external links open safely in a new tab. */
export function externalLinkProps(link: ContactLink) {
  return link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
