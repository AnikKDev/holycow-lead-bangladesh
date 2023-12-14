'use client'

import { useAppSelector } from '@/redux/hooks'
import {
	getCartTotals,
	selectOrderState,
} from '@/redux/slices/orderSlice/orderSlice'

import { formatPrice } from '@/lib/utils'

const OrderCalculations = () => {
	const { subtotal } = useAppSelector(getCartTotals)
	const orderState = useAppSelector(selectOrderState)
	return (
		<div className='flex flex-col gap-1.5'>
			<div className='flex items-center justify-between'>
				<h3 className='text-base font-medium'>Subtotal</h3>
				<span className='text-base font-medium'>{formatPrice(subtotal)}</span>
			</div>
			<div className='flex items-center justify-between'>
				<h3 className='text-base font-medium'>Delivery Fee</h3>
				<span className='text-base font-medium'>
					{orderState.delivery_charge > 0
						? formatPrice(orderState.delivery_charge)
						: 'Free'}
				</span>
			</div>
			{orderState.discount && (
				<div className='flex items-center justify-between'>
					<h3 className='text-base font-medium'>Discount</h3>
					<span className='text-base font-medium'>
						-{formatPrice(orderState.discount)}
					</span>
				</div>
			)}
		</div>
	)
}

export default OrderCalculations
