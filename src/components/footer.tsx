import { Github, Linkedin, Mail, Globe, Twitter } from 'lucide-react'
import { Frame, FrameBody, FrameGrid, FrameGridCell, FrameHeader } from '@/components/frame'
import { HoverMark } from '@/components/hover-mark'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-10 w-full">
      <Frame>
        <FrameHeader label="Footer" />
        <FrameBody>
          <FrameGrid className="lg:grid-cols-4">
            <FrameGridCell label="About">
              <p className="text-sm leading-relaxed text-muted-foreground">
                A curated collection of essential DevOps and Cloud repositories to help you learn and grow as a DevOps Engineer.
              </p>
            </FrameGridCell>

            <FrameGridCell label="Quick Links">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <HoverMark showOnFocus={false}>
                    <a href="#tech-stack" className="block py-1 hover:text-foreground">Tech Stack</a>
                  </HoverMark>
                </li>
                <li>
                  <HoverMark showOnFocus={false}>
                    <a href="#all-repositories" className="block py-1 hover:text-foreground">All Repositories</a>
                  </HoverMark>
                </li>
                <li>
                  <HoverMark showOnFocus={false}>
                    <a href="https://github.com/NotHarshhaa/github-repo-status-tracker" target="_blank" rel="noreferrer" className="block py-1 hover:text-foreground">Source Code</a>
                  </HoverMark>
                </li>
              </ul>
            </FrameGridCell>

            <FrameGridCell label="Contact">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0" />
                  <a href="mailto:harshhaa03@gmail.com" className="hover:text-foreground">harshhaa03@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="size-4 shrink-0" />
                  <a href="https://harshhaareddy.site" target="_blank" rel="noreferrer" className="hover:text-foreground">harshhaareddy.site</a>
                </li>
              </ul>
            </FrameGridCell>

            <FrameGridCell label="Connect">
              <div className="flex items-center gap-3">
                <a href="https://github.com/NotHarshhaa" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
                  <Github className="size-5" />
                </a>
                <a href="https://www.linkedin.com/in/harshhaa-vardhan-reddy" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                  <Linkedin className="size-5" />
                </a>
                <a href="https://twitter.com/NotHarshhaa" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                  <Twitter className="size-5" />
                </a>
              </div>
            </FrameGridCell>
          </FrameGrid>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-5 text-sm text-muted-foreground md:flex-row">
            <p>
              © {currentYear} Built by{' '}
              <a href="https://github.com/NotHarshhaa" target="_blank" rel="noreferrer" className="font-medium hover:text-foreground">
                Harshhaa
              </a>
            </p>
            <a
              href="https://github.com/NotHarshhaa/github-repo-status-tracker"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              View Source Code
            </a>
          </div>
        </FrameBody>
      </Frame>
    </footer>
  )
}
