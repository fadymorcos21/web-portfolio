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
      "Tailwind CSS",
      "AWS Lambda",
      "DynamoDB",
      "Vercel",
    ],
    image: "/images/wecare.jpg",
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
      "Node.js",
      "MySQL",
      "Tailwind CSS",
      "Nodemailer",
      "Google Cloud",
    ],
    image: "/images/thompsonsquarepharmacy.png",
    ctaType: "external",
  },
  {
    id: "better-life-virtual-clinic",
    title: "Better Life Virtual Clinic",
    subtitle: "Virtual Care Platform",
    url: "https://www.betterlifevirtualclinic.com/",
    description:
      "Virtual-first clinic experience focused on frictionless booking and secure patient-facing care journeys.",
    tech: [
      "React",
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "Vercel",
      "Accessibility",
    ],
    image: null,
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
      "AWS Lambda",
      "DynamoDB",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/images/BondHeadPharmacy.jpg",
    ctaType: "external",
  },
];

export const experiences = [
  {
    id: "ev-gateway",
    company: "EV Gateway",
    title: "EV Charging Systems Analyst",
    employmentType: "Permanent Full-time",
    dateRange: "May 2025 - Present",
    location: "On-site",
    summary:
      "Support North American EV charging infrastructure by analyzing station telemetry, identifying reliability risks, and improving platform-level uptime.",
    details: [
      "Monitor charger and backend network performance to detect trends, triage incidents, and reduce recurring failure patterns.",
      "Translate client pain points into actionable technical findings and partner with engineering/operations on faster resolution paths.",
      "Track SLA-critical metrics and system health signals to support dependable charging experiences at scale.",
    ],
    tech: [
      "System Monitoring",
      "Analytics",
      "SLA Monitoring",
      "Excel",
      "Support Engineering",
    ],
    logo: "EV",
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
  },
  {
    id: "freelance",
    company: "Freelance",
    title: "Software Engineer",
    employmentType: "Independent Contractor",
    dateRange: "Oct 2024 - Present",
    location: "Remote",
    summary:
      "Built full-stack web systems with 20+ integrated features for pharmacy and logistics clients, reducing manual workflows and accelerating service delivery.",
    details: [
      "Delivered production sites and administrative dashboards that streamlined scheduling, prescription processing, and customer communication.",
      "Shipped React + Node.js platforms using Firebase/MySQL data layers, email workflows, and cloud deployments for reliability and scale.",
      "Drove UX and content updates for global logistics stakeholders, improving information access for 5K+ customers.",
    ],
    tech: [
      "React",
      "Node.js",
      "Firebase",
      "MySQL",
      "Nodemailer",
      "Microsoft Azure",
      "WordPress",
      "PHP",
    ],
    logo: "F",
  },
  {
    id: "dataannotation",
    company: "DataAnnotation",
    title: "Software Engineer",
    employmentType: "Contract",
    dateRange: "Jan 2024 - Present",
    location: "Remote",
    summary:
      "Improved code-generation model quality by evaluating multi-language solutions, debugging failure modes, and reinforcing software engineering best practices in training data.",
    details: [
      "Review and rank generated implementations for correctness, maintainability, and adherence to requirements.",
      "Refactor and produce reference-grade code samples across backend and web domains to improve model target outputs.",
      "Apply domain-specific constraints and edge cases to increase robustness of model behavior in real engineering workflows.",
    ],
    tech: [
      "Python",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "SQL",
      "Software Development",
    ],
    logo: "DA",
  },
  {
    id: "evertz",
    company: "Evertz Microsystems",
    title: "Student Software Engineer (Co-op)",
    employmentType: "Co-op",
    dateRange: "May 2022 - Aug 2023",
    location: "Ontario, Canada - Hybrid",
    summary:
      "Enhanced media workflow systems for AMC by building automation scripts and ingest pipelines that improved throughput and production reliability.",
    details: [
      "Developed JavaScript and Python workflows for media validation, metadata enrichment, transformations, and caption embedding.",
      "Helped optimize ingest and TRX systems, contributing to improved delivery quality and measurable business impact.",
      "Tested and supported pipeline behavior using Unix tooling, virtual machines, and UI/metadata debugging workflows.",
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
      "Built a React + MySQL booking experience with hosted backend services and streamlined service intake.",
      "Improved front-end UX and conversion flow, driving measurable growth in customer bookings and monthly profit.",
      "Managed delivery end-to-end across operations, support, troubleshooting, and digital platform ownership.",
    ],
    tech: ["React", "MySQL", "Heroku", "Web Hosting", "Customer Support"],
    logo: "DD",
  },
];

export const apps = [
  {
    id: "story-bluff",
    title: "Story Bluff",
    subtitle: "Social party game app",
    description:
      "A mobile-first social game platform focused on storytelling, voting rounds, and real-time player interaction.",
    longDescription:
      "Story Bluff is a session-based game experience where players craft prompts, bluff convincingly, and compete through fast rounds designed for high engagement.",
    tech: ["React Native", "TypeScript", "Expo", "Firebase", "UX Design"],
    image: null,
    ctaType: "modal",
    features: [
      "Real-time round flow and player prompts",
      "Mobile-first interface designed for group play",
      "Scalable architecture for adding new game modes",
    ],
  },
];

export const about = {
  heading: "About",
  paragraphs: [
    "I am a McMaster Software Engineering graduate focused on building scalable products that connect strong UX with reliable systems design.",
    "My work spans client platforms, automation-heavy workflows, and full-stack web applications where performance, clarity, and maintainability all matter.",
    "I enjoy shipping practical solutions that reduce manual effort, improve decision speed, and create measurable business impact.",
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
