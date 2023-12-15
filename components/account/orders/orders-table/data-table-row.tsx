'use client'

import { useRouter } from 'next/navigation'
import { format } from 'date-fns'

import { OrderTableColumns } from '@/types/account/account.types'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import CustomBadge from '@/components/ui/custom-ui/custom-badge'
import { TableCell, TableRow } from '@/components/ui/table'

type Props = OrderTableColumns

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
			className='cursor-pointer text-sm duration-150'
			onClick={() => router.push(`/account/your-orders/1`)}
		>
			<TableCell className='whitespace-nowrap border-r-0 px-4 py-3 font-medium'>
				{orderNumber}
			</TableCell>
			<TableCell className='min-w-[180px] max-w-[200px] whitespace-pre-line border-r-0 px-4 py-3'>
				{items.map((item) => (
					<p className='flex items-baseline gap-1'>
						<span>{item.quantity}x</span>
						<span className='line-clamp-2 '>{item.item_name}</span>
					</p>
				))}
			</TableCell>
			<TableCell className='whitespace-nowrap border-r-0 px-4 py-3'>
				<p className='flex flex-col gap-[2px]'>
					<span>{format(new Date(orderDate), 'MMM d, yyyy')}</span>
					{format(new Date(orderDate), 'h:mm a')}
				</p>
			</TableCell>
			<TableCell className='whitespace-nowrap border-r-0 px-4 py-3'>
				<CustomBadge status={status} />
			</TableCell>
			<TableCell className='whitespace-nowrap border-r-0 px-4 py-3'>
				{formatPrice(total)}
			</TableCell>
			{/* actions */}
			<TableCell className='whitespace-nowrap border-r-0 px-4 py-3'>
				<Button className='rounded-full px-4' variant='default' size='sm'>
					Reorder
				</Button>
			</TableCell>
		</TableRow>
	)
}
