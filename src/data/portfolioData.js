// ============================================================
// portfolioData.js — Centralized configuration for Shivani Singh's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Shivani Singh",
  firstName: "Shivani",
  brandName: "Shivani Singh",
  title: "Aspiring Software Developer | AI Enthusiast | Data Analyst",
  location: "Palwal, Haryana, India",
  phone: "+91 999125453",
  emails: {
    primary: "shivanisingh9050@gmail.com",
  },
  summary:
    "BCA student at Gurugram University with practical experience in Python, Java, SQL, AI, Data Analytics, and Web Development. Skilled in building machine learning applications, Streamlit tools, and interactive revenue dashboards through internships at Cognifyz Technologies, Thiranex, and Code Alpha.",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/shivanisingh-dev01",
  linkedin: "https://linkedin.com/in/shivani-singh-358542347",
};

export const heroContent = {
  greeting: "Hi, I'm Shivani Singh",
  titleHighlight: "Software Developer & AI Enthusiast",
  subtitle:
    "I build intelligent AI applications, interactive data dashboards, and modern software solutions using Python, Machine Learning, and Web Technologies.",
  ctaPrimary: { text: "View My Projects", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:shivanisingh9050@gmail.com?subject=Opportunity Inquiry – Portfolio",
  },
  ctaResume: { text: "Download Resume", href: "/resume.pdf" },
};

export const aboutContent = {
  heading: "Hello & Welcome!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shivani Singh</span>, a BCA student at Gurugram University passionate about Software Development, Artificial Intelligence, and Data Analytics. I love building practical AI tools, performing exploratory data analysis, and crafting intuitive web applications.`,
  techStack: ["Python", "Machine Learning", "Data Analytics"],
};

export const skillsContent = {
  badge: "My Approach",
  heading: "Here's how I turn complex data & ideas into practical applications",
  description:
    "I follow a structured, analytical, and test-driven approach to turn raw data and code requirements into robust software solutions.",
  cards: [
    {
      number: "01",
      title: "Data & Requirement Analysis",
      text: "Understanding user requirements, gathering datasets, and identifying core business problems to build targeted technical solutions.",
    },
    {
      number: "02",
      title: "Data Cleaning & EDA",
      text: "Processing, transforming, and cleaning datasets to uncover hidden trends, customer segments, and revenue insights.",
    },
    {
      number: "03",
      title: "Development & AI Logic",
      text: "Building Python algorithms, Streamlit web interfaces, and machine learning models for natural language translation and analytics.",
    },
    {
      number: "04",
      title: "Visualization & Deployment",
      text: "Creating interactive Power BI dashboards, documenting code on GitHub, and deploying intuitive tools.",
    },
  ],
  endText: "Ready to analyze & build!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 82 },
        { name: "C", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Data Analytics & AI",
      skills: [
        { name: "Power BI", level: 88 },
        { name: "Streamlit", level: 90 },
        { name: "Machine Learning", level: 85 },
        { name: "Data Cleaning & Visualization", level: 92 },
        { name: "Excel", level: 88 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 88 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 92 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "Object-Oriented Programming (OOP)", level: 88 },
        { name: "Software Engineering & SDLC", level: 85 }
      ]
    }
  ]
};

export const internshipsList = [
  {
    organization: "Cognifyz Technologies",
    role: "Software Developer Intern",
    duration: "2026",
    skills: ["Python Development", "AI Project Architecture", "GitHub Documentation", "Software Engineering"],
    tech: ["Python", "Git", "GitHub", "AI Tools"],
    certificatePdf: null
  },
  {
    organization: "Thiranex",
    role: "Data Analyst Intern",
    duration: "25 Jun 2026 - 24 Jul 2026",
    skills: ["Data Cleaning", "Revenue Trend Analysis", "Customer Segmentation", "Dashboard Creation"],
    tech: ["Python", "Power BI", "Excel", "Data Analytics"],
    certId: "THX-JUN2526-545",
    certificatePdf: "/certificates_2.pdf"
  },
  {
    organization: "Code Alpha",
    role: "Artificial Intelligence Intern",
    duration: "20 Jun 2026 - 20 Jul 2026",
    skills: ["Natural Language Processing", "Streamlit UI", "Python Libraries", "Machine Learning"],
    tech: ["Python", "Streamlit", "NLP", "Machine Learning"],
    certId: "CA/DF1/146145",
    certificatePdf: "/certificates.pdf"
  }
];

