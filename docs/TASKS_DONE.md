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

### Mobile responsiveness (full polish)
- [x] **Navbar mobile menu** — added hamburger toggle (`Menu`/`X`, `md:hidden`, `p-2.5`) + `menuOpen` state; collapsible glassmorphism panel with profile block (avatar/name/title, hidden `<sm` in top bar) + vertically stacked nav links (`py-3`, closes menu on click). Extracted shared `scrollToSection` helper. Theme toggle bumped to `p-2.5`.
- [x] **TerminalHero mobile cramping** — label column `w-28 sm:w-32` → `w-20 sm:w-32` (narrower on phones), content padding `px-6 sm:px-10` → `px-4 sm:px-10`, body text `text-[13px]` → `text-xs sm:text-[13px]`.
- [x] **index.astro responsive spacing/headings** — hero top gap `pt-32` → `pt-24 sm:pt-32`; all 5 section `<h2>` `text-3xl` → `text-2xl sm:text-3xl`. Follow-up: between-section gap `space-y-24` → `space-y-16 sm:space-y-24` (64px mobile / 96px desktop).
- [x] **ExperienceTimeline double padding** — removed nested `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (already inside `main`'s container) so the timeline's left edge aligns with other sections on mobile. Follow-up: per-entry `pb-12` → `pb-8 sm:pb-12` and removed redundant inner `space-y-8` (was adding 32px gap + breaking the continuous timeline line) — tighter mobile spacing + continuous line.
- Verified: `astro check` 0 errors, `npm run build` passes. Out of scope (already responsive): FeaturedProjects & SkillsMatrix grids. No color/content changes.
- [x] **Consistent section spacing** — removed stray `mb-12` on TerminalHero root (was adding 48px on top of the section gap, making Hero→About oversized) and changed About `space-y-6` → `space-y-8` to match all other sections. Now uniform: between-section `space-y-16 sm:space-y-24`, in-section heading→content `space-y-8`. `astro check` 0 errors.
- [x] **Desktop section spacing reduced** — `space-y-16 sm:space-y-24` → `space-y-16 sm:space-y-20` (desktop 96px → 80px; mobile unchanged at 64px). `astro check` 0 errors.
- [x] **Tightened navbar→hero gap + section spacing** — top padding `pt-24 sm:pt-32` → `pt-20 sm:pt-24` (main navbar→hero gap: 128px → 80px desktop / 64px mobile; navbar is only 64px tall); between-section `space-y-16 sm:space-y-20` → `space-y-14 sm:space-y-16` (desktop 64px, mobile 56px). `astro check` 0 errors.
- [x] **Navbar mobile layout rework** — hid `while (alive) ship()` code line on mobile (`hidden md:inline`); moved profile card (avatar/name/"Software Developer") to top-left of the mobile navbar (with `truncate`/`min-w-0`); removed profile block from hamburger panel (now links-only). Desktop unchanged. Fixed subtitle inconsistency (menu said "Full-Stack / GenAI / AWS" → now "Software Developer" everywhere). `astro check` 0 errors.
- [x] **Added About nav link** — prepended `{ href: '#about', label: 'About' }` to `NAV_LINKS` (shows in desktop row + mobile menu, targets existing `#about` section). `astro check` 0 errors.
- [x] **Profile icon border + size** — replaced grey gradient frame (`bg-gradient-to-br from-zinc-400 to-zinc-600` + `p-[2px]`) with subtle `ring-1 ring-zinc-200 dark:ring-zinc-700` (consistent with site borders); size `w-9 h-9` → `w-10 h-10` (36→40px). Applied to both mobile + desktop cards. `astro check` 0 errors.
- [x] **Profile avatar redesign** — switched to standard circular avatar (`rounded-full`) with layered ring (`ring-2 ring-white dark:ring-zinc-900` cutout + `outline outline-1 outline-zinc-200 dark:outline-zinc-700` edge) + `shadow-sm shadow-black/10`; removed wrapper div. Modern navbar avatar look (GitHub/Vercel style). Both mobile + desktop cards. `astro check` 0 errors.

