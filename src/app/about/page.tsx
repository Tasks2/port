import type { Metadata } from "next";
import { Fragment } from "react";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import BulletList from "@/components/ui/BulletList";
import Button from "@/components/ui/Button";

const focusAreas = [
  {
    icon: "📊",
    title: "Data Dashboards",
    text: "Building interactive analytics platforms and internal tools that turn data into insights. From customer churn prediction to attendance tracking, I create interfaces that make complex data approachable.",
  },
  {
    icon: "💼",
    title: "Business Systems",
    text: "Building software that supports operational workflows, reporting, inventory management, and enterprise processes.",
  },
  {
    icon: "🏥",
    title: "Healthcare Applications",
    text: "Developing tools that help users track, manage, and understand important health information.",
  },
  {
    icon: "💻",
    title: "Fullstack Development",
    text: "Designing complete solutions from user interfaces to backend services, APIs, and databases.",
  },
];

const principles = [
  ["Component-driven architecture", "for scalable, reusable code"],
  ["Data-first thinking", "to ensure interfaces serve the underlying information architecture"],
  ["Performance optimization", "especially for data-heavy applications"],
  ["Accessible design", "that works for all users"],
];

// Possible now that this is a server component.
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <RevealGroup className="mx-auto max-w-[850px] pt-12">
      <Reveal>
        <SectionHeader eyebrow="About" title="Building Software That Solves Real Problems" />
      </Reveal>

      <Reveal>
        <p className="text-xl leading-relaxed text-ink">
          I’m a software engineer passionate about building applications that transform
          complex processes into intuitive digital experiences.
        </p>
        <p className="text-[1.05rem] leading-relaxed">
          My work spans healthcare systems, business management platforms, workflow automation
          tools, and data-driven applications. I enjoy designing solutions that are not only
          technically sound but also genuinely useful to the people who rely on them every day.
        </p>
        <p className="text-[1.05rem] leading-relaxed">
          Whether developing frontend interfaces, designing APIs, or structuring databases,
          I approach software development with a focus on reliability, scalability,
          and long-term maintainability.
        </p>
      </Reveal>

      <Reveal>
        <Section title="What I Work On" className="max-w-none">
          <div className="grid gap-6 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <Card key={area.title} variant="flat">
                <div aria-hidden className="mb-4 text-3xl">{area.icon}</div>
                <h3 className="mb-2 text-lg">{area.title}</h3>
                <p className="mb-0 text-[0.95rem]">{area.text}</p>
              </Card>
            ))}
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <Section title="Data & Reporting">
          <p className="text-[1.05rem] leading-relaxed">
            Creating dashboards and reporting tools that transform raw data into actionable insights.
          </p>
          <BulletList
            className="mt-6"
            items={principles.map(([strong, rest]) => (
              <Fragment key={strong}>
                <strong className="font-semibold text-ink">{strong}</strong> {rest}
              </Fragment>
            ))}
          />
        </Section>
      </Reveal>

      <Reveal>
        <Section title="Career Direction">
          <p className="text-[1.05rem] leading-relaxed">
            I’m currently seeking software engineering opportunities where I can contribute to building
            reliable, scalable, and impactful applications. I’m particularly interested in roles
            involving full-stack development, backend engineering, system design, workflow automation,
            and data-driven solutions. I enjoy working on products that solve meaningful problems and
            improve how people or organizations operate.
          </p>
          <p className="text-[1.05rem] leading-relaxed">
            Whether in healthcare, agriculture, enterprise software, logistics, or emerging technology,
            I’m motivated by opportunities to build software that creates measurable value.
          </p>
        </Section>
      </Reveal>

      <Reveal
        as="section"
        className="mt-20 flex flex-wrap items-center justify-between gap-8 rounded-lg border border-accent/20 bg-linear-to-br from-accent-soft to-card p-10"
      >
        <div className="flex-1">
          <h2 className="mb-2 text-[1.75rem]">Let’s Work Together</h2>
          <p className="mb-0">
            Interested in collaborating or have a project in mind? I’d love to hear from you.
          </p>
        </div>
        <Button href="/contact" variant="accent" withArrow>
          Get In Touch
        </Button>
      </Reveal>
    </RevealGroup>
  );
}
