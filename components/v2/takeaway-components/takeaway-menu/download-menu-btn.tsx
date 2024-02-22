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
		<Link
			href={
				'https://drive.google.com/file/d/1MZXG32-Rt7F7fJCEM0MJQPV8l9rN4OqV/view'
			}
			target='_blank'
		>
			<Button variant={variant} className={cn('', className)} {...rest}>
				{children}
			</Button>
		</Link>
	)
}

export default DownloadMenuBtn
