import { projects } from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import TechStack from "@/components/projects/TechStack";

export default function ChurnAnalysisPage() {
  const project = projects.find((p) => p.slug === "churn-analysis");

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
          Fintech platforms lose significant revenue when customers churn. 
          The challenge is identifying at-risk customers early enough to take
          proactive retention actions.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
          I built a machine learning pipeline to predict customer churn using
          historical user behavior and account activity data. The model outputs
          churn probabilities that could be integrated into fintech dashboards
          for customer success teams.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Fintech Relevance</h2>
        <p>
          This project mirrors real-world fintech use cases such as churn
          prediction, customer lifetime value optimization, and targeted
          retention strategies.
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
