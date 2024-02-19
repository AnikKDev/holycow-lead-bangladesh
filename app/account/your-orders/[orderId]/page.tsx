'use client'

import { useGetOrderDetailByIdQuery } from '@/redux/slices/orderSlice/orderApislice'

import OrderBackButton from '@/components/account/orders/order-details/detail-back-btn'
import OrderDetailsAddress from '@/components/account/orders/order-details/order-details-address'
import OrderDetailsEstimation from '@/components/account/orders/order-details/order-details-eta'
import OrderDetailsPricing from '@/components/account/orders/order-details/order-details-pricing'
import OrderDetailsStatus from '@/components/account/orders/order-details/order-details-status'
import OrderDetailsSummary from '@/components/account/orders/order-details/order-details-summary'
import { Separator } from '@/components/ui/separator'

type Props = {
	params: { orderId: string }
}

export default function OrderDetails({ params }: Props) {
	const { data, isLoading, isError } = useGetOrderDetailByIdQuery(
		params.orderId,
		{
			refetchOnFocus: true,
			refetchOnReconnect: true,
		}
	)

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
