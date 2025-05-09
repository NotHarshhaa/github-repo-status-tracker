// app/layout.tsx
import React from 'react'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { TooltipProvider } from '@/components/ui/tooltip'
import { REPOS_DATA } from '@/data/repos-data'
import { cn } from '@/lib/utils'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: `DevOps GitHub Repositories`,
  description: `${REPOS_DATA.about}`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head />
      <body
        className={cn(
          // Modern background gradient
          'min-h-screen bg-gradient-to-br from-background via-background/90 to-background/80',
          // Font smoothing and antialiasing
          'font-sans antialiased subpixel-antialiased',
          // Fade-in animation
          'animate-fadein',
          // Custom scrollbar
          'scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-muted/40 scrollbar-track-transparent',
          // Container for large screens
          'flex flex-col items-center justify-center',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <TooltipProvider>
            {/* Main content container for max width and padding */}
            <div className="w-full max-w-[1600px] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 transition-all duration-300">
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
