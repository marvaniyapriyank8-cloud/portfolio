export const portfolioData = {
  meta: {
    siteTitle: "Priyank Marvaniya | MERN Stack Developer",
    description:
      "Portfolio of Priyank Marvaniya, an IT undergraduate and MERN Stack Developer building full-stack web applications with React, Node.js, Express, and MongoDB.",
    available: true,
  },

  name: "Priyank Marvaniya",
  shortName: "Priyank",
  role: "MERN Stack Developer",
  availability: "Open to internships & freelance projects",

  heroButtons: {
    primary: "Explore Projects",
    secondary: "Download Resume",
    tertiary: "Get in Touch",
  },

  contactHeading: "Let's work together",
  footerText: "I build practical web applications with modern JavaScript technologies.",

  typewriterRoles: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
  ],

  tagline:
    "I build full-stack web applications with React, Node.js, Express, and MongoDB.",

  bio:
    "I'm an Information Technology undergraduate at Gujarat Technological University (GTU) and a MERN Stack Developer. I enjoy building practical web applications, working with APIs, and connecting clean user interfaces with reliable backend functionality. My projects include Pixora, WavR, LedgerPay, and SkillForge, where I've worked with authentication, database operations, media uploads, and responsive interfaces.",

  profileImage: "/Profile.jpeg",
  resumeLink: "/Resume.pdf",

  socialLinks: {
    github: "https://github.com/marvaniyapriyank8-cloud",
    linkedin: "https://linkedin.com/in/priyank-marvaniya-525109374",
    instagram: "https://www.instagram.com/priyank_marvaniya_/",
    twitter: "https://twitter.com/",
  },

  contactInfo: {
    email: "marvaniyapriyank8@gmail.com",
    phone: "+91 9016100238",
    location: "Rajkot, Gujarat, India",
  },

  education: [
    {
      year: "2023 — 2027",
      title: "Bachelor of Engineering in Information Technology",
      org: "Gujarat Technological University (GTU)",
      detail: "Currently pursuing the degree; 7th Semester",
    },
  ],

  careerGoal:
    "To contribute to real-world web products, strengthen my full-stack engineering skills, and grow through hands-on development work.",

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 82 },
        { name: "Tailwind CSS", level: 78 },
        { name: "Bootstrap", level: 75 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "REST APIs", level: 80 },
        { name: "JWT Authentication", level: 78 },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", level: 80 },
        { name: "Mongoose", level: 78 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git & GitHub", level: 78 },
        { name: "Postman", level: 75 },
        { name: "Vite", level: 78 },
        { name: "ImageKit", level: 75 },
      ],
    },
  ],

  projects: [
    {
      title: "SkillForge",
      description:
        "An AI-assisted career development platform with role-based access for students, recruiters, mentors, and admins. Includes resume analysis, skill-gap insights, interview question generation, and personalized learning roadmaps.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Groq AI",
        "JWT",
        "Tailwind CSS",
        "ImageKit",
      ],
      image: "/Skillforge.png",
      github: "https://github.com/marvaniyapriyank8-cloud/skillforge",
      demo: "https://priyank-skillforgeai.vercel.app/",
    },
    {
      title: "LedgerPay",
      description:
        "A MERN-based personal finance application for managing transactions, tracking account balances, and reviewing transaction history through a responsive interface.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      image: "/LedgerPay.png",
      github: "https://github.com/marvaniyapriyank8-cloud/ledgerpay",
      demo: "#",
    },
    {
      title: "WavR",
      description:
        "A music streaming application with Listener and Artist roles. Artists can upload tracks, while listeners can discover and stream music through a custom player.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "ImageKit",
      ],
      image: "/WavR.png",
      github: "https://github.com/marvaniyapriyank8-cloud/wavr",
      demo: "#",
    },
    {
      title: "Pixora",
      description:
        "A photo-sharing application where users can register, sign in, publish posts with captions, and manage their content. Includes ImageKit uploads, protected routes, and paginated feeds.",
      tech: [
        "React.js",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "ImageKit",
      ],
      image: "/Pixora.png",
      github: "https://github.com/marvaniyapriyank8-cloud/pixora",
      demo: "#",
    },
  ],

  resume: {
    summary:
      "MERN Stack Developer with hands-on project experience building full-stack applications using React.js, Node.js, Express.js, and MongoDB.",
    highlights: [
      "Built full-stack applications including Pixora, WavR, LedgerPay, and SkillForge",
      "Implemented REST APIs, CRUD operations, and JWT-based authentication",
      "Worked with MongoDB, Mongoose, and ImageKit for data and media management",
      "Completed a 15-day React.js internship covering JavaScript and React fundamentals",
    ],
    updated: "Updated October 2026",
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
};

export default portfolioData;
