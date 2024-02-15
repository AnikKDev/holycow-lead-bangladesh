'use client'

import { format } from 'date-fns'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import CustomBadge from '@/components/ui/custom-ui/custom-badge'
import { TableCell, TableRow } from '@/components/ui/table'
import { formatPrice } from '@/lib/utils'
import { OrderDetailType } from '@/redux/slices/orderSlice/orderSlice'

type Props = OrderDetailType

export default function DataTableRow({
	order_items,
	order_date,
	tracking_id,
	status,
	total,
}: Props) {
	const router = useRouter()
	return (
		<TableRow
			key={tracking_id}
			className='cursor-pointer text-sm duration-150'
			onClick={() => router.push(`/account/your-orders/1`)}
		>
			<TableCell className='whitespace-nowrap border-r-0 px-4 py-3 font-medium'>
				{tracking_id}
			</TableCell>
			<TableCell className='min-w-[180px] max-w-[200px] whitespace-pre-line border-r-0 px-4 py-3'>
				{order_items.map((item) => (
					<p className='flex items-baseline gap-1'>
						<span>{item.quantity}x</span>
						<span className='line-clamp-2 '>{item.item_name}</span>
					</p>
				))}
			</TableCell>
			<TableCell className='whitespace-nowrap border-r-0 px-4 py-3'>
				<p className='flex flex-col gap-[2px]'>
					<span>{format(new Date(order_date), 'MMM d, yyyy')}</span>
					{format(new Date(order_date), 'h:mm a')}
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
