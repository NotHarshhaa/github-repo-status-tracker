import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold font-mono tracking-wide text-nowrap transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 shadow-sm',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 hover:shadow-md hover:scale-105',
        secondary:
          'border border-border bg-secondary/70 text-secondary-foreground hover:bg-secondary/90 hover:shadow-md hover:scale-105 dark:bg-secondary/40 dark:text-white dark:border-secondary',
        destructive:
          'border-transparent bg-destructive/90 text-destructive-foreground hover:bg-destructive/80 hover:shadow-md hover:scale-105',
        outline:
          'border-2 border-primary/40 bg-background/70 text-primary hover:bg-primary/10 hover:shadow-md hover:scale-105',
        accent:
          'border-0 bg-gradient-to-r from-primary/80 to-accent/80 text-white shadow-md hover:from-primary/60 hover:to-accent/60 hover:scale-105',
        glass:
          'border border-border/40 bg-white/20 backdrop-blur-md text-foreground shadow-md hover:bg-white/30 hover:scale-105',
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
