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
      <Card className="group flex flex-col overflow-visible border border-border/50 bg-card/50 backdrop-blur-sm text-card-foreground p-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl hover:border-border/80 hover:bg-card/80">
        <CardHeader className="mb-4">
          <div className="space-y-3">
            <CardTitle className="text-xl font-bold flex items-center gap-2 flex-wrap group-hover:text-primary transition-colors">
              {title}
              {link && (
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              )}
              {status && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        className={cn(
                          'text-[11px] px-2.5 py-1 rounded-full font-medium capitalize cursor-default transition-colors',
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
              <div className="hidden font-mono text-sm text-muted-foreground/80 underline print:visible">
                {link.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')}
              </div>
            )}

            <CardDescription className="font-mono text-sm text-muted-foreground/90 leading-relaxed">
              {description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {(stars != null || forks != null || issues != null || lastUpdated || lastCommit) && (
            <div className="text-xs text-muted-foreground/90 font-mono flex gap-5 flex-wrap items-center">
              {stars != null && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Star className="h-4 w-4" /> {stars.toLocaleString()}
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
                    <span className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                      <GitFork className="h-4 w-4" /> {forks.toLocaleString()}
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
                    <span className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Bug className="h-4 w-4" /> {issues.toLocaleString()}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    <p>{issues.toLocaleString()} open issues</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {lastUpdated && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="relative inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Clock className="h-4 w-4" />
                      {new Date(lastUpdated).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center" className="text-xs">
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
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full transition-all
                            bg-blue-100/80 text-blue-800 hover:bg-blue-200/80 hover:scale-105
                            dark:bg-blue-900/80 dark:text-blue-200 dark:hover:bg-blue-800/80"
                  >
                    <GitCommit className="h-3.5 w-3.5" />
                    {lastCommit.slice(0, 7)}
                  </button>
                </Tooltip>
              )}
            </div>
          )}

          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer" 
              className="w-fit mt-2"
            >
              <Button 
                variant="github" 
                className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
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
