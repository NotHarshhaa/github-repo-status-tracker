'use client';

import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/button-link'
import { ProjectCard } from '@/components/project-card'
import { GlobeIcon, ArrowUp } from 'lucide-react'
import { data } from '@/constants'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'

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
			<div className="mx-auto max-w-[1400px] relative scroll-my-12 overflow-auto p-3 sm:p-4 md:p-6 lg:p-8 print:p-12">
				<section className="mx-auto w-full max-w-[1200px] space-y-8 sm:space-y-10 md:space-y-12 bg-background/80 text-foreground print:space-y-6 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-border/50">
					<div className='flex items-center justify-between'>
						<div className='flex-1 space-y-2 sm:space-y-3'>
							<div className="space-y-1.5 sm:space-y-2">
								<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
									{data.name}
								</h1>
								<p className='max-w-4xl text-pretty font-mono text-sm sm:text-base text-muted-foreground leading-relaxed'>
									{data.about}
								</p>
								<p className='max-w-md items-center text-pretty font-mono text-xs sm:text-sm text-muted-foreground'>
									<a
										className='inline-flex gap-x-1.5 sm:gap-x-2 align-baseline leading-none hover:text-primary transition-colors'
										href={data.locationLink}
										target='_blank'
										rel='noreferrer'
									>
										<GlobeIcon className='size-3 sm:size-4' />
										{data.location}
									</a>
								</p>
							</div>

							<ButtonLink data={data} />
						</div>
					</div>

					<Section id="about">
						<h2 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
							About
						</h2>
						<p className='text-pretty font-mono text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4'>
							{data.summary}
						</p>
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
						<h2 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
							All Repositories
						</h2>
						<div className='px-1 sm:px-2 grid grid-cols-1 gap-3 sm:gap-4 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3 mt-3 sm:mt-4'>
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
		</main>
	)
}
