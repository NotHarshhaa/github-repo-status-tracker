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
		},
		{
			url: `mailto:${data.contact.email?.at}`,
			icon: MailIcon,
			name: data.contact.email?.name,
			type: 'email',
		},
		{
			url: `tel:${data.contact.tel?.phoneNumber}`,
			icon: PhoneIcon,
			name: data.contact.tel?.name,
			type: 'phone',
		},
		...data.contact.social.map((social) => ({
			url: social.url,
			icon: social.icon,
			name: social.name,
			type: 'social',
		})),
		{
			url: data.contact.link?.url,
			icon: LinkIcon,
			name: data.contact.link?.name,
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
