import { projects } from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import TechStack from "@/components/projects/TechStack";

export default function SeizureManagementPage() {
  const project = projects.find((p) => p.slug === "seizure-management");

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
          Patients often struggle to consistently track medication, medical
          appointments, and seizure events, which leads to incomplete reporting
          during doctor visits.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
          I built a product-focused web app that allows users to log medication,
          track appointments, and generate structured medical reports for
          consultations.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Product & Fintech Relevance</h2>
        <p>
          While health-focused, this project demonstrates strong product
          engineering skills relevant to fintech: building dashboards,
          handling sensitive user data, structuring complex forms, and
          presenting actionable information clearly.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Future Improvements</h2>
        <p>
          Planned improvements include making the application fullstack with
          authentication, secure data storage, and role-based access.
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
