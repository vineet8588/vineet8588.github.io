# Tasks Done

This file records all tasks from the project todo list that have been **completed**.

## Completed Tasks

### Project setup
- [x] **Initialize Astro project with React and Tailwind**
  - Astro (v7) with React + Tailwind v4 (`@tailwindcss/vite`), site URL set in `astro.config.mjs`.

- [x] **Install dependencies**
  - `lucide-react`, `react-icons`, `@astrojs/sitemap`, `@fontsource-variable/jetbrains-mono`, `@fontsource-variable/geist`, shadcn/ui primitives under `src/components/ui/`.

- [x] **Configuration files**
  - `astro.config.mjs` with React + sitemap integrations and Tailwind v4 vite plugin.
  - `tsconfig.json` with `@/*` path alias.
  - Tailwind theming in `src/styles/global.css` (dark mode `class`, brand colors, light/dark backgrounds + grid).

- [x] **Assets**
  - `src/assets/ascii.txt` (45 lines) imported via `?raw`.
  - `public/profile.jpg` placeholder, `favicon.ico`, `favicon.svg`.

### Components (all per AGENTS.md spec)
- [x] **Navbar.tsx** — fixed glass nav, brand `while (alive) ship();`, square zinc-ring avatar, nav links (Skills/Experience/Projects/Contact), functional ThemeToggle (`client:load`).
- [x] **TerminalHero.tsx** — mac-terminal, ASCII art (hidden `<lg`), 4 neofetch data groups (vineet@portfolio, Languages, Stack, Contact), emerald glow wrapper, intro line + `open to work` status. AWS row lists 10 services, ordered most→least impressive.
- [x] **SkillsMatrix.tsx** — 6 category cards (Languages, Frameworks, Developer Tools, Libraries, AI/ML, Cloud/AWS), pill tags with emerald/blue/violet/red variants, `h-full` equal height. AWS card has 10 services ordered most→least impressive.
- [x] **FeaturedProjects.tsx** — 2-col grid, `group` + `hover:-translate-y-2`, GitHub (FaGithub) + ExternalLink buttons. Currently a "Will Be Updated" placeholder card (owner will populate).
- [x] **ExperienceTimeline.tsx** — vertical timeline `border-l-2` + absolute dots centered on the line (`-left-[9px] top-1`), Deloitte USI (3 roles) + BGUS Australia internship with quantified bullets.
- [x] **ContactFooter.tsx** — CTA "Ready to build something impactful?" + glowing "Let's Talk" mailto button; footer with GitHub/LinkedIn/Email icons (`react-icons` + lucide `Mail`); "Built with Astro & React".

- [x] **index.astro** — imports `global.css` + `ascii.txt?raw`, assembles sections (Hero, About, Skills, Experience, Projects, Contact). Inline FOUC dark-mode script. `client:load` for Navbar/TerminalHero, `client:visible` for below-the-fold. Added About section (bio + Education/Certifications card with linkable cert verify URLs).

### Visual / UX fixes
- [x] **CSS loading + Tailwind v4 syntax** — imported global.css, fixed `oklch` usage, registered brand colors, installed fontsource mono.
- [x] **Functional ThemeToggle** in Navbar.
- [x] **TerminalHero glow wrapper** (spec shadow/border/rounded-xl/overflow-hidden).
- [x] **ContactFooter brand icons** — migrated to `react-icons` (FaGithub/FaLinkedinIn) since lucide v1 dropped brand icons.
- [x] **Light mode** — warm cream `oklch(0.98 0.012 85)` + visible warm 40px grid + emerald/crimson glow.
- [x] **Dark mode regression** — base `body` background-color overridden in `.dark body` (`oklch(0.08 0 0)` + grid).
- [x] **ASCII art** — responsive grid + `w-max` pre, no scrollbar, no right crop, no green divider line; hidden below `lg`.
- [x] **SkillsMatrix dark chip contrast** — light `-300` text on subtle bg.
- [x] **Timeline dot alignment** — `-left-[9px] top-1` centers the dot on the 2px line, level with the date row.
- [x] **Light-mode colors for TerminalHero & ContactFooter** — added light-mode variants (dark styles preserved under `dark:`): terminal header/content bg → `zinc-100`/`zinc-50`, footer bg → `zinc-100`; text/labels/values use darker zinc/emerald/amber/orange shades from the existing palette for readable light-mode contrast. Content unchanged. `astro check` 0 errors.
  - Follow-up: backgrounds were too grey → lightened (TerminalHero content `bg-white`, header `bg-zinc-100/70`; ContactFooter `bg-zinc-50`).
  - Follow-up: **TerminalHero light mode → Solarized Light palette** — bg base3 `#fdf6e3` / base2 `#eee8d5`, text base00/01/1 (`#657b83`/`#586e75`/`#93a1a1`), green `#859900` (titles/prompt), orange `#cb4b16` (labels), cyan `#2aa198` (values), yellow `#b58900` (ASCII/glow). Dark mode untouched. `astro check` 0 errors.
  - Follow-up: **ContactFooter border** — replaced top-only `border-t border-zinc-200 dark:border-zinc-900` (invisible in dark since it matched bg) with full `border border-zinc-200 dark:border-zinc-800` + `rounded-lg overflow-hidden` for a consistent card look in both modes. `astro check` 0 errors.
