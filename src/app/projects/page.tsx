import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectGridClass } from "@/components/projects/grid";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

// Possible now that this is a server component.
export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <RevealGroup className="pt-8">
      <Reveal>
        <SectionHeader
          eyebrow="Work"
          title="Projects"
          description="Fintech, data, and product-focused projects."
        />
      </Reveal>

      <div className={projectGridClass}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </RevealGroup>
  );
}
