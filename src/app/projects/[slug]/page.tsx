import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects, type CaseStudySection } from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import TechStack from "@/components/projects/TechStack";

// In Next.js 15+, `params` is a Promise and must be awaited.
type Props = { params: Promise<{ slug: string }> };

// The Tech Stack block is shown after this many case-study sections
// (i.e. after "Problem" and "Solution"), matching the old page layout.
const TECH_STACK_POSITION = 2;

// Tells Next.js which slugs exist so every project page is pre-rendered
// as static HTML at build time.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Any slug not returned above gets a 404 instead of being rendered on demand.
export const dynamicParams = false;

// Gives each project page its own browser-tab title and description.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Renders the 404 page instead of an empty page.
  if (!project) notFound();

  const intro = project.caseStudy.slice(0, TECH_STACK_POSITION);
  const rest = project.caseStudy.slice(TECH_STACK_POSITION);

  // <article>, not <main>: the root layout already provides the <main> landmark.
  return (
    <article>
      <ProjectHeader
        title={project.title}
        description={project.shortDescription}
        tags={project.tags}
      />

      {intro.map((section) => (
        <CaseStudyBlock key={section.heading} section={section} />
      ))}

      <TechStack tech={project.tech} />

      {rest.map((section) => (
        <CaseStudyBlock key={section.heading} section={section} />
      ))}
    </article>
  );
}

function CaseStudyBlock({ section }: { section: CaseStudySection }) {
  return (
    <section style={styles.section}>
      <h2>{section.heading}</h2>
      {section.list ? (
        <ul>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{section.body}</p>
      )}
    </section>
  );
}

const styles = {
  section: {
    marginTop: "2rem",
    maxWidth: "800px",
  },
};
