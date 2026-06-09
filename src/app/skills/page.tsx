export default function SkillsPage() {
  return (
    <main style={styles.container}>
      <h1>Skills</h1>
      <p style={styles.intro}>
        A practical skill set focused on building modern, data-driven web
        applications and frontend interfaces for real-world business systems.
      </p>

      <section style={styles.section}>
        <h2>Frontend Development</h2>
        <ul>
          <li>React, Next.js (App Router)</li>
          <li>TypeScript & JavaScript (ES6+)</li>
          <li>Responsive UI development</li>
          <li>Component-driven architecture</li>
          <li>State management and client-side data handling</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Data & Machine Learning</h2>
        <ul>
          <li>Python for data analysis and ML workflows</li>
          <li>Exploratory data analysis (EDA)</li>
          <li>Supervised ML models (classification, prediction)</li>
          <li>Model evaluation and basic feature engineering</li>
          <li>Building ML-powered prototypes for business use cases</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Fintech & Product-Oriented Skills</h2>
        <ul>
          <li>Designing dashboards and internal tools</li>
          <li>Understanding user workflows and business requirements</li>
          <li>Building CRUD-based enterprise-style systems</li>
          <li>Translating data outputs into usable frontend features</li>
          <li>Awareness of data privacy and user-centric design</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Tools & Workflow</h2>
        <ul>
          <li>Git & GitHub for version control</li>
          <li>REST APIs & frontend-backend integration</li>
          <li>Figma for basic UI/UX collaboration</li>
          <li>Agile-style development and iterative prototyping</li>
          <li>Comfortable working with incomplete specs and evolving requirements</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Soft Skills</h2>
        <ul>
          <li>Strong problem-solving mindset</li>
          <li>Ability to break down complex systems into manageable features</li>
          <li>Clear technical communication</li>
          <li>Fast learner, adaptable to new tools and stacks</li>
          <li>Product-oriented thinking (building for users, not just code)</li>
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
