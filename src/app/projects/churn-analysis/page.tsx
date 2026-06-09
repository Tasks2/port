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
          Customer retention is a critical challenge for many organizations. 
          Identifying users who are at risk of leaving allows teams to take 
          proactive measures and make more informed business decisions.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
         I built a predictive analytics pipeline that analyzes historical customer 
         behavior and engagement patterns to identify retention risks. The model 
         generates risk scores that can support customer success, marketing, and 
         operational decision-making.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Engineering Highlights</h2>
        <ul>
          <li>Data preprocessing and transformation</li>
          <li>Predictive modeling workflows</li>
          <li>Feature engineering</li>
          <li>Model performance evaluation</li>
          <li>Analytical reporting concepts</li>
          <li>Business-focused data interpretation</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Key Skills Demonstrated</h2>
        <p>
          This project allowed me to demonstrate my skills in Python,Pandas, Scikit-learn, 
          machine learning fundamentals,predictive analytics, and my ability to work with 
          structured business data to generate actionable insights.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Future Improvements</h2>
        <p>
          Future improvements include exploring additional modeling techniques,
          expanded feature sets, integrating the model into a fullstack application, and developing 
          automated reporting workflows to support business decision-making.
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
