"use client";

import { MotionConfig } from "framer-motion";

/**
 * Makes every framer-motion animation respect the operating system's
 * "reduce motion" setting. With reducedMotion="user", movement (y, scale…)
 * is skipped for those users while opacity fades still run.
 *
 * The CSS @media (prefers-reduced-motion) rule in globals.css can't do this:
 * framer-motion animates with JavaScript, not CSS transitions.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
