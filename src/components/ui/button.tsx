'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-semibold ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary/90 text-primary-foreground shadow-xl hover:bg-primary/80 hover:shadow-2xl hover:scale-[1.045] active:scale-95',
        destructive:
          'bg-destructive/90 text-destructive-foreground shadow-xl hover:bg-destructive/80 hover:shadow-2xl hover:scale-[1.045] active:scale-95',
        outline:
          'border-2 border-border bg-background/80 hover:bg-muted/60 hover:text-foreground hover:border-primary/40 shadow-md hover:shadow-lg hover:scale-[1.035] active:scale-95',
        secondary:
          'bg-secondary/80 text-secondary-foreground border border-border hover:bg-secondary/60 hover:border-primary/30 shadow-md hover:shadow-lg hover:scale-[1.035] active:scale-95',
        ghost:
          'bg-transparent hover:bg-muted/60 hover:text-foreground shadow-none hover:shadow-md hover:scale-[1.025] active:scale-95',
        link:
          'text-primary underline-offset-4 hover:underline hover:shadow-none hover:scale-100',
        github:
          'bg-black/90 text-white hover:bg-black hover:shadow-2xl hover:scale-[1.045] dark:bg-white/90 dark:text-black dark:hover:bg-white shadow-xl',
      },
      size: {
        default: 'h-11 px-6 py-2 text-base',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-12 px-8 text-lg',
        icon: 'h-11 w-11 p-0 text-lg'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
