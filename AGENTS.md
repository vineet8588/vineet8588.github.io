# Project Overview: Premium Full Stack Developer Portfolio
**Role:** You are an elite web developer AI agent. Your task to build a high-performance, recruiter-optimized portfolio website.
**Vibe/Aesthetic:** "Premium Hacker / Software Engineer". It must look stunning and highly technical in Dark Mode (deep zinc, neon emerald greens, and crimson red accents) and exceptionally clean in Light Mode. 

## 0. Task Tracking (MANDATORY)
- When given a new task, **begin work on it immediately** — do not wait for confirmation.
- Track ALL tasks (new and ongoing) using a todo list. When work is done, record the outcome:
  - Completed tasks → `docs/TASKS_DONE.md`
  - Incomplete / pending / follow-up tasks → `docs/TASKS_PENDING.md`
- Every contributor (human or agent) must follow this convention so task state stays consistent across the project.

## 1. Absolute Constraints & Tech Stack
*   **Framework:** Astro (latest version).
*   **UI Library:** React.
*   **Styling:** Tailwind CSS.
*   **Components:** shadcn/ui.
*   **CRITICAL DIRECTIVE:** YOU MUST NOT USE NEXT.JS OR NEXT/LINK/IMAGE. This is an Astro project. All routing and server-rendered layouts must use `.astro` files. All interactive UI elements must use `.tsx` files.
*   **Performance:** Optimize for a 100 Lighthouse score. Use Astro's `client:visible` for below-the-fold React components to defer hydration.

## 2. Initialization & Configuration
1.  Initialize Astro with the minimal template. Add React (`npx astro add react`) and Tailwind (`npx astro add tailwind`).
2.  Install Lucide React for icons: `npm install lucide-react`
3.  **Tailwind Configuration (`tailwind.config.mjs`):** 
    *   Ensure `darkMode: 'class'` is enabled.
    *   Add custom font families if necessary (sans: standard sans-serif, mono: for terminal vibes).
4.  **Global Dark Mode Script (`src/pages/index.astro` `<head>`):**
    *   Inject this exact inline script to prevent theme flickering (FOUC):
    ```html
    <script is:inline>
      const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      })();
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      window.localStorage.setItem('theme', theme);
    </script>
    ```

## 3. Asset Management (Provided by User)
1.  **`profile.jpg`**: Move to `public/profile.jpg`.
2.  **`ascii.txt`**: Move to `src/assets/ascii.txt`. Import this file into the Astro page using Vite's raw loader: `import asciiArt from '../assets/ascii.txt?raw';`

## 4. Component Specifications (Build in `src/components/`)

### A. `Navbar.tsx` (Interactive: `client:load`)
*   **Style:** Fixed top, `z-50`, glassmorphism (`backdrop-blur-md bg-white/70 dark:bg-zinc-950/70`), bottom border (`border-b border-zinc-200 dark:border-zinc-800`).
*   **Content:**
    *   Left: Brand logo text `const portfolio = new Developer();` styled with syntax highlighting colors (e.g., `const` in red, `portfolio` in green).
    *   Right: Links (`#projects`, `#experience`, `#skills`) and a `ThemeToggle` button (swaps Sun/Moon icons from Lucide, updates `document.documentElement` class and `localStorage`).

### B. `TerminalHero.tsx` (Hero Section)
*   **Props:** `{ asciiText: string }`.
*   **Layout:** Two columns. Left: ASCII Art. Right: Neofetch-style terminal info.
*   **Style:** Wrap the entire terminal in a container with a subtle glow: `shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-900/20 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden`. 
*   **Terminal Header bar:** Darker background, three macOS-style dots (red, yellow, green) on the left.
*   **ASCII Side:** `<pre>` tag, `font-mono text-[10px] leading-none text-zinc-400`.
*   **Data Side:** Use orange for keys, zinc for spacer dots, emerald for values. 
    *   Include dummy recruiter-focused data: `Role: Full Stack GenAI Engineer`, `Location: Remote / Earth`, `Clearance: Ready to build`, `Focus: Scalable architectures & LLM integrations`.

