// All project content lives here. The page at app/projects/[slug]/page.tsx
// only decides *how* to show a project; this file decides *what* it says.
// To add a project, add an object to `projects` — no new page file needed.

/**
 * One block of a case study: a heading followed by either a paragraph
 * (`body`) or a bullet list (`list`). The `|` makes it a union type, so
 * TypeScript will complain if a section has neither, or both.
 */
export type CaseStudySection =
  | { heading: string; body: string; list?: never }
  | { heading: string; list: string[]; body?: never };

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  tech: string[];
  featured?: boolean;
  caseStudy: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "attendance-system",
    title: "Attendance & Leave Management System",
    shortDescription:
      "Full-stack workforce management platform featuring attendance tracking, leave requests, task assignment, reporting, and role-based access control.",
    tags: ["Enterprise", "Dashboards", "Fullstack", "Workflow", "Reporting"],
    tech: ["React", "Next.js", "Node.js", "Express", "MySQL"],
    featured: true,
    caseStudy: [
      {
        heading: "Problem",
        body: "Organizations often rely on manual processes to manage attendance records, leave requests, approvals, and workforce reporting. These processes can become inefficient, difficult to track, and prone to errors as teams grow.",
      },
      {
        heading: "Solution",
        body: "I developed a full-stack attendance and leave management platform that streamlines workforce operations through attendance tracking, leave request workflows, approval processes, and administrative dashboards.",
      },
      {
        heading: "Engineering Highlights",
        list: [
          "Role-based access control implementation",
          "Dynamic reporting and dashboard design",
          "Scalable component architecture",
          "Structured data management",
          "Workflow automation for approvals",
          "Business process modeling",
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        body: "This project allowed me to demonstrate my skills in full-stack development, user experience design, dashboard development, database planning and data modelling and building software that supports operational workflows.",
      },
      {
        heading: "Future Improvements",
        body: "Future enhancements could include mobile app development, automated notifications, advanced reporting features, and support for additional workforce management functions.",
      },
    ],
  },
  {
    slug: "seizure-management",
    title: "Seizure Management Web App",
    shortDescription:
      "Healthcare management platform enabling seizure tracking, medication monitoring, appointment scheduling, and patient reporting.",
    tags: ["Healthcare", "Fullstack", "Patient Management", "Reporting", "Data Tracking"],
    tech: ["React", "Next.js", "SQL", "Supabase"],
    featured: true,
    caseStudy: [
      {
        heading: "Problem",
        body: "Patients often struggle to consistently track medication schedules, seizure events, and medical appointments. This can lead to incomplete medical histories and reduced visibility into treatment progress.",
      },
      {
        heading: "Solution",
        body: "I developed a healthcare management application that enables users to record seizure events, manage medication schedules, track appointments, and generate structured reports for healthcare consultations.",
      },
      {
        heading: "Engineering Highlights",
        list: [
          "Complex form management and validation",
          "Structured health record tracking",
          "Report generation workflows",
          "Scalable component architecture",
          "User-focused dashboard design",
          "Database-ready application architecture",
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        body: "This project allowed me to showcase my abilities in fullstack development, user experience design, and healthcare data management.",
      },
      {
        heading: "Future Improvements",
        body: "Planned improvements include making the application fullstack with authentication, secure data storage, and role-based access.",
      },
    ],
  },
  {
    slug: "impact-tracker",
    title: "Impact Tracking Platform",
    shortDescription:
      "Data-driven platform for tracking activities, outcomes, and project progress through structured reporting, dashboards, and performance monitoring.",
    tags: ["Fullstack", "Analytics", "Reporting", "Dashboards", "Product"],
    tech: ["React", "Next.js", "Supabase", "SQL"],
    featured: true,
    caseStudy: [
      {
        heading: "Problem",
        body: "Organizations often struggle to measure project outcomes and track progress across multiple activities. Information is frequently spread across spreadsheets, documents, and manual reports, making it difficult to evaluate performance and impact.",
      },
      {
        heading: "Solution",
        body: "I developed an impact tracking platform that centralizes project data, activity records, and performance indicators into a single system. The platform enables users to monitor progress, generate reports, and gain visibility into outcomes through structured dashboards and data management workflows.",
      },
      {
        heading: "Engineering Highlights",
        list: [
          "Dashboard and reporting workflows",
          "Structured data collection",
          "Performance tracking and monitoring",
          "Scalable data architecture",
          "User-focused information design",
          "Analytics-ready data structures",
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        body: "This project allowed me to demonstrate my skills in fullstack development, database design and management, dashboard implementation, CRUD operations, reporting workflows and product-oriented development.",
      },
      {
        heading: "Future Improvements",
        body: "Future improvements could include enhanced data visualization features, automated reporting, real-time progress monitoring and integration with external data sources for enriched analytics.",
      },
    ],
  },
  {
    slug: "malaria-prediction",
    title: "Malaria Risk Prediction Platform",
    shortDescription:
      "Machine learning model for disease prediction, demonstrating predictive analytics skills.",
    tags: ["Predictive Analytics", "Healthcare", "Machine Learning", "Data Analysis"],
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    caseStudy: [
      {
        heading: "Problem",
        body: "Early identification of disease risk can support faster intervention, better resource planning, and more informed decision-making. Developing accurate predictive systems requires effective data preparation, feature selection, and model evaluation.",
      },
      {
        heading: "Solution",
        body: "I developed a predictive analytics model using structured healthcare data to estimate malaria risk. The project involved data preprocessing, feature engineering, model training, and performance evaluation to generate reliable predictions.",
      },
      {
        heading: "Engineering Highlights",
        list: [
          "Data preprocessing pipelines",
          "Feature engineering",
          "Model training and evaluation",
          "Predictive analytics workflows",
          "Data quality management",
          "Analytical problem-solving",
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        body: "This project allowed me to demonstrate my skills in data science, machine learning fundamentals, and predictive analytics, data visualization, as well as my ability to work with structured healthcare data.",
      },
      {
        heading: "Future Improvements",
        body: "Future improvements include exploring additional machine learning algorithms, incorporating real-time data feeds, expanded dataset coverage, cloud deployment and API integration.",
      },
    ],
  },
  {
    slug: "churn-analysis",
    title: "Customer Retention Prediction System",
    shortDescription:
      "Predictive analytics project leveraging machine learning to identify customer retention risks and support data-driven business decisions.",
    tags: ["Predictive Analytics", "Machine Learning", "Data Engineering"],
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    featured: true,
    caseStudy: [
      {
        heading: "Problem",
        body: "Customer retention is a critical challenge for many organizations. Identifying users who are at risk of leaving allows teams to take proactive measures and make more informed business decisions.",
      },
      {
        heading: "Solution",
        body: "I built a predictive analytics pipeline that analyzes historical customer behavior and engagement patterns to identify retention risks. The model generates risk scores that can support customer success, marketing, and operational decision-making.",
      },
      {
        heading: "Engineering Highlights",
        list: [
          "Data preprocessing and transformation",
          "Predictive modeling workflows",
          "Feature engineering",
          "Model performance evaluation",
          "Analytical reporting concepts",
          "Business-focused data interpretation",
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        body: "This project allowed me to demonstrate my skills in Python, Pandas, Scikit-learn, machine learning fundamentals, predictive analytics, and my ability to work with structured business data to generate actionable insights.",
      },
      {
        heading: "Future Improvements",
        body: "Future improvements include exploring additional modeling techniques, expanded feature sets, integrating the model into a fullstack application, and developing automated reporting workflows to support business decision-making.",
      },
    ],
  },
  {
    slug: "clinic-appointment",
    title: "Clinic Appointment System (In Progress)",
    shortDescription:
      "Web application for managing clinic appointments, patient records, and staff schedules.",
    tags: ["Healthcare", "Fullstack", "Patient Management"],
    tech: ["React", "Next.js", "Node.js", "Express", "MySQL"],
    featured: true,
    caseStudy: [
      {
        heading: "Problem",
        body: "Managing specialist appointments can be challenging for both patients and healthcare providers. Manual scheduling processes, fragmented patient records, and limited visibility into appointment availability often lead to inefficiencies and missed consultations.",
      },
      {
        heading: "Solution",
        body: "I developed a clinic appointment management platform designed to streamline scheduling and patient coordination for neurological care. The system provides an intuitive interface for booking appointments, managing patient information, tracking consultations, and organizing clinical workflows in a centralized environment.",
      },
      {
        heading: "Engineering Highlights",
        list: [
          "Appointment scheduling and calendar management",
          "Structured patient data handling",
          "Responsive and accessible user interface",
          "Scalable component-based architecture",
          "Healthcare workflow modeling",
          "Database-ready application design",
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        body: "This project allowed me to demonstrate my skills in fullstack development, database design and management, form handling and validation, CRUD operations, reporting workflows and product-oriented development.",
      },
      {
        heading: "Future Improvements",
        body: "Future improvements could include implementing user authentication and role-based access control, integrating with external calendar services for real-time availability, and adding features for appointment reminders and notifications to enhance patient engagement and reduce no-shows.",
      },
    ],
  },
  {
    slug: "ml-in-progress",
    title: "ML Project (In Progress)",
    shortDescription:
      "Ongoing machine learning project exploring predictive analytics and deployment workflows.",
    tags: ["Machine Learning", "WIP"],
    tech: ["Python"],
    caseStudy: [
      {
        heading: "Status",
        body: "This project is currently in progress and focuses on building an end-to-end machine learning workflow, from data preparation to model evaluation and potential deployment.",
      },
      {
        heading: "Goal",
        body: "The aim is to simulate real-world fintech ML pipelines where models are continuously improved and integrated into production systems.",
      },
    ],
  },
];

// Small query helpers so components ask for what they need instead of
// each one re-implementing the same .find() / .filter().

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
