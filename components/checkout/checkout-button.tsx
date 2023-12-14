'use client'

import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'
import {
	getCartTotals,
	selectOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import toast from 'react-hot-toast'

import { formatPrice } from '@/lib/utils'

import { Button } from '../ui/button'

const CheckoutButton = () => {
	const cartTotals = useAppSelector(getCartTotals)
	const orderState = useAppSelector(selectOrderState)
	const router = useRouter()
	const canPlaceOrder = () => {
		if (!orderState.cartItems.length) {
			toast.error('Please add item to your cart')
			return false
		} else if (orderState.fulfillment_type === 'Delivery') {
			if (!orderState.delivery_address?.address_name) {
				toast.error('Please add your delivery address')
				return false
			} else if (!orderState?.delivery_time) {
				toast.error('Please add delivery time')
				return false
			}
		} else if (
			orderState.fulfillment_type === 'Collection' &&
			!orderState?.collection_time
		) {
			toast.error('Please add collection time')
			return false
		}
		return true
	}

	const handlePlaceOrder = () => {
		if (!canPlaceOrder()) {
			return
		}
	}
	return (
		<div className='flex shrink-0 flex-col gap-2.5 border-t border-border pt-3 mobile-md:container mobile-md:pb-2.5'>
			<div className='flex items-center justify-between '>
				<h3 className='text-base font-semibold'>
					Total <span className='text-sm font-medium'>(tax incl.)</span>
				</h3>
				<h3 className='text-base font-bold'>
					{formatPrice(cartTotals.totalPrice)}
				</h3>
			</div>
			<div className='w-full'>
				<Button
					size='lg'
					type='button'
					className=' w-full font-semibold uppercase'
					onClick={() => {
						handlePlaceOrder()
						// router.push('/account/your-profile')
					}}
				>
					Place Order
				</Button>
			</div>
		</div>
	)
}

export default CheckoutButton
