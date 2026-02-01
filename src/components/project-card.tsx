'use client'

import React, { useMemo, memo, useState } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Star, GitFork, Bug, Clock, Github, GitCommit } from 'lucide-react'
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
}: Props) {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null)

  const statusInfo = useMemo(() => {
    if (!lastUpdated) return { status: undefined as 'active' | 'inactive' | undefined, statusTooltip: '' };
    
    const last = new Date(lastUpdated);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
    const status = diffDays <= 90 ? 'active' : 'inactive';
    const statusTooltip = `${diffDays} day${diffDays === 1 ? '' : 's'} since last update`;
    
    return { status, statusTooltip };
  }, [lastUpdated]);

  const formattedDate = useMemo(() => {
    if (!lastUpdated) return '';
    return new Date(lastUpdated).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }, [lastUpdated]);

  const fullFormattedDate = useMemo(() => {
    if (!lastUpdated) return '';
    return new Date(lastUpdated).toLocaleDateString();
  }, [lastUpdated]);

  const cardClasses = useMemo(() => 
    "flex flex-col overflow-visible border border-border/50 bg-card/50 backdrop-blur-sm text-card-foreground p-4 shadow-lg rounded-xl contain-layout style-contained transition-transform hover:scale-[1.02]",
    []
  );

  return (
    <Card className={cardClasses}>
      <CardHeader className="mb-4 p-0 space-y-3">
        <div className="space-y-3">
          <CardTitle className="text-xl font-bold flex items-center gap-2 flex-wrap">
            {title}
            {link && (
              <span className="h-2 w-2 rounded-full bg-green-500" />
            )}
            {statusInfo.status && (
              <Badge
                className={cn(
                  'text-[11px] px-2.5 py-1 rounded-full font-medium capitalize cursor-default',
                  statusInfo.status === 'active'
                    ? 'bg-green-100/80 text-green-800 dark:bg-green-900/80 dark:text-green-300'
                    : 'bg-red-100/80 text-red-800 dark:bg-red-900/80 dark:text-red-300'
                )}
              >
                {statusInfo.status}
              </Badge>
            )}
          </CardTitle>

            {link && (
              <div className="hidden font-mono text-sm text-muted-foreground/80 underline print:visible">
                {link.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')}
              </div>
            )}

            <CardDescription className="font-mono text-sm text-muted-foreground/90 leading-relaxed">
              {description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col gap-5 p-0">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {(stars != null || forks != null || issues != null || lastUpdated || lastCommit) && (
            <div className="relative">
              <div className="text-xs text-muted-foreground/90 font-mono flex gap-5 flex-wrap items-center">
                {stars != null && (
                  <span 
                    className="inline-flex items-center gap-1.5 cursor-help"
                    onMouseEnter={() => setHoveredStat('stars')}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <Star className="h-4 w-4" /> {stars.toLocaleString()}
                  </span>
                )}
                {forks != null && (
                  <span 
                    className="inline-flex items-center gap-1.5 cursor-help"
                    onMouseEnter={() => setHoveredStat('forks')}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <GitFork className="h-4 w-4" /> {forks.toLocaleString()}
                  </span>
                )}
                {issues != null && (
                  <span 
                    className="inline-flex items-center gap-1.5 cursor-help"
                    onMouseEnter={() => setHoveredStat('issues')}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <Bug className="h-4 w-4" /> {issues.toLocaleString()}
                  </span>
                )}
                {lastUpdated && (
                  <span 
                    className="inline-flex items-center gap-1.5 cursor-help"
                    onMouseEnter={() => setHoveredStat('updated')}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <Clock className="h-4 w-4" />
                    {formattedDate}
                  </span>
                )}
                {lastCommit && (
                  <span 
                    className="inline-flex items-center gap-1.5 cursor-help"
                    onMouseEnter={() => setHoveredStat('commit')}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <GitCommit className="h-4 w-4" />
                    {lastCommit.slice(0, 7)}
                  </span>
                )}
              </div>
              
              {hoveredStat && (
                <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg z-10">
                  {hoveredStat === 'stars' && `${stars?.toLocaleString() || 0} stars`}
                  {hoveredStat === 'forks' && `${forks?.toLocaleString() || 0} forks`}
                  {hoveredStat === 'issues' && `${issues?.toLocaleString() || 0} issues`}
                  {hoveredStat === 'updated' && `Last updated on ${fullFormattedDate}`}
                  {hoveredStat === 'commit' && `Latest commit: ${lastCommit}`}
                </div>
              )}
            </div>
          )}

          {link && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full mt-3 text-sm h-9 bg-black text-white hover:bg-black/90 hover:text-white dark:bg-white dark:text-black dark:hover:bg-white/90 dark:hover:text-black border-0"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
  )
})
