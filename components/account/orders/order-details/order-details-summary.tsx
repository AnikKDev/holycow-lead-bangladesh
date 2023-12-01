import React from 'react'

import OrderDetailsSummaryItems from './order-details-summary-items'

type Props = {}

export default function OrderDetailsSummary({}: Props) {
	return (
		<div>
			<h3 className='my-8 text-2xl font-semibold'>Order Summary</h3>
			<OrderDetailsSummaryItems />
			<OrderDetailsSummaryItems />
			<OrderDetailsSummaryItems />
		</div>
	)
}
