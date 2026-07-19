# Tasks Pending

This file records tasks from the project todo list that are **not yet done** or only **partially complete / requiring follow-up**.

## Known Gaps & Follow-ups

- [ ] **Lighthouse 100 score not verified**
  - The AGENTS.md targets a 100 Lighthouse score. No audit has been run. Performance depends on asset optimization (e.g., `profile.jpg` is 1.1M and unoptimized) and hosting setup.

- [ ] **Profile image is a placeholder**
  - `public/profile.jpg` is a generic 1.1M file. Replace with the actual developer photo and consider compression/responsive sizing.

- [ ] **Project GitHub / live URLs are placeholders**
  - `INFO.md` has no repo or demo links. `FeaturedProjects.tsx` currently points all cards to `github.com/vineet8588` (no per-project repos) and `liveUrl: '#'`. Need real per-project URLs when available.

- [ ] **INFO.md sections not yet surfaced on the site**
  - **Education** (B.E. CSE, UIET Panjab Univ., CGPA 8.32), **Awards & Certifications** (HackUIET 4th, Infosys Makeathon top 6, Deloitte Applause/Spot, Coursera React/Bootstrap, PCAP Python, Great Learning GenAI), and **Internship BGUS** are in INFO.md but only Experience/Delaware + BGUS appear in the timeline. Add an Education/Awards section or weave into timeline.
  - No dedicated "About / Introduction" paragraph from INFO.md is rendered verbatim — the intro line is only echoed in the terminal hero prompt. Consider adding a short bio section.

- [ ] **Lucide brand icons missing (v1 dropped them)**
  - `Github`, `LinkedIn`, `Twitter` were removed from `lucide-react` v1. We substituted `GitGraph`, `Send`, `AtSign` as stand-ins (Twitter dropped from footer in favor of Email). For accurate brand icons, add `react-icons` (e.g., `react-icons/fa` / `react-icons/si`) or inline SVGs.

- [ ] **README references non-existent npm scripts**
  - `README.md` mentions `npm run audit` and `npm run build -- --report` which are not defined in `package.json`.

- [ ] **No automated tests / lint / typecheck scripts**
  - `package.json` only has `dev`, `build`, `preview`, `astro`. No `lint` or `typecheck` script despite AGENTS.md mentioning them.

- [ ] **ContactFooter / ExperienceTimeline not wired to editable data files**
  - Experience and projects are hardcoded arrays inside components. Consider moving to a shared data module or content collection for easier editing.

- [ ] **No deployment configuration**
  - No CI, no `astro.config` adapter, no `robots.txt`, no sitemap, no OpenGraph image at the referenced `https://example.com/portfolio-og.png`.

- [ ] **`CLAUDE.md` is a symlink to AGENTS.md**
  - `CLAUDE.md -> AGENTS.md` exists. Decide whether to keep it or make it independent.

## Resolved (kept for history — moved to TASKS_DONE.md)
- [x] ASCII art scrollbars → shrank font, removed overflow, added no-scrollbar (seamless L/R).
- [x] SkillsMatrix dark chips low contrast → now use light `-300` text on subtle bg.
- [x] Light mode too basic → warm cream + emerald/crimson gradient + visible warm grid.
- [x] AGENTS.md mandatory task-tracking instruction added (Section 0).
- [x] Dark mode appeared light → base `body` background-color overridden in `.dark body`.
- [x] ASCII art cropped on right → responsive grid + `w-max` pre, no `overflow-hidden`.
- [x] Green divider line next to ASCII art removed.

## Suggested Next Steps
1. Add Education + Awards/Certifications section (data already in INFO.md).
2. Add a short About/Introduction bio block from INFO.md.
3. Fill real per-project GitHub/live URLs once available.
4. Add real brand icons via `react-icons` or inline SVG.
5. Run a Lighthouse audit and optimize `profile.jpg`.
6. Add `lint` / `typecheck` / `audit` scripts to `package.json`.
7. Configure deployment (adapter + CI + OG image).
