export interface Certification {
  id: string;
  number: string;
  title: string;
  issuer: string;
  domain: string;
}

export const certifications: Certification[] = [
  {
    id: "hp-life",
    number: "01",
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    domain: "Data & Analytics",
  },
  {
    id: "forage-aws",
    number: "02",
    title: "AWS Solutions Architecture",
    issuer: "Forage",
    domain: "Cloud Architecture",
  },
  {
    id: "udemy-oracle",
    number: "03",
    title: "SQL for Oracle Databases",
    issuer: "Udemy",
    domain: "Database Systems",
  },
  {
    id: "microsoft-genai",
    number: "04",
    title: "Generative AI Concepts",
    issuer: "Microsoft",
    domain: "Artificial Intelligence",
  },
];
