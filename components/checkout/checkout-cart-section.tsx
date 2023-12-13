'use client'

import { useParams, useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'
import { selectAllCartItems } from '@/redux/slices/orderSlice/orderSlice'
import { IoMdArrowBack } from 'react-icons/io'

import { Button } from '../ui/button'
import CheckoutCartItem from './checkout-cart-item'

const CheckoutCartSection = () => {
	const router = useRouter()
	const params = useParams()
	const cartItems = useAppSelector(selectAllCartItems)
	return (
		<div className='flex flex-col gap-3 pt-6 mobile-md:pt-1'>
			<h1 className='border-b border-border pb-3 text-lg font-medium'>
				Your Cart({cartItems.length})
			</h1>

			<div className='flex flex-col gap-1'>
				{cartItems.length > 0 ? (
					cartItems.map((item) => (
						<CheckoutCartItem item={item} key={item.id} />
					))
				) : (
					<p>No items in the cart</p>
				)}
			</div>
			<div>
				<Button
					onClick={() => {
						router.push(`/takeaway-location/${params.location}/`)
					}}
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
