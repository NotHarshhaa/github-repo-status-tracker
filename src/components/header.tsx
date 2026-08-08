'use client'

import { Github, Info, Layers, FolderGit2, Sun, Moon, ArrowDown, Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import { ButtonLink } from '@/components/button-link'
import { HoverMark } from '@/components/hover-mark'
import { Frame, FrameBody, FrameHeader } from '@/components/frame'
import { data } from '@/constants'
import { cn } from '@/lib/utils'
import { getProjectStats } from '@/lib/project-utils'

export function Header() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const stats = useMemo(() => getProjectStats(data.projects), [data.projects])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="w-full">
      <Frame className="border-b-0">
        <FrameHeader label="DevOps GitHub Repos">
          <div className="flex items-center gap-2">
            <Github className="size-4 text-muted-foreground" />
            <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
              {stats.total} tracked
            </span>
          </div>
        </FrameHeader>
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-5">
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink href="#about" icon={<Info className="size-4" />} text="About" />
            <NavLink href="#tech-stack" icon={<Layers className="size-4" />} text="Tech Stack" />
            <NavLink href="#all-repositories" icon={<FolderGit2 className="size-4" />} text="Repositories" />
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="hidden size-9 items-center justify-center border border-border md:inline-flex"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex size-9 items-center justify-center border border-border md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-b border-border px-4 py-3 md:hidden">
            <nav className="flex flex-col gap-1">
              <MobileNavLink href="#about" onClick={closeMenu} text="About" />
              <MobileNavLink href="#tech-stack" onClick={closeMenu} text="Tech Stack" />
              <MobileNavLink href="#all-repositories" onClick={closeMenu} text="Repositories" />
              <button
                type="button"
                onClick={() => {
                  setTheme(isDark ? 'light' : 'dark')
                  closeMenu()
                }}
                className="flex items-center gap-2 px-2 py-2 text-sm"
              >
                {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
                {isDark ? 'Light mode' : 'Dark mode'}
              </button>
            </nav>
          </div>
        )}
      </Frame>

      <Frame as="section" className="mt-8">
        <FrameHeader label="Portfolio / Repos" />
        <FrameBody className="space-y-6">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Most Useful DevOps/Cloud GitHub Repositories for Learning
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              A curated list of DevOps and Cloud GitHub repositories to help you learn essential skills and become a professional DevOps Engineer.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              {stats.total} repositories · {stats.stars.toLocaleString()} combined stars · search, filter, and sort below
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#all-repositories"
              className="inline-flex items-center justify-center gap-2 border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Explore Repos Below
              <ArrowDown className="size-4" />
            </a>
            <a
              href="https://github.com/NotHarshhaa/github-repo-status-tracker"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Source on GitHub
              <Github className="size-4" />
            </a>
          </div>

          <ButtonLink data={data} />
        </FrameBody>
      </Frame>
    </header>
  )
}

function NavLink({
  href,
  icon,
  text,
}: {
  href: string
  icon: React.ReactNode
  text: string
}) {
  return (
    <HoverMark showOnFocus={false} className="px-1">
      <a
        href={href}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
      >
        {icon}
        {text}
      </a>
    </HoverMark>
  )
}

function MobileNavLink({
  href,
  onClick,
  text,
}: {
  href: string
  onClick: () => void
  text: string
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-2 py-2 text-sm font-medium hover:bg-muted"
    >
      {text}
    </a>
  )
}
