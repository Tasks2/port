import { projects } from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import TechStack from "@/components/projects/TechStack";

export default function ImpactTrackerPage() {
  const project = projects.find((p) => p.slug === "impact-tracker");

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
        Organizations often struggle to measure project outcomes and track progress
        across multiple activities. Information is frequently spread across spreadsheets, 
        documents, and manual reports, making it difficult to evaluate performance and impact.
.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
          I developed an impact tracking platform that centralizes project data, activity records, 
          and performance indicators into a single system. The platform enables users to monitor 
          progress, generate reports, and gain visibility into outcomes through structured dashboards 
          and data management workflows.
        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Engineering Highlights</h2>
          <ul>
           <li>Dashboard and reporting workflows</li>
           <li>Structured data collection</li>
           <li>Performance tracking and monitoring</li>
           <li>Scalable data architecture</li>
           <li>User-focused information design</li>
           <li>Analytics-ready data structures</li>
          </ul>
        
      </section>
      <section style={styles.section}>
        <h2>Key Skills Demonstrated</h2>
        <p>
            This project allowed me to demonstrate my skills in fullstack development,
            database design and management, dashboard implementation, CRUD operations
            reporting workflows a d product-oriented development.
        </p>
      </section>
      <section style={styles.section}>
        <h2>Future Improvements</h2>
        <p>
            Future improvements could include enhanced data visualization features,
            automated reporting, real-time progress monitoring and integration with 
            external data sources for enriched analytics.
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
