import type { Metadata } from "next";
import { skillGroups, skillsIntro } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import BulletList from "@/components/ui/BulletList";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-3xl pt-8">
      <SectionHeader eyebrow="Skills" title="Software Engineering Skills" description={skillsIntro} />

      {skillGroups.map((group) => (
        <Section key={group.title} title={group.title}>
          <BulletList items={group.items} />
        </Section>
      ))}
    </div>
  );
}
