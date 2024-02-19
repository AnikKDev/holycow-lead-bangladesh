import { OrderDetailType } from '@/redux/slices/orderSlice/orderSlice'

import OrderDetailsSummaryItems from './order-details-summary-items'

type Props = { order: OrderDetailType }

export default function OrderDetailsSummary({ order }: Props) {
	return (
		<div>
			<h3 className='mb-3.5 text-lg font-medium'>Order Summary</h3>
			<div className='flex flex-col gap-5'>
				{order?.order_items.map((item, idx) => (
					<OrderDetailsSummaryItems key={idx} orderItem={item} />
				))}
			</div>
		</div>
	)
}
