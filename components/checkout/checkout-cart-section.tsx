'use client'

import { useParams, useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'
import { selectAllCartItems } from '@/redux/slices/orderSlice/orderSlice'
import { AiOutlineShop } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import { useMediaQuery } from 'react-responsive'

import { Button } from '../ui/button'
import CheckoutCartItem from './checkout-cart-item'

const CheckoutCartSection = () => {
	const router = useRouter()
	const params = useParams()
	const location = params.location as string
	const cartItems = useAppSelector(selectAllCartItems)
	const isMobileMd = useMediaQuery({ maxWidth: 768 })

	return (
		<div className='flex flex-col gap-3 pt-6 mobile-md:gap-2 mobile-md:pt-1'>
			<Button
				variant='link'
				size='lg'
				className='mb-1.5 mt-1.5 h-auto w-max p-0 text-base font-medium capitalize text-primary-dark'
			>
				<AiOutlineShop size={18} className='text-primary-dark' />
				&nbsp; Holycow - {location?.replace('-', ' ')}
			</Button>
			<h1 className='border-b border-border pb-3 text-lg font-medium mobile-md:hidden'>
				Your Cart({cartItems.length})
			</h1>

			{isMobileMd && (
				<h3 className='flex items-center justify-between text-base font-medium'>
					<span className='text-xl font-medium'>Items</span>
					<Button
						variant='link'
						className='m-0 h-auto  p-0'
						onClick={() => {
							router.push(`/locations/${location}/`)
						}}
					>
						Edit order
					</Button>
				</h3>
			)}

			<div className='flex flex-col gap-1'>
				{cartItems.length > 0 ? (
					cartItems.map((item) => (
						<CheckoutCartItem item={item} key={item.id} />
					))
				) : (
					<p>No items in the cart</p>
				)}
			</div>
			<div className='mobile-md:hidden'>
				<Button
					onClick={() => {
						router.push(`/locations/${location}/`)
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
