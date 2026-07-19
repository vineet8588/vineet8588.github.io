interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  bulletPoints: string[];
}

const experienceEntries: ExperienceEntry[] = [
  {
    date: '2023 - Present',
    role: 'Senior Full Stack Engineer',
    company: 'TechCorp',
    bulletPoints: [
      'Architected AWS serverless backend reducing infrastructure costs by 40% through Lambda and S3 optimization',
      'Integrated LLM-based chatbot improving customer retention by 15% using LangChain and Pinecone',
      'Optimized CI/CD pipeline with GitHub Actions reducing deployment time by 60%',
      'Implemented TypeScript type safety across 200k+ lines of codebase',
      'Built real-time analytics dashboard with WebSocket integration for 50+ microservices',
      'Upgraded legacy monolith to microservices architecture improving scalability',
    ]
  },
  {
    date: '2021 - 2023',
    role: 'Full Stack Engineer',
    company: 'CodeFlow Inc',
    bulletPoints: [
      'Developed RAG-based customer support system handling 10K+ daily queries with 94% accuracy',
      'Built GraphQL API gateway connecting frontend with backend services',
      'Implemented Kubernetes cluster for container orchestration reducing deployment failures',
      'Created internal design system with Tailwind CSS components used by 15 teams',
      'Optimized React app performance bringing Lighthouse score from 68 to 92',
      'Migrated monolithic backend to serverless architecture on AWS',
    ]
  },
  {
    date: '2019 - 2021',
    role: 'Full Stack Developer',
    company: 'InnovateTech',
    bulletPoints: [
      'Built first full-stack portfolio website using React and Node.js',
      'Developed cloud-based file storage system using S3 and AWS SDK',
      'Created CI/CD pipeline for automated deployment to AWS EC2',
      'Implemented URL shortening service using MongoDB and Express.js',
      'Developed real-time chat application with Socket.IO',
      'Optimized mobile responsiveness for cross-device compatibility',
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Command History (Experience)</h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-mono text-sm sm:text-base">
        Professional journey from startup to senior engineering roles
      </p>

      <div className="space-y-8">
        {experienceEntries.map((entry, index) => (
          <div key={index} className="relative pl-8 md:pl-12 border-l-2 border-zinc-200 dark:border-zinc-800 pb-12 last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute -left-3.5 top-4 w-4 h-4 rounded-full border-2 border-emerald-500 bg-background z-10" />

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