'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetOrderDetailByIdQuery } from '@/redux/slices/orderSlice/orderApislice'
import {
	orderInitialState,
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'

import { Separator } from '@/components/ui/separator'
import OrderBackButton from '@/components/account/orders/order-details/detail-back-btn'
import OrderDetailsAddress from '@/components/account/orders/order-details/order-details-address'
import OrderDetailsEstimation from '@/components/account/orders/order-details/order-details-eta'
import OrderDetailsPricing from '@/components/account/orders/order-details/order-details-pricing'
import OrderDetailsStatus from '@/components/account/orders/order-details/order-details-status'
import OrderDetailsSummary from '@/components/account/orders/order-details/order-details-summary'

type Props = {
	params: { orderId: string }
}

export default function OrderDetails({ params }: Props) {
	const searchParams = useSearchParams()
	const dispatch = useAppDispatch()
	const orderState = useAppSelector(selectOrderState)
	const { data, isLoading, isError } = useGetOrderDetailByIdQuery(
		params.orderId,
		{
			refetchOnFocus: true,
			refetchOnReconnect: true,
		}
	)

	const isOrderSuccess = searchParams.get('order_success')
	const localStorage_is_order_succeed = JSON.parse(
		window.localStorage.getItem('is_order_succeed')
	)

	useEffect(() => {
		if (isOrderSuccess && localStorage_is_order_succeed) {
			dispatch(
				setOrderState({
					...orderInitialState,
					visited_location_slug: orderState.visited_location_slug,
				})
			)
			window.localStorage.setItem('is_order_succeed', JSON.stringify(false))
		}
	}, [isOrderSuccess])
	console.log('order detail', data)
	return (
		<div className='flex flex-col gap-4'>
			<div>
				<OrderBackButton />
			</div>
			<section className='rounded-2xl bg-white px-4 py-4'>
				{isLoading ? (
					<p className=''>Loading orders detail..</p>
				) : isError ? (
					<p className=''>Error loading order detail</p>
				) : (
					data && (
						<>
							<OrderDetailsEstimation order={data} />
							<OrderDetailsStatus order={data} />
							<OrderDetailsSummary order={data} />
							<Separator orientation='horizontal' className='my-5' />
							<OrderDetailsPricing order={data} />
							<Separator orientation='horizontal' className='my-5' />
							<OrderDetailsAddress order={data} />
						</>
					)
				)}
			</section>
		</div>
	)
}
