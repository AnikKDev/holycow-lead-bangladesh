import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-4 py-0.5 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 capitalize',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				outline: 'text-foreground',
				// custom variants for order status
				inProgress: 'border-[#93C5FD] bg-[#DBEAFE] text-[#1E40AF]',
				completed: 'border-[#6EE7B7] bg-[#D1FAE5] text-[#065F46]',
				cancelled: 'border-[#F9A8D4] bg-[#FCE7F3] text-[#9D174D]',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
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
