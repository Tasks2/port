import { cn } from "@/lib/cn";

const variants = {
  /** White-ish card that sits above the page (project cards). */
  raised: "bg-card shadow-sm",
  /** Flat, slightly darker fill (feature tiles on About). */
  flat: "bg-elevated",
};

export default function Card({
  children,
  variant = "raised",
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-line p-7", variants[variant], className)}>
      {children}
    </div>
  );
}
