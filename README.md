# Premium Full Stack Developer Portfolio

A high-performance, recruiter-optimized portfolio website built with **Astro**, **React**, and **Tailwind CSS v4**.

> Personal site for **Vineet Yadav** — Full-Stack & GenAI Developer. Content is sourced from `INFO.md` (kept private / gitignored).

## Design Aesthetic
- **Dark Mode**: Premium hacker vibe — deep zinc background, emerald greens, subtle grid + radial glow.
- **Light Mode**: Warm cream paper with a visible grid and emerald glow; the terminal hero uses a Solarized Light palette.
- **Performance**: Optimized for a high Lighthouse score via deferred React hydration (`client:visible` below the fold).

## Tech Stack
- **Framework**: Astro v7
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`), utility-first inline classes
- **Icons**: `lucide-react` (UI icons) + `react-icons` (brand icons: GitHub, LinkedIn)
- **SEO**: `@astrojs/sitemap`
- **Fonts**: JetBrains Mono + Geist (variable, via `@fontsource-variable`)

## Project Structure
```
portfolio/
├── src/
│   ├── assets/
│   │   └── ascii.txt            # ASCII art for the terminal hero
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed glass nav, brand `while (alive) ship();`, theme toggle, avatar
│   │   ├── TerminalHero.tsx     # Mac-style terminal + neofetch data groups
│   │   ├── SkillsMatrix.tsx     # 6 skill category cards with pill tags
│   │   ├── FeaturedProjects.tsx # Project grid (currently a placeholder card)
│   │   ├── ExperienceTimeline.tsx # Vertical timeline, Deloitte USI + BGUS
│   │   └── ContactFooter.tsx    # CTA + footer (GitHub / LinkedIn / Email)
│   ├── pages/
│   │   └── index.astro          # Page assembly, SEO meta + JSON-LD, meta CSP, About section
│   └── styles/
│       └── global.css           # Tailwind v4 theme, brand colors, light/dark backgrounds
├── public/
│   ├── profile.jpg              # Profile image (real photo)
│   ├── favicon.ico / favicon.svg
│   ├── robots.txt               # references sitemap-index.xml
│   └── _headers                 # security headers (Netlify/Cloudflare hosts; ignored by GitHub Pages)
├── astro.config.mjs             # React + sitemap integrations, site URL
├── eslint.config.js             # ESLint flat config
├── tsconfig.json                # `@/*` path alias
└── package.json
```

> Note: `AGENTS.md`, `CLAUDE.md`, and `INFO.md` are intentionally **untracked and gitignored** (private, not part of the repo or deployed site).

## Getting Started

### Prerequisites
- Node.js >= 22.12 (CI uses Node 22)
- npm

### Installation
```bash
npm install
```

### Scripts
```bash
npm run dev        # dev server (http://localhost:4321)
npm run build      # production build -> dist/ (also emits sitemap-index.xml + sitemap-0.xml)
npm run preview    # preview the production build
npm run astro      # raw astro CLI
npm run typecheck  # astro check (type-checks .astro + .tsx)
npm run lint       # eslint . (flat config)
```

## Sections
| Section | Source | Notes |
|---|---|---|
| Hero (TerminalHero) | `INFO.md` | neofetch-style groups: identity, Languages, Stack (Frameworks/Tools/GenAI/AWS), Contact |
| About | `INFO.md` | Bio + Education (B.E. CSE, UIET Panjab Univ., CGPA 8.32) + Certifications (linkable verify URLs) |
| Skills | `INFO.md` | 6 categories: Languages, Frameworks, Developer Tools, Libraries, AI/ML, Cloud/AWS (10 AWS services) |
| Experience | `INFO.md` | Deloitte USI (3 roles) + BGUS Australia internship |
| Projects | owner | `FeaturedProjects.tsx` is a "Will Be Updated" placeholder — replace with real projects |
| Contact | `INFO.md` | GitHub / LinkedIn / Email links |

## SEO & Security
- **Sitemap**: `@astrojs/sitemap` -> `dist/sitemap-index.xml`; `public/robots.txt` points to it.
- **Meta**: canonical, robots, keywords, author, `color-scheme`, dual `theme-color`, full Open Graph, Twitter (`creator`), and a JSON-LD `Person` schema — all in `src/pages/index.astro`.
- **Security**:
  - `index.astro` `<head>`: meta CSP, `Referrer-Policy`, `X-Content-Type-Options`.
  - `public/_headers`: full-strength headers (X-Frame-Options, HSTS, Permissions-Policy, CSP) for hosts that support `_headers` (Netlify/Cloudflare). **GitHub Pages ignores `_headers`**, so the meta CSP is the enforced layer there.

## Customization
1. **Skills**: edit the `categories` array in `SkillsMatrix.tsx`.
2. **Projects**: edit the `projects` array in `FeaturedProjects.tsx`.
3. **Experience**: edit `experienceEntries` in `ExperienceTimeline.tsx`.
4. **Profile image**: replace `public/profile.jpg`.
5. **Social / contact links**: update `ContactFooter.tsx` and the `Contact` group in `TerminalHero.tsx`.
6. **Theme colors**: edit `src/styles/global.css` (`:root` / `.dark` brand colors + backgrounds).

To add a section: create a component in `src/components/`, import it in `src/pages/index.astro`, and use `client:visible` for below-the-fold components.

## Performance Notes
- `client:load` for above-the-fold (Navbar, TerminalHero).
- `client:visible` for below-the-fold (Skills, Projects, Experience, Contact).
- Pure Astro + React islands architecture; sitemap generated at build.

## Build Status
- ✅ `npm run build` passes.
- ✅ `npm run typecheck` (astro check) — 0 errors.
- ✅ `npm run lint` (eslint) — clean.
- ⚠️ Lighthouse score: owner-run audit pending; optimize `profile.jpg` / hosting based on results.

## Troubleshooting
- **Brand icons**: `lucide-react` v1 dropped `Github`/`LinkedIn`/`Twitter`, so brand icons use `react-icons` (`FaGithub`, `FaLinkedinIn`) in `ContactFooter.tsx` and `Navbar.tsx`.
- **Dark mode flicker (FOUC)**: prevented by the inline script in `<head>` of `index.astro`.
- **Astro version**: Astro v7 + React 19 + Tailwind v4.

## License
Personal portfolio. Replace content with your own before reusing the template.
