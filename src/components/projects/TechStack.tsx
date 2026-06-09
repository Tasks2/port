export default function TechStack({ tech }: { tech: string[] }) {
  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Tech Stack</h2>
      <ul>
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
