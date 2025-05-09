import { MailIcon, PhoneIcon, AppWindowIcon, LinkIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { type ResumeData } from '@/types'
import { cn } from '@/lib/utils'

export function ButtonLink({ data }: { data: ResumeData }) {
	const linkData = [
		{
			url: data.personalWebsiteUrl?.url,
			icon: AppWindowIcon,
			name: data.personalWebsiteUrl?.name,
			type: 'website',
			color: 'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300'
		},
		{
			url: `mailto:${data.contact.email?.at}`,
			icon: MailIcon,
			name: data.contact.email?.name,
			type: 'email',
			color: 'text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300'
		},
		{
			url: `tel:${data.contact.tel?.phoneNumber}`,
			icon: PhoneIcon,
			name: data.contact.tel?.name,
			type: 'phone',
			color: 'text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300'
		},
		...data.contact.social.map((social) => ({
			url: social.url,
			icon: social.icon,
			name: social.name,
			type: 'social',
			color: 'text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300'
		})),
		{
			url: data.contact.link?.url,
			icon: LinkIcon,
			name: data.contact.link?.name,
			type: 'other links',
			color: 'text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300'
		}
	]

	return (
		<section className="relative">
			<div className='flex flex-wrap gap-2 pt-2 font-mono text-sm text-muted-foreground print:hidden'>
				{linkData
					.filter((link) => link.url)
					.map((link, index) => (
						<Tooltip key={index}>
							<TooltipTrigger asChild>
								<Button 
									className={cn(
										'group relative size-9 transition-all duration-300',
										'bg-background/50 backdrop-blur-sm border border-border/50',
										'hover:border-border/80 hover:bg-background/80 hover:scale-105',
										'active:scale-95'
									)} 
									variant='outline' 
									size='icon' 
									asChild
								>
									<a 
										href={link.url} 
										target='_blank' 
										rel='noreferrer' 
										aria-label={link.name}
										className="flex items-center justify-center"
									>
										<link.icon className={cn('size-4 transition-colors duration-300', link.color)} />
										<span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</a>
								</Button>
							</TooltipTrigger>
							<TooltipContent 
								side='bottom' 
								className="bg-background/80 backdrop-blur-sm border border-border/50 px-3 py-1.5"
							>
								<p className='text-xs font-medium'>{link.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
			</div>

			<div className='hidden flex-col gap-2 font-mono text-sm text-muted-foreground print:flex'>
				{linkData
					.filter((link) => ['website', 'email', 'phone'].includes(link.type))
					.map((link, index) => (
						<a 
							key={index} 
							href={link.url} 
							target='_blank' 
							rel='noreferrer'
							className="flex items-center gap-2 hover:text-primary transition-colors"
						>
							<link.icon className="size-4" />
							<span className='underline'>{link.url}</span>
						</a>
					))}
			</div>
		</section>
	)
}
