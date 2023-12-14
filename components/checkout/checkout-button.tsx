'use client'

import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'
import { getCartTotals } from '@/redux/slices/orderSlice/orderSlice'

import { formatPrice } from '@/lib/utils'

import { Button } from '../ui/button'

const CheckoutButton = () => {
	const cartTotals = useAppSelector(getCartTotals)
	const router = useRouter()
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
						router.push('/account/your-profile')
					}}
				>
					Place Order
				</Button>
			</div>
		</div>
	)
}

export default CheckoutButton
