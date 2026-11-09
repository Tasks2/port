import Link from "next/link";
import { contactLinks, externalLinkProps, navLinks, siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";

const linkClass = "text-sm text-ink-muted hover:text-accent";
const groupTitleClass = "mb-1 font-sans text-sm font-semibold uppercase tracking-wider text-ink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-card">
      <Container className="pt-16 pb-8">
        {/* One column on phones, two from the md breakpoint up */}
        <div className="grid gap-12 border-b border-line pb-12 md:grid-cols-2">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-accent to-accent-dark font-display text-lg text-white">
              {siteConfig.initials}
            </div>
            <div>
              <p className="mb-1 font-display text-xl text-ink">{siteConfig.name}</p>
              <p className="mb-0 text-sm text-ink-subtle">{siteConfig.roleLine}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className={groupTitleClass}>Navigate</h4>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h4 className={groupTitleClass}>Connect</h4>
              {contactLinks.map((link) => (
                <a key={link.href} href={link.href} {...externalLinkProps(link)} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-sm text-ink-subtle">
          <p className="mb-0 text-ink-subtle">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mb-0 font-mono text-ink-subtle">Built with Next.js • React • TypeScript</p>
        </div>
      </Container>
    </footer>
  );
}
