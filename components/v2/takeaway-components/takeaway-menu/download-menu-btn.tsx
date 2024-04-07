'use client'

import { PropsWithChildren } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/components/ui/button'

const DownloadMenuBtn = ({
	children,
	variant,
	className,
	...rest
}: PropsWithChildren<ButtonProps>) => {
	return (
		<Link href={'https://hc-api.alexpy.com/download-menu'} target='_blank'>
			<Button variant={variant} className={cn('', className)} {...rest}>
				{children}
			</Button>
		</Link>
	)
}

export default DownloadMenuBtn
