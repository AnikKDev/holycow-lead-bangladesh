import React from 'react'

import { Separator } from '@/components/ui/separator'
import OrderDetailsAddress from '@/components/account/orders/order-details/order-details-address'
import OrderDetailsEstimation from '@/components/account/orders/order-details/order-details-eta'
import OrderDetailsPricing from '@/components/account/orders/order-details/order-details-pricing'
import OrderDetailsStatus from '@/components/account/orders/order-details/order-details-status'
import OrderDetailsSummary from '@/components/account/orders/order-details/order-details-summary'

type Props = {}

export default function OrderDetails({}: Props) {
	return (
		<section>
			<OrderDetailsEstimation />
			<OrderDetailsStatus />
			<OrderDetailsSummary />
			<Separator orientation='horizontal' />
			<OrderDetailsPricing />
			<Separator orientation='horizontal' className='my-10' />
			<OrderDetailsAddress />
		</section>
	)
}
