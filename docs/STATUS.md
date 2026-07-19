# Project Status — Premium Developer Portfolio

Last updated: 2026-07-20

## Overview
A recruiter-optimized portfolio built with **Astro v7 + React 19 + Tailwind CSS v4 + shadcn/ui**.
Spec lives in `AGENTS.md` (full 138-line spec, restored). Task tracking: `docs/TASKS_DONE.md` / `docs/TASKS_PENDING.md`.

## Build / Run
```bash
npm install          # deps already installed
npm run dev          # http://localhost:4321  (use --port N if busy)
npm run build        # outputs to dist/
npm run preview      # preview production build
```
Node v24 confirmed working. Dev server uses `./node_modules/.bin/astro dev`.

## File Map
```
src/
  pages/index.astro          # page assembly, FOUC dark-mode script, imports global.css + ascii.txt?raw
  components/
    Navbar.tsx               # fixed glass nav, brand text, functional ThemeToggle (localStorage)
    TerminalHero.tsx         # mac-terminal, ASCII art (w-max, full width) + neofetch data, emerald glow wrapper
    SkillsMatrix.tsx         # 4 category cards, pill tags (dark: light -300 text on subtle bg)
    FeaturedProjects.tsx     # 2-col grid, group hover -translate-y-2, GitHub/External links
    ExperienceTimeline.tsx   # vertical timeline, border-l-2 + absolute dots, quantified bullets
    ContactFooter.tsx        # CTA "Let's Talk" mailto + GitHub/LinkedIn/Twitter icons
  styles/global.css          # Tailwind v4 theme, brand colors, light/dark body backgrounds
  assets/ascii.txt           # 100-char wide, 54-line ASCII art
public/profile.jpg           # 1.1M placeholder
```

## Current Visual State
- **Dark mode**: deep zinc bg `oklch(8% 0 0)` + emerald/crimson radial glow + subtle light grid. ✅ good.
- **Light mode**: warm cream `oklch(98% .012 85)` + emerald/crimson glow + visible warm 40px grid. ✅ no blue tinge.
- **ASCII art**: full-width, no scrollbar, no right crop, no green divider line. ✅
- **Skills chips**: readable in both themes (dark uses light `-300` text). ✅
- **ThemeToggle**: Sun/Moon button flips `dark` class + writes `localStorage`. ✅

## Known Limitations (see TASKS_PENDING.md)
- Placeholder content (photo, links, email) not yet real.
- Lucide v1 dropped brand icons → using `GitGraph`/`Send`/`AtSign` stand-ins.
- No lint/typecheck/audit npm scripts; no deployment config; Lighthouse not audited.

## Recent Fixes (chronological)
1. CSS not loading → imported global.css, fixed Tailwind v4 syntax (`oks`→`oklch`, registered brand colors).
2. Functional ThemeToggle.
3. TerminalHero glow wrapper + social icons.
4. Mandatory task-tracking rule added to AGENTS.md §0.
5. ASCII scrollbars → seamless.
6. SkillsMatrix dark chip contrast.
7. Light mode polish + grid.
8. **Dark mode regression** (base body bg painted under dark) → fixed in `.dark body`.
9. Light mode warm colors + visible grid.
10. ASCII right-crop → responsive grid + `w-max`.
11. Removed green divider line beside ASCII.