- [x] **Navbar hover color in dark mode** — nav links + theme toggle used `hover:text-emerald` (dark `--emerald` token, invisible on dark navbar). Switched to site-wide convention `hover:text-emerald-400 dark:hover:text-emerald-300` (matches ContactFooter/project links/skill pills). Visible hover in both modes. `astro check` 0 errors.
- [x] **About cert link hover color** — 4 certification links in About section used the same inconsistent `hover:text-emerald` token → updated to `hover:text-emerald-400 dark:hover:text-emerald-300`. No stray `hover:text-emerald` tokens remain site-wide. `astro check` 0 errors.
- [x] **Navbar name color** — "Vineet Yadav" changed from `text-emerald-500 dark:text-emerald-300` to `text-zinc-900 dark:text-white` (matches site heading color). `astro check` 0 errors.

### Repo hygiene (cont.)
- [x] **Removed duplicate root assets** — deleted redundant `ascii.txt` + `profile.jpg` from project root; processed copies remain in `src/assets/ascii.txt` (whitespace-trimmed, imported via `?raw`) and `public/profile.jpg` (resized/optimized, served at `/profile.jpg`).

### Content (from INFO.md)
- [x] **Filled all sections from INFO.md** — TerminalHero, SkillsMatrix (6 categories), ExperienceTimeline (Deloitte + BGUS), ContactFooter (real links), index.astro title/meta.
- [x] **About section** — bio paragraphs from INFO.md intro + Education (B.E. CSE, UIET Panjab University, CGPA 8.32) and Certifications card with linkable verify URLs (PCAP, Coursera React/Bootstrap, Great Learning GenAI).
- [x] **AWS services expanded** — added EC2, IAM, S3, CloudWatch, ALB to INFO.md + SkillsMatrix Cloud/AWS card + TerminalHero AWS row; ordered most→least impressive; `API GW` → `API Gateway`.

### SEO & Security
- [x] **Sitemap** — `@astrojs/sitemap` integration → `sitemap-index.xml` + `sitemap-0.xml`; `public/robots.txt` references it.
- [x] **SEO meta** — canonical, robots, keywords, author, color-scheme, dual theme-color, full Open Graph (type/url/locale/site_name/image-alt), Twitter (creator + card/title/desc/image), JSON-LD `Person` schema.
- [x] **Security headers (meta)** — `index.astro` head: meta CSP, Referrer-Policy (`strict-origin-when-cross-origin`), X-Content-Type-Options (`nosniff`).
- [x] **Security headers (`_headers`)** — `public/_headers` with X-Frame-Options, HSTS, Permissions-Policy, full CSP for Netlify/Cloudflare hosts (GitHub Pages ignores it; meta CSP covers GitHub Pages).

### Repo hygiene
- [x] **Untracked private docs** — `git rm --cached` AGENTS.md, CLAUDE.md, INFO.md on both `dev` and `main`; added to `.gitignore`. Local files preserved; not in repo or deployed site (`deploy.yml` only publishes `./dist`).

## Verification
- `npm run build` passes; `sitemap-index.xml` generated; meta CSP + JSON-LD present in `dist/index.html`.
- Dev server serves CSS + hydrated React islands; ThemeToggle works.
- All visible copy sourced from INFO.md (except intentional terminal flavor: `Uptime ~4 Years`, `open to work`).
- AWS services consistent across INFO.md, SkillsMatrix, TerminalHero.
- Private docs absent from `dist/` and untracked in both branches.
