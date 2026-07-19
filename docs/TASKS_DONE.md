# Tasks Done

This file records all tasks from the project todo list that have been **completed**.

## Completed Tasks

- [x] **Initialize Astro project with React and Tailwind**
  - Astro (v7) initialized with minimal template, React + Tailwind added via `astro add`.

- [x] **Install dependencies (lucide-react, shadcn/ui)**
  - `lucide-react`, `shadcn` CLI, and shadcn/ui components (button, card, badge, etc.) installed.

- [x] **Create configuration files (astro.config.mjs, tailwind.config.mjs, tsconfig.json)**
  - `astro.config.mjs` with React integration + Tailwind v4 vite plugin.
  - `tsconfig.json` with path aliases (`@/*`).
  - Tailwind theming handled in `src/styles/global.css` (dark mode `class`, custom fonts, brand colors).

- [x] **Create assets (ascii.txt, profile.jpg placeholder)**
  - `src/assets/ascii.txt` (54 lines of ASCII art) ✅
  - `public/profile.jpg` (1.1M placeholder) ✅

- [x] **Build Navbar.tsx component**
  - Fixed top, `z-50`, glassmorphism, bottom border.
  - Brand text `const portfolio = new Developer();` with syntax-highlight colors.
  - **Functional ThemeToggle** (Sun/Moon button toggles `dark` class + writes `localStorage`).

- [x] **Build TerminalHero.tsx component**
  - Props `{ asciiText: string }`, two-column layout (ASCII left, neofetch data right).
  - macOS-style header dots.
  - **Glow wrapper**: `shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-900/20 border ... rounded-xl overflow-hidden`.
  - Orange keys, zinc spacer dots, emerald values.

- [x] **Build SkillsMatrix.tsx component**
  - CSS grid of 4 category cards (Frontend, Backend, Cloud/AWS, AI/ML).
  - Pill-shaped skill tags with spec style.
  - Dummy data includes React, TypeScript, Astro, Node.js, Python, AWS EC2, AWS Lambda, S3, LangChain, OpenAI API, Vector DBs.

- [x] **Build FeaturedProjects.tsx component**
  - 2-column grid, project cards with `group` + `hover:-translate-y-2`.
  - Image placeholder (`aspect-video`), title, description, tech stack row, GitHub + ExternalLink buttons.

- [x] **Build ExperienceTimeline.tsx component**
  - Vertical timeline with `border-l-2` line + absolute positioned dots.
  - Date (font-mono), Role @ Company, quantified bullet points.

- [x] **Build ContactFooter.tsx component**
  - Centered CTA "Ready to build something impactful?" with glowing "Let's Talk" mailto button.
  - Footer with **GitHub / LinkedIn / Twitter** Lucide icon links.
  - Footer note: "Built with Astro & React."

- [x] **Create index.astro page**
  - Imports `global.css` + `ascii.txt?raw`, assembles all sections.
  - Inline FOUC-prevention dark-mode script.
  - `client:load` for Navbar/TerminalHero, `client:visible` for below-the-fold components.

- [x] **Create README with test instructions**
  - `README.md` with full local run/test instructions.

- [x] **Restore full AGENTS.md specification**
  - The complete 138-line spec was rewritten to `AGENTS.md` after it was found truncated.

- [x] **Fix CSS not loading (global.css not imported)**
  - Added `import '../styles/global.css';` to `index.astro`; installed missing `@fontsource-variable/jetbrains-mono`; corrected invalid Tailwind v4 syntax (`oks` → `oklch`, registered brand colors, removed stray `group`).

- [x] **Fix Navbar ThemeToggle (was non-functional)**
  - Replaced static icons with a working toggle button (state + localStorage + class swap).

- [x] **Fix TerminalHero glow container**
  - Wrapped terminal in the spec's glow/rounded-xl/overflow-hidden container.

- [x] **Fix ContactFooter social icons**
  - Added GitHub/LinkedIn/Twitter icon links (and fixed `oks` → `oklch` shadow typo).

- [x] **Add mandatory Task Tracking instruction to AGENTS.md**
  - Added Section 0: all contributors (human/agent) must begin tasks immediately and record outcomes in `docs/TASKS_DONE.md` (completed) / `docs/TASKS_PENDING.md` (pending).

