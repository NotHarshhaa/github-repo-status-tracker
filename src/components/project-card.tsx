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
      <Card className="flex flex-col overflow-visible border border-border bg-card text-card-foreground p-6 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="mb-2">
          <div className="space-y-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2 flex-wrap">
              {title}
              {link && <span className="h-2 w-2 rounded-full bg-green-500" />}
              {status && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        className={cn(
                          'text-[10px] px-2 py-0.5 rounded-md capitalize cursor-default',
                          status === 'active'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        )}
                      >
                        {status}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent side="top">{statusTooltip}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </CardTitle>

            {link && (
              <div className="hidden font-mono text-sm text-muted-foreground underline print:visible">
                {link.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')}
              </div>
            )}

            <CardDescription className="font-mono text-sm text-muted-foreground">
              {description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge
                className="px-2 py-0.5 text-[11px] font-medium rounded-md"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {(stars != null || forks != null || issues != null || lastUpdated || lastCommit) && (
            <div className="text-xs text-muted-foreground font-mono flex gap-4 flex-wrap items-center">
              {stars != null && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-4 w-4" /> {stars}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{stars} stars</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {forks != null && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-4 w-4" /> {forks}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{forks} forks</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {issues != null && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1">
                      <Bug className="h-4 w-4" /> {issues}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{issues} open issues</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {lastUpdated && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="relative inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {new Date(lastUpdated).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    <p>
                      Last updated on{' '}
                      {new Date(lastUpdated).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </TooltipContent>
                </Tooltip>
              )}
              {lastCommit && (
                <Tooltip>
                  <button
                    onClick={() =>
                      link && window.open(`https://github.com/${link.split("github.com/")[1]}/commit/${lastCommit}`, "_blank")
                    }
                    className="inline-flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors
                            bg-blue-100 text-blue-800 hover:bg-blue-200
                            dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
                  >
                    <GitCommit className="h-4 w-4" />
                    {lastCommit.slice(0, 7)}
                  </button>
                </Tooltip>
              )}
            </div>
          )}

          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="w-fit">
              <Button variant="github" className="flex items-center gap-2 text-sm">
                <Github className="h-5 w-5" />
                View on GitHub
              </Button>
            </a>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
