import { OrderDetailType } from '@/redux/slices/orderSlice/orderSlice'

type Props = { order: OrderDetailType; isPublicTracking?: boolean }
/*
if (typeof order?.address === 'object' && order.address !== null) {
		const address = order.address.address
		console.log(address)
	} else if (typeof order?.address === 'string') {
		const address = order.address
		console.log(address)
	}

*/
export default function OrderDetailsAddress({
	order,
	isPublicTracking = false,
}: Props) {
	return (
		<div>
			<h3 className='mb-3 mt-8 text-lg font-medium capitalize'>
				{/* Delivery address/pickup address */}
				{order?.order_type === 'DELIVERY'
					? 'Delivery Address'
					: order?.order_type === 'COLLECTION' && 'Collection Address'}
			</h3>
			{order?.order_type === 'DELIVERY' && !isPublicTracking ? (
				<>
					<h4 className='mb-3 text-base font-medium capitalize text-gray-500'>
						{order?.address?.address}
					</h4>
					<h4 className='mb-3 text-base font-medium capitalize text-gray-500'>
						{order?.address?.postal_code}, {order?.address?.apartment_number}
					</h4>
				</>
			) : (
				<h4>{typeof order?.address === 'string' && order.address}</h4>
			)}
		</div>
	)
}
