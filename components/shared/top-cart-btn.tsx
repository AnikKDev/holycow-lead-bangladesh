'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'
import { selectTotalCartItems } from '@/redux/slices/orderSlice/orderSlice'
import { FaShoppingCart } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

import CartSidebar from '../cart/cart-sidebar'
import { Button } from '../ui/button'

const TopCartBtn = () => {
	const [showCartSidebar, setShowCartSidebar] = useState(false)
	const totalCartItems = useAppSelector(selectTotalCartItems)
	const pathname = usePathname()
	if (pathname.includes('/locations/')) {
		return null
	}
	return (
		<>
			<Button
				onClick={() => {
					setShowCartSidebar(true)
				}}
				className='flex items-center space-x-1.5 rounded-full px-4 text-primary-foreground mobile-md:hidden'
				variant='default'
				size='sm'
			>
				<FaShoppingCart className='text-sm' />
				<span className='text-sm'>Cart</span>
				<GoDotFill className='text-sm' />
				<span>{totalCartItems}</span>
			</Button>
			<Button
				onClick={() => {
					setShowCartSidebar(true)
				}}
				variant='default'
				className='relative flex h-9 w-9 items-center rounded-full  p-2.5 text-primary-foreground _tablet:hidden _desktop-sm:hidden _desktop-md:hidden'
				// variant='default'
				size='sm'
			>
				{/* <IoCartOutline size className='text-2xl text-foreground' /> */}
				<FaShoppingCart size={24} className='' />
				{/* <div className='absolute -right-[15%] -top-[20%] flex h-4 w-4 items-center justify-center rounded-full bg-primary bg-opacity-80 p-1.5 text-xs text-white'>
					1
				</div> */}
			</Button>

			<CartSidebar
				showCartSidebar={showCartSidebar}
				setShowCartSidebar={setShowCartSidebar}
			/>
		</>
	)
}

export default TopCartBtn
