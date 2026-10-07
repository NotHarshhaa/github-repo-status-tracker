// app/layout.tsx
import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import type React from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { siteConfig } from '@/config/site.config'
import { cn } from '@/lib/utils'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.site.url),
  title: siteConfig.site.name,
  description: siteConfig.site.description,
  openGraph: {
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    url: siteConfig.site.url,
    siteName: siteConfig.site.name,
    images: [
      {
        url: siteConfig.site.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.site.name,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    images: [siteConfig.site.ogImage],
    creator: siteConfig.social.twitter.replace('https://twitter.com/', ''),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body
        className={cn(
          'min-h-screen font-sans antialiased animate-fadein',
          instrumentSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
