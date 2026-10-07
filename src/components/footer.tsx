import { Github, Linkedin, Mail, Globe, Twitter } from 'lucide-react'
import { Frame, FrameBody, FrameGrid, FrameGridCell, FrameHeader } from '@/components/frame'
import { HoverMark } from '@/components/hover-mark'
import { siteConfig } from '@/config/site.config'

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
                {siteConfig.site.description}
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
                    <a href={siteConfig.github.url} target="_blank" rel="noreferrer" className="block py-1 hover:text-foreground">Source Code</a>
                  </HoverMark>
                </li>
              </ul>
            </FrameGridCell>

            <FrameGridCell label="Contact">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0" />
                  <a href={`mailto:${siteConfig.author.email}`} className="hover:text-foreground">{siteConfig.author.email}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="size-4 shrink-0" />
                  <a href={siteConfig.author.website} target="_blank" rel="noreferrer" className="hover:text-foreground">{siteConfig.author.website.replace('https://', '')}</a>
                </li>
              </ul>
            </FrameGridCell>

            <FrameGridCell label="Connect">
              <div className="flex items-center gap-3">
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
                  <Github className="size-5" />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                  <Linkedin className="size-5" />
                </a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                  <Twitter className="size-5" />
                </a>
              </div>
            </FrameGridCell>
          </FrameGrid>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-5 text-sm text-muted-foreground md:flex-row">
            <p>
              © {currentYear} Built by{' '}
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="font-medium hover:text-foreground">
                {siteConfig.author.name}
              </a>
            </p>
            <a
              href={siteConfig.github.url}
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
