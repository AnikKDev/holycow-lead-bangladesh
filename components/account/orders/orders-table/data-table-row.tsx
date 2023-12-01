'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

type Props = {
	orderNumber: string
	items: string
	orderDate: string
	total: string
	status: React.ReactNode
}

export default function DataTableRow({
	items,
	orderDate,
	orderNumber,
	status,
	total,
}: Props) {
	const router = useRouter()
	return (
		<TableRow
			key={orderNumber}
			className='cursor-pointer duration-150'
			onClick={() => router.push(`/account/your-orders/1`)}
		>
			<TableCell className='font-medium'>{orderNumber}</TableCell>
			<TableCell>{items}</TableCell>
			<TableCell>{orderDate}</TableCell>
			<TableCell className=''>{status}</TableCell>
			<TableCell className=''>{total}</TableCell>
			{/* actions */}
			<TableCell className=''>
				<Button className='rounded-full px-5' variant='default' size='sm'>
					Reorder
				</Button>
			</TableCell>
		</TableRow>
	)
}
