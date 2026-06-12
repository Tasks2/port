import { projects } from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import TechStack from "@/components/projects/TechStack";

export default function ClinicAppointmentPage() {
  const project = projects.find((p) => p.slug === "clinic-appointment");

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
        Managing specialist appointments can be challenging for both patients and healthcare
         providers. Manual scheduling processes, fragmented patient records, and limited 
         visibility into appointment availability often lead to inefficiencies and missed 
         consultations.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Solution</h2>
        <p>
          I developed a clinic appointment management platform designed to streamline scheduling 
          and patient coordination for neurological care. The system provides an intuitive interface 
          for booking appointments, managing patient information, tracking consultations, and organizing 
          clinical workflows in a centralized environment.

        </p>
      </section>

      <TechStack tech={project.tech} />

      <section style={styles.section}>
        <h2>Engineering Highlights</h2>
          <ul>
           <li>Appointment scheduling and calendar management</li>
           <li>Structured patient data handling</li>
           <li>Responsive and accessible user interface</li>
           <li>Scalable component-based architecture</li>
           <li>Healthcare workflow modeling</li>
           <li>Database-ready application design</li>
          </ul>
        
      </section>
      <section style={styles.section}>
        <h2>Key Skills Demonstrated</h2>
        <p>
            This project allowed me to demonstrate my skills in fullstack development,
            database design and management, form handling and validation, 
            CRUD operations, reporting workflows and product-oriented development.
        </p>
      </section>
      <section style={styles.section}>
        <h2>Future Improvements</h2>
        <p>
            Future improvements could include implementing user authentication and role-based access control,
            integrating with external calendar services for real-time availability, and adding features for 
            appointment reminders and notifications to enhance patient engagement and reduce no-shows.
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
