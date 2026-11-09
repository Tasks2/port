"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Button from "@/components/ui/Button";

const stats = [
  { value: "5+", label: "Apps shipped" },
  { value: "3", label: "Systems designed" },
  { value: "Full-stack", label: "React · Node · SQL" },
];

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-[920px] pt-16 pb-20 sm:pt-24"
    >
      <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-line-strong bg-card px-3.5 py-1.5 text-[0.8rem] font-medium text-ink shadow-sm">
        <span className="size-[7px] rounded-full bg-success ring-[3px] ring-success/15" />
        Available for graduate opportunities
      </div>

      <h1 className="mb-6 text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[1.05]">
        Software engineer building <em className="text-accent">useful</em>,
        <br /> dependable products.
      </h1>

      <p className="mb-12 max-w-[640px] text-lg">
        I&rsquo;m Amy, a software engineer who ships full-stack applications
        for healthcare, operations, and analytics. I care about clean architecture,
        readable code, and interfaces that stay out of the user&rsquo;s way.
      </p>

      <div className="mb-12 flex flex-wrap items-center gap-x-8 gap-y-6 border-t border-line pt-7">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-8">
            {/* Vertical divider between stats, hidden on phones where they wrap */}
            {i > 0 && <span aria-hidden className="hidden h-9 w-px bg-line-strong sm:block" />}
            <div className="flex flex-col gap-1">
              <span className="font-display text-[2rem] leading-none tracking-tight text-ink">{stat.value}</span>
              <span className="text-xs font-medium uppercase tracking-widest text-ink-subtle">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href="/projects" withArrow>
          View projects
        </Button>
        <Button href="/contact" variant="secondary">
          Get in touch
        </Button>
      </div>
    </motion.section>
  );
}
