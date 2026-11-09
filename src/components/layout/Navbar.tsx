"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // "/projects/impact-tracker" should still highlight "Projects".
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const pageLinks = navLinks.filter((link) => !link.cta);
  const ctaLinks = navLinks.filter((link) => link.cta);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md backdrop-saturate-125">
      <Container className="flex h-[68px] items-center justify-between">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 text-ink hover:text-ink">
          <span className="flex size-[34px] items-center justify-center rounded-sm bg-inverse text-[0.8rem] font-semibold tracking-wide text-paper">
            {siteConfig.initials}
          </span>
          <span className="text-[0.95rem] font-semibold">
            {siteConfig.name}
            {/* The role is hidden on very small screens to save space. */}
            <span className="hidden sm:inline">
              <span className="mx-1 text-line-strong">·</span>
              <span className="font-display text-base font-normal italic text-ink-subtle">
                {siteConfig.role}
              </span>
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {pageLinks.map((link) => (
            <NavItem key={link.href} href={link.href} active={isActive(link.href)}>
              {link.label}
            </NavItem>
          ))}
          {ctaLinks.map((link) => (
            <Button key={link.href} href={link.href} size="sm" className="ml-2">
              {link.label}
            </Button>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="rounded-sm p-2 text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </Container>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {pageLinks.map((link) => (
              <NavItem key={link.href} href={link.href} active={isActive(link.href)} onClick={closeMenu}>
                {link.label}
              </NavItem>
            ))}
            {ctaLinks.map((link) => (
              <Button key={link.href} href={link.href} size="sm" onClick={closeMenu} className="mt-2 justify-center">
                {link.label}
              </Button>
            ))}
          </Container>
        </div>
      )}
    </nav>
  );
}

function NavItem({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-sm px-3.5 py-2 text-sm font-medium transition-colors",
        active ? "bg-elevated text-ink" : "text-ink-muted hover:bg-elevated hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}
