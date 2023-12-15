'use client'

import { useState } from 'react'

import { OrderTabType } from '@/types/account/account.types'
import { DUMMY_ORDERS } from '@/components/account/orders/data'
import OrderTab from '@/components/account/orders/order-tab'
import OrderDataTable from '@/components/account/orders/orders-table/data-table'

type Props = {}

export default function Orders({}: Props) {
	const [selectedTab, setSelectedTab] = useState<OrderTabType>('current orders')
	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-lg font-medium'>Your Orders</h2>
			{/* tab section */}
			<div className=''>
				<OrderTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
				<OrderDataTable data={DUMMY_ORDERS} />
			</div>
		</div>
	)
}
