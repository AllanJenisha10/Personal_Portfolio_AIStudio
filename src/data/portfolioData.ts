import {
  Certificate,
  Project,
  InternshipExperience,
  EducationEntry,
  SkillCategory,
  AchievementItem,
} from '../types';

export const personalInfo = {
  name: "Allan Jenisha R.",
  degree: "B.Tech – Information Science and Engineering",
  college: "Women’s Engineering College, Lawspet, Puducherry",
  university: "PTU",
  universityFullName: "Puducherry Technological University",
  duration: "2023–2027",
  currentStatus: "Final Year",
  cgpa: "9.00",
  location: "Puducherry, India",
  roleFocus: "Information Science & Engineering | Full-Stack Development | Data Science | AI/ML",
  tagline: "Curious by design, disciplined by engineering.",
  email: "allanjenisha523@wec.edu.in",
  github: "https://github.com/AllanJenisha10",
  linkedin: "https://www.linkedin.com/in/allan-jenisha", // Professional placeholder profile
  resumeUrl: "", // Clearly marked placeholder until official file/link is provided
  profileImage: "/assets/allan_jenisha_profile.jpg",
};

export const aboutContent = {
  summary:
    "Final-year Information Science and Engineering student at Women's Engineering College (PTU) with a solid academic record (CGPA 9.00). Grounded in core computer science principles and software engineering practices, with practical hands-on experience in Python, web development, and data-driven applications.",
  paragraphs: [
    "My focus centers on Full-Stack Development using Python and Flask, coupled with a disciplined interest in Data Science and AI/ML methodologies. Through academic and project work, I develop functional search algorithms, implement TF-IDF and vector space ranking models, and build responsive web applications.",
    "Known for being a consistent, hardworking, and quick learner, I approach complex technical challenges with structured problem-solving and engineering rigor. I am passionate about writing clean, reliable code and contributing meaningfully to technology teams.",
  ],
  traits: [
    { label: "Information Science & Engineering", detail: "PTU (2023–2027) • Final Year" },
    { label: "Full-Stack Development", detail: "Python, Flask, HTML, CSS, PHP" },
    { label: "Data Science & AI/ML", detail: "Scikit-learn, TF-IDF, Vector Models" },
    { label: "Engineering Mindset", detail: "Disciplined, Quick Learner, Problem Solver" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Core algorithmic and analytical programming languages",
    skills: ["Python", "ML"],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Front-end and back-end web engineering architectures",
    skills: ["HTML", "CSS", "Flask", "PHP", "Full Stack Development"],
  },
  {
    id: "database",
    title: "Database",
    description: "Relational database modeling and local server environments",
    skills: ["MySQL", "XAMPP"],
  },
  {
    id: "data-ai",
    title: "Data & AI",
    description: "Machine learning algorithms, text ranking, and vector similarity",
    skills: ["Data Science", "Machine Learning", "Scikit-learn", "TF-IDF", "Cosine Similarity"],
  },
  {
    id: "tools",
    title: "Tools & Integration",
    description: "Version control, code collaboration, and web service integration",
    skills: ["Git", "GitHub", "API Integration"],
  },
];

export const projects: Project[] = [
  {
    id: "academic-search-engine",
    title: "Academic Research Search Engine",
    description:
      "Developed a web-based academic research search engine using Python and Flask to retrieve and rank relevant information from research corpora and external APIs with high precision.",
    features: [
      "TF-IDF",
      "Cosine Similarity",
      "Vector Space Model",
      "Scikit-learn",
      "Wikipedia API",
      "HTML/CSS",
      "Flask",
      "Search result ranking",
    ],
    technologies: ["Python", "Flask", "Scikit-learn", "TF-IDF", "Wikipedia API", "HTML/CSS"],
    githubUrl: "https://github.com/AllanJenisha10/Academic_search_engine",
    liveUrl: "https://academic-search-engine.onrender.com/",
    category: "Full-Stack & AI",
  },
  {
    id: "luxestay-prototype",
    title: "LuxeStay Mobile UI/UX Prototype",
    description:
      "Designed an interactive luxury hospitality mobile experience featuring villa booking, room service, digital boarding passes and smart-key concepts with polished user flows.",
    features: [
      "UI/UX Design",
      "Mobile-first design",
      "Interactive prototype",
      "Luxury hospitality experience",
    ],
    technologies: ["UI/UX Design", "Mobile Prototyping", "Design Systems", "Interaction Design"],
    githubUrl: "https://github.com/AllanJenisha10/Allanjenisha_Luxe_Heritage_UIUX-Prototype",
    liveUrl: "https://ai.studio/apps/652c80fc-4886-4182-99c0-1265bb89b8dd",
    category: "UI/UX & Mobile",
  },
];

export const experiences: InternshipExperience[] = [
  {
    id: "internship-1",
    company: "Aquila Innovations",
    role: "Web Development / PHP Full Stack / API Integration",
    duration: "15 June 2025 – 15 July 2025",
    description:
      "Gained practical exposure to web development, PHP full-stack development, HTML, CSS and API integration through hands-on project activities.",
    skillsGained: ["PHP Full Stack", "Web Development", "HTML/CSS", "API Integration", "Hands-on Projects"],
  },
  {
    id: "internship-2",
    company: "SureSoft Pvt. Ltd.",
    role: "Data Analysis / Data Entry / WIAS-based Office Work",
    duration: "15 June 2026 – 15 July 2026",
    description:
      "Gained practical exposure to professional office workflows, data handling, data entry, analysis-oriented tasks, teamwork and communication.",
    skillsGained: ["Data Analysis", "Data Handling", "WIAS Office Systems", "Workflow Operations", "Teamwork & Communication"],
  },
];

// 10 Individual Certificate Cards with exact Google Drive link data structure
export const certificates: Certificate[] = [
  {
    number: "01",
    title: "SSLC Certificate",
    issuer: "State board of School Examination,Tamilnadu",
    link: "https://drive.google.com/file/d/1N8pBGkYCcywg3zNNvgsjHcmPKCPPSn6G/view?usp=sharing",
  },
  {
    number: "02",
    title: "HSC Certificate",
    issuer: "State board of School Examination,Tamilnadu",
    link: "https://drive.google.com/file/d/1zxLxfOzCZGRmc-YIOqJP7p90bSEfZxF5/view?usp=sharing",
  },
  {
    number: "03",
    title: "Internship1_Aquila Innovation",
    issuer: "ATAL,PTU",
    link: "https://drive.google.com/file/d/13Hle_ivKUnXYaU-8wO9gklMvRND9GB55/view?usp=sharing",
  },
  {
    number: "04",
    title: "Internship2_SureSoft Pvt Ltd",
    issuer: "Suresoft Pvt Ltd",
    link: "https://drive.google.com/file/d/1R7F_qikYRb3JkgDq3kUo5EmtuxTgKLWy/view?usp=sharing",
  },
  {
    number: "05",
    title: "Hour of Code",
    issuer: "MineCraft",
    link: "https://drive.google.com/file/d/1V1uc4l9wzXXH8MvkP7Qt4xsZWscrBV9m/view?usp=sharing",
  },
  {
    number: "06",
    title: "Workshop - Vibe Coding",
    issuer: "BrainBios(NIT,Puducherry)",
    link: "https://drive.google.com/file/d/1Bkq_6WQxrmgtGHWRlnT8lSgBUx7DvES6/view?usp=sharing",
  },
  {
    number: "07",
    title: "Developing Soft Skill and Personality",
    issuer: "IIT,Kanpur",
    link: "https://drive.google.com/file/d/141sWXPefGp4-2AacrvH8zel_JG5YBaI8/view?usp=drive_link",
  },
  {
    number: "08",
    title: "Python for Data Science",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1lotWPDcl6dOnFyrcLXyMXzK2cmaq5Mou/view?usp=drive_link",
  },
  {
    number: "09",
    title: "Data Marketing Automation",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1CFefnOoNbECMRCA122Llg0bc8sobuPcq/view?usp=drive_link",
  },
  {
    number: "10",
    title: "Job readiness Training",
    issuer: "INSPIRE supported by Grace Infrastructure Pvt Ltd",
    link: "https://drive.google.com/file/d/14-JwzLqFILlwh7NZ8exVrvd5uU3ssNa5/view?usp=drive_link",
  },
];

export const educationList: EducationEntry[] = [
  {
    id: "edu-btech",
    degree: "B.Tech – Information Science and Engineering",
    institution: "Women’s Engineering College, Lawspet, Puducherry",
    university: "PTU (Puducherry Technological University)",
    duration: "2023–2027",
    score: "9.00",
    scoreLabel: "CGPA",
    location: "Puducherry, India",
    status: "Pursuing",
  },
  {
    id: "edu-12th",
    degree: "Higher Secondary Certificate (12th)",
    institution: "Thiruvalluvar Government Higher Secondary School",
    duration: "2022–2023",
    score: "79.83%",
    scoreLabel: "Percentage",
    location: "Puducherry, India",
    status: "Completed",
  },
  {
    id: "edu-10th",
    degree: "Secondary School Leaving Certificate (10th)",
    institution: "National English High School",
    duration: "2020–2021",
    score: "Graduated",
    scoreLabel: "Result",
    location: "Puducherry, India",
    status: "Completed",
  },
];

export const achievementsAndTraining: AchievementItem[] = [
  {
    id: "ach-1",
    title: "NPTEL",
    category: "Verified Academic Certification",
    description: "National Programme on Technology Enhanced Learning (NPTEL) certified coursework enhancing foundational and engineering competencies.",
  },
  {
    id: "ach-2",
    title: "Udemy Data Science courses",
    category: "Professional Coursework",
    description: "Specialized training in data analysis techniques, data manipulation workflows, and exploratory data science fundamentals.",
  },
  {
    id: "ach-3",
    title: "English Foundation & Job Readiness Training",
    category: "Professional Development",
    description: "Comprehensive corporate communication, workplace readiness, professional presentation, and interview skills preparation.",
  },
  {
    id: "ach-4",
    title: "Vibe Coding Workshop",
    category: "Technical Workshop",
    description: "Hands-on exploratory modern coding and agile developer tooling workshop focusing on practical software prototyping.",
  },
  {
    id: "ach-5",
    title: "Hour of Code – Minecraft",
    category: "Computing & Logic",
    description: "Algorithmic logic and problem-solving foundational training via structured computing modules.",
  },
  {
    id: "ach-6",
    title: "Other verified training/certification items",
    category: "Continuing Education",
    description: "Continuous participation in technical development sessions, technical events, and skill verification modules.",
  },
];
