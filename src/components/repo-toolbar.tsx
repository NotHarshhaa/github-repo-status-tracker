'use client'

import { Search, SlidersHorizontal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Frame, FrameBody, FrameHeader } from '@/components/frame'
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
    <Frame>
      <FrameHeader label="Filter">
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          <SlidersHorizontal className="size-3.5" />
          {visibleCount} / {totalCount}
        </span>
      </FrameHeader>
      <FrameBody className="space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search repositories, topics, or tech stack..."
            className={cn(
              'h-10 w-full border border-border bg-background pl-10 pr-4 text-sm',
              'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40'
            )}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => onStatusChange(option.value)}
              >
                <Badge
                  variant={status === option.value ? 'default' : 'outline'}
                  className="cursor-pointer"
                >
                  {option.label}
                </Badge>
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            Sort
            <select
              value={sortBy}
              onChange={(event) =>
                onSortChange(event.target.value as SortOption)
              }
              className="h-9 border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </FrameBody>
    </Frame>
  )
}
