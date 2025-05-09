'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 10, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 rounded-2xl border border-primary/30 bg-popover/80 px-4 py-2 text-sm font-semibold text-popover-foreground shadow-2xl backdrop-blur-xl',
      'animate-in fade-in-0 zoom-in-90',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-90',
      'data-[side=bottom]:slide-in-from-top-4',
      'data-[side=top]:slide-in-from-bottom-4',
      'data-[side=right]:slide-in-from-left-4',
      'data-[side=left]:slide-in-from-right-4',
      'transition-all duration-300',
      className
    )}
    {...props}
  >
    {props.children}
    <TooltipPrimitive.Arrow className="fill-primary/30 drop-shadow-md h-3 w-6" />
  </TooltipPrimitive.Content>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
