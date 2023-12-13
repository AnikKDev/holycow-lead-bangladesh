import CheckoutCartSection from '@/components/checkout/checkout-cart-section'
import CheckoutRightSide from '@/components/checkout/checkout-right-side'

const CheckoutPage = () => {
	return (
		<div className='container'>
			<div className='divide- grid h-[calc(100vh-75px)] grid-cols-[1fr_auto] gap-8 divide-x divide-border mobile-md:h-auto'>
				<div className=''>
					<CheckoutCartSection />
				</div>
				<div className='min-w-[500px] pl-8'>
					<CheckoutRightSide />
				</div>
			</div>
		</div>
	)
}

export default CheckoutPage
