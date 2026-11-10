import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";

// A server component: no "use client" needed. Each section brings its own
// animation via <RevealGroup>, so the page itself ships no JavaScript.
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
}
