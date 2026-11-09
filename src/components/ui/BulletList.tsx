import { cn } from "@/lib/cn";

/**
 * A styled bullet list. Tailwind's reset removes list bullets by default,
 * so every list that should show bullets goes through this component.
 *
 * Index keys are fine here: the lists are static and never reorder.
 */
export default function BulletList({
  items,
  className,
}: {
  items: React.ReactNode[];
  className?: string;
}) {
  return (
    <ul className={cn("list-disc space-y-2 pl-5 text-ink-muted marker:text-accent", className)}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
