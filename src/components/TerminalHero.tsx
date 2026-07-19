interface InfoRow {
  label: string;
  value: string;
}

interface InfoGroup {
  title: string;
  rows: InfoRow[];
}

const infoGroups: InfoGroup[] = [
  {
    title: "vineet@portfolio",
    rows: [
      { label: "User", value: "Vineet Yadav" },
      { label: "Role", value: "Full-Stack / GenAI / AWS" },
      { label: "Uptime", value: "~4 Years" },
      { label: "Location", value: "Gurgaon, IN" },
      { label: "Education", value: "B.E. CSE, UIET Panjab University" },
    ],
  },
  {
    title: "Languages",
    rows: [
      { label: "Programming", value: "Python, TypeScript, JavaScript, HTML, CSS, SQL" },
    ],
  },
  {
    title: "Stack",
    rows: [
      { label: "Frameworks", value: "CRA, Node.js, Flask, Next.js, Django REST" },
      { label: "Tools", value: "Git, Docker, AWS, VS Code" },
      { label: "GenAI", value: "RAG, Vector DBs, Prompt Eng, DSPy, Chonkie" },
      { label: "AWS", value: "API Gateway, CloudFront, ECS, Lambda, IAM, CodeBuild, CloudWatch, ALB, EC2, S3" },
    ],
  },
  {
    title: "Contact",
    rows: [
      { label: "Email", value: "vineetyadav8588@gmail.com" },
      { label: "Phone", value: "+91 " },
      { label: "LinkedIn", value: "linkedin.com/in/vineetyadav8588" },
      { label: "GitHub", value: "github.com/vineet8588" },
    ],
  },
];

export default function TerminalHero({ asciiText }: { asciiText: string }) {
  return (
    <section className="relative mb-12">
      <div className="shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-900/20 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="relative overflow-hidden rounded-t-lg bg-zinc-950/80 dark:bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center space-x-2 p-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-auto text-xs text-zinc-400 font-mono">
              vineet@portfolio: ~
            </span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="relative overflow-hidden rounded-b-lg bg-zinc-950/95 dark:bg-zinc-900/95">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] gap-8 lg:gap-16 py-8 px-6 sm:px-10 items-center">
            {/* ASCII Art Side */}
            <pre className="font-mono text-amber-200/90 dark:text-yellow-100/90 text-[7px] leading-[1.0] whitespace-pre m-0 p-0 -mt-8 select-none hidden lg:block">
              {asciiText}
            </pre>

            {/* Info Side */}
            <div className="font-mono text-[13px] leading-relaxed text-zinc-300 min-w-0">
              {infoGroups.map((group) => (
                <div key={group.title} className="mb-4 last:mb-0">
                  <div className="text-emerald-400 dark:text-emerald-300 font-semibold">
                    <span className="text-zinc-500">┌─[</span>
                    {group.title}
                    <span className="text-zinc-500">]</span>
                  </div>
                  {group.rows.map((row) => (
                    <div key={row.label} className="flex gap-2 py-[1px]">
                      <span className="shrink-0 text-orange-400 dark:text-orange-300 w-28 sm:w-32">
                        {row.label}
                      </span>
                      <span className="text-zinc-500">:</span>
                      <span className="text-emerald-300 dark:text-emerald-200 break-words">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
              <div className="text-zinc-500 text-xs mt-2 space-y-1">
                <div>
                  <span className="text-emerald-400">➜</span> ~{" "}
                  <span className="text-zinc-500">cat intro.txt</span>
                </div>
                <div className="text-zinc-400 leading-relaxed">
                  Full-Stack &amp; GenAI dev — React, Django, AWS. Secure
                  deployments &amp; end-to-end automation at scale.
                </div>
                <div className="pt-1">
                  <span className="text-emerald-400">➜</span> ~{" "}
                  <span className="text-zinc-500">echo $STATUS</span>{" "}
                  <span className="text-emerald-300">"open to work"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
