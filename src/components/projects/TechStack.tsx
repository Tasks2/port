import Section from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";

export default function TechStack({ tech }: { tech: string[] }) {
  return (
    <Section title="Tech Stack">
      <TagList labels={tech} variant="code" className="gap-2" />
    </Section>
  );
}
