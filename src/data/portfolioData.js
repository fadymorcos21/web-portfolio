export const hero = {
  name: "Fady Morcos",
  roles: ["Software Engineer", "Full-Stack Developer", "Systems Builder"],
  intro:
    "Building scalable platforms, production-grade automation, and high-impact digital products for clients and teams.",
  ctaLabel: "View Work",
};

export const clientPlatforms = [
  {
    id: "wecaremed",
    title: "WeCareMed",
    subtitle: "Clinic + Pharmacy Platform",
    url: "https://wecaremed.ca/",
    description:
      "Integrated pharmacy and clinic platform with booking flows, prescription services, and patient communication tools.",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "AWS Lambda",
      "DynamoDB",
      "Vercel",
    ],
    image: "/images/wecare.jpg",
    ctaType: "external",
  },
  {
    id: "better-life-virtual-clinic",
    title: "Better Life Virtual Clinic",
    subtitle: "Virtual Care Platform",
    url: "https://www.betterlifevirtualclinic.com/",
    description:
      "Virtual-first weight management clinic experience focused on personal patient care and lifestyle support.",
    tech: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Vercel",
      "Accessibility",
    ],
    image: "/images/betterlifevirtualclinic.png",
    ctaType: "external",
  },
  {
    id: "bond-head-pharmacy",
    title: "Bond Head Pharmacy",
    subtitle: "Patient Service Website",
    url: "https://bondheadpharmacy.com/",
    description:
      "Responsive pharmacy site supporting appointment booking, prescription refills, transfers, and patient outreach.",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "AWS Lambda",
      "DynamoDB",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/images/BondHeadPharmacy.jpg",
    ctaType: "external",
  },
  {
    id: "thompson-square",
    title: "Thompson Square Pharmacy",
    subtitle: "Pharmacy Web System",
    url: "https://www.thompsonsquarepharmacy.ca/",
    description:
      "Prescription transfer, refill, and vaccine booking platform with a custom admin dashboard for operations.",
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Firebase",
      "MySQL",
      "Tailwind CSS",
      "Nodemailer",
      "Google Cloud",
    ],
    image: "/images/thompsonsquarepharmacy.png",
    ctaType: "external",
  },
];

export const experiences = [
  {
    id: "ev-gateway",
    company: "EV Gateway",
    title: "Technical Analyst",
    employmentType: "Permanent Full-time",
    dateRange: "May 2025 - Present",
    location: "On-site",
    summary:
      "Diagnose and restore reliability across distributed EV charging networks by debugging OCPP 1.6 JSON communication, backend events, and charger-side connectivity.",
    details: [
      "Manage high-impact customer accounts and technical escalations across large deployments, including BC Hydro, City of Toronto, Siemens, HondaGo, and ACDI.",
      "Troubleshoot charger incidents through log analysis, telemetry review, and SSH access to field devices, resolving gateway, firmware, and network-level issues.",
      "Run application validation and stress testing on charging platforms, then publish structured engineering tickets that improve reliability and release quality.",
    ],
    tech: [
      "OCPP 1.6 JSON",
      "SSH",
      "System Monitoring",
      "IoT Gateways",
      "API Debugging",
      "Stress Testing",
      "Analytics",
    ],
    logo: "EV",
    logoImage: "/images/evgateway2.png",
  },
  {
    id: "alignerr",
    company: "Alignerr",
    title: "Training Specialist",
    employmentType: "Contract Part-time",
    dateRange: "Mar 2025 - Present",
    location: "Remote",
    summary:
      "Contribute to software-focused model training by designing and validating coding evaluation tasks that improve correctness, reasoning quality, and edge-case handling.",
    details: [
      "Author structured technical prompts and grading rubrics for backend, frontend, and systems-level coding scenarios.",
      "Analyze model outputs for logic flaws, API misuse, and non-deterministic behavior across realistic engineering tasks.",
      "Feed failure patterns back into evaluation datasets to strengthen model reliability on production-style code problems.",
    ],
    tech: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Prompt Engineering",
      "LLM Evaluation",
      "Software Testing",
    ],
    logo: "A",
    logoImage: "/images/alignerr.jpeg",
  },
  {
    id: "dataannotation",
    company: "DataAnnotation",
    title: "Software Engineer",
    employmentType: "Contract",
    dateRange: "Jan 2024 - Present",
    location: "Remote",
    summary:
      "Enhanced AI coding model quality through deep code review, bug analysis, and benchmark-driven evaluation across multiple programming languages.",
    details: [
      "Resolved complex bugs and refined model-generated solutions to improve correctness, maintainability, and technical depth.",
      "Evaluated outputs across Python, JavaScript, Go, R, and C to strengthen quality across diverse domains.",
      "Tested and reviewed pre-market AI tooling with actionable recommendations to improve accuracy and user experience.",
    ],
    tech: [
      "Python",
      "JavaScript",
      "Go",
      "R",
      "C",
      "Software Development",
      "Stress Testing",
    ],
    logo: "DA",
    logoImage: "/images/DA4.jpg",
  },
  {
    id: "freelance",
    company: "Freelance",
    title: "Software Engineer",
    employmentType: "Independent Contractor",
    dateRange: "Oct 2024 - Present",
    location: "Remote",
    summary:
      "Developed and deployed turn-key web systems and real-time dashboards for medical and service clients, improving operations and reducing manual workload.",
    details: [
      "Shipped client-facing platforms that streamlined prescription workflows, appointment scheduling, and customer communication.",
      "Built full-stack solutions with modern web stacks and cloud services, balancing speed of delivery with maintainable architecture.",
      "Delivered production updates for logistics and pharmacy clients with measurable operational improvements.",
    ],
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Node.js",
      "Firebase",
      "MySQL",
      "AWS Lambda",
      "DynamoDB",
      "Vercel",
      "Google Cloud",
      "SendGrid",
      "Nodemailer",
      "Microsoft Azure",
      "WordPress",
      "PHP",
    ],
    logo: "F",
    logoImage: null,
  },
  {
    id: "evertz",
    company: "Evertz Microsystems",
    title: "Software Engineer",
    employmentType: "Full time",
    dateRange: "May 2022 - Aug 2023",
    location: "Ontario, Canada - Hybrid",
    summary:
      "Streamlined media content workflows for AMC Networks through automation, system validation, and production pipeline optimization.",
    details: [
      "Built JavaScript and Python automation for media validation, metadata enrichment, compression, and caption embedding.",
      "Contributed to a 20% workload reduction and reliable content delivery to millions of viewers.",
      "Executed application testing and issue triage across ingest/TRX systems, creating actionable feedback for platform improvements.",
    ],
    tech: [
      "JavaScript",
      "Python",
      "Unix",
      "Virtual Machines",
      "Oracle SQL",
      "SQL Server",
      "Jira",
    ],
    logo: "E",
    logoImage: "/images/evertz.png",
  },
  {
    id: "desktop-doctor",
    company: "DesktopDoctor",
    title: "Owner and Operator",
    employmentType: "Founder",
    dateRange: "Jun 2020 - May 2022",
    location: "Ontario, Canada",
    summary:
      "Ran a computer and phone repair business while designing and maintaining a full booking platform used to grow recurring monthly revenue.",
    details: [
      "Managed delivery end-to-end. Repaired laptops, desktops, and phones by hand.",
      "Fixed Custom PC Build Booting Issues, Data Recovery, Harware Componenet Upgrades and replacements, Laptop/Phone/Tablet Screen Replacements, ",
      "Built a React + MySQL booking experience with hosted backend services and streamlined service intake.",
      "Built a online booking system, improved conversion flow, driving measurable growth in customer bookings and monthly profit.",
    ],
    tech: ["React", "MySQL", "Heroku", "Web Hosting", "Customer Support"],
    logo: "DD",
    logoImage: "/images/DD.png",
  },
];

