import { Github, Info, Layers, FolderGit2, Sun, Moon, ArrowDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { ButtonLink } from '@/components/button-link';
import { data } from '@/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className="w-full bg-background relative">
      {/* Main Navigation Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Github className="h-8 w-8 text-primary" />
            <span className="font-semibold text-xl tracking-tight">
              <span className="text-primary">DevOps-</span>
              <span>GitHub Repos</span>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#about" icon={<Info className="h-4 w-4" />} text="About" />
            <NavLink href="#tech-stack" icon={<Layers className="h-4 w-4" />} text="Tech Stack" />
            <NavLink href="#all-repositories" icon={<FolderGit2 className="h-4 w-4" />} text="Repositories" />
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          "transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm",
            "transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[280px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
            "border-l border-border/40 p-6",
            "transform transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex justify-end mb-6">
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-4">
              <a
                href="#about"
                onClick={closeMenu}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Info className="h-5 w-5" />
                <span className="font-medium">About</span>
              </a>
              <a
                href="#tech-stack"
                onClick={closeMenu}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Layers className="h-5 w-5" />
                <span className="font-medium">Tech Stack</span>
              </a>
              <a
                href="#all-repositories"
                onClick={closeMenu}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FolderGit2 className="h-5 w-5" />
                <span className="font-medium">Repositories</span>
              </a>
            </nav>

            {/* Theme Toggle */}
            <div className="mt-6">
              <button
                onClick={() => {
                  setTheme(isDark ? 'light' : 'dark');
                  closeMenu();
                }}
                className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? (
                  <>
                    <Sun className="h-5 w-5" />
                    <span className="font-medium">Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" />
                    <span className="font-medium">Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Most Useful DevOps/Cloud GitHub Repositories for Learning and Become a Professional DevOps Engineer
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            This page features a curated list of the most useful DevOps and Cloud GitHub repositories to help you learn essential skills and become a professional DevOps Engineer.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#all-repositories"
                className={cn(
                  "group relative px-6 py-3 w-full sm:w-auto text-center",
                  "bg-primary text-primary-foreground font-semibold rounded-lg",
                  "shadow-[0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.1)]",
                  "transform transition-all duration-200",
                  "hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]",
                  "active:scale-[0.98]"
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Repos Below
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </span>
                <div className="absolute inset-0 rounded-lg border border-primary/50"></div>
              </a>
              <a 
                href="https://github.com/NotHarshhaa/github-repo-status-tracker"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "group relative px-6 py-3 w-full sm:w-auto text-center",
                  "bg-background text-foreground font-semibold rounded-lg",
                  "border border-border/50 hover:border-border",
                  "shadow-[0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.1)]",
                  "transform transition-all duration-200",
                  "hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]",
                  "active:scale-[0.98]"
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <Github className="h-4 w-4 transition-transform group-hover:rotate-3" />
                </span>
                <div className="absolute inset-0 rounded-lg border border-border/50 group-hover:border-border"></div>
              </a>
            </div>
            <div className="flex justify-start">
              <ButtonLink data={data} />
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}

// Navigation Link Component
const NavLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
  >
    {icon}
    <span className="font-medium">{text}</span>
  </a>
);
