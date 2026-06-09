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
          Organizations often rely on manual processes to manage attendance records, 
          leave requests, approvals, and workforce reporting. These processes can become 
          inefficient, difficult to track, and prone to errors as teams grow.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
          I developed a full-stack attendance and leave management platform that streamlines 
          workforce operations through attendance tracking, leave request workflows, approval 
          processes, and administrative dashboards.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Engineering Highlights</h2>
      
          <ul>
            <li>Role-based access control implementation</li>
            <li>Dynamic reporting and dashboard design</li>
            <li>Scalable component architecture</li>
            <li>Structured data management</li>
            <li>Workflow automation for approvals</li>
            <li>Business process modeling</li>
          </ul>
        
      </section>
      <section style={styles.section}>
        <h2>Key Skills Demonstrated</h2>
        <p>
          This project allowed me to demonstrate my skills in full-stack development,
          user experience design, dashboard development, database planning and data modelling
           and building software that supports operational workflows.
        </p>
      </section>

      <section style={styles.section}>  
        <h2>Future Improvements</h2>
        <p>
          Future enhancements could include mobile app development, automated notifications, 
          advanced reporting features, and support for additional workforce management functions. 
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
