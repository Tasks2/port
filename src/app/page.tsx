// import { projects } from "@/data/projects";
// import ProjectCard from "@/components/projects/ProjectCard";

// export default function Home() {
//   return (
//     <main>
//       <section>
//         <h1>Frontend Developer with a Data & Fintech Focus</h1>
//         <p>
//           I build data-driven web applications and ML-powered tools for real-world
//           business problems.
//         </p>
//       </section>

//       <section>
//         <h2>Featured Projects</h2>
//         <div className="grid">
//           {projects.slice(0, 3).map((project) => (
//             <ProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// import Hero from "@/components/home/Hero";
// import FeaturedProjects from "@/components/home/FeaturedProjects";

// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <FeaturedProjects />
//     </>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import { staggerContainer } from "@/lib/animations";

export default function HomePage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Hero />
      <FeaturedProjects />
    </motion.main>
  );
}
