import OrderDetailsSummaryItems from './order-details-summary-items'

type Props = {}

export default function OrderDetailsSummary({}: Props) {
	return (
		<div>
			<h3 className='mb-3.5 text-lg font-medium'>Order Summary</h3>
			<div className='flex flex-col gap-5'>
				<OrderDetailsSummaryItems />
				<OrderDetailsSummaryItems />
				<OrderDetailsSummaryItems />
			</div>
		</div>
	)
}
