import { cn } from "@/lib/cn";

const variants = {
  /** Rounded label for categories, e.g. "Healthcare". */
  pill: "rounded-full bg-elevated px-2.5 py-0.5 text-xs font-medium tracking-wide text-ink-muted",
  /** Outlined monospace badge for technologies, e.g. "Next.js". */
  code: "rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-ink-subtle",
};

export default function Tag({
  label,
  variant = "pill",
  className,
}: {
  label: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return <span className={cn("inline-block", variants[variant], className)}>{label}</span>;
}

/** A wrapping row of tags. */
export function TagList({
  labels,
  variant,
  className,
}: {
  labels: string[];
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {labels.map((label) => (
        <Tag key={label} label={label} variant={variant} />
      ))}
    </div>
  );
}
