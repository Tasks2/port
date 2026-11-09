import type { Metadata } from "next";
import { contactLinks, externalLinkProps } from "@/config/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import BulletList from "@/components/ui/BulletList";

export const metadata: Metadata = { title: "Contact" };

const openTo = [
  "Frontend & product-focused roles",
  "Fintech & data-driven platforms",
  "Graduate / junior software engineering opportunities",
  "Internships and contract projects",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl pt-8">
      <SectionHeader
        title="Contact"
        description="Interested in working together, collaborating on a project, or discussing frontend, fintech, business analysis or data-related roles? I’d love to connect."
      />

      <Section title="What I’m Open To">
        <BulletList items={openTo} />
      </Section>

      <Section title="Get in Touch">
        <ul className="space-y-3">
          {contactLinks.map((link) => (
            <li key={link.href} className="text-ink-muted">
              <span aria-hidden className="mr-2">{link.icon}</span>
              {link.label}:{" "}
              <a href={link.href} {...externalLinkProps(link)} className="font-medium">
                {link.display}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
