// app/layout.tsx
import React from 'react'
import { type Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import { TooltipProvider } from '@/components/ui/tooltip'
import { REPOS_DATA } from '@/data/repos-data'
import { cn } from '@/lib/utils'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans'
})

export const metadata: Metadata = {
  title: `DevOps GitHub Repositories`,
  description: `${REPOS_DATA.about}`
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
