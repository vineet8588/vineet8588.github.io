import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imagePlaceholder: boolean;
}

// Do not deleted commented projects, as they might be used in the future.
const projects: Project[] = [
  // {
  //   title: 'Face Recognition Entry System',
  //   description: 'A Python face recognition entry system with a Tkinter UI and CSV data export. Captures, registers, and verifies personnel at the door using OpenCV and the face_recognition library.',
  //   techStack: ['Python', 'OpenCV', 'Face Recognition', 'Tkinter', 'Pandas'],
  //   githubUrl: 'https://github.com/vineet8588',
  //   liveUrl: '#',
  //   imagePlaceholder: true
  // },
  // {
  //   title: 'LMSUIET',
  //   description: 'A web platform to manage courses and lecture videos online. ReactJS frontend with Firebase handling authentication and backend, plus Redux for state management.',
  //   techStack: ['ReactJS', 'Firebase', 'Redux', 'Bootstrap', 'CSS'],
  //   githubUrl: 'https://github.com/vineet8588',
  //   liveUrl: '#',
  //   imagePlaceholder: true
  // },
  {
    title: 'Will Be Updated',
    description: 'A placeholder for projects , will add when I get time. This section will showcase upcoming work and contributions.',
    techStack: ['Tech 1', 'Tech 2', 'Tech 3', 'Tech 4'],
    githubUrl: 'https://github.com/vineet8588',
    liveUrl: 'https://vineetyadav.vercel.app/',
    imagePlaceholder: false
  }
];

export default function FeaturedProjects() {
  const openGithub = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            role="link"
            tabIndex={0}
            aria-label={`Open ${project.title} repository on GitHub`}
            onClick={() => openGithub(project.githubUrl)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openGithub(project.githubUrl);
              }
            }}
            className="group relative overflow-hidden bg-card border border-border rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-[0_0_24px_oklch(0.65_0.2_155/0.25)] dark:hover:shadow-[0_0_28px_oklch(0.65_0.2_155/0.35)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald/50"
          >
            {/* Image Placeholder */}
            {project.imagePlaceholder && (
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-t-lg" />
            )}

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
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  aria-label="View GitHub Repository"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
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
