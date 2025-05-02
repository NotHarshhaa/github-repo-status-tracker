'use client'

import * as React from 'react'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator
} from '@/components/ui/command'
import { Button } from './ui/button'
import { CommandIcon, SunIcon, MoonIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

interface Link {
	url: string
	title: string
	tag?: string
}

interface Props {
	links: Link[]
}

const RECENT_STORAGE_KEY = 'recent_pages'

export function CommandMenu({ links }: Props) {
	const [open, setOpen] = React.useState(false)
	const [recentPages, setRecentPages] = React.useState<Link[]>([])
	const { theme, setTheme } = useTheme()

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}
		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	React.useEffect(() => {
		const stored = localStorage.getItem(RECENT_STORAGE_KEY)
		if (stored) {
			setRecentPages(JSON.parse(stored))
		}
	}, [])

	const handleLinkSelect = (link: Link) => {
		setOpen(false)
		window.open(link.url, '_blank')

		const updated = [link, ...recentPages.filter((l) => l.url !== link.url)].slice(0, 5)
		setRecentPages(updated)
		localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(updated))
	}

	const grouped = links.reduce<Record<string, Link[]>>((acc, link) => {
		const tag = link.tag || 'General'
		acc[tag] = acc[tag] || []
		acc[tag].push(link)
		return acc
	}, {})

	return (
		<>
			<p className='fixed bottom-0 left-0 right-0 hidden border-t bg-white dark:bg-background border-t-muted dark:border-t-muted text-muted-foreground dark:text-muted-foreground p-1 text-center text-sm print:hidden xl:block'>
				Press{' '}
				<kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
					<span className='text-xs'>⌘</span>K
				</kbd>{' '}
				to open the command menu
			</p>
			<Button
				onClick={() => setOpen((open) => !open)}
				variant='outline'
				size='icon'
				className='fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden'
				aria-label='Open command menu'
			>
				<CommandIcon className='my-6 h-6 w-6' />
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Type a command or search...' />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>

					<CommandGroup heading='Actions'>
						<CommandItem
							onSelect={() => {
								setOpen(false)
								window.print()
							}}
						>
							<span>🖨️ Print</span>
						</CommandItem>

						<CommandItem
							onSelect={() => {
								setTheme(theme === 'dark' ? 'light' : 'dark')
								setOpen(false)
							}}
						>
							{theme === 'dark' ? (
								<>
									<SunIcon className='mr-2 h-4 w-4' /> Switch to Light Mode
								</>
							) : (
								<>
									<MoonIcon className='mr-2 h-4 w-4' /> Switch to Dark Mode
								</>
							)}
						</CommandItem>
					</CommandGroup>

					{recentPages.length > 0 && (
						<CommandGroup heading='Recent Pages'>
							{recentPages.map((link) => (
								<CommandItem key={link.url} onSelect={() => handleLinkSelect(link)}>
									<span>{link.title}</span>
								</CommandItem>
							))}
						</CommandGroup>
					)}

					{Object.entries(grouped).map(([tag, links]) => (
						<CommandGroup key={tag} heading={tag}>
							{links.map((link) => (
								<CommandItem key={link.url} onSelect={() => handleLinkSelect(link)}>
									<span>{link.title}</span>
								</CommandItem>
							))}
						</CommandGroup>
					))}

					<CommandSeparator />
				</CommandList>
			</CommandDialog>
		</>
	)
}
