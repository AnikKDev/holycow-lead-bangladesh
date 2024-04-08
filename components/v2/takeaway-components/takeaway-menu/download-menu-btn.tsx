'use client'

import { PropsWithChildren } from 'react'
import Link from 'next/link'

import { apiUrl } from '@/lib/constatns'
import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/components/ui/button'

const DownloadMenuBtn = ({
	children,
	variant,
	className,
	...rest
}: PropsWithChildren<ButtonProps>) => {
	return (
		<Link href={`${apiUrl}/download-menu`} download={`${apiUrl}/download-menu`}>
			<Button variant={variant} className={cn('', className)} {...rest}>
				{children}
			</Button>
		</Link>
	)
}

export default DownloadMenuBtn
