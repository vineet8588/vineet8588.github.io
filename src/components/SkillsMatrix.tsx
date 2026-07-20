import { useEffect, useRef } from 'react';

type ColorVariant = 'emerald' | 'red' | 'blue' | 'violet';
interface Skill {
  label: string;
  colorVariant: ColorVariant;
}

interface SkillsCategory {
  title: string;
  subcategories: Skill[];
}

const categories: SkillsCategory[] = [
  {
    title: 'Languages',
    subcategories: [
      { label: 'Python', colorVariant: 'emerald' },
      { label: 'TypeScript', colorVariant: 'emerald' },
      { label: 'JavaScript', colorVariant: 'emerald' },
      { label: 'HTML', colorVariant: 'emerald' },
      { label: 'CSS', colorVariant: 'emerald' },
      { label: 'SQL', colorVariant: 'emerald' }
    ]
  },
  {
    title: 'Frameworks',
    subcategories: [
      { label: 'CRA', colorVariant: 'blue' },
      { label: 'Node.js', colorVariant: 'blue' },
      { label: 'Flask', colorVariant: 'blue' },
      { label: 'Next.js', colorVariant: 'blue' },
      { label: 'Django REST', colorVariant: 'blue' }
    ]
  },
  {
    title: 'Developer Tools',
    subcategories: [
      { label: 'Git', colorVariant: 'violet' },
      { label: 'Docker', colorVariant: 'violet' },
      { label: 'AWS', colorVariant: 'violet' },
      { label: 'VS Code', colorVariant: 'violet' }
    ]
  },
  {
    title: 'Libraries',
    subcategories: [
      { label: 'React', colorVariant: 'red' },
      { label: 'djangorestframework', colorVariant: 'red' },
      { label: 'react-router', colorVariant: 'red' },
      { label: 'axios', colorVariant: 'red' },
      { label: 'mui', colorVariant: 'red' },
      { label: 'shadcn/ui', colorVariant: 'red' },
      { label: 'flask', colorVariant: 'red' },
      { label: 'puppeteer', colorVariant: 'red' }
    ]
  },
  {
    title: 'AI / ML',
    subcategories: [
      { label: 'RAG', colorVariant: 'emerald' },
      { label: 'Vector Databases', colorVariant: 'emerald' },
      { label: 'Prompt Engineering', colorVariant: 'emerald' },
      { label: 'DSPy', colorVariant: 'emerald' },
      { label: 'Chonkie', colorVariant: 'emerald' }
    ]
  },
  {
    title: 'Cloud / AWS',
    subcategories: [
      { label: 'API Gateway', colorVariant: 'blue' },
      { label: 'CloudFront', colorVariant: 'blue' },
      { label: 'ECS', colorVariant: 'blue' },
      { label: 'Lambda', colorVariant: 'blue' },
      { label: 'IAM', colorVariant: 'blue' },
      { label: 'CodeBuild', colorVariant: 'blue' },
      { label: 'CloudWatch', colorVariant: 'blue' },
      { label: 'ALB', colorVariant: 'blue' },
      { label: 'EC2', colorVariant: 'blue' },
      { label: 'S3', colorVariant: 'blue' }
    ]
  }
];

const tagVariants = {
  emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-500/20',
  red: 'bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-300 border-red-200/60 dark:border-red-500/20',
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300 border-blue-200/60 dark:border-blue-500/20',
  violet: 'bg-violet-100 text-violet-800 dark:bg-violet-500/10 dark:text-violet-300 border-violet-200/60 dark:border-violet-500/20'
};

export default function SkillsMatrix() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const groups = Array.from(root.querySelectorAll<HTMLElement>(".stagger"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      groups.forEach((g) => g.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const g = entry.target as HTMLElement;
          Array.from(g.children).forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${Math.min(i * 40, 320)}ms`;
          });
          g.classList.add("is-visible");
          io.unobserve(g);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    groups.forEach((g) => io.observe(g));
    return () => io.disconnect();
  }, []);

  return (
    <section className="space-y-8" ref={rootRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {categories.map(category => (
          <div 
            key={category.title} 
            className="h-full flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-zinc-800 dark:text-zinc-200 font-bold mb-4 uppercase tracking-wide text-xs">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 content-start stagger">
              {category.subcategories.map(({ label, colorVariant }) => {
                const variantClass = tagVariants[colorVariant] || tagVariants.emerald;
                return (
                  <span 
                    key={label} 
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full ${variantClass} border`}
                  >
                    {label}
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}