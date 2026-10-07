import { MailIcon, PhoneIcon, AppWindowIcon, LinkIcon } from 'lucide-react'
import { GitHubIcon } from '@/components/icons/github-icon'
import { LinkedInIcon } from '@/components/icons/linkedin-icon'
import { TelegramIcon } from '@/components/icons/telegram-icon'
import { XIcon } from '@/components/icons/x-icon'
import { siteConfig } from '@/config/site.config'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function ButtonLink() {
	const linkData = [
		{
			url: siteConfig.author.website,
			icon: AppWindowIcon,
			name: siteConfig.author.name + ' Portfolio',
			type: 'website',
		},
		{
			url: `mailto:${siteConfig.author.email}`,
			icon: MailIcon,
			name: 'Email',
			type: 'email',
		},
		{
			url: `tel:${siteConfig.author.phone}`,
			icon: PhoneIcon,
			name: 'Phone',
			type: 'phone',
		},
		{
			url: siteConfig.social.github,
			icon: GitHubIcon,
			name: 'GitHub',
			type: 'social',
		},
		{
			url: siteConfig.social.linkedin,
			icon: LinkedInIcon,
			name: 'LinkedIn',
			type: 'social',
		},
		{
			url: siteConfig.social.twitter,
			icon: XIcon,
			name: 'Twitter',
			type: 'social',
		},
		{
			url: siteConfig.social.telegram,
			icon: TelegramIcon,
			name: 'Telegram',
			type: 'social',
		},
		{
			url: siteConfig.author.linksUrl,
			icon: LinkIcon,
			name: 'Other Links',
			type: 'other links',
		}
	]

	return (
		<section className="relative">
			<div className="flex flex-wrap gap-2 pt-1 font-mono text-sm text-muted-foreground print:hidden">
				{linkData
					.filter((link) => link.url)
					.map((link, index) => (
						<Tooltip key={index}>
							<TooltipTrigger asChild>
								<Button
									className={cn(
										'size-9 border border-border bg-background hover:bg-muted'
									)}
									variant="outline"
									size="icon"
									asChild
								>
									<a
										href={link.url}
										target="_blank"
										rel="noreferrer"
										aria-label={link.name}
									>
										<link.icon className="size-4" />
									</a>
								</Button>
							</TooltipTrigger>
							<TooltipContent side="bottom">
								<p className="text-xs font-medium">{link.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
			</div>

			<div className="hidden flex-col gap-2 font-mono text-sm text-muted-foreground print:flex">
				{linkData
					.filter((link) => ['website', 'email', 'phone'].includes(link.type))
					.map((link, index) => (
						<a
							key={index}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 hover:text-foreground"
						>
							<link.icon className="size-4" />
							<span className="underline">{link.url}</span>
						</a>
					))}
			</div>
		</section>
	)
}
