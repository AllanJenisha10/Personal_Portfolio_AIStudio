export interface Certificate {
  number: string;
  title: string;
  issuer: string;
  link: string;
  skills?: string[];
  date?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'Full-Stack & AI' | 'UI/UX & Mobile';
}

export interface InternshipExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  skillsGained: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  duration: string;
  score: string;
  scoreLabel: string;
  location?: string;
  status?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
}
