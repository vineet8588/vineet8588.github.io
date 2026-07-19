import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex">
          <span className="font-mono text-[18px] font-semibold text-zinc-800 dark:text-zinc-100">
            <span className="text-red-500 dark:text-red-200">const</span>{' '}
            <span className="text-emerald-400 dark:text-emerald-300">portfolio</span>{' '}
            <span className="text-red-500 dark:text-red-200">=</span>{' '}
            <span className="text-yellow-400 dark:text-yellow-300">new</span>{' '}
            <span className="text-emerald-400 dark:text-emerald-300">Developer</span>;
          </span>
        </div>

        <div className="hidden sm:inline-block space-x-6">
          <div className="flex items-center space-x-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    behavior: 'smooth',
                    top: document.querySelector(link.href)?.getBoundingClientRect().top || 0
                  });
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
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