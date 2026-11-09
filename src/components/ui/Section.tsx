import { cn } from "@/lib/cn";

/** A content block with an optional h2 and consistent spacing between blocks. */
export default function Section({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mt-12 max-w-3xl", className)}>
      {title && <h2 className="text-[clamp(1.75rem,3vw,2.25rem)]">{title}</h2>}
      {children}
    </section>
  );
}
