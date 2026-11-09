import { cn } from "@/lib/cn";

/** The small uppercase accent label that sits above a heading. */
export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent", className)}>
      {children}
    </div>
  );
}
