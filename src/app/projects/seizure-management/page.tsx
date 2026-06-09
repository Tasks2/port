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
          Patients often struggle to consistently track medication schedules, 
          seizure events, and medical appointments. This can lead to incomplete 
          medical histories and reduced visibility into treatment progress.
.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
          I developed a healthcare management application that enables users to 
          record seizure events, manage medication schedules, track appointments, 
          and generate structured reports for healthcare consultations.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Engineering Highlights</h2>
        
          <ul>
            <li>Complex form management and validation</li>
            <li>Structured health record tracking</li>
            <li>Report generation workflows</li>
            <li>Scalable component architecture</li>
            <li>User-focused dashboard design</li>
            <li>Database-ready application architecture</li>
          </ul>
        
      </section>
      <section style={styles.section}>
        <h2>Key Skills Demonstrated</h2>
        <p>
          This project allowed me to showcase my abilities in fullstack development, 
          user experience design, and healthcare data management.
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
