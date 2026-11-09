"use client";

import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectGridClass } from "@/components/projects/grid";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20"
    >
      <motion.div variants={fadeInUp} className="mb-12 flex flex-wrap items-start justify-between gap-8">
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
      </motion.div>

      <motion.div variants={staggerContainer} className={projectGridClass}>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}
