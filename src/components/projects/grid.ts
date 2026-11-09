/**
 * Responsive grid for project cards: as many 320px+ columns as fit.
 * `min(320px,100%)` stops a card overflowing on phones narrower than 320px.
 * Shared so the home page and /projects lay cards out identically.
 *
 * Lives in its own plain .ts file (not ProjectCard.tsx) because values
 * exported from a "use client" file can't be read by server components.
 */
export const projectGridClass = "grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6";
