import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        <div className="flex items-center">
          <span className="font-mono text-[18px] font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <span className="text-yellow-400 dark:text-yellow-300">while</span>{' '}
            <span className="text-emerald-400 dark:text-emerald-300">(</span>
            <span className="text-red-500 dark:text-red-200">alive</span>
            <span className="text-emerald-400 dark:text-emerald-300">)</span>{' '}
            <span className="text-emerald-400 dark:text-emerald-300">ship</span>
            <span className="text-zinc-500 dark:text-zinc-400">()</span>;
          </span>
        </div>

        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-emerald transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (!target) return;
                  const top = target.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ behavior: 'smooth', top });
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3 pl-2 sm:pl-4 sm:border-l sm:border-zinc-200 sm:dark:border-zinc-800">
            <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-zinc-400 to-zinc-600">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Vineet Yadav"
                width={40}
                height={40}
                className="block w-9 h-9 rounded-lg object-cover bg-white"
              />
            </div>
            <div className="leading-tight">
              <div className="text-emerald-500 dark:text-emerald-300 font-semibold text-sm">
                Vineet Yadav
              </div>
              <div className="text-zinc-500 dark:text-zinc-400 text-[11px]">
                Full-Stack / GenAI / AWS
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-emerald hover:bg-emerald/10 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}