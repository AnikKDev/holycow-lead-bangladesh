'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	guestInfoInitialState,
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { useMediaQuery } from 'react-responsive'

import CheckoutButton from '@/components/checkout/checkout-button'
import CheckoutCartSection from '@/components/checkout/checkout-cart-section'
import CheckoutRightSide from '@/components/checkout/checkout-right-side'

const GuestCheckoutPage = () => {
	const isMobileMd = useMediaQuery({ maxWidth: 768 })
	const pathname = usePathname()
	const orderState = useAppSelector(selectOrderState)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(
			setOrderState({
				...orderState,
				guest_info: guestInfoInitialState,
			})
		)
	}, [pathname])

	return (
		<div className='md:container'>
			<div className='grid h-[calc(100vh-75px)] grid-cols-[1fr_auto] gap-8 divide-x divide-border mobile-md:container mobile-md:h-auto mobile-md:grid-cols-1 mobile-md:gap-3 mobile-md:divide-x-0'>
				<div className='mobile-md:hidden'>
					<CheckoutCartSection />
				</div>
				<div className='min-w-[500px] pl-8 mobile-md:order-1 mobile-md:min-w-0 mobile-md:pl-0'>
					<CheckoutRightSide isGuestCheckout />
				</div>
			</div>
			{isMobileMd && (
				<div className='sticky bottom-0 w-full bg-background'>
					<CheckoutButton isGuestCheckout />
				</div>
			)}
		</div>
	)
}

export default GuestCheckoutPage
