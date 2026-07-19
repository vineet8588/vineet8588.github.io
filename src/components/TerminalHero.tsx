import asciiArt from '../assets/ascii.txt?raw';

interface TerminalHeroProps {
  asciiText: string;
}

export default function TerminalHero({ asciiText }: TerminalHeroProps) {
  // Neofetch-style terminal info
  const terminalData = [
    { label: 'Role:', value: 'Full Stack GenAI Engineer' },
    { label: 'Location:', value: 'Remote / Earth' },
    { label: 'Clearance:', value: 'Ready to build' },
    { label: 'Focus:', value: 'Scalable architectures & LLM integrations' }
  ];

  return (
    <section className="relative mb-12">
      {/* Glow wrapper — entire terminal with subtle emerald glow */}
      <div className="shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-900/20 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="relative overflow-hidden rounded-t-lg bg-zinc-950/80 dark:bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center space-x-2 p-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-auto text-xs text-zinc-400 font-mono">
              Portfolio Terminal
            </span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="relative overflow-hidden rounded-b-lg bg-zinc-950/95 dark:bg-zinc-900/95">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

            <div className="grid grid-cols-[38%_1fr] gap-6 py-8 px-10">
              {/* ASCII Art Side */}
              <div className="flex items-start space-x-3 overflow-hidden no-scrollbar">
                <div className="w-0.5 shrink-0 bg-emerald-500 dark:bg-emerald-400/50"></div>
                <pre className="font-mono text-[7px] leading-[1.05] text-zinc-400 dark:text-zinc-300 whitespace-pre m-0 p-0 overflow-hidden">
{asciiText}
                </pre>
              </div>

              {/* Data Side */}
              <div className="space-y-4">
                {terminalData.map(({ label, value }, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="flex items-center space-x-1 text-sm">
                      <span className="w-4 h-0.5 bg-amber-500 dark:bg-amber-400"></span>
                      <span className="text-orange-400 dark:text-orange-300 font-mono">{label}</span>
                      <span className="w-0.5 h-0.5 mx-1 bg-zinc-500 dark:bg-zinc-400 rounded-full"></span>
                      <span className="text-emerald-400 dark:text-emerald-300 font-mono">{value}</span>
                    </span>
                    <div className="ml-3 space-y-0.5 w-0.5 bg-zinc-500 dark:bg-zinc-400">
                      {index < terminalData.length - 1 && <div className="h-1 bg-zinc-500 dark:bg-zinc-400" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}