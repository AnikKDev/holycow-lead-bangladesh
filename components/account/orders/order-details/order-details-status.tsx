import { OrderDetailType } from '@/redux/slices/orderSlice/orderSlice'

import CustomBadge from '@/components/ui/custom-ui/custom-badge'

import OrderDetailsStatusSteps from './order-details-status-steps'

type Props = { order: OrderDetailType }

export default function OrderDetailsStatus({ order }: Props) {
	const steps = [
		{ title: 'Order placed', description: 'Some desc text', completed: true },
		{
			title: 'Order being prepeared',
			description: '3:54 PM, 18/05/2022',
			completed: true,
		},
		{
			title: 'Out for Delivery',
			description: '3:54 PM, 18/05/2022',
			completed: true,
		},
		{ title: 'Delivered', description: '--', completed: false },
	]
	return (
		<div className='my-6 min-h-[4rem] rounded-lg border border-[#D1D5DB] p-6'>
			<div>
				<h3 className='mb-2 text-lg font-medium'>Order status</h3>
				<CustomBadge status={order?.status} />
			</div>
			{/* steppers */}
			<ol className='c-stepper mt-2.5'>
				{steps.map((step, index) => (
					<OrderDetailsStatusSteps
						key={index}
						title={step.title}
						description={step.description}
						completed={step.completed}
					/>
				))}
			</ol>
		</div>
	)
}
