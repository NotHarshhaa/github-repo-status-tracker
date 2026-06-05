import { FolderGit2, GitFork, Star, Zap } from 'lucide-react'

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
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <item.icon className="h-4 w-4" />
            {item.label}
          </div>
          <p className="mt-2 text-2xl font-bold tracking-tight">{item.value}</p>
        </div>
      ))}
    </div>
  )
}
