'use client';

import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { ProjectCard } from '@/components/project-card'
import { RepoStats } from '@/components/repo-stats'
import { RepoToolbar } from '@/components/repo-toolbar'
import { ArrowUp } from 'lucide-react'
import { data } from '@/constants'
import { Button } from '@/components/ui/button'
import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TooltipProvider } from '@/components/ui/tooltip'
import {
  filterProjects,
  getProjectStats,
  getRepoSlug,
  sortProjects,
  type SortOption,
  type StatusFilter,
} from '@/lib/project-utils'

export default function Page() {
	const [showScrollTop, setShowScrollTop] = useState(false)
	const [query, setQuery] = useState('')
	const [sortBy, setSortBy] = useState<SortOption>('stars')
	const [status, setStatus] = useState<StatusFilter>('all')

	const stats = useMemo(() => getProjectStats(data.projects), [data.projects])

	const filteredProjects = useMemo(() => {
		const filtered = filterProjects(data.projects, query, status)
		return sortProjects(filtered, sortBy)
	}, [data.projects, query, sortBy, status])

	useEffect(() => {
		let timeoutId: NodeJS.Timeout
		let lastScrollY = 0
		
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			
			if (Math.abs(currentScrollY - lastScrollY) > 10) {
				if (timeoutId) {
					clearTimeout(timeoutId)
				}
				
				timeoutId = setTimeout(() => {
					setShowScrollTop(currentScrollY > 400)
					lastScrollY = currentScrollY
				}, 16)
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll)
			if (timeoutId) clearTimeout(timeoutId)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<TooltipProvider>
			<main className="min-h-screen bg-gradient-to-b from-background to-background/95">
				<Header />
				<div className="mx-auto max-w-[1600px] relative scroll-my-12 overflow-auto p-3 sm:p-4 md:p-6 lg:p-8 print:p-12">
				<section className="mx-auto w-full max-w-[1400px] space-y-8 sm:space-y-10 md:space-y-12 bg-background/80 text-foreground print:space-y-6 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-border/50">
					<Section id="about">
						<h2 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
							About
						</h2>
						<p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
							{data.about} This dashboard tracks <strong>{stats.total}</strong> repositories
							with live GitHub stats, updated automatically every 6 hours.
						</p>
						<div className="mt-4 sm:mt-6">
							<RepoStats
								total={stats.total}
								active={stats.active}
								stars={stats.stars}
								forks={stats.forks}
							/>
						</div>
					</Section>

					<Section id="tech-stack">
						<h2 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
							Tech Stack
						</h2>
						<div className='flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4'>
							{data.skills.map((skill) => (
								<Badge 
									key={skill}
									className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-secondary/70 text-secondary-foreground hover:bg-secondary/90 hover:shadow-md hover:scale-105 dark:bg-secondary/40 dark:text-white dark:border-secondary"
								>
									{skill}
								</Badge>
							))}
						</div>
					</Section>

					<Section id="all-repositories" className='print-force-new-page scroll-mb-16'>
						<div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
							<h2 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
								All Repositories
							</h2>
							<p className="text-sm text-muted-foreground">
								{stats.total} repos · {stats.stars.toLocaleString()} stars · auto-synced from GitHub
							</p>
						</div>

						<div className="mt-4">
							<RepoToolbar
								query={query}
								sortBy={sortBy}
								status={status}
								visibleCount={filteredProjects.length}
								totalCount={data.projects.length}
								onQueryChange={setQuery}
								onSortChange={setSortBy}
								onStatusChange={setStatus}
							/>
						</div>

						{filteredProjects.length > 0 ? (
							<div className='px-2 grid grid-cols-1 gap-4 print:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4'>
								{filteredProjects.map((project) => (
									<ProjectCard
										key={getRepoSlug(project)}
										title={project.title}
										description={project.description}
										tags={project.techStack}
										link={project.link?.href}
										stars={project.stars}
										forks={project.forks}
										issues={project.issues}
										lastUpdated={project.lastUpdated}
										lastCommit={project.lastCommit}
									/>
								))}
							</div>
						) : (
							<div className="mt-6 rounded-xl border border-dashed border-border/60 bg-card/20 px-6 py-10 text-center">
								<p className="text-base font-medium">No repositories match your filters</p>
								<p className="mt-2 text-sm text-muted-foreground">
									Try a different search term or switch back to &quot;All&quot; repositories.
								</p>
								<Button
									variant="outline"
									size="sm"
									className="mt-4"
									onClick={() => {
										setQuery('')
										setStatus('all')
										setSortBy('stars')
									}}
								>
									Reset filters
								</Button>
							</div>
						)}
					</Section>
				</section>

				<Button
					onClick={scrollToTop}
					className={cn(
						"fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-50 print:hidden",
						"size-9 sm:size-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50",
						"hover:bg-background hover:border-border/80",
						"transition-opacity duration-200",
						"shadow-lg hover:shadow-xl",
						showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
					)}
					variant="outline"
					size="icon"
				>
					<ArrowUp className="size-4 sm:size-5" />
				</Button>
			</div>
			<Footer />
		</main>
		</TooltipProvider>
	)
}
