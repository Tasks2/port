import { cn } from "@/lib/cn";

/** Centres content at the site's max width with responsive side padding. */
export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-site px-4 sm:px-8", className)}>{children}</div>;
}