- [x] **Fix ASCII art scrollbars in TerminalHero**
  - Reduced ASCII font to `text-[7px] leading-[1.05]`, widened its column to `38%`, removed `overflow-auto`, added `overflow-hidden` + `.no-scrollbar` utility so it renders seamlessly left/right with no scrollbar.

- [x] **Fix SkillsMatrix dark-mode chip colors**
  - Dark mode chips now use light text (`dark:text-emerald-300`, plus red/blue/violet `-300` variants) on subtle translucent bg instead of dark green text on dark green bg (poor contrast).

- [x] **Improve light-mode aesthetics**
  - Removed `bg-slate-50` override from `<body>` so the themed background applies.
  - Light mode now uses soft off-white (`oklch(0.985 0.005 240)`) with a visible-but-easy emerald/crimson radial gradient + a subtle 40px grid pattern, `background-attachment: fixed`. Dark mode got the matching grid for cohesion.

- [x] **Fix dark mode appearing light (regression)**
  - Root cause: `background-color: oklch(0.985 0.005 240)` (near-white) was set on the base `body` rule; the `.dark body` rule only overrode `background-image`, not `background-color`, so dark mode still painted near-white underneath.
  - Fix: added `background-color: oklch(0.08 0 0)` + dark grid to the `.dark body` rule. Verified compiled CSS: `.dark body{background-color:oklch(8% 0 0);...}`.

- [x] **Improve light-mode colors (warm, visible grid)**
  - Removed bluish tinge: background changed from hue `240` (blue) to warm `oklch(0.98 0.012 85)` (cream/paper).
  - Grid was invisible (4% opacity) → bumped to `18%` (`oklch(0.72 0.02 85 / 0.18)`), same warm hue, now clearly visible 40px grid.
  - Kept emerald/crimson radial glows per spec. `background-attachment: fixed`.

- [x] **Fix ASCII art cropping on the right**
  - Root cause: ASCII (100 chars wide) sat in a fixed `38%` grid column with `overflow-hidden`; at `text-[7px]` it was wider than the column → right side clipped.
  - Fix: responsive grid `grid-cols-1 lg:grid-cols-[minmax(0,1fr)_1fr]` (stacked on small, side-by-side on large), removed `overflow-hidden`, `<pre>` is `whitespace-pre w-max` so it shows full natural width. `no-scrollbar` + `overflow-x-auto` as safety net.

- [x] **Remove green divider line next to ASCII art**
  - Deleted the decorative `w-0.5 bg-emerald-500` vertical bar that appeared to the left of the ASCII art.

- [x] **Filled all portfolio sections from INFO.md**
  - Source: root `INFO.md` (Vineet Yadav's resume).
  - **TerminalHero**: real name, role, location (Gurgaon), education, languages, frameworks/tools/GenAI/cloud stack, and contact (email/phone/linkedin/github) with phone added from INFO.md.
  - **SkillsMatrix**: rebuilt 6 categories from INFO.md — Languages, Frameworks, Developer Tools, Libraries, AI/ML, Cloud/AWS.
  - **ExperienceTimeline**: replaced dummy data with Deloitte USI (3 roles: Security Engineer 2, Advisory Associate, Advisory Analyst) + BGUS Australia internship, using real bullets.
  - **FeaturedProjects**: replaced dummy projects with real ones — OT Security Automation (GenAI), Context-Based RAG Chatbot, Face Recognition Entry System, LMSUIET.
  - **ContactFooter**: real links — `github.com/vineet8588`, `linkedin.com/in/vineetyadav8588`, `mailto:vineetyadav8588@gmail.com`.
  - **index.astro**: updated `<title>`, meta description, OG tags to real name/role.
  - **Navbar**: role subtitle updated to "Full-Stack / GenAI Engineer".
  - Gaps (no per-project URLs, no Education/Awards section yet) logged to TASKS_PENDING.md.

## Verification
- `npm run build` passes; CSS generated (`_astro/index.*.css`) and linked.
- Dev server serves CSS + hydrated React islands.
- All 6 components render per AGENTS.md spec.
- ASCII art renders full-width, no scrollbar, no green line.
- Dark mode: deep zinc + emerald/crimson glow + grid. Light mode: warm cream + visible warm grid + glow. Chips readable in both themes.
- All visible copy now sourced from INFO.md.
