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
import { Star, GitFork, Bug, Clock, Github } from 'lucide-react'

interface Props {
  title: string
  description: string
  tags: readonly string[]
  link?: string
  stars?: number
  forks?: number
  issues?: number
  lastUpdated?: string
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
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-border bg-card text-card-foreground p-6 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="mb-2">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            {title}
            {link && <span className="h-2 w-2 rounded-full bg-green-500" />}
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

        {(stars != null || forks != null || issues != null || lastUpdated) && (
          <div className="text-xs text-muted-foreground font-mono flex gap-4 flex-wrap items-center">
            {stars != null && (
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4" /> {stars}
              </span>
            )}
            {forks != null && (
              <span className="inline-flex items-center gap-1">
                <GitFork className="h-4 w-4" /> {forks}
              </span>
            )}
            {issues != null && (
              <span className="inline-flex items-center gap-1">
                <Bug className="h-4 w-4" /> {issues}
              </span>
            )}
            {lastUpdated && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {new Date(lastUpdated).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        )}

        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="w-fit">
            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <Github className="h-5 w-5" />
              View on GitHub
            </Button>
          </a>
        )}
      </CardContent>
    </Card>
  )
}
