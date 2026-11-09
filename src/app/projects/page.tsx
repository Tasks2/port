"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectGridClass } from "@/components/projects/grid";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ProjectsPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-8">
      <motion.div variants={fadeInUp}>
        <SectionHeader
          eyebrow="Work"
          title="Projects"
          description="Fintech, data, and product-focused projects."
        />
      </motion.div>

      <div className={projectGridClass}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
