import { cn } from "@/lib/cn";
import Eyebrow from "./Eyebrow";

/**
 * Eyebrow + heading + optional intro paragraph.
 *
 * `as` picks the heading level so the same look can be the page title (h1)
 * or a section title (h2) — the visual style comes from globals.css.
 */
export default function SectionHeader({
  title,
  eyebrow,
  description,
  as: Heading = "h1",
  className,
}: {
  title: React.ReactNode;
  eyebrow?: string;
  description?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <header className={cn("mb-10", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading>{title}</Heading>
      {description && <p className="text-lg">{description}</p>}
    </header>
  );
}