### C. `SkillsMatrix.tsx`
*   **Purpose:** Recruiters scan for keywords. Make them pop.
*   **Layout:** A CSS grid of category cards (Frontend, Backend, Cloud/AWS, AI/ML).
*   **Card Style:** `bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg hover:border-emerald-500 transition-colors`.
*   **Pills/Badges:** Within each category card, map through an array of skills and render them as small pill-shaped tags.
    *   **Tag Style:** `px-3 py-1 text-xs font-mono rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20`.
    *   **Dummy Data:** React, TypeScript, Astro, Node.js, Python, AWS EC2, AWS Lambda, S3, LangChain, OpenAI API, Vector DBs.

### D. `FeaturedProjects.tsx`
*   **Purpose:** Proof of work.
*   **Layout:** 2-column grid (`grid-cols-1 md:grid-cols-2 gap-8`).
*   **Project Card Style:** Use Tailwind's `group` class. The card should have `hover:-translate-y-2 transition-transform duration-300`. 
*   **Card Content:**
    *   **Top:** A placeholder div for an image (`aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-t-lg`).
    *   **Body:** Project Title, brief 2-sentence description of the *business value* and technical challenge solved.
    *   **Tech Stack:** A horizontal row of text highlighting the stack (e.g., `React • AWS • Python`).
    *   **Links:** Two buttons (GitHub icon for repo, ExternalLink icon for live demo).

### E. `ExperienceTimeline.tsx`
*   **Purpose:** Shows career progression.
*   **Layout:** A vertical timeline layout. Use a left border (`border-l-2 border-zinc-200 dark:border-zinc-800`) to represent the line, with absolute positioned dots on the line for each job.
*   **Item Content:**
    *   **Date:** e.g., `2022 - Present`. Font-mono, small, muted.
    *   **Role & Company:** `Senior Full Stack Engineer @ TechCorp`.
    *   **Bullets:** 2-3 bullet points emphasizing quantifiable metrics (e.g., *"Architected AWS serverless backend reducing costs by 40%"*, *"Integrated RAG-based LLM chatbot improving customer retention by 15%"*).

### F. `ContactFooter.tsx`
*   **Layout:** A wide, centered CTA section followed by a standard footer.
*   **CTA:** Large text: "Ready to build something impactful?". A glowing primary button: `Let's Talk` (mailto link).
*   **Footer:** Flex container with Lucide icons (GitHub, LinkedIn, Twitter). Include a small note: `Built with Astro & React. No Next.js harmed in the making.`

## 5. Page Assembly (`src/pages/index.astro`)
*   **Structure:**
    ```astro
    ---
    // Import all components here
    import asciiArt from '../assets/ascii.txt?raw';
    ---
    <html lang="en">
      <head>
        <!-- Add the dark mode script from Section 2 here -->
      </head>
      <body class="bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-100 min-h-screen font-sans antialiased selection:bg-emerald-500/30">
        <Navbar client:load/>
        
        <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-32">
           <!-- Hero Section -->
           <section id="hero">
             <TerminalHero asciiText="{asciiArt}" client:load/>
           </section>

           <!-- About/Skills Section -->
           <section id="skills" class="space-y-8">
             <h2 class="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
             <SkillsMatrix client:visible/>
           </section>

           <!-- Projects Section -->
           <section id="projects" class="space-y-8">
             <h2 class="text-3xl font-bold tracking-tight">Featured Architecture & Projects</h2>
             <FeaturedProjects client:visible/>
           </section>

           <!-- Experience Section -->
           <section id="experience" class="space-y-8">
             <h2 class="text-3xl font-bold tracking-tight">Command History (Experience)</h2>
             <ExperienceTimeline client:visible/>
           </section>
        </main>

        <ContactFooter client:visible/>
      </body>
    </html>
    ```

## 6. Execution Phase
Write the complete code for every file specified. Output the exact contents for the Astro config, Tailwind config, and all `.tsx` and `.astro` files. Use robust, fully-typed Tailwind classes. Do not leave placeholder comments like "add logic here" — write out the full dummy data arrays and render loops.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
