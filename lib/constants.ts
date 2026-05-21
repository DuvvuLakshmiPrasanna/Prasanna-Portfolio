// Portfolio Data and Constants

export const PORTFOLIO_DATA = {
  name: "Duvvu Lakshmi Prasanna",
  title: "Full Stack Developer | B.Tech CSE (Data Science)",
  degree: "4th-year B.Tech Computer Science (Data Science)",
  shortBio:
    "Full Stack Developer building production-ready web and mobile applications.",
  longBio:
    "Full Stack Developer building production-ready web and mobile applications. Passionate about creating elegant, user-focused digital experiences that solve real-world problems.\n\nProficient in React.js, Node.js, Python, and REST APIs. Strong foundation in system design, scalable architecture, and modern development practices.\n\n3rd Year B.Tech CSE (Data Science) student exploring the intersection of web development, data science, and product innovation.",
  email: "ig.prasannayadav@gmail.com",
  phone: "7306742255",
  github: "https://github.com/DuvvuLakshmiPrasanna",
  linkedin: "https://www.linkedin.com/in/prasanna-yadav2304",
  location: "Andhra Pradesh, India",
  resumeUrl: "https://drive.google.com/file/d/1r0EP0ru71Zi08469QAI2b3S7EdA8offd/view?usp=drive_link",
};

export const SKILLS = {
  categories: [
    {
      title: "Languages",
      items: ["Python", "Java", "C++", "C", "TypeScript", "JavaScript"],
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "React.js", "React Native", "Bootstrap"],
    },
    {
      title: "Backend & APIs",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Databases",
      items: ["SQL (PostgreSQL)", "SQL (MySQL)", "MongoDB", "Firebase (NoSQL)"],
    },
    {
      title: "CS Fundamentals",
      items: ["Data Structures & Algorithms", "OOP", "OS", "Networks", "DBMS"],
    },
    {
      title: "Developer Tools",
      items: ["VS Code", "Figma", "Cursor", "Google Colab", "Jupyter", "Postman", "GenAI tools"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS (basics)", "Docker", "Git", "GitHub"],
    },
    {
      title: "Soft Skills",
      items: ["Leadership", "Teamwork", "Problem Solving"],
    },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "LUMIX — AI-Powered Development Tools",
    description:
      "AI-powered platform delivering real-time code suggestions, automated developer insights, and modular REST APIs for a clean developer workflow. Focused on speeding up everyday development tasks while keeping the interface simple and practical.",
    longDescription:
      "Built an AI-powered development platform that surfaces real-time code suggestions and automated developer insights. Designed modular REST APIs with clean code principles to keep the architecture scalable, maintainable, and fast.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/DuvvuLakshmiPrasanna/AI_World",
    live: "https://lumixproject.onrender.com",
    image: "/projects/lumix.svg",
    variant: "standard",
  },
  {
    id: 2,
    title: "React State Management Comparison",
    description:
      "Interactive comparison tool showcasing Redux, Zustand, Recoil, and Context API with real-world state handling examples and performance insights. Helps developers compare how each solution behaves under practical application conditions.",
    longDescription:
      "Built an interactive comparison tool that demonstrates Redux, Zustand, Recoil, and Context API with real-world state handling examples. Added performance insights, reusable state patterns, and scalable guidance to help developers choose the right state management approach.",
    tags: ["React", "Redux", "Zustand", "TypeScript"],
    github: "https://github.com/DuvvuLakshmiPrasanna/React-State-Management-Comparison-New",
    live: "https://react-state-management-comparison-n.vercel.app/",
    image: "/projects/state-management.svg",
    variant: "standard",
  },
  {
    id: 3,
    title: "LLM-Powered Intent Router",
    description:
      "LLM-based system that classifies user intent and routes queries through smart processing pipelines, REST APIs, and modular AI workflows. Supports dynamic intent mapping, fallback handling, and structured responses for cleaner request orchestration.",
    longDescription:
      "Built an LLM-based intent routing system that classifies user intent and sends each query to the right handler. Developed REST APIs and modular AI workflows for structured responses, dynamic routing, fallback handling, and reliable request processing.",
    tags: ["Node.js", "Express", "LLM", "REST API"],
    github: "https://github.com/DuvvuLakshmiPrasanna/LLM-powered-intent-router",
    live: "https://llm-powered-intent-router.onrender.com/",
    image: "/projects/intent-router.svg",
    variant: "standard",
  },
  {
    id: 4,
    title: "Notice Hub — Centralized Announcement Platform",
    description:
      "Responsive announcement platform with role-based access, real-time updates, and Firebase Realtime Database sync for reliable communication.",
    longDescription:
      "Built a responsive announcement platform with role-based access and real-time updates. Integrated Firebase Realtime Database for live sync, persistent multi-user session storage, and dependable announcement delivery.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/DuvvuLakshmiPrasanna/Notice_Hub",
    live: "https://duvvulakshmiprasanna.github.io/Notice_Hub/",
    image: "/projects/notice-hub.svg",
    variant: "standard",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Technical Hub",
    position: "Full Stack Developer Intern",
    duration: "May 2026 – June 2026",
    description:
      "Developed and deployed full-stack apps using React Native and Node.js with optimized API integration.",
    achievements: [
      "Enhanced app performance, fixed bugs, and improved UX through efficient state and API management",
      "Followed Agile workflows, maintained Git version control, and participated in peer code reviews",
      "Built production-ready features with a focus on reliability and maintainability",
    ],
    offerLetter:
      "https://drive.google.com/file/d/1g7crCvVdDMeZgIonjfO84YQrIZWaGruN/view?usp=sharing",
  },
];

