export default function ContactPage() {
  return (
    <main style={styles.container}>
      <h1>Contact</h1>

      <p style={styles.intro}>
        Interested in working together, collaborating on a project, or discussing
        frontend, fintech, business analysis or data-related roles? I’d love to connect.
      </p>

     
      <section style={styles.section}>
        <h2>What I’m Open To</h2>
        <ul>
          <li>Frontend & product-focused roles</li>
          <li>Fintech & data-driven platforms</li>
          <li>Graduate / junior software engineering opportunities</li>
          <li>Internships and contract projects</li>
        </ul>
      </section>

       <section style={styles.section}>
        <h2>Get in Touch</h2>
        <ul style={styles.list}>
          <li>
            📧 Email:{" "}
            <a href="mailto:amywanjala@gmail.com">amywanjala@gmail.com</a>
          </li>
          {/* <li>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </li> */}
          <li>
            🧑‍💻 GitHub:{" "}
            <a
              href="https://github.com/Tasks2"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Tasks2
            </a>
          </li>
        </ul>
      </section>

    </main>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "4rem 1rem",
  },
  intro: {
    color: "#555",
    maxWidth: "650px",
  },
  section: {
    marginTop: "2.5rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
  },
};
