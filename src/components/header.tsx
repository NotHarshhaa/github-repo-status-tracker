import { Cloud, Github, Menu, Info, Layers, FolderGit2 } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const [open, setOpen] = useState(false);
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
            <div className="absolute right-0 top-14 w-56 rounded-3xl bg-background/90 backdrop-blur-2xl border border-primary/20 shadow-2xl py-2 z-50 animate-fadein flex flex-col gap-1">
              <a
                href="#about"
                className="flex items-center gap-2 px-5 py-3 text-primary hover:bg-primary/10 rounded-2xl transition-colors font-semibold text-base"
                onClick={() => setOpen(false)}
              >
                <Info className="h-5 w-5" /> About
              </a>
              <a
                href="#tech-stack"
                className="flex items-center gap-2 px-5 py-3 text-primary hover:bg-primary/10 rounded-2xl transition-colors font-semibold text-base"
                onClick={() => setOpen(false)}
              >
                <Layers className="h-5 w-5" /> Tech Stack
              </a>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-1 mx-3" />
              <a
                href="#all-repositories"
                className="flex items-center gap-2 px-5 py-3 text-primary hover:bg-primary/10 rounded-2xl transition-colors font-semibold text-base"
                onClick={() => setOpen(false)}
              >
                <FolderGit2 className="h-5 w-5" /> All Repositories
              </a>
              {/* Divider above theme toggle */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-2 mx-3" />
              <div className="flex items-center justify-center py-2">
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 md:py-28 lg:py-32 animate-fadein">
        {/* Enhanced background with radial gradient and glow */}
        <div
          className="absolute inset-0 mx-auto max-w-3xl h-full rounded-3xl bg-background/80 backdrop-blur-2xl shadow-2xl border border-primary/20 -z-10"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.13) 0%, transparent 80%), var(--tw-bg-opacity, 1)',
          }}
        />
        <div className="flex flex-col items-center gap-5">
          <Cloud className="h-20 w-20 text-blue-400 drop-shadow-2xl mb-2 animate-float-glow" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent drop-shadow-xl relative">
            DevOps/GitHub Repositories
            <span className="block h-1.5 w-2/3 mx-auto mt-3 bg-gradient-to-r from-primary/60 via-blue-400 to-primary/60 rounded-full animate-gradient-move" />
          </h1>
          <span className="text-md sm:text-xl font-semibold text-blue-500/90 tracking-wide mt-1 mb-2">
            by ProDevOpsGuy Tech
          </span>
          <p className="mt-2 max-w-2xl text-base sm:text-xl text-muted-foreground font-mono">
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
