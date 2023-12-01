import React from 'react'

import { OrderTableColumns } from '@/types/account/account.types'
import CustomBadge from '@/components/ui/custom-ui/custom-badge'
import OrderTab from '@/components/account/orders/order-tab'
import OrderDataTable from '@/components/account/orders/orders-table/data-table'

type Props = {}
export const DUMMY_ORDERS: OrderTableColumns[] = [
	{
		orderNumber: '001',
		items: 'Product A, Product B',
		orderDate: '2023-11-30',
		status: <CustomBadge status='In Progress' />,
		total: '$100.00',
	},
	{
		orderNumber: '002',
		items: 'Product C',
		orderDate: '2023-11-29',
		status: <CustomBadge status='Completed' />,
		total: '$50.00',
	},
	{
		orderNumber: '003',
		items: 'Product D, Product E, Product F',
		orderDate: '2023-11-28',
		status: <CustomBadge status='Cancelled' />,
		total: '$200.00',
	},
]
export default function Orders({}: Props) {
	return (
		<div>
			{/* tab section */}
			<OrderTab />
			<OrderDataTable data={DUMMY_ORDERS} />
		</div>
	)
}
