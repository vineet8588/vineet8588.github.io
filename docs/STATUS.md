# Project Status — Premium Developer Portfolio

Last updated: 2026-07-20

## Overview
A recruiter-optimized portfolio built with **Astro v7 + React 19 + Tailwind CSS v4** (Tailwind via `@tailwindcss/vite`). Spec lives in `AGENTS.md`. Task tracking: `docs/TASKS_DONE.md` / `docs/TASKS_PENDING.md`.

Note: shadcn/ui primitives exist under `src/components/ui/` (button, card, badge, avatar, tabs, etc.) but the live page components are hand-built with Tailwind classes; the shadcn primitives are available for future use.

## Build / Run
```bash
npm install          # deps already installed
npm run dev          # http://localhost:4321
npm run build        # outputs to dist/  (also generates sitemap-index.xml + sitemap-0.xml)
npm run preview      # preview production build
```
Node v22 used in CI (`deploy.yml`).

## File Map
```
src/
  pages/index.astro          # page assembly, FOUC dark-mode script, SEO meta + JSON-LD, meta CSP,
                             #   About section (bio + Education/Certifications), imports global.css + ascii.txt?raw
  components/
    Navbar.tsx               # fixed glass nav, brand `while (alive) ship();`, square zinc-ring avatar,
                             #   nav links Skills/Experience/Projects/Contact, functional ThemeToggle (localStorage)
    TerminalHero.tsx         # mac-terminal, ASCII art (hidden <lg) + neofetch data groups, emerald glow wrapper,
                             #   intro line + "open to work" status
    SkillsMatrix.tsx         # 6 category cards, pill tags (emerald/blue/violet/red variants), h-full equal height
    FeaturedProjects.tsx     # 2-col grid, group hover -translate-y-2, GitHub/External links (placeholder card)
    ExperienceTimeline.tsx   # vertical timeline, border-l-2 + absolute dots (-left-[9px] top-1), quantified bullets
    ContactFooter.tsx        # CTA "Let's Talk" mailto + GitHub/LinkedIn/Email (react-icons) footer
    ui/                      # shadcn/ui primitives (button, card, badge, avatar, tabs, tooltip, ...)
    lib/utils.ts             # cn() helper
  styles/global.css          # Tailwind v4 theme, brand colors, light/dark body backgrounds + grid
  assets/ascii.txt           # ASCII art (45 lines)
public/
  profile.jpg                # placeholder avatar
  favicon.ico / favicon.svg
  robots.txt                 # points to sitemap-index.xml
  _headers                   # security headers for Netlify/Cloudflare hosts (ignored by GitHub Pages)
```

## Current Visual State
- **Dark mode**: deep zinc bg `oklch(0.08 0 0)` + emerald/crimson radial glow + subtle grid. ✅
- **Light mode**: warm cream `oklch(0.98 0.012 85)` + emerald/crimson glow + visible warm 40px grid. ✅
- **ASCII art**: hidden below `lg`, no scrollbar, no right crop, no green divider line. ✅
- **Skills chips**: readable in both themes (dark uses light `-300` text). ✅
- **ThemeToggle**: Sun/Moon button flips `dark` class + writes `localStorage`. ✅
- **Timeline dots**: aligned centered on the 2px line, level with the date row. ✅

## SEO & Security (added)
- `@astrojs/sitemap` → `sitemap-index.xml` + `sitemap-0.xml`; referenced in `robots.txt`.
- `index.astro`: canonical, robots, keywords, author, color-scheme, dual theme-color, OG (type/url/locale/site_name/image-alt), Twitter (creator), JSON-LD `Person` schema, meta CSP + Referrer-Policy + X-Content-Type-Options.
- `public/_headers`: full-strength headers (X-Frame-Options, HSTS, Permissions-Policy, CSP) for hosts that support `_headers` (Netlify/Cloudflare). GitHub Pages ignores it, so the meta CSP is the browser-enforced layer there.

## Data source
- Root `INFO.md` (Vineet Yadav résumé) is the single source of truth. It is **untracked / gitignored** (private, not in repo or deployed site).
- AWS services shown: API Gateway, CloudFront, ECS, Lambda, IAM, CodeBuild, CloudWatch, ALB, EC2, S3 (ordered most→least impressive), expanded in INFO.md + both SkillsMatrix and TerminalHero.

## Known Limitations (see TASKS_PENDING.md)
- FeaturedProjects is a "Will Be Updated" placeholder (owner will add real projects).
- `profile.jpg` is a placeholder, unoptimized.
- Lighthouse not audited.
- shadcn/ui primitives unused by live components.
- Private docs (AGENTS.md/CLAUDE.md/INFO.md) are untracked; they still exist in git history.

## Recent Fixes (chronological, this session)
1. SEO: sitemap integration, canonical/OG/Twitter/JSON-LD meta, robots.txt.
2. Security: meta CSP + Referrer-Policy/X-Content-Type-Options in head; `_headers` for full-strength headers.
3. Timeline dot alignment: `-left-[9px] top-1` (centered on 2px line, level with date).
4. AWS services expanded to 10 (added EC2, IAM, S3, CloudWatch, ALB) in SkillsMatrix + TerminalHero + INFO.md.
5. Untracked private docs (AGENTS.md, CLAUDE.md, INFO.md) from both `dev` and `main` branches; added to `.gitignore`.
6. About section added to index.astro (bio + Education/Certifications with linkable cert verify URLs).
7. TerminalHero AWS row re-ordered most→least impressive; `API GW` → `API Gateway`.
8. Cert links added to About sidebar (PCAP, Coursera React/Bootstrap, Great Learning) — terminal Certs group reverted, kept only in About.
