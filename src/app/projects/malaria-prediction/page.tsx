import { projects } from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import TechStack from "@/components/projects/TechStack";

export default function MalariaPredictionPage() {
  const project = projects.find((p) => p.slug === "malaria-prediction");

  if (!project) return null;

  return (
    <main>
      <ProjectHeader
        title={project.title}
        description={project.shortDescription}
        tags={project.tags}
      />

      <section style={styles.section}>
        <h2>Problem</h2>
        <p>
          Accurate disease prediction is critical for early intervention and
          resource allocation, but requires robust data preprocessing and model
          evaluation.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
          I developed a machine learning model to predict malaria cases using
          structured datasets, applying feature engineering, training, and
          evaluation techniques.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Fintech Relevance</h2>
        <p>
          The predictive modeling techniques used here are directly applicable
          to fintech use cases such as fraud detection, credit risk scoring,
          and anomaly detection.
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
