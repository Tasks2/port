export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "churn-analysis",
    title: "Customer Churn Analysis",
    shortDescription:
      "Machine learning model to predict customer churn and support data-driven retention strategies in fintech platforms.",
    tags: ["Fintech", "Machine Learning", "Data"],
    tech: ["Python", "Pandas", "Scikit-learn"],
    featured: true,
  },
  {
    slug: "attendance-system",
    title: "Attendance & Leave Management System",
    shortDescription:
      "Enterprise-style web system with dashboards, approvals, and role-based workflows.",
    tags: ["Enterprise", "Dashboards", "Frontend"],
    tech: ["React", "Next.js"],
    featured: true,
  },
  {
    slug: "seizure-management",
    title: "Seizure Management Web App",
    shortDescription:
      "Product-focused React/Next.js app for tracking medication, appointments, and generating reports.",
    tags: ["Product", "HealthTech", "Frontend", "Backend"],
    tech: ["React", "Next.js", "SQL", "Supabase"],
    featured: true,
  },
  {
    slug: "malaria-prediction",
    title: "Malaria Prediction (ML)",
    shortDescription:
      "Machine learning model for disease prediction, demonstrating predictive analytics skills.",
    tags: ["Machine Learning", "Data Science"],
    tech: ["Python", "Scikit-learn"],
  },
  {
    slug: "ml-in-progress",
    title: "ML Project (In Progress)",
    shortDescription:
      "Ongoing machine learning project exploring predictive analytics and deployment workflows.",
    tags: ["Machine Learning", "WIP"],
    tech: ["Python"],
  },
];
