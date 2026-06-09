export default function ProjectHeader({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <header style={styles.header}>
      <h1>{title}</h1>
      <p style={styles.desc}>{description}</p>
      <div style={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}

const styles = {
  header: {
    marginBottom: "2rem",
  },
  desc: {
    color: "#555",
    maxWidth: "700px",
  },
  tags: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap" as const,
    marginTop: "0.5rem",
  },
  tag: {
    background: "#f3f4f6",
    padding: "0.3rem 0.7rem",
    borderRadius: "999px",
    fontSize: "0.75rem",
  },
};
