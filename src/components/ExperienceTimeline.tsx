interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  bulletPoints: string[];
}

const experienceEntries: ExperienceEntry[] = [
  {
    date: 'Jun 2026 - Present',
    role: 'Solution Advisor (Security Engineer 2)',
    company: 'Deloitte USI',
    bulletPoints: [
      'Follow Agentic SDLC methodologies as a software developer.',
      'Leverage AI-assisted coding tools (Claude Code, GitHub Copilot) to build and enhance diverse software applications.',
      'Engineer code vulnerability detection and automated patch remediation, integrating external security scan data.',
    ]
  },
  {
    date: 'Jun 2024 - Jun 2026',
    role: 'Advisory Associate Solution Advisor',
    company: 'Deloitte USI',
    bulletPoints: [
      'Operated as a Full-Stack Developer specializing in Generative AI (GenAI) automation use cases.',
      'Built an end-to-end OT Security Automation feature using GenAI, Prompt Engineering, RAG, Vector Databases, and DSPy.',
      'Improved a context-based RAG chatbot response accuracy via advanced text chunking strategies using Chonkie.',
    ]
  },
  {
    date: 'Aug 2022 - May 2024',
    role: 'Advisory Analyst',
    company: 'Deloitte USI',
    bulletPoints: [
      'Developed the React frontend for an automation product using Shadcn, Tailwind, Tanstack, Material UI, React Router, React Query, Axios, Vite, React Hook Form.',
      'Architected scalable backend solutions and RESTful APIs with Django REST Framework, integrating SAP, ServiceNow, and HPALM.',
      'Deployed web apps and microservices on AWS (CodeBuild, ALB, ECS, API Gateway, CloudFront, CloudWatch, Lambda), reducing hosting costs.',
      'Containerized automated server-side apps and microservices with Docker, Celery, Express.js, and Puppeteer.',
    ]
  },
  {
    date: 'Feb 2021 - Apr 2021',
    role: 'Frontend Developer (Intern)',
    company: 'BGUS Australia',
    bulletPoints: [
      'Worked as a React Developer building a production website with Next.js and Chakra UI.',
      'Contributed to increased client acquisition for the business.',
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="space-y-8">
      <div>
        {experienceEntries.map((entry, index) => (
          <div key={index} className="relative pl-8 md:pl-12 border-l-2 border-zinc-200 dark:border-zinc-800 pb-8 sm:pb-12 last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-emerald-500 bg-background z-10" />

            {/* Date */}
            <div className="text-sm font-mono text-muted-foreground mb-2">
              {entry.date}
            </div>

            {/* Role & Company */}
            <div className="text-xl font-bold text-foreground mb-2">
              {entry.role}
              <span className="text-emerald-500 ml-2">@</span>{' '}
              <span className="text-muted-foreground">{entry.company}</span>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2">
              {entry.bulletPoints.map((point, pointIndex) => (
                <li key={pointIndex} className="text-sm text-muted-foreground flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-1.5 mr-3 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}