import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectGridClass } from "@/components/projects/grid";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    // trigger="scroll": waits until this section scrolls into view.
    <RevealGroup as="section" trigger="scroll" className="py-20">
      <Reveal className="mb-12 flex flex-wrap items-start justify-between gap-8">
        <SectionHeader
          as="h2"
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A selection of recent work spanning fintech analytics, enterprise systems, and machine learning applications."
          className="mb-0"
        />
        <Button href="/projects" variant="secondary" withArrow>
          View All Projects
        </Button>
      </Reveal>

      {/* Each ProjectCard animates itself and follows this group's stagger. */}
      <div className={projectGridClass}>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </RevealGroup>
  );
}
