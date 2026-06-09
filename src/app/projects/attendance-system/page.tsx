import { projects } from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import TechStack from "@/components/projects/TechStack";

export default function AttendanceSystemPage() {
  const project = projects.find((p) => p.slug === "attendance-system");

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
          Organizations need reliable internal systems to manage attendance,
          leave requests, and approvals. Manual processes are error-prone and
          slow, especially in fast-moving fintech environments.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
          I built a web-based attendance and leave management system with
          role-based access, approval workflows, and admin dashboards to
          streamline internal operations.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Fintech Relevance</h2>
        <p>
          This project reflects the type of internal tools used in fintech
          companies for HR, compliance, and operations — emphasizing structured
          workflows, dashboards, and audit-friendly processes.
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
