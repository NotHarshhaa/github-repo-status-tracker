'use client'

import { memo, useMemo } from 'react'
import { ArrowUpRight, Bug, Clock, GitCommit, GitFork, Star } from 'lucide-react'
import { Badge } from './ui/badge'
import { HoverMark } from './hover-mark'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  description: string
  tags: readonly string[]
  link?: string
  stars?: number
  forks?: number
  issues?: number
  lastUpdated?: string
  lastCommit?: string
  isLast?: boolean
}

export const ProjectCard = memo(function ProjectCard({
  title,
  description,
  tags,
  link,
  stars,
  forks,
  issues,
  lastUpdated,
  lastCommit,
  isLast = false,
}: Props) {
  const statusInfo = useMemo(() => {
    if (!lastUpdated) return { status: undefined as 'active' | 'inactive' | undefined }

    const last = new Date(lastUpdated)
    const now = new Date()
    const diffDays = Math.floor(
      (now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)
    )
    return { status: diffDays <= 90 ? 'active' : 'inactive' } as const
  }, [lastUpdated])

  const formattedDate = useMemo(() => {
    if (!lastUpdated) return ''
    return new Date(lastUpdated).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }, [lastUpdated])

  const statParts = [
    stars != null ? { icon: Star, label: `${stars.toLocaleString()} stars` } : null,
    forks != null ? { icon: GitFork, label: `${forks.toLocaleString()} forks` } : null,
    issues != null ? { icon: Bug, label: `${issues.toLocaleString()} issues` } : null,
    lastUpdated
      ? { icon: Clock, label: `Updated ${formattedDate}` }
      : null,
    lastCommit
      ? { icon: GitCommit, label: lastCommit.slice(0, 7) }
      : null,
  ].filter(Boolean) as { icon: typeof Star; label: string }[]

  return (
    <HoverMark
      as="li"
      label={link ? 'Open' : undefined}
      disabled={!link}
      showOnFocus={false}
      className={cn(!isLast && 'border-b border-border')}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-5 sm:py-6',
          !link && 'pointer-events-none'
        )}
      >
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="inline-flex items-center gap-1.5 text-base font-semibold tracking-tight">
              {title}
              {link && <ArrowUpRight className="size-3.5 opacity-40" />}
            </h3>
            {statusInfo.status && (
              <Badge
                variant={statusInfo.status === 'active' ? 'default' : 'outline'}
                className="text-[10px] uppercase tracking-wide"
              >
                {statusInfo.status}
              </Badge>
            )}
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {tags.length > 0 && (
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="font-mono text-[11px] text-muted-foreground/80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {statParts.length > 0 && (
          <div className="flex shrink-0 flex-wrap gap-x-4 gap-y-2 sm:max-w-xs sm:justify-end">
            {statParts.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground"
              >
                <Icon className="size-3.5 shrink-0" />
                {label}
              </span>
            ))}
          </div>
        )}
      </a>
    </HoverMark>
  )
})
