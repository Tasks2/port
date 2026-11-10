"use client";

// The ONLY place pages get scroll/entrance animation from. These are small
// client components, so the pages that use them can stay server components:
// a server component may render a client component and pass it children.

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Starts the animation for everything inside it and staggers the children,
 * so each <Reveal> inside fades in a moment after the previous one.
 *
 * `trigger="load"` animates as soon as the page appears (page headers).
 * `trigger="scroll"` waits until the group scrolls into view (lower sections).
 */
export function RevealGroup({
  children,
  className,
  trigger = "load",
  as = "div",
}: Props & { trigger?: "load" | "scroll"; as?: "div" | "section" }) {
  const Component = as === "section" ? motion.section : motion.div;
  const play =
    trigger === "load"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: { once: true, margin: "-100px" } };

  return (
    <Component initial="hidden" variants={staggerContainer} className={className} {...play}>
      {children}
    </Component>
  );
}

/**
 * Fades its children up into place. Must sit somewhere inside a
 * <RevealGroup>: it has no trigger of its own and follows the group's.
 */
export function Reveal({ children, className, as = "div" }: Props & { as?: "div" | "section" }) {
  const Component = as === "section" ? motion.section : motion.div;
  return (
    <Component variants={fadeInUp} className={className}>
      {children}
    </Component>
  );
}
