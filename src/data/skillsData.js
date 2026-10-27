export const skillsData = {
  coreStack: [
    {
      name: "MongoDB",
      letter: "M",
      role: "Document Database",
      desc: "Flexible, high-throughput BSON document store, aggregation pipelines, schema indexing & transaction handling.",
      level: "Production Ready"
    },
    {
      name: "Express.js",
      letter: "E",
      role: "Backend API Framework",
      desc: "Minimalist web framework for Node.js. REST routing, custom middleware pipelines, error handling & security guards.",
      level: "Production Ready"
    },
    {
      name: "React.js",
      letter: "R",
      role: "Component UI Library",
      desc: "Modern React architecture, hooks, custom state management, performance profiling, responsive SPA design.",
      level: "Production Ready"
    },
    {
      name: "Node.js",
      letter: "N",
      role: "JavaScript Runtime",
      desc: "Asynchronous non-blocking event loop runtime, streaming APIs, authentication microservices, npm ecosystem.",
      level: "Production Ready"
    }
  ],
  categories: [
    {
      title: "Frontend Engineering",
      icon: "Layout",
      description: "Building fast, accessible, and responsive user interfaces.",
      skills: [
        { name: "React.js", highlighted: true },
        { name: "JavaScript (ES6+)", highlighted: true },
        { name: "TypeScript", highlighted: true },
        { name: "Tailwind CSS", highlighted: true },
        { name: "HTML5 Semantic", highlighted: false },
        { name: "CSS3 / Custom Properties", highlighted: false },
        { name: "Bootstrap", highlighted: false },
        { name: "Responsive UI/UX", highlighted: false },
        { name: "State Management", highlighted: false }
      ]
    },
    {
      title: "Backend & API Architecture",
      icon: "Server",
      description: "Scalable server-side systems and RESTful web services.",
      skills: [
        { name: "Node.js", highlighted: true },
        { name: "Express.js", highlighted: true },
        { name: "RESTful API Design", highlighted: true },
        { name: "JWT Authentication", highlighted: true },
        { name: "Middleware Architecture", highlighted: false },
        { name: "CRUD Systems", highlighted: false },
        { name: "Error Handling & Logging", highlighted: false },
        { name: "CORS & Security Headers", highlighted: false }
      ]
    },
    {
      title: "Database & Data Modeling",
      icon: "Database",
      description: "Designing structured, efficient, and reliable data layers.",
      skills: [
        { name: "MongoDB", highlighted: true },
        { name: "Mongoose ODM", highlighted: true },
        { name: "Aggregation Pipelines", highlighted: true },
        { name: "Schema Indexing", highlighted: false },
        { name: "Data Validation", highlighted: false },
        { name: "Query Optimization", highlighted: false }
      ]
    },
    {
      title: "Developer Tools & Workflow",
      icon: "Wrench",
      description: "Modern software development tooling and version control.",
      skills: [
        { name: "Git", highlighted: true },
        { name: "GitHub", highlighted: true },
        { name: "Postman API Testing", highlighted: true },
        { name: "VS Code", highlighted: false },
        { name: "npm / Vite", highlighted: false },
        { name: "Chrome DevTools", highlighted: false }
      ]
    },
    {
      title: "Additional Technologies",
      icon: "Layers",
      description: "Broad foundational knowledge across relational and server environments.",
      skills: [
        { name: "SQLite", highlighted: true, note: "Offline DB" },
        { name: "MySQL", highlighted: false, note: "Relational DB" },
        { name: "SQL Queries", highlighted: false, note: "Data queries" },
        { name: "PHP", highlighted: false, note: "Foundation" }
      ]
    },
    {
      title: "Active Learning & Expanding",
      icon: "Compass",
      description: "Currently deepening competencies in advanced systems and cloud engineering.",
      skills: [
        { name: "Advanced TypeScript", status: "In Progress" },
        { name: "System Design & Scalability", status: "In Progress" },
        { name: "Unit & Integration Testing", status: "In Progress" },
        { name: "AI API Integrations (LLMs)", status: "Active" },
        { name: "Cloud Deployment (Vercel, Render, AWS)", status: "Active" }
      ]
    }
  ]
};
