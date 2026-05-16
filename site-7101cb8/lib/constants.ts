// Portfolio Data and Constants

export const PORTFOLIO_DATA = {
  name: "Prasanna Yadav",
  title: "Full Stack Developer — B.Tech CSE (Data Science)",
  degree: "3rd-year B.Tech Computer Science (Data Science)",
  shortBio:
    "Motivated Full Stack Developer and B.Tech (Data Science) student. Solved 300+ DSA problems across LeetCode and GeeksforGeeks. Building scalable, user-focused web and mobile applications.",
  longBio:
    "Motivated 3rd-year B.Tech Computer Science (Data Science) student and Full Stack Developer with hands-on experience building scalable web and mobile applications. Strong foundation in Data Structures & Algorithms, OOP, and the full SDLC. Proficient in React.js, Node.js, Python, and Java.",
  email: "ig.prasannayadav@gmail.com",
  phone: "7306742255",
  github: "https://github.com/DuvvuLakshmiPrasanna",
  linkedin: "https://www.linkedin.com/in/prasanna-yadav2304",
  location: "(Location not provided)",
  resumeUrl: "",
};

export const SKILLS = {
  categories: [
    {
      title: "Frontend (Full Stack Development)",
      items: ["HTML5", "CSS3", "JavaScript (ES6)", "Bootstrap"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React.js", "React Native", "Node.js", "Bootstrap", "NumPy", "Pandas"],
    },
    {
      title: "Developer Tools",
      items: ["Git", "GitHub", "REST APIs", "Jupyter Notebooks", "VS Code", "Docker"],
    },
    {
      title: "Databases",
      items: ["Firebase", "MongoDB", "SQL (PostgreSQL)", "SQL (MySQL)"],
    },
    {
      title: "Programming Languages",
      items: ["Python", "Java", "C++", "C"],
    },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "LUMIX — AI-Powered Development Tools",
    description:
      "AI-integrated development platform improving developer productivity with automated code insights.",
    longDescription:
      "Architected an AI-integrated development platform using JavaScript and Node.js, boosting developer productivity through automated code insights and GenAI-powered recommendations. Built modular REST APIs and intelligent search features to streamline code navigation.",
    tags: ["Node.js", "JavaScript", "REST API", "GenAI"],
    github: "",
    live: "https://lumixproject.onrender.com",
    image: "/projects/lumix.svg",
  },
  {
    id: 2,
    title: "LLM-Powered Intent Router",
    description:
      "Intent classification and routing system built with Node.js and LLMs for dynamic persona routing.",
    longDescription:
      "Built an LLM-powered intent classification and routing system using a two-stage pipeline with confidence-based decision logic. Developed scalable REST APIs with Node.js and Express to enable real-time query handling and dynamic routing to AI personas.",
    tags: ["Node.js", "Express", "LLM", "REST API"],
    github: "",
    live: "https://llm-powered-intent-router.onrender.com/",
    image: "/projects/intent-router.svg",
  },
  {
    id: 3,
    title: "Notice Hub — Centralized Announcement Platform",
    description:
      "Responsive announcement platform with Firebase for real-time updates and increased engagement.",
    longDescription:
      "Developed a responsive front-end using HTML, CSS and vanilla JavaScript with Firebase (NoSQL) for real-time data updates. The platform improved information access for users and increased engagement.",
    tags: ["Firebase", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/DuvvuLakshmiPrasanna",
    live: "",
    image: "/projects/notice-hub.svg",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Technical Hub",
    position: "Full Stack Developer Intern",
    duration: "June 2024 – Present",
    description:
      "Engineered and deployed multiple full-stack applications using React Native and Node.js. Integrated backend APIs, optimized performance, and followed Agile practices across the SDLC.",
    achievements: [
      "Engineered and deployed 3+ full-stack applications",
      "Improved response times and UX through performance optimizations",
      "Participated in code reviews and CI/CD deployment workflows",
    ],
  },
  {
    id: 2,
    company: "Aditya College of Engineering and Technology",
    position: "Member — Technical Club",
    duration: "Jan 2024 – Present",
    description:
      "Contributed to workshops and coordinated a team to build a club management web application, gaining full SDLC experience.",
    achievements: [
      "Led a 5-member team to build a club management app",
      "Delivered 10+ hands-on workshops to strengthen developer skills",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    author: "John Doe",
    role: "Product Manager",
    company: "Tech Corp",
    text: "Working with Prasanna has been an absolute pleasure. The quality of work and attention to detail is outstanding.",
    image: "/testimonials/john.jpg",
  },
  {
    id: 2,
    author: "Sarah Smith",
    role: "CEO",
    company: "StartUp Labs",
    text: "Prasanna delivered our project ahead of schedule with exceptional quality. Highly recommended!",
    image: "/testimonials/sarah.jpg",
  },
  {
    id: 3,
    author: "Mike Johnson",
    role: "CTO",
    company: "Innovation Inc",
    text: "The technical expertise and professionalism shown by Prasanna are truly impressive.",
    image: "/testimonials/mike.jpg",
  },
];

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#hero", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/DuvvuLakshmiPrasanna",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prasanna-yadav2304",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:ig.prasannayadav@gmail.com",
    icon: "Mail",
  },
];