### Animations (high-impact batch)
- [x] **Terminal typewriter + blinking cursor** — `TerminalHero` bottom command block now types out char-by-char (`cat intro.txt` → output → `echo $STATUS "open to work"`) via a token-driven `TerminalPrompt` sub-component with a blinking block cursor (`.animate-terminal-blink`). Token list at module scope (stable ref). Honors `prefers-reduced-motion` (renders full text, no animation). Neofetch info groups stay static (they read as already-printed output).
- [x] **Scroll-reveal fade-up** — About/Skills/Experience/Projects/Contact sections get `.reveal` (opacity+translateY) toggled to `.is-visible` by an inline IntersectionObserver in `index.astro` (threshold 0.12, unobserve after reveal). Reduced-motion + no-IO fallback shows everything immediately. Hero excluded (above fold, has typing anim).
- [x] **Staggered skill pills** — `SkillsMatrix` pill containers get `.stagger`; self-contained IntersectionObserver in the component sets incremental `transition-delay` per pill (cap 320ms) then adds `.is-visible` for a cascading entrance. Reduced-motion/no-IO fallback. (Handled in-component since it's a `client:visible` island.)
- Infra added to `global.css`: `.animate-terminal-blink`, `.reveal`, `.stagger` utilities + `@keyframes terminal-blink` + a global `prefers-reduced-motion` guard that disables all of them.
- Verified: `astro check` **0/0/0**, `eslint` clean (moved token array to module scope to avoid needing an unavailable `react-hooks/exhaustive-deps` disable), `npm run build` passes, dev server renders (HTTP 200), animation classes present in built CSS. Medium/subtle animation ideas logged in `TASKS_PENDING.md`.
- [x] **Fixed ASCII art layout shift during typing** — the info column grew line-by-line while typing, and with `items-center` this moved the centered ASCII art. Fixed via a min-height reservation: `TerminalPrompt` renders an invisible fully-typed placeholder to reserve final height, with the animated text overlaid absolutely — so the info column is at final height from the first frame and the centered ASCII never moves. (Alignment kept as `items-center` per preference — no top-anchoring.) `astro check` 0/0/0, build passes.
- [x] **Medium-impact animations implemented** — (1) CTA pulsing emerald glow on "Let's Talk" button (`animate-cta-glow` + `cta-glow` keyframe, ContactFooter.tsx); (2) soft expanding pulse ring on the "Present" job timeline dot (`animate-pulse-ring` + `pulse-ring` keyframe, ExperienceTimeline.tsx, applied to `index === 0`); (3) nav scroll-spy highlight — `Navbar.tsx` now tracks active section via `IntersectionObserver` (`rootMargin: '-45% 0px -45% 0px'`) and highlights the matching link with emerald color in both desktop and mobile menus. All three honor `prefers-reduced-motion` (added to the reduced-motion guard block in global.css, and scroll-spy observer is skipped under reduced motion). `astro check` 0/0/0, eslint clean, build passes.
- [x] **Subtle micro-interaction animations implemented** — (1) **Card hover glow**: project cards in `FeaturedProjects.tsx` now get an emerald border + emerald glow shadow on hover (alongside the existing `-translate-y-2` lift), consistent with the skill-card hover glow from the prior fix. (2) **Animated scan-line**: `TerminalHero.tsx` terminal content container gained `animate-scanline` — a faint emerald line sweeps top-to-bottom on a 6s loop via a `::before` pseudo-element (`scanline` keyframe in global.css). Both honor `prefers-reduced-motion` (scanline disabled in the reduced-motion guard; card hover glow is a static shadow, already inert under reduced motion). `astro check` 0/0/0, eslint clean, build passes.


### Repo hygiene (cont.)
- [x] **Removed duplicate root assets** — deleted redundant `ascii.txt` + `profile.jpg` from project root; processed copies remain in `src/assets/ascii.txt` (whitespace-trimmed, imported via `?raw`) and `public/profile.jpg` (resized/optimized, served at `/profile.jpg`).
- [x] **Full repo hygiene pass (dead code + deps)** — audited entire repo; all 6 AGENTS.md-required components present & implemented (nothing missing from POC). Removed:
  - **Dead CSS (~152 lines):** entire unused `@layer utilities` + `@layer components` in `global.css` (~24 classes: `.glass`, `.skill-tag`, `.project-card`, `.nav-link`, `.btn-*`, `.animate-*`, `.section-*`, etc. — 0 references); unused `--color-crimson*` tokens + `--font-heading`; `tw-animate-css` + `shadcn/tailwind.css` imports. `global.css` 323→171 lines. Kept `--color-emerald*` (still used by ContactFooter).
  - **Unused shadcn/ui scaffolding:** deleted `src/components/ui/` (9 primitives, all 0 imports), `src/lib/utils.ts`, `components.json`. Confirmed inline Tailwind is the right approach for this stack (no genuinely-repeated complex patterns warranting extraction).
  - **Unused deps (6):** `@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`, `shadcn` (CLI, shouldn't be in deps). deps 20→13.
  - **Moved** `@types/react`/`@types/react-dom` from `dependencies` → `devDependencies`.
  - **Renamed** package `spiffy-mercury` → `portfolio`.
  - **tsconfig:** collapsed 5 path aliases (referencing deleted `lib`/`hooks`/`ui` dirs) to just `@/*`.
  - **README:** removed stale shadcn/ui + crimson references, fixed structure diagram.
  - **index.astro:** added explicit `is:inline` to JSON-LD script (silences the only remaining hint).
  - Verified: `astro check` **0 errors / 0 warnings / 0 hints**, `eslint` clean, `npm run build` passes (emerald tokens intact in output). `dist/`, `.astro/`, `node_modules/`, env, private docs confirmed gitignored & untracked.

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
- All visible copy sourced from INFO.md (except intentional terminal flavor: `Uptime ~ 4 Years`, `open to work`).
- AWS services consistent across INFO.md, SkillsMatrix, TerminalHero.
- Private docs absent from `dist/` and untracked in both branches.
