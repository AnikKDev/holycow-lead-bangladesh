import { IoMdArrowBack } from 'react-icons/io'

import { Button } from '../ui/button'
import CheckoutCartItem from './checkout-cart-item'

const CheckoutCartSection = () => {
	return (
		<div className='flex flex-col gap-3 pt-6'>
			<h1 className='border-b border-border pb-3 text-lg font-medium'>
				Your Cart(3)
			</h1>

			<div className='flex flex-col gap-1'>
				<CheckoutCartItem />
				<CheckoutCartItem />
				<CheckoutCartItem />
			</div>

			<div>
				<Button
					variant='outline'
					className=' m-0 mt-2 h-5 gap-1 border-none p-0 hover:bg-transparent'
				>
					<IoMdArrowBack size='18' /> Add more items
				</Button>
			</div>
		</div>
	)
}

export default CheckoutCartSection
