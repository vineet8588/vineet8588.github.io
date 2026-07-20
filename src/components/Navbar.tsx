// Copyright © 2026 Vineet Yadav. All rights reserved.
// Portfolio source: https://github.com/vineet8588
// Original work — do not copy, clone-and-republish, or pass off as your own.
// Contact vineetyadav8588@gmail.com for permission to reuse.
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const sections = NAV_LINKS
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    const root = document.documentElement;
    if (next === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', next);
  };

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ behavior: 'smooth', top });
  };

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      activeSection === href
        ? 'text-emerald-500 dark:text-emerald-400'
        : 'text-zinc-700 dark:text-zinc-300 hover:text-emerald-400 dark:hover:text-emerald-300'
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        <div className="flex items-center min-w-0">
          {/* Desktop: code brand line */}
          <span className="hidden md:inline font-mono text-[18px] font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <span className="text-yellow-400 dark:text-yellow-300">while</span>{' '}
            <span className="text-emerald-400 dark:text-emerald-300">(</span>
            <span className="text-red-500 dark:text-red-200">alive</span>
            <span className="text-emerald-400 dark:text-emerald-300">)</span>{' '}
            <span className="text-emerald-400 dark:text-emerald-300">ship</span>
            <span className="text-zinc-500 dark:text-zinc-400">()</span>;
          </span>

          {/* Mobile: profile card */}
          <div className="flex md:hidden items-center gap-3 min-w-0">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Vineet Yadav"
              width={40}
              height={40}
              className="block w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-zinc-900 shadow-sm shadow-black/10 outline outline-1 outline-zinc-200 dark:outline-zinc-700"
            />
            <div className="leading-tight min-w-0">
              <div className="text-zinc-900 dark:text-white font-semibold text-sm truncate">
                Vineet Yadav
              </div>
              <div className="text-zinc-500 dark:text-zinc-400 text-[11px] truncate">
                Software Developer
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={linkClass(link.href)}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 pl-2 sm:pl-4 sm:border-l sm:border-zinc-200 sm:dark:border-zinc-800">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Vineet Yadav"
              width={40}
              height={40}
              className="block w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-sm shadow-black/10 outline outline-1 outline-zinc-200 dark:outline-zinc-700"
            />
            <div className="leading-tight">
              <div className="text-zinc-900 dark:text-white font-semibold text-sm">
                Vineet Yadav
              </div>
              <div className="text-zinc-500 dark:text-zinc-400 text-[11px]">
                Software Developer
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald/10 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2.5 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald/10 transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/90 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-800">
          <div className="px-4 sm:px-6 py-2">
            {/* Links */}
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-base font-medium transition-colors ${
                    activeSection === link.href
                      ? 'text-emerald-500 dark:text-emerald-400'
                      : 'text-zinc-700 dark:text-zinc-300 hover:text-emerald-400 dark:hover:text-emerald-300'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    setMenuOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}