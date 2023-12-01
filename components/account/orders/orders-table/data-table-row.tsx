import React from 'react'

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
	return (
		<TableRow key={orderNumber}>
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