export const apps = [
  {
    id: "story-bluff",
    title: "Story Bluff",
    subtitle: "Cross-platform multiplayer game",
    description:
      "App Store mobile party game where 3-10 players submit stories anonymously and vote in real time.",
    longDescription:
      "Story Bluff uses a Node.js + Redis backend with room-based game state, live presence tracking, and websocket events to keep gameplay fast and synchronized across reconnecting players.",
    tech: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Redis",
      "WebSockets",
      "Expo",
      "NGINX",
      "PM2",
      "Raspberry Pi",
    ],
    appStoreUrl: "https://apps.apple.com/in/app/story-bluff/id6748969770",
    video: "/images/story-bluff-app-store-animation.mp4",
    image: null,
    ctaType: "modal",
    features: [
      "Live multiplayer gameplay with room-based real-time sync and anonymous submissions",
      "Node.js + Redis backend with distributed event handling for reconnecting players",
      "Self-hosted production deployment using Raspberry Pi, NGINX, SSL, and PM2 cluster mode",
    ],
  },
];

export const about = {
  heading: "About",
  paragraphs: [
    "I am a McMaster Software Engineering graduate focused on building scalable products that connect strong UX with reliable systems design.",
    "My work spans automation-heavy workflows, and full-stack web applications where performance, clarity, and maintainability all matter.",
    "I am highly hands-on with cloud and platform tooling across Google Cloud Platform, Microsoft Azure, AWS, and Vertex AI, and I regularly work with REST/API integrations in production environments.",
    "I also bring strong infrastructure and systems operations experience from Linux-heavy workflows, command-line diagnostics, and server-side troubleshooting.",
    "Across web, infrastructure, and applied ML/AI contexts, I focus on shipping practical solutions that reduce manual effort, improve decision speed, and create measurable business impact.",
  ],
};

export const contact = {
  heading: "Contact",
  email: "fadymorcos22@gmail.com",
  linkedin: "https://www.linkedin.com/in/fady-morcos-b6b507170/",
  github: "https://github.com/fadymorcos21",
  note: "Open to software engineering roles, freelance builds, and technical collaboration.",
};

export const socialLinks = [
  { id: "github", label: "GitHub", url: "https://github.com/fadymorcos21" },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/fady-morcos-b6b507170/",
  },
  { id: "email", label: "Email", url: "mailto:fadymorcos22@gmail.com" },
];
