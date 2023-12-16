'use client'

import { useMediaQuery } from 'react-responsive'

import CheckoutButton from '@/components/checkout/checkout-button'
import CheckoutCartSection from '@/components/checkout/checkout-cart-section'
import CheckoutRightSide from '@/components/checkout/checkout-right-side'

const CheckoutPage = () => {
	const isMobileMd = useMediaQuery({ maxWidth: 768 })

	return (
		<div className='md:container'>
			<div className='grid h-[calc(100vh-75px)] grid-cols-[1fr_auto] gap-8 divide-x divide-border mobile-md:container mobile-md:h-auto mobile-md:grid-cols-1 mobile-md:gap-3 mobile-md:divide-x-0'>
				<div className='mobile-md:hidden'>
					<CheckoutCartSection />
				</div>
				<div className='min-w-[500px] pl-8 mobile-md:order-1 mobile-md:min-w-0 mobile-md:pl-0'>
					<CheckoutRightSide />
				</div>
			</div>
			{isMobileMd && (
				<div className='sticky bottom-0 w-full bg-background'>
					<CheckoutButton />
				</div>
			)}
		</div>
	)
}

export default CheckoutPage
