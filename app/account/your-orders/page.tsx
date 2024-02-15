'use client'

import { useState } from 'react'
import { useGetAllOrderQuery } from '@/redux/slices/orderSlice/orderApislice'

import { OrderTabType } from '@/types/account/account.types'
import OrderTab from '@/components/account/orders/order-tab'
import OrderDataTable from '@/components/account/orders/orders-table/data-table'

type Props = {}

export default function Orders({}: Props) {
	const [selectedTab, setSelectedTab] = useState<OrderTabType>('current orders')
	const { data, isLoading, isError } = useGetAllOrderQuery(undefined, {
		refetchOnFocus: true,
		refetchOnReconnect: true,
		refetchOnMountOrArgChange: true,
	})
	console.log(data)

	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-lg font-medium'>Your Orders</h2>
			{/* tab section */}
			<div className=''>
				<OrderTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
				{isLoading ? (
					<p className='mt-5'>Loading orders...</p>
				) : isError ? (
					<p className='mt-5'>Error loading orders</p>
				) : (
					data && data?.length > 0 && <OrderDataTable data={data} />
				)}
			</div>
		</div>
	)
}
