// Content for the /skills page. Like projects.ts, the page only decides
// how this looks; to add or reword a skill, edit this file.

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillsIntro =
  "I build full-stack applications that solve real-world problems through thoughtful system design, scalable architectures, and user-focused experiences. My experience spans healthcare platforms, business management systems, workflow automation tools, and data-driven applications.";

export const skillGroups: SkillGroup[] = [
  {
    title: "Fullstack Development",
    items: [
      "React, Next.js (App Router)",
      "TypeScript & JavaScript (ES6+)",
      "Responsive UI development",
      "Component-driven architecture",
      "State management and client-side data handling",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js and Express",
      "REST API design and integration",
      "Authentication and authorization",
      "Business logic implementation",
      "Server-side application development",
      "API testing and debugging",
    ],
  },
  {
    title: "Database and Data Management",
    items: [
      "SQL fundamentals",
      "MySQL, PostgreSQL",
      "Database schema design and optimization",
      "Data modeling and relationships",
      "CRUD operations and data integration",
    ],
  },
  {
    title: "Software Engineering Practices",
    items: [
      "System design fundamentals",
      "Component reusability and maintainability",
      "Git and GitHub for version control",
      "Agile and iterative development",
      "Debugging and troubleshooting",
      "Performance optimization and scalability considerations",
    ],
  },
  {
    title: "Data and Analytics",
    items: [
      "Python, Pandas",
      "Exploratory data analysis (EDA)",
      "Machine learning fundamentals",
      "Data visualization and reporting",
    ],
  },
  {
    title: "Professional Skills",
    items: [
      "Problem-solving",
      "Systems-thinking",
      "Product-oriented mindset",
      "Clear technical communication",
      "Rapid learning and adaptability",
      "Translating business needs into technical solutions",
    ],
  },
];
