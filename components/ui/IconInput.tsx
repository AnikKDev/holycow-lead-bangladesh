import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode
	rounded?: boolean
}

const IconInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, rounded, icon, ...props }, ref) => {
		return (
			<div
				className={cn(
					'flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
					className
				)}
			>
				{icon}
				<input
					{...props}
					type='search'
					ref={ref}
					className={cn(
						'w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
						rounded ? 'rounded-full' : ''
					)}
				/>
			</div>
		)
	}
)

IconInput.displayName = 'IconInput'

export { IconInput }
