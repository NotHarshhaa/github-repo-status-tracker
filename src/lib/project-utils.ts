export type ProjectItem = {
  title: string
  techStack: readonly string[] | string[]
  description: string
  link?: { label: string; href: string }
  stars?: number
  forks?: number
  issues?: number
  lastUpdated?: string
  lastCommit?: string
}

export type SortOption = 'stars' | 'forks' | 'updated' | 'name'
export type StatusFilter = 'all' | 'active' | 'inactive'

export function getRepoSlug(project: ProjectItem) {
  return project.link?.href.split('/').pop() ?? project.title
}

export function isProjectActive(project: ProjectItem, days = 90) {
  if (!project.lastUpdated) return false
  const last = new Date(project.lastUpdated)
  const now = new Date()
  const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24))
  return diffDays <= days
}

export function getProjectStats(projects: ProjectItem[]) {
  return {
    total: projects.length,
    active: projects.filter((project) => isProjectActive(project)).length,
    stars: projects.reduce((sum, project) => sum + (project.stars || 0), 0),
    forks: projects.reduce((sum, project) => sum + (project.forks || 0), 0),
  }
}

export function filterProjects(
  projects: ProjectItem[],
  query: string,
  status: StatusFilter,
) {
  const normalizedQuery = query.trim().toLowerCase()

  return projects.filter((project) => {
    const matchesStatus =
      status === 'all' ||
      (status === 'active' && isProjectActive(project)) ||
      (status === 'inactive' && !isProjectActive(project))

    if (!matchesStatus) return false
    if (!normalizedQuery) return true

    const haystack = [
      project.title,
      project.description,
      getRepoSlug(project),
      ...project.techStack,
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(normalizedQuery)
  })
}

export function sortProjects(projects: ProjectItem[], sortBy: SortOption) {
  const sorted = [...projects]

  sorted.sort((a, b) => {
    if (sortBy === 'name') {
      return a.title.localeCompare(b.title)
    }

    if (sortBy === 'updated') {
      return new Date(b.lastUpdated || 0).getTime() - new Date(a.lastUpdated || 0).getTime()
    }

    if (sortBy === 'forks') {
      return (b.forks || 0) - (a.forks || 0)
    }

    return (b.stars || 0) - (a.stars || 0)
  })

  return sorted
}
