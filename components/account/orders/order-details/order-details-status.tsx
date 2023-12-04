import React from 'react'

import CustomBadge from '@/components/ui/custom-ui/custom-badge'

import OrderDetailsStatusSteps from './order-details-status-steps'

type Props = {}

export default function OrderDetailsStatus({}: Props) {
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
		<div className='my-10 min-h-[4rem] rounded-lg border border-[#D1D5DB] p-6'>
			<div>
				<h3 className='mb-3 text-xl font-medium'>Order status</h3>
				<CustomBadge status='In Progress' />
			</div>
			{/* steppers */}
			<ol className='c-stepper mt-5'>
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
