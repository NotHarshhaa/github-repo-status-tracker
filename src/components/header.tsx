import { Cloud, Github, Menu, Info, Layers, FolderGit2, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="w-full">
      {/* Header Bar */}
      <div className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-border/30 flex items-center justify-between px-4 sm:px-8 py-4 shadow-xl rounded-b-3xl">
        <div className="flex items-center gap-2 sm:gap-3 font-extrabold text-lg sm:text-2xl tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent drop-shadow-md">
          <Github className="h-6 w-6 sm:h-7 sm:w-7 text-primary drop-shadow-lg" />
          <span className="font-logo whitespace-nowrap">GitHub Repositories Hub</span>
        </div>
        {/* Menu button only */}
        <div className="flex items-center gap-2 sm:gap-3 relative">
          <button
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-full bg-background/60 border border-primary/20 shadow-lg hover:bg-primary/10 hover:border-primary/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary hidden sm:inline">Menu</span>
          </button>
          {/* Dropdown menu */}
          {open && (
            <div className="absolute right-0 top-14 w-48 rounded-xl bg-background/95 border border-border/60 py-1 z-50 animate-fadein flex flex-col shadow-sm">
              <a
                href="#about"
                className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-primary/5 hover:border-l-2 hover:border-primary/60 rounded-none font-medium text-sm transition-colors"
                onClick={() => setOpen(false)}
              >
                <Info className="h-4 w-4" /> About
              </a>
              <a
                href="#tech-stack"
                className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-primary/5 hover:border-l-2 hover:border-primary/60 rounded-none font-medium text-sm transition-colors"
                onClick={() => setOpen(false)}
              >
                <Layers className="h-4 w-4" /> Tech Stack
              </a>
              <div className="h-px bg-border/60 my-1 mx-2" />
              <a
                href="#all-repositories"
                className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-primary/5 hover:border-l-2 hover:border-primary/60 rounded-none font-medium text-sm transition-colors"
                onClick={() => setOpen(false)}
              >
                <FolderGit2 className="h-4 w-4" /> All Repositories
              </a>
              <div className="h-px bg-border/40 my-1 mx-2" />
              <button
                className="flex items-center gap-2 px-4 py-2 w-full text-foreground hover:bg-primary/5 hover:border-l-2 hover:border-primary/60 rounded-none font-medium text-sm transition-colors"
                onClick={() => {
                  setTheme(isDark ? 'light' : 'dark');
                  setOpen(false);
                }}
                aria-label="Toggle theme"
                type="button"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-2 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 animate-fadein rounded-3xl mx-auto max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-background/80 backdrop-blur-2xl shadow-2xl border border-primary/20 mt-4 sm:mt-8 md:mt-12"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.13) 0%, transparent 80%), var(--tw-bg-opacity, 1)',
        }}
      >
        <div className="flex flex-col items-center gap-3 sm:gap-5">
          <Cloud className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-blue-400 drop-shadow-2xl mb-1 sm:mb-2 animate-float-glow" />
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent drop-shadow-xl relative">
            DevOps/Cloud GitHub Repositories
            <span className="block h-1 w-2/3 mx-auto mt-2 sm:mt-3 bg-gradient-to-r from-primary/60 via-blue-400 to-primary/60 rounded-full animate-gradient-move" />
          </h1>
          <span className="text-xs sm:text-base md:text-lg font-semibold text-blue-500/90 tracking-wide mt-1 mb-1 sm:mb-2">
            by ProDevOpsGuy Tech
          </span>
          <p className="mt-2 max-w-xl sm:max-w-2xl text-xs sm:text-base md:text-lg text-muted-foreground font-mono">
            Discover, learn, and grow with the best open-source DevOps and Cloud repositories curated for engineers and professionals.
          </p>
        </div>
      </div>
      {/* Global styles */}
      <style jsx global>{`
        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fadein {
          animation: fadein 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes float-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 16px #60a5fa);
            transform: translateY(0);
          }
          50% {
            filter: drop-shadow(0 0 32px #60a5fa);
            transform: translateY(-14px);
          }
        }
        .animate-float-glow {
          animation: float-glow 3s ease-in-out infinite;
        }

        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 2.5s linear infinite alternate;
        }
        .font-logo {
          font-family: 'Inter', 'Geist', 'Segoe UI', 'Arial', sans-serif;
          letter-spacing: -0.01em;
        }
      `}</style>
    </header>
  );
}
