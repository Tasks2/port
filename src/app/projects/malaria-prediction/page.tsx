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
          Early identification of disease risk can support faster intervention, 
          better resource planning, and more informed decision-making. Developing
          accurate predictive systems requires effective data preparation, feature 
          selection, and model evaluation.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
          I developed a predictive analytics model using structured healthcare data 
          to estimate malaria risk. The project involved data preprocessing, feature 
          engineering, model training, and performance evaluation to generate reliable 
          predictions.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Engineering Highlights</h2>
        <ul>
          <li>Data preprocessing pipelines</li>
          <li>Feature engineering</li>
          <li>Model training and evaluation</li>
          <li>Predictive analytics workflows</li>
          <li>Data quality management</li>
          <li>Analytical problem-solving</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Key Skills Demonstrated</h2>
        <p>
          This project allowed me to demonstrate my skills in data science, machine learning fundamentals,
          and predictive analytics, data visualization, as well as my ability to work with structured healthcare data.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Future Improvements</h2>
        <p>
          Future improvements include exploring additional machine learning algorithms,
          incorporating real-time data feeds, expanded dataset coverage, cloud deployment
          and API integration.
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

 