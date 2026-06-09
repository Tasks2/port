export default function SkillsPage() {
  return (
    <main style={styles.container}>
      <h1>Software Engineering Skills</h1>
      <p style={styles.intro}>
        I build full-stack applications that solve real-world problems through thoughtful system design, 
        scalable architectures, and user-focused experiences. My experience spans healthcare platforms, 
        business management systems, workflow automation tools, and data-driven applications.
      </p>

      <section style={styles.section}>
        <h2>Fullstack Development</h2>
        <ul>
          <li>React, Next.js (App Router)</li>
          <li>TypeScript & JavaScript (ES6+)</li>
          <li>Responsive UI development</li>
          <li>Component-driven architecture</li>
          <li>State management and client-side data handling</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Backend Development</h2>
        <ul>
          <li>Node.js and Express</li>
          <li>REST API design and integration</li>
          <li>Authentication and authorization</li>
          <li>Business logic implementation</li>
          <li>Server-side application development</li>
          <li>API testing and debugging</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Database and Data Management</h2>
        <ul>
          <li>SQL fundamentals</li>
          <li>MySQL, PostgreSQL</li>
          <li>Database schema design and optimization</li>
          <li>Data modeling and relationships</li>
          <li>CRUD operations and data integration</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Software Engineering Practices</h2>
        <ul>
          <li>System design fundamentals</li>
          <li>Component reusability and maintainability</li>
          <li>Git and GitHub for version control</li>
          <li>Agile and iterative development </li>
          <li>Debugging and troubleshooting</li>
          <li>Performance optimization and scalability considerations</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Data and Analytics</h2>
        <ul>
          <li>Python,Pandas</li>
          <li>Exploratory data analysis (EDA)</li>
          <li>Machine learning fundamentals</li>
          <li>Data visualization and reporting</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Professional Skills</h2>
        <ul>
          <li>Problem-solving</li>
          <li>Systems-thinking</li>
          <li>Product-oriented mindset</li>
          <li>Clear technical communication</li>
          <li>Rapid learning and adaptability</li>
          <li>Translating business needs into technical solutions</li>
        </ul>
      </section>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "4rem 1rem",
  },
  intro: {
    color: "#555",
    maxWidth: "700px",
  },
  section: {
    marginTop: "2.5rem",
  },
};
