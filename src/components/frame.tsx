import { cn } from '@/lib/utils'
import type { HTMLAttributes, ReactNode } from 'react'

function Corners() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px -left-px z-10 size-2.5 border-t-2 border-l-2 border-foreground/45 sm:size-3"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px -right-px z-10 size-2.5 border-t-2 border-r-2 border-foreground/45 sm:size-3"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-px -left-px z-10 size-2.5 border-b-2 border-l-2 border-foreground/45 sm:size-3"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-px -bottom-px z-10 size-2.5 border-b-2 border-r-2 border-foreground/45 sm:size-3"
      />
    </>
  )
}

type FrameProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  corners?: boolean
  as?: 'div' | 'section' | 'article' | 'header' | 'footer'
}

export function Frame({
  children,
  className,
  corners = true,
  as: Comp = 'div',
  ...props
}: FrameProps) {
  return (
    <Comp
      className={cn('relative border border-border bg-card', className)}
      {...props}
    >
      {corners && <Corners />}
      {children}
    </Comp>
  )
}

type FrameHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  label?: string
}

export function FrameHeader({
  children,
  label,
  className,
  ...props
}: FrameHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-5',
        className
      )}
      {...props}
    >
      {label && (
        <span className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          {label}
        </span>
      )}
      {children}
    </div>
  )
}

export function FrameBody({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-4 py-5 sm:px-5 sm:py-6', className)} {...props}>
      {children}
    </div>
  )
}

export function FrameGrid({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative grid sm:grid-cols-2 lg:grid-cols-4', className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px -left-px z-20 size-3 border-t-2 border-l-2 border-foreground/45"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px -right-px z-20 size-3 border-t-2 border-r-2 border-foreground/45"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-px -left-px z-20 size-3 border-b-2 border-l-2 border-foreground/45"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-px -bottom-px z-20 size-3 border-b-2 border-r-2 border-foreground/45"
      />
      {children}
    </div>
  )
}

export function FrameGridCell({
  children,
  className,
  label
}: {
  children: ReactNode
  className?: string
  label?: string
}) {
  return (
    <div
      className={cn(
        'border-border bg-card/80 p-4 sm:border-r sm:border-b sm:p-5',
        'border-b last:border-b-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+4)]:border-b-0',
        className
      )}
    >
      {label && (
        <p className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {label}
        </p>
      )}
      {children}
    </div>
  )
}
