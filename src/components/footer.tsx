import { Github, Linkedin, Mail, Globe, Twitter } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A curated collection of essential DevOps and Cloud repositories to help you learn and grow as a DevOps Engineer.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#tech-stack" className="hover:text-primary transition-colors">Tech Stack</a>
              </li>
              <li>
                <a href="#all-repositories" className="hover:text-primary transition-colors">All Repositories</a>
              </li>
              <li>
                <a href="https://github.com/NotHarshhaa/github-repo-status-tracker" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Source Code</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:harshhaa03@gmail.com" className="hover:text-primary transition-colors">harshhaa03@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <a href="https://notharshhaa.site" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">notharshhaa.site</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/NotHarshhaa"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/harshhaa-vardhan-reddy"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/NotHarshhaa"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Built with ❤️ by{' '}
            <a
              href="https://github.com/NotHarshhaa"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              Harshhaa
            </a>
          </p>
          <div className="text-sm text-muted-foreground">
            <a
              href="https://github.com/NotHarshhaa/github-repo-status-tracker"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 