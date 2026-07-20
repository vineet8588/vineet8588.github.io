import { useEffect, useRef, useState, type ReactNode } from "react";

interface InfoRow {
  label: string;
  value: string;
}

interface InfoGroup {
  title: string;
  rows: InfoRow[];
}

/**
 * Ordered "tokens" for the terminal typewriter. Typed tokens reveal
 * char-by-char; instant tokens appear at once; newline moves to the next
 * visual line. Kept at module scope so it's a stable reference for effects.
 */
type Token =
  | { kind: "prompt" }
  | { kind: "type"; text: string; className: string }
  | { kind: "instant"; text: string; className: string }
  | { kind: "newline"; gap?: boolean };

const PROMPT_TOKENS: Token[] = [
  { kind: "prompt" },
  { kind: "type", text: "cat intro.txt", className: "text-[#93a1a1] dark:text-zinc-500" },
  { kind: "newline" },
  {
    kind: "instant",
    text: "Full-Stack & GenAI dev — React, Django, AWS. Secure deployments & end-to-end automation at scale.",
    className: "text-[#586e75] dark:text-zinc-400 leading-relaxed",
  },
  { kind: "newline", gap: true },
  { kind: "prompt" },
  { kind: "type", text: "echo $STATUS ", className: "text-[#93a1a1] dark:text-zinc-500" },
  { kind: "type", text: '"open to work" ', className: "text-[#2aa198] dark:text-emerald-300" },
];

