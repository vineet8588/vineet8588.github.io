# Tasks Pending

This file records tasks from the project todo list that are **not yet done** or only **partially complete / requiring follow-up**.

## Known Gaps & Follow-ups

- [ ] **Lighthouse 100 score not verified**
  - The AGENTS.md targets a 100 Lighthouse score. No audit has been run. Performance depends on asset optimization (e.g., `profile.jpg` is 1.1M and unoptimized) and hosting setup.

- [ ] **Profile image is a placeholder**
  - `public/profile.jpg` is a generic 1.1M file. Replace with the actual developer photo and consider compression/responsive sizing.

- [ ] **All content is dummy/placeholder data**
  - Project links (`github.com/portfolio/...`), social URLs (`yourusername`), and email (`you@example.com`) are placeholders. Must be replaced with real values before deployment.

- [ ] **Lucide brand icons missing (v1 dropped them)**
  - `Github`, `LinkedIn`, `Twitter` were removed from `lucide-react` v1. We substituted `GitGraph`, `Send`, `AtSign` as stand-ins. For accurate brand icons, add `react-icons` (e.g., `react-icons/fa` / `react-icons/si`) or inline SVGs.

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
- [x] Light mode too basic → soft off-white + emerald/crimson gradient + subtle grid.
- [x] AGENTS.md mandatory task-tracking instruction added (Section 0).

## Suggested Next Steps
1. Replace placeholder content (photo, links, email).
2. Add real brand icons via `react-icons` or inline SVG.
3. Run a Lighthouse audit and optimize `profile.jpg`.
4. Add `lint` / `typecheck` / `audit` scripts to `package.json`.
5. Configure deployment (adapter + CI).
