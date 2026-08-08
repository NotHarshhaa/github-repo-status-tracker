import { FolderGit2, GitFork, Star, Zap } from 'lucide-react'
import { FrameGrid, FrameGridCell } from './frame'

type Props = {
  total: number
  active: number
  stars: number
  forks: number
}

export function RepoStats({ total, active, stars, forks }: Props) {
  const items = [
    { label: 'Repositories', value: total.toLocaleString(), icon: FolderGit2 },
    { label: 'Active (90d)', value: active.toLocaleString(), icon: Zap },
    { label: 'Total Stars', value: stars.toLocaleString(), icon: Star },
    { label: 'Total Forks', value: forks.toLocaleString(), icon: GitFork },
  ]

  return (
    <FrameGrid>
      {items.map((item) => (
        <FrameGridCell key={item.label} label={item.label}>
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
            <item.icon className="size-4 text-muted-foreground" />
          </div>
        </FrameGridCell>
      ))}
    </FrameGrid>
  )
}
