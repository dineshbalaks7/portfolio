export interface Project {
  id: string;
  title: string;
  role: string;
  category: string;
  badge?: string;
  featured?: boolean;
  location?: string;
  projectType?: string;
  statusNote?: string;
  description: string;
  highlight?: string;
  technologies: string[];
  features: string[];
  overview?: string;
  problem?: string;
  solution?: string;
  liveUrl?: string;
  businessLogic?: {
    description: string;
    rules: { label: string; value: string }[];
    disclaimer?: string;
  };
  inventory?: {
    description: string;
    items: string[];
  };
  analytics?: {
    description: string;
    filters: string[];
  };
  reporting?: {
    description: string;
  };
  whatsappAutomation?: {
    description: string;
    tags: string[];
  };
  myContributions?: string[];
  outcome?: string;
}

export const projects: Project[] = [
  {
    id: "codenxt",
    title: "CodeNXT",
    role: "Founder & Full-Stack AI Developer",
    category: "AI / EdTech / Full-Stack",
    badge: "Featured Flagship",
    featured: true,
    description:
      "An AI-powered interview preparation platform designed to help students prepare for technical interviews, coding assessments, aptitude tests, MCQs, and AI-based mock interviews.",
    highlight:
      "Designed, developed and deployed the complete platform from concept to production.",
    technologies: [
      "Python",
      "AI / ML",
      "MongoDB",
      "Vercel",
      "Web technologies",
    ],
    features: [
      "Coding practice",
      "Technical MCQs",
      "Aptitude preparation",
      "AI mock interviews",
      "Learning analytics",
      "Question bank",
      "Performance tracking",
    ],
    overview:
      "CodeNXT is a comprehensive AI-driven career readiness suite built to democratize technical interview prep. It combines real-time coding evaluations, automated mock interviews, and adaptive quizzes tailored to industry hiring standards.",
    problem:
      "Aspiring developers often struggle with disparate prep resources, lack of actionable feedback on mock interviews, and disjointed coding assessment environments.",
    solution:
      "Architected an integrated solution featuring intelligent question synthesis, automated code evaluation pipelines, and personalized learning analytics dashboards.",
    statusNote: "Flagship project — production deployment and continuous feature iterations.",
  },
  {
    id: "tvs-beedi",
    title: "TVS Beedi Company Management System",
    role: "Full-Stack Developer",
    location: "Tenkasi, Tamil Nadu, India",
    projectType: "Private Internal Business Management System",
    statusNote: "Production Deployment",
    category: "Business Management",
    featured: false,
    description:
      "Internal business management software developed for a family-owned beedi manufacturing business in Tenkasi, Tamil Nadu, covering production, inventory, business calculations, analytics, and reporting.",
    technologies: [
      "MongoDB",
      "MongoDB Atlas",
      "JavaScript",
      "Vercel",
    ],
    features: [
      "Production record management",
      "Inventory management",
      "Tobacco stock tracking",
      "Tobacco powder tracking",
      "Production calculations",
      "Employee-related records",
      "Business data management",
      "Daily analytics",
      "Weekly analytics",
      "Monthly analytics",
      "Dashboard visualization",
      "PDF report generation",
      "Centralized database management",
    ],
    overview:
      "TVS Beedi Company Management System is a dedicated internal business management software developed for a family-owned beedi manufacturing business based in Tenkasi, Tamil Nadu.\n\nThe system was developed to digitally manage the company's production records, inventory, operational data, business calculations, and analytics through a centralized platform.\n\nThe application was designed around the company's actual business workflow and requirements, helping organize day-to-day records and reduce dependence on manual record management.",
    problem:
      "The business required a centralized digital system to manage production records, inventory, operational information, and business calculations more efficiently.\n\nManaging these records manually made it difficult to organize historical data, monitor production-related information, and analyze business activity.\n\nThe goal was to develop a dedicated internal platform that could organize these workflows and make business information easier to manage and monitor.",
    solution:
      "Developed a dedicated internal management platform tailored to the company's actual workflow.\n\nThe system centralizes business records, production information, inventory data, and business calculations while providing dashboards and reports for analyzing operational information.\n\nThe application also provides daily, weekly, and monthly views to help monitor business activity over different time periods.",
    businessLogic: {
      description:
        "The application incorporates business-specific rules and calculations directly into the system to reduce repetitive manual calculations and maintain consistency in business records.",
      rules: [
        { label: "1 Cut", value: "20 Beedis" },
        { label: "1,000 Beedis", value: "600 g Tobacco" },
        { label: "1,000 Beedis", value: "200 g Tobacco Powder" },
        { label: "Salary", value: "1,000 Beedis = ₹320" },
        { label: "Production Rate", value: "1,000 Beedis = ₹340" },
      ],
      disclaimer:
        "Note: Business-specific operational rules and calculation formulas implemented directly within the application workflow, not general industry standards.",
    },
    inventory: {
      description:
        "The system provides centralized tracking of key raw materials and production-related inventory, helping organize stock information and monitor operational consumption.",
      items: [
        "Tobacco",
        "Tobacco Powder",
        "Production-related stock",
        "Wastage tracking",
      ],
    },
    analytics: {
      description:
        "The application provides an analytics dashboard for viewing production and operational information across different time periods.",
      filters: ["Day", "Week", "Month"],
    },
    reporting: {
      description:
        "The system includes PDF report generation to allow business records and analytical information to be exported for operational use.",
    },
    myContributions: [
      "Understood the company's real-world business requirements.",
      "Designed the application workflow around the company's operations.",
      "Developed the internal management platform.",
      "Designed and implemented database structures.",
      "Implemented production workflows.",
      "Implemented inventory tracking.",
      "Implemented business-specific calculations.",
      "Developed analytics dashboards.",
      "Implemented daily, weekly, and monthly data views.",
      "Implemented PDF reporting.",
      "Worked on database integration and data retrieval.",
      "Tested application workflows and business calculations.",
      "Deployed and maintained the application.",
    ],
    outcome:
      "The completed system provides the business with a centralized digital platform for managing production, inventory, operational records, business calculations, analytics, and reporting.",
    liveUrl: "https://tvs-beedi-company.vercel.app/",
  },
  {
    id: "sand-mining",
    title: "Illegal Sand Mining Detection",
    role: "AI & Data Science Developer",
    category: "AI / Remote Sensing / Data Science",
    badge: "Geospatial AI",
    featured: false,
    description:
      "A satellite imagery-based project focused on identifying potential illegal sand mining activities using remote sensing data.",
    technologies: [
      "Google Earth Engine",
      "Sentinel-2",
      "AI / Data Science",
      "Remote Sensing",
    ],
    features: [
      "Satellite imagery analysis",
      "Geographical monitoring",
      "Change detection",
      "Data visualization",
    ],
    overview:
      "A remote sensing application monitoring environmental degradation across sensitive riverbeds by analyzing multi-spectral Earth observation satellite data.",
    problem:
      "Unregulated riparian sand mining causes severe water table depletion and riverbank erosion, but vast geographic expanses make manual physical monitoring impossible.",
    solution:
      "Leveraged Google Earth Engine cloud pipelines with Sentinel-2 multi-spectral bands to observe surface reflectance variations and flag suspicious geographical alterations.",
    statusNote: "Geospatial analysis model — remote sensing research pipeline.",
  },
  {
    id: "campus-pulse",
    title: "Campus Pulse Monitor",
    role: "AI / Data Analytics Developer",
    category: "AI / Data Analytics",
    badge: "Analytics System",
    featured: false,
    description:
      "An AI and data analytics-oriented campus monitoring solution designed to provide meaningful insights from campus-related data.",
    technologies: [
      "Python",
      "Data Analytics",
      "Machine Learning",
      "Data Visualization",
    ],
    features: [
      "Campus trend analytics",
      "Data-driven pattern detection",
      "Structured metric visualization",
      "Insight generation",
    ],
    overview:
      "An intelligent analytical system designed to aggregate and examine institutional operational data, surfacing patterns to support data-backed campus decision-making.",
    problem:
      "Scattered academic and facility data prevented administrative teams from preemptively identifying bottlenecks and student trend indicators.",
    solution:
      "Structured analytical algorithms to parse institutional datasets, highlighting actionable patterns through clean visual reports.",
    statusNote: "Academic & institutional data intelligence system.",
  },
  {
    id: "ganapathi-murugan",
    title: "Ganapathi Murugan Fuel Agency",
    role: "Software Developer | Manual Testing & API Integration",
    location: "Tenkasi, Tamil Nadu, India",
    projectType: "Internal Business Management Software",
    statusNote: "Live Commercial Deployment",
    category: "Business Management",
    badge: "Live Commercial Deployment",
    featured: false,
    description:
      "Dedicated internal business management software developed for a fuel agency in Tenkasi, featuring centralized record management, API integration, and WhatsApp automation for credit updates, offers, and important business notifications.",
    technologies: [
      "API Integration",
      "REST APIs",
      "API Testing",
      "Manual Testing",
      "Functional Testing",
      "WhatsApp Integration",
      "Data Management",
    ],
    features: [
      "Business record management",
      "Centralized data management",
      "Operational data tracking",
      "Customer-related information management",
      "WhatsApp message automation",
      "Credit-related notifications",
      "Offer and promotional notifications",
      "Important business notifications",
      "API integration",
      "API testing",
      "Manual testing",
      "Functional testing",
      "Production testing",
    ],
    overview:
      "Ganapathi Murugan Fuel Agency is a dedicated internal business software solution developed for a fuel agency located in Tenkasi, Tamil Nadu.\n\nThe software was developed to help the agency manage its records, business data, operational activities, and other important information through a centralized system.\n\nThe project was developed collaboratively with my brother based on the actual requirements of the fuel agency. We worked around the agency's operational needs, refined the system based on feedback, and successfully delivered the software for commercial use.\n\nA key part of the solution is WhatsApp message automation, which enables the agency to send important notifications such as credit-related updates, offers, and other business communications.",
    problem:
      "The fuel agency required a dedicated internal software solution to organize its business records and operational data more efficiently.\n\nManaging different records and communicating important updates manually can make day-to-day operations more time-consuming.\n\nThe requirement was to create a centralized system that supports the agency's workflow while improving communication through automated WhatsApp notifications.",
    solution:
      "We developed a dedicated internal business management platform tailored to the agency's requirements.\n\nThe system centralizes important business records and data while providing structured workflows for managing day-to-day operations.\n\nWhatsApp message automation was also integrated to send relevant notifications such as credit updates, offers, and other important business messages.\n\nThe project was developed collaboratively with my brother, tested through real-world usage, refined based on feedback, and successfully deployed for the fuel agency.",
    whatsappAutomation: {
      description:
        "A key feature of the platform is automated WhatsApp communication. The system integrates messaging functionality to notify customers or relevant users about credit-related updates, offers, and other important business information.",
      tags: [
        "Credit Notifications",
        "Offers",
        "Business Updates",
        "WhatsApp Automation",
        "API Integration",
      ],
    },
    myContributions: [
      "Contributed to the development of the internal business software.",
      "Worked with real-world client requirements.",
      "Collaborated with my brother to complete the project.",
      "Worked on business workflows and data management.",
      "Performed manual testing across important workflows.",
      "Tested API integrations and responses.",
      "Validated API-based functionality.",
      "Tested WhatsApp automation workflows.",
      "Identified and resolved issues during testing.",
      "Refined the system based on customer feedback.",
      "Participated in production deployment and verification.",
    ],
    outcome:
      "The software was successfully deployed for the fuel agency as a dedicated internal business solution. The customer was satisfied with the delivered system and its ability to support their day-to-day business operations and communication workflows.",
    liveUrl: "https://ganapathimuruganagency.com",
  },
];

