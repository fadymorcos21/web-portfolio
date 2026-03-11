import {
  FaAws,
  FaCode,
  FaDatabase,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaServer,
  FaWordpress,
} from "react-icons/fa";
import {
  SiExpo,
  SiFirebase,
  SiGooglecloud,
  SiHeroku,
  SiJira,
  SiJavascript,
  SiMicrosoftazure,
  SiMysql,
  SiNextdotjs,
  SiOracle,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const iconMap = {
  Accessibility: FaCode,
  Analytics: FaDatabase,
  "API Debugging": FaServer,
  "AWS Lambda": FaAws,
  C: FaCode,
  DynamoDB: FaDatabase,
  Excel: FaCode,
  Expo: SiExpo,
  Firebase: SiFirebase,
  Go: FaCode,
  "Google Cloud": SiGooglecloud,
  Heroku: SiHeroku,
  HTML: FaHtml5,
  "IoT Gateways": FaServer,
  "Jira": SiJira,
  JavaScript: SiJavascript,
  MySQL: SiMysql,
  "Microsoft Azure": SiMicrosoftazure,
  NGINX: FaServer,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  Nodemailer: FaServer,
  "OCPP 1.6 JSON": FaCode,
  "Oracle SQL": SiOracle,
  PM2: FaServer,
  PHP: FaPhp,
  Python: FaPython,
  R: FaCode,
  "Raspberry Pi": FaServer,
  React: FaReact,
  "React Native": FaReact,
  Redis: FaDatabase,
  "REST APIs": FaServer,
  SendGrid: FaServer,
  "SLA Monitoring": FaCode,
  SQL: SiSqlite,
  "SQL Server": FaDatabase,
  "Software Development": FaCode,
  "Software Testing": FaCode,
  SSH: FaServer,
  "Stress Testing": FaCode,
  "Support Engineering": FaServer,
  "System Monitoring": FaServer,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
  Unix: FaServer,
  "UX Design": FaCode,
  "Virtual Machines": FaServer,
  Vercel: SiVercel,
  "Web Hosting": FaWordpress,
  WebSockets: FaServer,
  WordPress: FaWordpress,
};

function IconBadge({ IconComponent, label }) {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neon-cyan transition-transform duration-300 hover:scale-110 hover:border-neon-cyan/50"
      title={label}
      aria-label={label}
    >
      <IconComponent className="h-4 w-4" />
    </span>
  );
}

export default function TechBadges({ tech = [] }) {
  const iconTech = tech.filter((item) => iconMap[item]);
  const fallbackTech = tech.filter((item) => !iconMap[item]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {iconTech.map((item) => {
          const IconComponent = iconMap[item];
          return <IconBadge key={item} IconComponent={IconComponent} label={item} />;
        })}
      </div>
      {!!fallbackTech.length && (
        <div className="flex flex-wrap gap-2">
          {fallbackTech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
