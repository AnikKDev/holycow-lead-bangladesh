import { OrderDetailType } from '@/redux/slices/orderSlice/orderSlice'

type Props = { order: OrderDetailType }

export default function OrderDetailsAddress({ order }: Props) {
	return (
		<div>
			<h3 className='mb-3 mt-8 text-lg font-medium capitalize'>
				{/* Delivery address/pickup address */}
				{order?.order_type === 'DELIVERY'
					? 'Delivery Address'
					: order?.order_type === 'COLLECTION' && 'Collection Address'}
			</h3>
			{order?.order_type === 'DELIVERY' ? (
				<>
					<h4 className='mb-3 text-base font-medium capitalize text-gray-500'>
						{order?.address?.address}
					</h4>
					<h4 className='mb-3 text-base font-medium capitalize text-gray-500'>
						{order?.address?.postal_code}, {order?.address?.apartment_number}
					</h4>
				</>
			) : (
				<h4>{order?.address}</h4>
			)}
		</div>
	)
}
