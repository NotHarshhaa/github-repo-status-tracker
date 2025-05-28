'use client'

import React from 'react'
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

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

export function ProjectCard({
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
  let status: 'active' | 'inactive' | undefined = undefined
  let statusTooltip = ''

  if (lastUpdated) {
    const last = new Date(lastUpdated)
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24))
    status = diffDays <= 90 ? 'active' : 'inactive'
    statusTooltip = `${diffDays} day${diffDays === 1 ? '' : 's'} since last update`
  }

  return (
    <TooltipProvider>
      <Card className="group flex flex-col overflow-visible border border-border/50 bg-card/50 backdrop-blur-sm text-card-foreground p-3 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl hover:border-border/80 hover:bg-card/80">
        <CardHeader className="mb-2 sm:mb-4 p-0 sm:p-0 space-y-2 sm:space-y-3">
          <div className="space-y-2 sm:space-y-3">
            <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-1.5 sm:gap-2 flex-wrap group-hover:text-primary transition-colors">
              {title}
              {link && (
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500 animate-pulse" />
              )}
              {status && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        className={cn(
                          'text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium capitalize cursor-default transition-colors',
                          status === 'active'
                            ? 'bg-green-100/80 text-green-800 dark:bg-green-900/80 dark:text-green-300'
                            : 'bg-red-100/80 text-red-800 dark:bg-red-900/80 dark:text-red-300'
                        )}
                      >
                        {status}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs">{statusTooltip}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </CardTitle>

            {link && (
              <div className="hidden font-mono text-xs sm:text-sm text-muted-foreground/80 underline print:visible">
                {link.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')}
              </div>
            )}

            <CardDescription className="font-mono text-xs sm:text-sm text-muted-foreground/90 leading-relaxed">
              {description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col gap-3 sm:gap-5 p-0 sm:p-0">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map(tag => (
              <Badge
                className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {(stars != null || forks != null || issues != null || lastUpdated || lastCommit) && (
            <div className="text-[10px] sm:text-xs text-muted-foreground/90 font-mono flex gap-3 sm:gap-5 flex-wrap items-center">
              {stars != null && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4" /> {stars.toLocaleString()}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    <p>{stars.toLocaleString()} stars</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {forks != null && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                      <GitFork className="h-3 w-3 sm:h-4 sm:w-4" /> {forks.toLocaleString()}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    <p>{forks.toLocaleString()} forks</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {issues != null && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                      <Bug className="h-3 w-3 sm:h-4 sm:w-4" /> {issues.toLocaleString()}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    <p>{issues.toLocaleString()} issues</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {lastUpdated && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      {new Date(lastUpdated).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    <p>Last updated on {new Date(lastUpdated).toLocaleDateString()}</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {lastCommit && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                      <GitCommit className="h-3 w-3 sm:h-4 sm:w-4" />
                      {lastCommit.slice(0, 7)}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    <p>Latest commit: {lastCommit}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          )}

          {link && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full mt-2 sm:mt-3 text-xs sm:text-sm h-8 sm:h-9 bg-black text-white hover:bg-black/90 hover:text-white dark:bg-white dark:text-black dark:hover:bg-white/90 dark:hover:text-black border-0 transition-colors duration-200"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                View on GitHub
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
