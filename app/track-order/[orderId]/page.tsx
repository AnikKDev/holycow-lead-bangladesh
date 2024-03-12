'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetGuestOrderDetailByIdQuery } from '@/redux/slices/orderSlice/orderApislice'
import {
	orderInitialState,
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'

import { Separator } from '@/components/ui/separator'
import OrderDetailsAddress from '@/components/account/orders/order-details/order-details-address'
import OrderDetailsEstimation from '@/components/account/orders/order-details/order-details-eta'
import OrderDetailsPricing from '@/components/account/orders/order-details/order-details-pricing'
import OrderDetailsStatus from '@/components/account/orders/order-details/order-details-status'
import OrderDetailsSummary from '@/components/account/orders/order-details/order-details-summary'
import { PaymentSuccessModal } from '@/components/v2/reservation/reservation-success'

type Props = {
	params: { orderId: string }
}

export default function OrderDetails({ params }: Props) {
	const [showSuccessModal, setShowSuccessModal] = useState(false)
	const searchParams = useSearchParams()
	const dispatch = useAppDispatch()
	const orderState = useAppSelector(selectOrderState)
	const { data, isLoading, isError, refetch } = useGetGuestOrderDetailByIdQuery(
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
			setShowSuccessModal(true)
			dispatch(
				setOrderState({
					...orderInitialState,
					visited_location_slug: orderState?.visited_location_slug,
				})
			)
			window.localStorage.setItem('is_order_succeed', JSON.stringify(false))
		}
	}, [isOrderSuccess])
	return (
		<div className='container mx-auto min-h-[200px] max-w-4xl pt-10'>
			<div className='flex flex-col gap-4'>
				<section className='rounded-2xl bg-white px-4 py-4'>
					{isLoading ? (
						<p className=''>Loading orders detail..</p>
					) : isError ? (
						<p className=''>Error loading order detail</p>
					) : (
						data && (
							<>
								<OrderDetailsEstimation order={data} refetch={refetch} />
								<OrderDetailsStatus order={data} />
								<OrderDetailsSummary order={data} />
								<Separator orientation='horizontal' className='my-5' />
								<OrderDetailsPricing order={data} />
								<Separator orientation='horizontal' className='my-5' />
								<OrderDetailsAddress isPublicTracking order={data} />
							</>
						)
					)}
				</section>
			</div>
			<PaymentSuccessModal
				showModal={showSuccessModal}
				setShowModal={setShowSuccessModal}
			/>
		</div>
	)
}
