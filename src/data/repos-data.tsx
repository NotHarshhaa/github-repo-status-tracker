import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'
import { PROJECTS } from './projects-data'

// Type definitions for better type safety and editor support
export type SocialLink = {
	name: string
	url: string
	icon: React.ComponentType<any>
}

export type Contact = {
	link: { name: string; url: string }
	email: { name: string; at: string }
	tel: { name: string; phoneNumber: string }
	social: readonly SocialLink[]
}

export type RepoData = {
	name: string
	location: string
	locationLink: string
	about: string
	summary: string
	personalWebsiteUrl: { name: string; url: string }
	contact: Contact
	skills: readonly string[]
	projects: typeof PROJECTS
	// Add future fields here, e.g.:
	// awards?: string[]
	// certifications?: string[]
}

// Main data export
export const REPOS_DATA: RepoData = {
	// General info
	name: 'DevOps & Cloud GitHub Repositories',
	location: 'Hyderabad, India',
	locationLink: 'https://www.google.com/maps/place/Hyderabad',
	about: 'A curated collection of essential DevOps and Cloud repositories.',
	summary: 'A comprehensive collection of DevOps and Cloud resources.',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: 'https://notharshhaa.site'
	},
	// Contact info
	contact: {
		link: {
			name: 'Other Links',
			url: 'https://link.notharshhaa.site'
		},
		email: {
			name: 'Email',
			at: 'harshhaa03@gmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+917995905634'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/NotHarshhaa',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/harshhaa-vardhan-reddy',
				icon: LinkedInIcon
			},
			{
				name: 'Telegram',
				url: 'https://t.me/NotHarshhaa',
				icon: TelegramIcon
			}
		] as const
	},
	// Skills (readonly for safety)
	skills: [
		'AWS', 'EC2', 'S3', 'EKS', 'IAM', 'Azure', 'AKS', 'DevOps', 'ARM', 'Kubernetes',
		'Docker', 'Terraform', 'Ansible', 'Linux', 'Ubuntu', 'CentOS', 'CI/CD', 'Jenkins',
		'GitHub Actions', 'Azure DevOps', 'Prometheus', 'Grafana', 'ELK Stack', 'Git',
		'Shell Scripting', 'Bash', 'GitLab', 'Python', 'YAML', 'Monitoring', 'Logging',
		'CloudFormation', 'Helm', 'NGINX', 'Networking', 'GitHub', 'GitOps', 'Jira',
		'Confluence', 'Agile Methodologies', 'Collaboration', 'Problem Solving',
		'Communication', 'Teamwork', 'Adaptability', 'Open Source', 'Community Engagement',
		'Continuous Learning', 'Infrastructure as Code', 'Configuration Management',
		'Secrets Management', 'Incident Management', 'Disaster Recovery', 'Load Balancing',
		'High Availability', 'Performance Tuning', 'Security Best Practices', 'HashiCorp Vault',
		'Agile', 'DevOps Practices', 'VS Code'
	] as const,
	// Projects
	projects: PROJECTS,
	// Future fields can be added here
}