export const softSkillsList = [
  { name: "Communication", icon: "💬", desc: "Clear, structured, and articulate interaction across technical and non-technical teams." },
  { name: "Teamwork", icon: "🤝", desc: "Active collaborator in team environments, hackathons, and internship projects." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex data and software challenges into clean, logical solutions." },
  { name: "Time Management", icon: "⏰", desc: "Efficiently balancing academic coursework with practical hands-on internships." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to master new tools, libraries, and frameworks like Power BI, Streamlit, and Machine Learning." }
];

export const projects = [
  {
    id: "sales-revenue-analysis",
    number: "01",
    badge: "🚀 Featured Analytics Project",
    title: "Sales & Revenue Analysis Dashboard",
    description:
      "A data analytics solution created to identify key business revenue trends and performance metrics. Applied data cleaning, transformation techniques, and designed interactive dashboards to provide decision-makers with clear visual insights.",
    techTags: ["Python", "Power BI", "Excel", "Data Analytics", "Data Cleaning"],
    links: {
      github: "https://github.com/shivanisingh-dev01",
      demo: null
    },
    isFlagship: true,
  },
  {
    id: "customer-segmentation",
    number: "02",
    badge: "🤖 ML Project",
    title: "Customer Segmentation Analysis",
    description:
      "Analyzed customer behavior using historical data and machine learning clustering techniques. Grouped customers by spending patterns and demographic attributes to generate actionable business insights for targeted marketing.",
    techTags: ["Python", "Machine Learning", "Clustering", "Pandas", "Scikit-Learn"],
    links: {
      github: "https://github.com/shivanisingh-dev01",
      demo: null
    },
    isFlagship: false,
  },
  {
    id: "ai-translation-tool",
    number: "03",
    badge: "⚡ AI / NLP Project",
    title: "AI Language Translation Tool",
    description:
      "An artificial intelligence translation application built with Python libraries and Streamlit. Features a clean, responsive web interface allowing users to seamlessly translate text across different languages in real-time.",
    techTags: ["Python", "Streamlit", "NLP", "Machine Learning", "AI API"],
    links: {
      github: "https://github.com/shivanisingh-dev01",
      demo: null
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Artificial Intelligence Internship",
      issuer: "Code Alpha",
      icon: "🤖",
      certId: "CA/DF1/146145",
      pdfUrl: "/certificates.pdf",
      date: "20th June 2026 - 20th July 2026"
    },
    {
      name: "Data Analytics Internship",
      issuer: "Thiranex",
      icon: "📊",
      certId: "THX-JUN2526-545",
      pdfUrl: "/certificates_2.pdf",
      date: "25th June 2026 - 24th July 2026"
    },
    {
      name: "Software Development Internship",
      issuer: "Cognifyz Technologies",
      icon: "💻",
      certId: "2026",
      pdfUrl: null,
      date: "2026"
    }
  ],
  viewAllUrl: "/certificates.pdf",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Gurugram University",
  graduation: "2027 (Expected)",
};

export const footerContent = {
  taglines: [
    "Software Development & AI",
    "Python · Machine Learning · Data Analytics",
    "Gurugram University BCA '27",
  ],
  credential: "BCA · Gurugram University '27",
  copyright: `© ${new Date().getFullYear()} Shivani Singh | Built with React & Vite`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

export const contentCreation = {
  badge: "AI & Media Showcase",
  heading: "Interactive Presentations & Visual Demos",
  description: "Combining technical software engineering with visual storytelling, project demonstrations, and interactive AI showcases.",
  categories: [
    {
      title: "AI App Demos",
      description: "Demonstrating translation tools, Streamlit interfaces, and machine learning models in action.",
      stats: "Interactive Tools",
      icon: "🤖"
    },
    {
      title: "Data Analytics Insights",
      description: "Visualizing sales trends, customer segmentation, and interactive dashboard breakdowns.",
      stats: "Dashboards",
      icon: "📊"
    }
  ]
};

export const leadershipList = [
  {
    title: "Academic & Project Lead — Gurugram University",
    description: "Collaborating with peers and leading group software development projects during BCA coursework.",
    role: "Project Coordinator",
    badge: "Academic"
  },
  {
    title: "Software & AI Internship Lead",
    description: "Managing project documentation and GitHub repository submissions for AI and software tasks.",
    role: "Documentation & Code Lead",
    badge: "Technical"
  }
];
