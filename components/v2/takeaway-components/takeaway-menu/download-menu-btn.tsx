'use client'

import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/components/ui/button'

const DownloadMenuBtn = ({
	children,
	variant,
	className,
	...rest
}: PropsWithChildren<ButtonProps>) => {
	return (
		<Button variant={variant} className={cn('', className)} {...rest}>
			{children}
		</Button>
	)
}

export default DownloadMenuBtn
