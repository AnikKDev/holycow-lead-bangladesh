import { Separator } from '@/components/ui/separator'
import OrderBackButton from '@/components/account/orders/order-details/detail-back-btn'
import OrderDetailsAddress from '@/components/account/orders/order-details/order-details-address'
import OrderDetailsEstimation from '@/components/account/orders/order-details/order-details-eta'
import OrderDetailsPricing from '@/components/account/orders/order-details/order-details-pricing'
import OrderDetailsStatus from '@/components/account/orders/order-details/order-details-status'
import OrderDetailsSummary from '@/components/account/orders/order-details/order-details-summary'

type Props = {}

export default function OrderDetails({}: Props) {
	return (
		<div className='flex flex-col gap-4'>
			<div>
				<OrderBackButton />
			</div>
			<section className='rounded-2xl bg-white px-4 py-4'>
				<OrderDetailsEstimation />
				<OrderDetailsStatus />
				<OrderDetailsSummary />
				<Separator orientation='horizontal' />
				<OrderDetailsPricing />
				<Separator orientation='horizontal' className='my-10' />
				<OrderDetailsAddress />
			</section>
		</div>
	)
}
