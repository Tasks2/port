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
    slug: "attendance-system",
    title: "Attendance & Leave Management System",
    shortDescription:
      "Full-stack workforce management platform featuring attendance tracking, leave requests, task assignment, reporting, and role-based access control.",
    tags: ["Enterprise", "Dashboards", "Fullstack", "Workflow", "Reporting"],
    tech: ["React", "Next.js", "Node.js", "Express","MySQL"],
    featured: true,
  },
  {
    slug: "seizure-management",
    title: "Seizure Management Web App",
    shortDescription:
      "Healthcare management platform enabling seizure tracking, medication monitoring, appointment scheduling, and patient reporting.",
    tags: ["Healthcare","Fullstack", "Patient Management", "Reporting", "Data Tracking"],
    tech: ["React", "Next.js", "SQL", "Supabase"],
    featured: true,
  },
   {
  slug: "impact-tracker",
  title: "Impact Tracking Platform",
  shortDescription:
    "Data-driven platform for tracking activities, outcomes, and project progress through structured reporting, dashboards, and performance monitoring.",
  tags: ["Fullstack","Analytics","Reporting","Dashboards","Product"],
  tech: ["React","Next.js","Supabase","SQL"],
  featured: true,
},
  {
    slug: "malaria-prediction",
    title: "Malaria Risk Prediction Platform",
    shortDescription:
      "Machine learning model for disease prediction, demonstrating predictive analytics skills.",
    tags: ["Predictive Analytics","Healthcare","Machine Learning","Data Analysis"],
   tech: [ "Python","Pandas","Scikit-learn","NumPy"]
  },
    {
    slug: "churn-analysis",
    title: "Customer Retention Prediction System",
    shortDescription:
      "Predictive analytics project leveraging machine learning to identify customer retention risks and support data-driven business decisions.",
    tags: ["Predictive Analytics", "Machine Learning", "Data Engineering"],
    tech: ["Python", "Pandas", "Scikit-learn", "Numpy"],
    featured: true,
  },
  {
    slug: "clinic-appointment",
    title: "Clinic Appointment System(In Progress)",
    shortDescription:
      "Web application for managing clinic appointments, patient records, and staff schedules.",
    tags: ["Healthcare", "Fullstack", "Patient Management"],
    tech: ["React", "Next.js", "Node.js", "Express", "MySQL"],
    featured: true,
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
