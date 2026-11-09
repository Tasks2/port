import Link from "next/link";
import { cn } from "@/lib/cn";

// Each variant is just a list of classes. Adding a new style of button
// means adding one entry here, not a new styles object in some page.
const variants = {
  primary: "bg-inverse text-paper border-inverse hover:bg-ink-muted hover:border-ink-muted hover:text-paper",
  secondary: "bg-transparent text-ink border-line-strong hover:bg-elevated hover:text-ink",
  accent: "bg-accent text-white border-accent shadow-md hover:bg-accent-dark hover:border-accent-dark hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3.5 text-[0.95rem]",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Adds a → that slides right on hover. */
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
};

/**
 * A link styled as a button. It always renders next/link, so internal
 * navigation never triggers a full page reload.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        // `group` lets the arrow react to hovering the whole button
        "group inline-flex items-center gap-2 whitespace-nowrap rounded-md border font-medium transition-colors",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
      {withArrow && (
        <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