export const ACHIEVEMENTS = [
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/prasannayadav/",
    text: "Solved 150+ problems in Data Structures and Algorithms.",
  },
  {
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/prasannay8d9p",
    text: "Solved 150+ DSA problems and strengthened algorithmic thinking.",
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/prasannayadav",
    text: "Completed competitive programming challenges regularly.",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/prasannayadav241",
    text: "Earned Golden badge in C and Silver badges in Java and Python.",
  },
];;

export const EDUCATION = [
  {
    title: "B.Tech in Computer Science & Engineering (Specialization: Data Science)",
    institution: "Aditya College of Engineering and Technology",
    detail: "CGPA: 8.08/10",
    duration: "Sept 2023 – 2027",
  },
  {
    title: "Intermediate [MPC]",
    institution: "Sri Chaitanya Junior College",
    detail: "Percentage: 82%",
    duration: "Completed",
  },
  {
    title: "High School",
    institution: "Bhashyam Educational Institutions",
    detail: "CGPA: 10/10",
    duration: "Completed",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Cisco - Web & Programming",
    items: [
      { label: "HTML Essentials", href: "https://drive.google.com/file/d/1wAziycAJUGoCn-medftrjyXf3j5uF5YK/view?usp=drive_link" },
      { label: "CSS Essentials", href: "https://drive.google.com/file/d/1ig8VbzGE86mEPwbvJeivFt1Xr3l-pcou/view?usp=drive_link" },
      { label: "JavaScript Essentials", href: "https://drive.google.com/file/d/1yLNkz-4EV2rr7bL8Nk0fcr8SjrTFNVD6/view?usp=drive_link" },
      { label: "Python Essentials", href: "https://drive.google.com/file/d/1uWAUzYSvWiwOUIN5HfilFszG-2Oeqdp2/view?usp=drive_link" },
      { label: "Programming Essentials in C", href: "https://drive.google.com/file/d/1130QQGDwppZilo5irfBfPpCRN9aOwA3L/view?usp=sharing" },
    ],
  },
  {
    title: "NPTEL",
    items: [
      { label: "The Joy of Computing Using Python", href: "https://drive.google.com/file/d/18-4-qHfpwvQ1I94bnqY9PMl349MNudVd/view?usp=drive_link" },
      { label: "Data Structure and Algorithms Using Java", href: "https://drive.google.com/file/d/1GDnvZZ7VnI3uCbizZP5Pq5r8hGJZ_z1h/view?usp=drive_link" },
    ],
  },
  {
    title: "Cisco - Systems & Data",
    items: [
      { label: "Introduction to Data Science", href: "https://drive.google.com/file/d/1Jrtb47UdGK8Zs9Pz4uMawckqMwuFfSaP/view?usp=drive_link" },
      { label: "Operating Systems Basics", href: "https://drive.google.com/file/d/1R4pdtw3A2dGMPZmSa_e9BLHMe0-YtumC/view?usp=drive_link" },
    ],
  },
  {
    title: "Microsoft & MongoDB",
    items: [
      { label: "GitHub Foundations", href: "https://drive.google.com/file/d/1ampPWo_hKQdqehqmtV5DfocZ2_0jlwm1/view?usp=sharing" },
      { label: "MongoDB Certified Associate Developer", href: "https://drive.google.com/file/d/1hXMR8VoA8duEx5X-wnLL5fsHIebunVfx/view?usp=sharing" },
    ],
  },
  {
    title: "Oracle Academy",
    items: [
      { label: "Java Foundation", href: "https://drive.google.com/file/d/1h-sSGyARcbbPuMGnNhv05JVg_LtuOUxk/view?usp=sharing" },
      { label: "Java Programming", href: "https://drive.google.com/file/d/1wHhdpnNaMZ2tPRvei3qd44YP4C6h1GPW/view?usp=drive_link" },
    ],
  },
  {
    title: "Red Hat Academy",
    items: [
      { label: "Introduction to Python Programming", href: "https://drive.google.com/file/d/12fNCIEn2vkl8_cExgSA0yeaGAVV0lnN7/view?usp=sharing" },
      { label: "IT Specialist: HTML and CSS", href: "https://drive.google.com/file/d/16RZFnbI9YqlgamFKHb7MCllLwOQuMZ7R/view?usp=sharing" },
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
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
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
