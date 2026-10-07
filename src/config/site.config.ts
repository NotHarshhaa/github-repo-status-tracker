/**
 * Site Configuration
 * 
 * Single source of truth for all site-wide constants.
 * Update this file instead of searching across multiple files.
 */

export const siteConfig = {
  // GitHub
  github: {
    username: 'NotHarshhaa',
    url: 'https://github.com/NotHarshhaa',
  },

  // Author info
  author: {
    name: 'Harshhaa',
    location: 'Hyderabad, India',
    locationUrl: 'https://www.google.com/maps/place/Hyderabad',
    email: 'harshhaa03@gmail.com',
    phone: '+917995905634',
    website: 'https://harshhaareddy.site',
    linksUrl: 'https://link.harshhaareddy.site',
  },

  // Social links
  social: {
    github: 'https://github.com/NotHarshhaa',
    linkedin: 'https://www.linkedin.com/in/harshhaa-vardhan-reddy',
    twitter: 'https://twitter.com/NotHarshhaa',
    telegram: 'https://t.me/NotHarshhaa',
  },

  // Site metadata
  site: {
    name: 'DevOps GitHub Repositories',
    description: 'A curated collection of essential DevOps and Cloud repositories to help you learn and grow as a DevOps Engineer.',
    url: 'https://projects.prodevopsguytech.com',
    ogImage: '/opengraph-image.png',
  },

  // Repository tracking
  repos: {
    updateIntervalHours: 6,
    configFile: 'repos.json',
  },

  // UI settings
  ui: {
    theme: 'system' as 'light' | 'dark' | 'system',
    itemsPerPage: 20,
    searchDebounceMs: 300,
  },
} as const

export type SiteConfig = typeof siteConfig