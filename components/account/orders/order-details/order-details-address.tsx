import { OrderDetailType } from '@/redux/slices/orderSlice/orderSlice'

type Props = { order: OrderDetailType }

export default function OrderDetailsAddress({ order }: Props) {
	return (
		<div>
			<h3 className='mb-3 mt-8 text-lg font-medium capitalize'>
				Delivery address/pickup address
			</h3>
			<h4 className='mb-3 text-base font-medium capitalize text-gray-500'>
				{order?.address?.address}
			</h4>
			<h4 className='mb-3 text-base font-medium capitalize text-gray-500'>
				{order?.address?.postal_code}, {order?.address?.apartment_number}
			</h4>
		</div>
	)
}
