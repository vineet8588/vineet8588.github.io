# Premium Full Stack Developer Portfolio

A high-performance, recruiter-optimized portfolio website built with **Astro**, **React**, **Tailwind CSS**, and **shadcn/ui**.

## Design Aesthetic
- **Dark Mode**: Premium hacker vibe with deep zinc backgrounds, neon emerald greens, and crimson red accents
- **Light Mode**: Exceptionally clean, professional appearance
- **Performance**: Optimized for 100 Lighthouse score with deferred React hydration

## Tech Stack
- **Framework**: Astro (latest)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React

## Project Structure
```
portfolio/
├── src/
│   ├── assets/
│   │   ├── ascii.txt          # ASCII art for terminal hero
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed navbar with brand logo + theme toggle
│   │   ├── TerminalHero.tsx    # Mac-style terminal with ASCII art
│   │   ├── SkillsMatrix.tsx    # Skill category cards with pill tags
│   │   ├── FeaturedProjects.tsx # Project grid with hover effects
│   │   ├── ExperienceTimeline.tsx # Vertical timeline of experience
│   │   ├── ContactFooter.tsx   # CTA + footer with social links
│   │   └── ui/                 # shadcn/ui components
│   ├── pages/
│   │   └── index.astro         # Main page assembly
│   └── styles/
│       └── global.css          # Tailwind + custom theme
├── public/
│   └── profile.jpg             # Profile image (placeholder)
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites
- Node.js v16+ (tested with Node v24)
- npm v7+

### Installation
```bash
# Clone or navigate to the project
cd portfolio

# Install dependencies (already done)
npm install
```

### Running Locally
```bash
# Start development server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Component Documentation

### Navbar (`Navbar.tsx`)
- Fixed top navigation with glassmorphism effect
- Brand logo: `const portfolio = new Developer();` with syntax highlighting
- Hover-animated nav links to sections (`#projects`, `#experience`, `#skills`, `#contact`)
- Sun/Moon theme toggle icons

### TerminalHero (`TerminalHero.tsx`)
- macOS-style terminal window with traffic light dots
- Left: ASCII art from `ascii.txt`
- Right: Neofetch-style info (Role, Location, Clearance, Focus)
- Neon glow border effect

### SkillsMatrix (`SkillsMatrix.tsx`)
- Grid of category cards: Frontend, Backend, Cloud/AWS, AI/ML
- Each category contains pill-shaped skill tags
- Hover effects on cards and tags

### FeaturedProjects (`FeaturedProjects.tsx`)
- 2-column responsive grid of project cards
- Hover lift effect (`hover:-translate-y-2`)
- Tech stack badges + GitHub/External links
- Image placeholder areas

### ExperienceTimeline (`ExperienceTimeline.tsx`)
- Vertical timeline with dots on a left border
- Date, role, company, and quantified bullet points
- Each entry emphasizes metrics (cost reduction, retention improvement)

### ContactFooter (`ContactFooter.tsx`)
- CTA section: "Ready to build something impactful?"
- Glowing `Let's Talk` mailto button
- Social links (GitHub, LinkedIn, Twitter)
- Footer note: "Built with Astro & React."

## Customization

### Update Content
1. **Skills**: Edit the `categories` array in `SkillsMatrix.tsx`
2. **Projects**: Edit the `projects` array in `FeaturedProjects.tsx`
3. **Experience**: Edit the `experienceEntries` array in `ExperienceTimeline.tsx`
4. **Profile Image**: Replace `public/profile.jpg` with your photo
5. **Social Links**: Update URLs in `ContactFooter.tsx`

### Theme Colors
- Edit CSS variables in `src/styles/global.css` under `:root` and `.dark`
- Primary: emerald green (`--emerald`)
- Accent: crimson red (`--crimson`)
- Dark background: zinc (`--zinc-950`)

### Add New Sections
1. Create component in `src/components/`
2. Import in `src/pages/index.astro`
3. Add with `client:visible` for below-the-fold components

## Performance Notes
- `client:load` for above-the-fold (Navbar, TerminalHero)
- `client:visible` for below-the-fold (Skills, Projects, Experience, Footer)
- Pure Astro + React islands architecture

## Build Status
- ✅ Production build passes (`npm run build`)
- ✅ All components compile without errors
- ✅ Dark/light mode toggle works
- ⚠️ Lighthouse 100 score depends on asset optimization and hosting

## Troubleshooting
- **Build fails**: Check that all lucide-react icons exist (this version removed `Github`, `LinkedIn`, `Twitter` - use `GitGraph`, `Send`, `AtSign` instead)
- **Dark mode flicker**: The inline script in `<head>` prevents FOUC
- **Astro version**: Using Astro v7 with React 19

## License
This is a portfolio template. Replace placeholder content before deploying.