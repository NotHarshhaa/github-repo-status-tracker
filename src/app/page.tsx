'use client';

import { Badge } from '@/components/ui/badge'
import { ProjectCard } from '@/components/project-card'
import { RepoStats } from '@/components/repo-stats'
import { RepoToolbar } from '@/components/repo-toolbar'
import { Frame, FrameBody, FrameHeader } from '@/components/frame'
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
			<main className="min-h-screen">
				<Header />
				<div className="relative space-y-8 py-8 sm:space-y-10 sm:py-10 print:p-12">
					<Frame id="about">
						<FrameHeader label="About" />
						<FrameBody className="space-y-5">
							<p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
								{data.about} This dashboard tracks <strong className="text-foreground">{stats.total}</strong> repositories
								with live GitHub stats, updated automatically every 6 hours.
							</p>
							<RepoStats
								total={stats.total}
								active={stats.active}
								stars={stats.stars}
								forks={stats.forks}
							/>
						</FrameBody>
					</Frame>

					<Frame id="tech-stack">
						<FrameHeader label="Tech Stack" />
						<FrameBody>
							<div className="flex flex-wrap gap-2">
								{data.skills.map((skill) => (
									<Badge key={skill} variant="outline" className="font-mono text-[11px] uppercase tracking-wide">
										{skill}
									</Badge>
								))}
							</div>
						</FrameBody>
					</Frame>

					<Frame id="all-repositories" className="print-force-new-page scroll-mb-16">
						<FrameHeader label="All Repositories">
							<span className="font-mono text-[11px] text-muted-foreground">
								{stats.total} repos · {stats.stars.toLocaleString()} stars
							</span>
						</FrameHeader>
						<FrameBody className="space-y-4">
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

							{filteredProjects.length > 0 ? (
								<Frame className="overflow-visible" corners>
									<ul>
										{filteredProjects.map((project, index) => (
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
												isLast={index === filteredProjects.length - 1}
											/>
										))}
									</ul>
								</Frame>
							) : (
								<div className="border border-dashed border-border bg-muted/30 px-6 py-10 text-center">
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
						</FrameBody>
					</Frame>
				</div>

				<Button
					onClick={scrollToTop}
					className={cn(
						"fixed bottom-4 right-4 z-50 print:hidden sm:bottom-6 sm:right-6",
						"size-10 border border-border bg-card",
						"transition-opacity duration-200",
						showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
					)}
					variant="outline"
					size="icon"
				>
					<ArrowUp className="size-4" />
				</Button>
				<Footer />
			</main>
		</TooltipProvider>
	)
}
