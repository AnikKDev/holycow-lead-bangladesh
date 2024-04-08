import {
	ORDER_STATUS,
	OrderDetailType,
} from '@/redux/slices/orderSlice/orderSlice'

import CustomBadge from '@/components/ui/custom-ui/custom-badge'

import OrderDetailsStatusSteps from './order-details-status-steps'

type Props = { order: OrderDetailType }

type StatusStep = {
	id: number
	title: string
	completed: boolean
	status?: ORDER_STATUS
}

function updateOrderTracking(steps: StatusStep[], status: ORDER_STATUS) {
	// Create a copy to avoid modifying the original array
	const updatedSteps = steps.map((step) => ({ ...step }))

	// Define a mapping of statuses to their order (lower = earlier)
	const statusOrder = {
		ACCEPTED: 0,
		PREPARING: 1,
		DISPATCHED: 2,
		DELIVERED: 3,
	}

	// Iterate through each step
	for (let i = 0; i < updatedSteps.length; i++) {
		const currentStepStatus = steps[i].status
		const matchedStatusOrder = statusOrder[status]

		// Update completed flag only for steps before the matched status
		updatedSteps[i].completed =
			statusOrder[currentStepStatus] <= matchedStatusOrder
	}

	return updatedSteps
}

export default function OrderDetailsStatus({ order }: Props) {
	const steps: StatusStep[] = [
		{
			id: 1,
			title: 'Order placed',
			// description: 'Some desc text',
			completed: false,
			status: 'ACCEPTED',
		},
		{
			id: 2,
			title: 'Order being prepared',
			// description: '3:54 PM, 18/05/2022',
			completed: false,
			status: 'PREPARING',
		},
		{
			id: 3,
			title: 'Out for Delivery',
			// description: '3:54 PM, 18/05/2022',
			completed: false,
			status: 'DISPATCHED',
		},
		{
			id: 4,
			title: 'Delivered',
			// description: '--',
			completed: false,
			status: 'DELIVERED',
		},
	]

	return (
		<div className='my-6 min-h-[4rem] rounded-lg border border-[#D1D5DB] p-6'>
			<div>
				<h3 className='mb-2 text-lg font-medium'>Order status</h3>
				<CustomBadge status={order?.status} />
			</div>
			{/* steppers */}
			<ol className='c-stepper mt-2.5'>
				{updateOrderTracking(steps, order.status).map((step, index) => (
					<OrderDetailsStatusSteps
						key={index}
						title={step.title}
						// description={step.description}
						completed={step.completed}
					/>
				))}
			</ol>
		</div>
	)
}
