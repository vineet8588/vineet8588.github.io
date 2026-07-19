import { ExternalLink, GitGraph } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imagePlaceholder: boolean;
}

const projects: Project[] = [
  {
    title: 'RAG-Powered Customer Support Bot',
    description: 'Built a Retrieval-Augmented Generation system that reduced customer support ticket volume by 35% while improving response accuracy to 94%. The system integrates with existing knowledge bases and provides real-time support for enterprise clients.',
    techStack: ['React', 'Node.js', 'LangChain', 'OpenAI', 'Pinecone'],
    githubUrl: 'https://github.com/portfolio/rag-support-bot',
    liveUrl: 'https://rag-support.example.com',
    imagePlaceholder: true
  },
  {
    title: 'Serverless E-commerce Platform',
    description: 'Architected a fully serverless e-commerce platform on AWS that handles 10K+ concurrent users with 99.9% uptime. Implemented cost optimization strategies that reduced monthly AWS spend by 45% through Lambda and S3 integration.',
    techStack: ['React', 'Node.js', 'AWS Lambda', 'S3', 'DynamoDB', 'API Gateway'],
    githubUrl: 'https://github.com/portfolio/serverless-ecommerce',
    liveUrl: 'https://ecommerce.example.com',
    imagePlaceholder: true
  },
  {
    title: 'LLM-Powered Code Assistant',
    description: 'Developed an AI coding assistant that analyzes codebases and provides contextual code suggestions. Reduced development time by 28% for engineering teams by providing intelligent autocomplete and debugging assistance.',
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'ChromaDB', 'VS Code Extension'],
    githubUrl: 'https://github.com/portfolio/code-assistant',
    liveUrl: 'https://code-assistant.example.com',
    imagePlaceholder: true
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Built a real-time analytics dashboard for monitoring microservices health across distributed systems. The platform aggregates metrics from 50+ services and provides actionable insights through custom visualizations.',
    techStack: ['Astro', 'React', 'TypeScript', 'WebSocket', 'Redis', 'Grafana'],
    githubUrl: 'https://github.com/portfolio/analytics-dashboard',
    liveUrl: 'https://analytics.example.com',
    imagePlaceholder: true
  }
];

export default function FeaturedProjects() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Featured Architecture & Projects</h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-mono text-sm sm:text-base">
        Production systems that scale and solve real business problems
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.title}
            className="group relative overflow-hidden bg-card border border-border rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Image Placeholder */}
            <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-t-lg" />
            
            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs font-mono rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400"
                  >
                    {tech}
                    {index < project.techStack.length - 1 && (
                      <span className="mx-1 text-muted-foreground">•</span>
                    )}
                  </span>
                ))}
              </div>
              
              {/* Action Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  aria-label="View GitHub Repository"
                >
                  <GitGraph className="w-4 h-4" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  aria-label="View Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}