# Tasks Pending

This file records tasks from the project todo list that are **not yet done** or only **partially complete / requiring follow-up**.

## Known Gaps & Follow-ups

- [ ] **FeaturedProjects is a placeholder**
  - Card shows "Will Be Updated" with fake `Tech 1-4` and links to `github.com/vineet8588` + `vineetyadav.vercel.app`. Owner will replace with real projects (INFO.md has Face Recognition Entry System + LMSUIET, currently commented out in the file). Needs real per-project GitHub/live URLs. *(Owner deferred — content task, out of scope for now.)*

- [ ] **Lighthouse audit (owner-run)**
  - AGENTS.md targets a 100 Lighthouse score. Owner will run the audit and report the score back. Optimization (e.g. compress/responsive-size `profile.jpg`, hosting tuning) to be done based on the reported results. No audit executed by the agent.

- [ ] **CLAUDE.md symlink removed**
  - The `CLAUDE.md -> AGENTS.md` symlink has been deleted locally. Both files are untracked + gitignored (private), so this has no repo or deployed-site impact. Kept as a note for visibility.

- [ ] **GitHub Pages ignores `_headers`**
  - The full-strength security headers in `public/_headers` only apply on Netlify/Cloudflare. On the current GitHub Pages host, only the meta CSP in `index.astro` is enforced. If migrating hosts, `_headers` activates automatically.

- [x] **Animations — medium-impact (done)** ✅
   - [x] **CTA pulsing glow** — `animate-cta-glow` + `cta-glow` keyframe on "Let's Talk" button (ContactFooter.tsx).
   - [x] **Timeline current-job pulse** — `animate-pulse-ring` + `pulse-ring` keyframe on the "Present" (first) timeline dot (ExperienceTimeline.tsx).
   - [x] **Nav scroll-spy highlight** — `IntersectionObserver` tracks active section; matching nav link highlighted emerald in desktop + mobile (Navbar.tsx).
   - All honor `prefers-reduced-motion` (added to the reduced-motion guard + scroll-spy observer skipped under reduced motion). `astro check` 0/0/0, eslint clean, build passes.

- [x] **Animations — subtle micro-interactions (done)** ✅
   - [x] **Card hover glow** — emerald border + glow shadow on project card hover (FeaturedProjects.tsx), matching the skill-card hover glow.
   - [x] **Animated scan-line** — faint emerald scan-line sweeps the terminal hero via `animate-scanline` (`scanline` keyframe, TerminalHero.tsx).
   - Both honor `prefers-reduced-motion` (scanline disabled in reduced-motion guard; glow is a static shadow). `astro check` 0/0/0, eslint clean, build passes.

## Resolved (moved to TASKS_DONE.md)
- [x] Initial project init, config, assets, all 6 components built per spec.
- [x] ThemeToggle functional; TerminalHero glow + ASCII fixes (scrollbar/crop/green line); SkillsMatrix dark chip contrast.
- [x] Light mode warm + visible grid; dark mode regression fixed.
- [x] Filled all sections from INFO.md (SkillsMatrix 6 categories, Experience Deloitte + BGUS, Contact links, About bio + Education/Certifications).
- [x] SEO: sitemap, canonical/OG/Twitter/JSON-LD meta, robots.txt.
- [x] Security: meta CSP + Referrer-Policy + X-Content-Type-Options; `_headers` for Netlify/Cloudflare.
- [x] Timeline dot alignment fixed (`-left-[9px] top-1`).
- [x] AWS services expanded to 10 (EC2, IAM, S3, CloudWatch, ALB) + ordered most→least impressive in INFO.md/SkillsMatrix/TerminalHero.
- [x] Cert links added to About sidebar (PCAP, Coursera React/Bootstrap, Great Learning).
- [x] Private docs (AGENTS.md/CLAUDE.md/INFO.md) untracked on both branches + gitignored.
- [x] Profile image replaced with the real photo (`public/profile.jpg`, 396K, 1625×1625).
- [x] Added `lint` + `typecheck` npm scripts (ESLint flat config + `astro check`) — tooling only, no website content changed.
- [x] Removed dead `asciiArt` import in TerminalHero; typed `colorVariant` union in SkillsMatrix (typecheck clean).
- [x] Added TypeScript (Languages) and shadcn/ui (Libraries) to portfolio content per INFO.md.
- [x] Deleted `CLAUDE.md` symlink locally (untracked/gitignored; no repo/site impact).

## Suggested Next Steps
1. Populate FeaturedProjects with real projects + per-project URLs (owner task).
2. Run Lighthouse audit (owner) and optimize `profile.jpg` / hosting per results.
3. Consider migrating hosting to Netlify/Cloudflare to activate `_headers` security layer.
