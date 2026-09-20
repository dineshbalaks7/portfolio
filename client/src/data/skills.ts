export interface SkillCategory {
  id: string;
  categoryNumber: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-databases",
    categoryNumber: "01",
    title: "Programming & Database Technologies",
    description: "Core programming languages, relational schemas, and document/cloud databases.",
    skills: [
      "Python",
      "SQL",
      "NoSQL",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Neon DB",
    ],
  },
  {
    id: "ai-machine-learning",
    categoryNumber: "02",
    title: "AI & Machine Learning",
    description: "Intelligent architectures, computer vision pipelines, neural detection, and NLP.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "YOLO / Object Detection",
      "OpenCV",
      "MediaPipe",
      "Natural Language Processing (NLP)",
      "AI Application Development",
    ],
  },
  {
    id: "data-science-analytics",
    categoryNumber: "03",
    title: "Data Science & Analytics",
    description: "Data wrangling, statistical modeling, visual analytics, and business dashboards.",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Analysis",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "Excel",
    ],
  },
  {
    id: "web-development",
    categoryNumber: "04",
    title: "Web Development",
    description: "Robust backend architectures, modern client styling, and RESTful service integrations.",
    skills: [
      "HTML",
      "CSS",
      "Django",
      "REST APIs",
      "Vercel",
    ],
  },
  {
    id: "cloud-tools",
    categoryNumber: "05",
    title: "Cloud, Deployment & Tools",
    description: "Cloud computing infrastructure, geospatial engines, containerization, and version control.",
    skills: [
      "Google Earth Engine",
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "Canva",
    ],
  },
];
