import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { href: 'https://github.com/vineet8588', label: 'GitHub', Icon: FaGithub },
  { href: 'https://linkedin.com/in/vineetyadav8588', label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: 'mailto:vineetyadav8588@gmail.com', label: 'Email', Icon: Mail }
];

export default function ContactFooter() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      {/* CTA Section */}
      <div className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Ready to build something impactful?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-8 max-w-3xl mx-auto">
            Let's create scalable systems and innovative solutions that drive real business value together
          </p>
          <a
            href="mailto:vineetyadav8588@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium font-mono
                       bg-emerald text-emerald-foreground rounded-lg hover:bg-emerald-glow
                       hover:shadow-[0_0_20px_oklch(0.65_0.2_155/0.4)] transition-all duration-300
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald/50"
          >
            <Mail className="w-4 h-4" />
            Let's Talk
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="py-8 text-center">
        <div className="flex justify-center items-center space-x-6">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald/10 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 font-mono">
          Built with Astro & React.
        </p>
      </div>
    </footer>
  );
}