'use client'

import { Search, SlidersHorizontal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { SortOption, StatusFilter } from '@/lib/project-utils'

type Props = {
  query: string
  sortBy: SortOption
  status: StatusFilter
  visibleCount: number
  totalCount: number
  onQueryChange: (value: string) => void
  onSortChange: (value: SortOption) => void
  onStatusChange: (value: StatusFilter) => void
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'stars', label: 'Most stars' },
  { value: 'forks', label: 'Most forks' },
  { value: 'updated', label: 'Recently updated' },
  { value: 'name', label: 'Name (A-Z)' },
]

const statusOptions: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
]

export function RepoToolbar({
  query,
  sortBy,
  status,
  visibleCount,
  totalCount,
  onQueryChange,
  onSortChange,
  onStatusChange,
}: Props) {
  return (
    <div className="space-y-4 rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search repositories, topics, or tech stack..."
            className={cn(
              'h-11 w-full rounded-lg border border-border/60 bg-background/80 pl-10 pr-4 text-sm',
              'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
            )}
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          <span>
            Showing <strong className="text-foreground">{visibleCount}</strong> of{' '}
            <strong className="text-foreground">{totalCount}</strong>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((option) => (
            <button key={option.value} type="button" onClick={() => onStatusChange(option.value)}>
              <Badge
                className={cn(
                  'cursor-pointer px-3 py-1 text-xs transition-colors',
                  status === option.value
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary/60 hover:bg-secondary',
                )}
              >
                {option.label}
              </Badge>
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Sort by
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value as SortOption)}
            className="h-9 rounded-lg border border-border/60 bg-background/80 px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}
