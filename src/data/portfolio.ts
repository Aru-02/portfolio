import { PersonalInfo, SocialLink, SkillCategory, ProjectItem, ExperienceItem, EducationItem, NavLink } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "S. Arumugam",
  role: "Full Stack Developer | Java Developer",
  title: "Full Stack Developer & Java Specialist",
  tagline: "I build modern web applications, REST APIs and scalable backend systems.",
  location: "Thoothukudi, Tamil Nadu, India",
  educationSummary: "B.E. Computer Science and Engineering (2025)",
  college: "Jayaraj Annapackiam CSI College of Engineering",
  graduationYear: 2025,
  cgpa: 7.4,
  languages: ["English", "Tamil"],
  summary:
    "I am a passionate Computer Science Engineering graduate with practical experience in full-stack web development. I have worked with Java, Spring Boot, Hibernate, React, Next.js, Node.js, TypeScript, SQL and modern web technologies. I enjoy developing scalable applications, REST APIs, database-driven systems, third-party integrations and real-world business solutions. I am continuously improving my technical skills and looking for opportunities to contribute to software development teams.",
  availableForHire: true,
  statusBadge: "Available for Full-time Roles & Relocation",
  email: "arumugam.dev.official@gmail.com", // [Configurable placeholder]
  resumeUrl: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Aru-02", // [Replace with your actual GitHub URL]
    icon: "github",
    label: "Explore GitHub Profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/s-arumugam-dev", // [Replace with your actual LinkedIn URL]
    icon: "linkedin",
    label: "Connect on LinkedIn",
  },
  {
    name: "Email",
    url: "mailto:arumugam.dev.official@gmail.com",
    icon: "mail",
    label: "Send Direct Email",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces with clean architecture.",
    skills: [
      { name: "HTML", featured: true },
      { name: "CSS", featured: true },
      { name: "JavaScript", featured: true },
      { name: "TypeScript", featured: true },
      { name: "React", featured: true },
      { name: "Next.js", featured: true },
      { name: "Angular", featured: false },
      { name: "Tailwind CSS", featured: true },
    ],
  },
  {
    title: "Backend Development",
    description: "Architecting high-performance server-side services, enterprise logic, and secure REST APIs.",
    skills: [
      { name: "Java", featured: true },
      { name: "Spring Boot", featured: true },
      { name: "Hibernate", featured: true },
      { name: "Node.js", featured: true },
      { name: "Express.js", featured: true },
      { name: "Python", featured: false },
      { name: "Flask", featured: false },
    ],
  },
  {
    title: "Databases & Caching",
    description: "Designing relational & non-relational database models, indexes, and fast caching layers.",
    skills: [
      { name: "MySQL", featured: true },
      { name: "PostgreSQL", featured: true },
      { name: "MongoDB", featured: true },
      { name: "Redis", featured: true },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Version control, build automation, API testing, and professional developer workflows.",
    skills: [
      { name: "Git", featured: true },
      { name: "GitHub", featured: true },
      { name: "Maven", featured: true },
      { name: "Postman", featured: true },
      { name: "IntelliJ IDEA", featured: true },
      { name: "Eclipse", featured: false },
      { name: "MySQL Workbench", featured: false },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "shipping-ai",
    title: "ShippingAI",
    badge: "Featured SaaS Platform",
    subtitle: "AI-Powered Shipping Automation & Logistics SaaS Platform",
    description:
      "A shipping automation SaaS platform designed to simplify e-commerce shipping operations. The platform helps merchants manage orders, shipments, returns, courier integrations, tracking, NDR and COD reconciliation.",
    longDescription:
      "Engineered an end-to-end logistics platform that connects online sellers with major courier partners. Features automated dispatching, smart courier selection, tracking webhooks, non-delivery report (NDR) automation, and seamless financial reconciliation for Cash On Delivery orders.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis"],
    features: [
      "Order management and unified multi-channel ingestion",
      "Bulk shipment processing with automated label generation",
      "Multi-courier integrations with rate calculation",
      "Real-time shipment tracking with webhook updates",
      "Automated return management (RTO) workflow",
      "NDR management (Non-Delivery Report) and customer verification",
      "COD reconciliation & automated remittance reports",
      "Shopify direct integration for automated order syncing",
      "Interactive analytics dashboard for delivery SLA insights",
    ],
    githubUrl: "https://github.com/Aru-02/shipping-ai-platform", // [Replace with your repository link]
    liveUrl: "https://shipping-ai-platform.vercel.app", // [Replace with your live demo URL]
    featured: true,
    category: "Full Stack",
  },
  {
    id: "ecommerce-shipping-management",
    title: "E-commerce Shipping Management",
    badge: "Backend & Systems",
    subtitle: "Centralized Order & Logistics Booking Infrastructure",
    description:
      "A robust system for managing e-commerce orders, courier bookings, shipment labels, tracking and delivery status synchronization.",
    longDescription:
      "Designed a transactional order routing service that automates carrier dispatch, validates shipping addresses, handles bulk PDF label rendering, and ensures consistent state synchronization across third-party logistics endpoints.",
    technologies: ["JavaScript", "Node.js", "PostgreSQL", "REST APIs", "Express.js"],
    features: [
      "Automated courier bookings with dynamic carrier allocation",
      "Standardized shipment label generation and tracking manifests",
      "Real-time delivery status synchronization via scheduled polling and webhooks",
      "Structured PostgreSQL relational schemas with foreign key integrity and indexing",
      "Modular REST API architecture designed for high availability and low latency",
      "Detailed audit logging for order state transitions and shipping events",
    ],
    githubUrl: "https://github.com/Aru-02/ecommerce-shipping-management", // [Replace with your repository link]
    liveUrl: "https://shipping-mgmt-demo.vercel.app", // [Replace with your live demo URL]
    featured: true,
    category: "Backend",
  },
  {
    id: "java-spring-enterprise-api",
    title: "Java Spring Boot Enterprise REST Service",
    badge: "Enterprise Java",
    subtitle: "Scalable Microservice & Database-Driven Architecture",
    description:
      "A modular enterprise RESTful service developed with Java, Spring Boot, Hibernate ORM and MySQL, implementing secure JWT authentication, role-based access control, and transactional business logic.",
    longDescription:
      "Created a robust backend service adhering to clean layered architecture (Controller, Service, Repository, DTO). Provides comprehensive input validation, centralized error handling, and optimized database queries.",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Maven", "Postman"],
    features: [
      "Stateless JWT-based security authentication with Spring Security",
      "Role-Based Access Control (RBAC) protecting administrative endpoints",
      "Hibernate ORM data layer with optimized JPA relationships and lazy loading",
      "Custom GlobalExceptionHandler delivering standardized JSON responses",
      "Database schema versioning and transactional boundary management",
      "Complete Postman test suite with automated assertions for continuous testing",
    ],
    githubUrl: "https://github.com/arumugam-dev/spring-boot-enterprise-service", // [Replace with your repository link]
    liveUrl: "https://github.com/arumugam-dev/spring-boot-enterprise-service#readme", // [Replace with your live demo URL]
    featured: false,
    category: "Backend",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "practical-shipping-platform",
    role: "Full-Stack Project Developer",
    organization: "ShippingAI Platform (Independent Practical Project)",
    type: "Practical Project Experience",
    period: "2024 - Present",
    location: "Thoothukudi, India",
    description:
      "Architected and implemented a comprehensive shipping and logistics SaaS application designed for real-world e-commerce merchant workflows.",
    highlights: [
      "Engineered full-stack features using Next.js 14, React, Node.js, PostgreSQL, and Redis caching.",
      "Built resilient integration pipelines for courier tracking, label generation, and automated NDR workflows.",
      "Structured database models with indexing to support high-throughput order batches and status updates.",
      "Implemented responsive UI dashboards with Tailwind CSS and TypeScript for seamless data visualization.",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
  },
  {
    id: "academic-fullstack-dev",
    role: "Java & Full Stack Developer (Academic & Capstone)",
    organization: "Jayaraj Annapackiam CSI College of Engineering",
    type: "Academic Project",
    period: "2023 - 2025",
    location: "Thoothukudi, India",
    description:
      "Developed multiple end-to-end software applications, backend services, and database schemas as part of Computer Science Engineering coursework and capstones.",
    highlights: [
      "Developed robust REST APIs using Java, Spring Boot, Hibernate, and MySQL adhering to MVC pattern.",
      "Integrated frontends using React and modern JavaScript with backend REST endpoints.",
      "Practiced Git branching workflows, test-driven debugging with Postman, and build automation with Maven.",
      "Collaborated on database design, normalization (1NF-3NF), and query optimization.",
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "React", "Git", "Maven"],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    institution: "Jayaraj Annapackiam CSI College of Engineering",
    location: "Thoothukudi, Tamil Nadu, India",
    period: "2021 - 2025",
    graduationYear: 2025,
    cgpa: "7.4 / 10.0",
    highlights: [
      "Focused on Data Structures, Algorithms, Object-Oriented Programming (Java), Database Management Systems (DBMS), Operating Systems, and Software Engineering.",
      "Actively built practical projects utilizing modern web frameworks and enterprise backend stacks.",
      "Graduation Year: 2025 | Languages of Instruction & Collaboration: English & Tamil.",
    ],
  },
];
