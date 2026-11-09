"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";
import { Project } from "@/data/projects";
import Card from "@/components/ui/Card";
import { TagList } from "@/components/ui/Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="h-full"
    >
      <Card className="relative flex h-full flex-col gap-5 overflow-hidden transition-shadow hover:shadow-md">
        {/* Accent bar down the left edge */}
        <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-accent/90" />

        <div className="flex flex-col gap-3">
          <h3 className="mb-0 font-display text-[1.6rem] leading-[1.15] font-normal tracking-tight">
            {project.title}
          </h3>
          <TagList labels={project.tags.slice(0, 3)} />
        </div>

        <p className="mb-0 flex-1 text-[0.95rem] leading-relaxed">{project.shortDescription}</p>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
          <TagList labels={project.tech.slice(0, 4)} variant="code" className="flex-1" />

          <Link
            href={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-1.5 border-b border-ink pb-px text-sm font-semibold text-ink hover:border-accent hover:text-accent"
          >
            Case study
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
