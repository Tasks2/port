import { projects } from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import TechStack from "@/components/projects/TechStack";

export default function MlInProgressPage() {
  const project = projects.find((p) => p.slug === "ml-in-progress");

  if (!project) return null;

  return (
    <main>
      <ProjectHeader
        title={project.title}
        description={project.shortDescription}
        tags={project.tags}
      />

      <section style={styles.section}>
        <h2>Status</h2>
        <p>
          This project is currently in progress and focuses on building an
          end-to-end machine learning workflow, from data preparation to model
          evaluation and potential deployment.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Goal</h2>
        <p>
          The aim is to simulate real-world fintech ML pipelines where models
          are continuously improved and integrated into production systems.
        </p>
      </section>
    </main>
  );
}

const styles = {
  section: {
    marginTop: "2rem",
    maxWidth: "800px",
  },
};
