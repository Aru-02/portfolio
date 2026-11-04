export interface PersonalInfo {
  name: string;
  role: string;
  title: string;
  tagline: string;
  location: string;
  educationSummary: string;
  college: string;
  graduationYear: number;
  cgpa: number;
  languages: string[];
  summary: string;
  availableForHire: boolean;
  statusBadge: string;
  email: string;
  resumeUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  badge?: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  category: "Full Stack" | "Backend" | "Frontend" | "System Design";
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: "Practical Project Experience" | "Open Source" | "Academic Project" | "Freelance / Independent";
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  graduationYear: number;
  cgpa: string;
  highlights: string[];
}

export interface NavLink {
  name: string;
  href: string;
}
