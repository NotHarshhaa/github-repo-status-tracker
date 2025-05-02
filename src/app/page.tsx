import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/button-link'
import { ProjectCard } from '@/components/project-card'
import { CommandMenu } from '@/components/command-menu'
import { GlobeIcon } from 'lucide-react'
import { data } from '@/constants'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Page() {
	return (
	    <main className="mx-auto max-w-screen-lg relative scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
            <section className="mx-auto w-full max-w-4xl space-y-8 bg-background text-foreground print:space-y-6">
				<div className='flex items-center justify-between'>
					<div className='flex-1 space-y-1.5'>
						<h1 className='text-2xl font-bold'>{data.name}</h1>
						<p className='max-w-4xl text-pretty font-mono text-sm text-muted-foreground'>
							{data.about}
						</p>
						<p className='max-w-md items-center text-pretty font-mono text-xs text-muted-foreground'>
							<a
								className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
								href={data.locationLink}
								target='_blank'
								rel='noreferrer'
							>
								<GlobeIcon className='size-3' />
								{data.location}
							</a>
						</p>

						<ButtonLink data={data} />
					</div>
				</div>

				<Section>
					<h2 className='text-xl font-bold'>About</h2>
					<p className='text-pretty font-mono text-sm text-muted-foreground'>{data.summary}</p>
				</Section>

				<Section>
					<h2 className='text-xl font-bold'>Tech Stack</h2>
					<div className='flex flex-wrap gap-1'>
						{data.skills.map((skill) => (
							<Badge key={skill}>{skill}</Badge>
						))}
					</div>
				</Section>

				<Section className='print-force-new-page scroll-mb-16'>
					<h2 className='text-xl font-bold'>All Respositories</h2>
					<div className='px-2 sm:px-0 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3'>
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
							/>
						))}
					</div>
				</Section>
			</section>

			<CommandMenu
				links={[
					{
						url: data.personalWebsiteUrl.url,
						title: data.personalWebsiteUrl.name
					},
					{
						url: `mailto:${data.contact.email.at}`,
						title: data.contact.email.name
					},
					{
						url: `tel:${data.contact.tel.phoneNumber}`,
						title: data.contact.tel.name
					},
					...data.contact.social.map((socialMediaLink) => ({
						url: socialMediaLink.url,
						title: socialMediaLink.name
					})),
					{
						url: data.contact.link.url,
						title: data.contact.link.name
					}
				]}
			/>
			<div className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 print:hidden">
                <ThemeToggle />
            </div>
		</main>
	)
}
