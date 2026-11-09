import { twMerge } from "tailwind-merge";

/**
 * Joins class names, skipping falsy values, and resolves Tailwind conflicts
 * so the LAST class wins: cn("p-4 bg-card", "bg-elevated") → "p-4 bg-elevated".
 *
 * Use it whenever a component has default classes AND accepts a `className`
 * prop, so callers can override a default without fighting CSS order.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes);
}
