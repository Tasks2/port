export default function Tag({ label }: { label: string }) {
  return (
    <span style={styles.tag}>
      {label}
    </span>
  );
}

const styles = {
  tag: {
    background: "var(--accent-soft)",
    color: "var(--accent)",
    padding: "0.3rem 0.7rem",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: 500,
  },
};