const infoGroups: InfoGroup[] = [
  {
    title: "vineet@portfolio",
    rows: [
      { label: "User", value: "Vineet Yadav" },
      { label: "Role", value: "Full-Stack / GenAI / AWS" },
      { label: "Uptime", value: "~ 4 Years" },
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
    <section className="relative">
      <div className="shadow-2xl shadow-[#b58900]/10 dark:shadow-emerald-900/20 border border-[#93a1a1]/40 dark:border-zinc-800 rounded-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="relative overflow-hidden rounded-t-lg bg-[#eee8d5] dark:bg-zinc-900 border-b border-[#93a1a1]/40 dark:border-zinc-800">
          <div className="flex items-center space-x-2 p-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-auto text-xs text-[#657b83] dark:text-zinc-400 font-mono">
              vineet@portfolio: ~
            </span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="relative overflow-hidden rounded-b-lg bg-[#fdf6e3] dark:bg-zinc-900/95">
          <div className="absolute inset-0 bg-black/[0.02] dark:bg-black/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] gap-8 lg:gap-16 py-8 px-4 sm:px-10 items-center">
            {/* ASCII Art Side */}
            <pre className="font-mono text-[#b58900] dark:text-yellow-100/90 text-[7px] leading-[1.0] whitespace-pre m-0 p-0 -mt-8 select-none hidden lg:block">
              {asciiText}
            </pre>

            {/* Info Side */}
            <div className="font-mono text-xs sm:text-[13px] leading-relaxed text-[#657b83] dark:text-zinc-300 min-w-0">
              {infoGroups.map((group) => (
                <div key={group.title} className="mb-4 last:mb-0">
                  <div className="text-[#859900] dark:text-emerald-300 font-semibold">
                    <span className="text-[#93a1a1] dark:text-zinc-500">┌─[</span>
                    {group.title}
                    <span className="text-[#93a1a1] dark:text-zinc-500">]</span>
                  </div>
                  {group.rows.map((row) => (
                    <div key={row.label} className="flex gap-2 py-[1px]">
                      <span className="shrink-0 text-[#cb4b16] dark:text-orange-300 w-20 sm:w-32">
                        {row.label}
                      </span>
                      <span className="text-[#93a1a1] dark:text-zinc-500">:</span>
                      <span className="text-[#2aa198] dark:text-emerald-200 break-words">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
              <TerminalPrompt />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Typewriter-animated command block at the bottom of the terminal.
 * Types the `cat intro.txt` / `echo $STATUS` sequence with a blinking cursor.
 * Respects `prefers-reduced-motion` (renders fully, no animation).
 */
function TerminalPrompt() {
  const [tokenIndex, setTokenIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [done, setDone] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) {
      setTokenIndex(PROMPT_TOKENS.length);
      setDone(true);
    }
  }, []);

  useEffect(() => {
    if (reduced.current) return;
    if (tokenIndex >= PROMPT_TOKENS.length) {
      setDone(true);
      return;
    }
    const tok = PROMPT_TOKENS[tokenIndex];
    if (tok.kind === "type") {
      if (charCount < tok.text.length) {
        const t = setTimeout(() => setCharCount((c) => c + 1), 45);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setTokenIndex((i) => i + 1);
        setCharCount(0);
      }, 100);
      return () => clearTimeout(t);
    }
    const delay = tok.kind === "instant" ? 220 : tok.kind === "newline" ? 120 : 70;
    const t = setTimeout(() => setTokenIndex((i) => i + 1), delay);
    return () => clearTimeout(t);
  }, [tokenIndex, charCount]);

  // Build visual lines from tokens revealed so far.
  const lines: { gapBefore: boolean; content: ReactNode[] }[] = [
    { gapBefore: false, content: [] },
  ];
  for (let i = 0; i < PROMPT_TOKENS.length && i <= tokenIndex; i++) {
    const tok = PROMPT_TOKENS[i];
    const current = lines[lines.length - 1];
    if (tok.kind === "newline") {
      lines.push({ gapBefore: !!tok.gap, content: [] });
    } else if (tok.kind === "prompt") {
      current.content.push(
        <span key={i}>
          <span className="text-[#859900] dark:text-emerald-400">➜</span> ~{" "}
        </span>
      );
    } else {
      const active = i === tokenIndex && !done;
      const shown = tok.kind === "type" && active ? tok.text.slice(0, charCount) : tok.text;
      current.content.push(
        <span key={i} className={tok.className}>
          {shown}
        </span>
      );
    }
  }

  const cursor = (
    <span className="inline-block w-[0.55em] h-[1em] -mb-[2px] ml-[1px] bg-[#586e75] dark:bg-emerald-400 animate-terminal-blink align-middle" />
  );

  // Fully-typed lines, used as an invisible placeholder so the block reserves
  // its final height up-front. This prevents the container (and the ASCII art
  // alongside it) from shifting as text types in line-by-line.
  const fullLines: { gapBefore: boolean; content: ReactNode[] }[] = [
    { gapBefore: false, content: [] },
  ];
  for (let i = 0; i < PROMPT_TOKENS.length; i++) {
    const tok = PROMPT_TOKENS[i];
    const current = fullLines[fullLines.length - 1];
    if (tok.kind === "newline") {
      fullLines.push({ gapBefore: !!tok.gap, content: [] });
    } else if (tok.kind === "prompt") {
      current.content.push(
        <span key={i}>
          <span className="text-[#859900] dark:text-emerald-400">➜</span> ~{" "}
        </span>
      );
    } else {
      current.content.push(
        <span key={i} className={tok.className}>
          {tok.text}
        </span>
      );
    }
  }

  return (
    <div className="relative text-[#93a1a1] dark:text-zinc-500 text-xs mt-2">
      {/* Invisible full-height placeholder to reserve final size */}
      <div aria-hidden="true" className="invisible">
        {fullLines.map((line, li) => (
          <div key={li} className={line.gapBefore ? "mt-2" : undefined}>
            {line.content}
          </div>
        ))}
      </div>

      {/* Animated overlay */}
      <div className="absolute inset-0">
        {lines.map((line, li) => (
          <div key={li} className={line.gapBefore ? "mt-2" : undefined}>
            {line.content}
            {li === lines.length - 1 && cursor}
          </div>
        ))}
      </div>
    </div>
  );
}
