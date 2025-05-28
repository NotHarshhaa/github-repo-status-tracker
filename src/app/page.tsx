'use client';

import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { ProjectCard } from '@/components/project-card'
import { ArrowUp } from 'lucide-react'
import { data } from '@/constants'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Page() {
	const [showScrollTop, setShowScrollTop] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 400)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<main className="min-h-screen bg-gradient-to-b from-background to-background/95">
			<Header />
			<div className="mx-auto max-w-[1600px] relative scroll-my-12 overflow-auto p-3 sm:p-4 md:p-6 lg:p-8 print:p-12">
				<section className="mx-auto w-full max-w-[1400px] space-y-8 sm:space-y-10 md:space-y-12 bg-background/80 text-foreground print:space-y-6 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-border/50">
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
						<h2 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
							All Repositories
						</h2>
						<div className='px-1 sm:px-2 grid grid-cols-1 gap-3 sm:gap-4 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 sm:mt-4'>
							{data.projects.map((project) => (
								<ProjectCard
									key={project.title}
									title={project.title}
									description={project.description}
									tags={project.techStack}
									link={'link' in project ? project.link.href : undefined}
									stars={project.stars}
									forks={project.forks}
									issues={project.issues}
									lastUpdated={project.lastUpdated}
									lastCommit={project.lastCommit}
								/>
							))}
						</div>
					</Section>
				</section>

				{/* Scroll to Top Button */}
				<Button
					onClick={scrollToTop}
					className={cn(
						"fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-50 print:hidden",
						"size-9 sm:size-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50",
						"hover:bg-background hover:border-border/80 hover:scale-105",
						"active:scale-95 transition-all duration-300",
						"shadow-lg hover:shadow-xl",
						showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
					)}
					variant="outline"
					size="icon"
				>
					<ArrowUp className="size-4 sm:size-5" />
				</Button>
			</div>
			<Footer />
		</main>
	)
}
