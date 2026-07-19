interface Skill {
  label: string;
  colorVariant: string;
}

interface SkillsCategory {
  title: string;
  subcategories: Skill[];
}

const categories: SkillsCategory[] = [
  {
    title: 'Frontend',
    subcategories: [
      { label: 'React', colorVariant: 'emerald' },
      { label: 'TypeScript', colorVariant: 'emerald' },
      { label: 'Tailwind CSS', colorVariant: 'emerald' },
      { label: 'HTML/CSS', colorVariant: 'emerald' },
      { label: 'JavaScript', colorVariant: 'emerald' }
    ]
  },
  {
    title: 'Backend',
    subcategories: [
      { label: 'Node.js', colorVariant: 'emerald' },
      { label: 'TypeScript', colorVariant: 'emerald' },
      { label: 'Python', colorVariant: 'emerald' },
      { label: 'GraphQL', colorVariant: 'emerald' },
      { label: 'REST APIs', colorVariant: 'emerald' }
    ]
  },
  {
    title: 'Cloud / AWS',
    subcategories: [
      { label: 'AWS EC2', colorVariant: 'emerald' },
      { label: 'AWS Lambda', colorVariant: 'emerald' },
      { label: 'S3', colorVariant: 'emerald' },
      { label: 'ECR', colorVariant: 'emerald' },
      { label: 'CloudFormation', colorVariant: 'emerald' }
    ]
  },
  {
    title: 'AI / ML',
    subcategories: [
      { label: 'LangChain', colorVariant: 'emerald' },
      { label: 'OpenAI API', colorVariant: 'emerald' },
      { label: 'Vector DBs', colorVariant: 'emerald' },
      { label: 'LLM Integration', colorVariant: 'emerald' },
      { label: 'Prompt Engineering', colorVariant: 'emerald' }
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
  return (
    <section className="space-y-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Technical Arsenal</h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-mono text-sm sm:text-base">
        Tools and technologies that power my architecture
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <div 
            key={category.title} 
            className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg hover:border-emerald-500 transition-colors shadow-sm"
          >
            <h3 className="text-zinc-800 dark:text-zinc-200 font-bold mb-4 uppercase tracking-wide text-xs">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 space-y-2">
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