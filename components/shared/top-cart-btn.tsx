'use client'

import { useState } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { selectTotalCartItems } from '@/redux/slices/orderSlice/orderSlice'
import { FaShoppingCart } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

import CartSidebar from '../cart/cart-sidebar'
import { Button } from '../ui/button'

const TopCartBtn = () => {
	const [showCartSidebar, setShowCartSidebar] = useState(false)
	const totalCartItems = useAppSelector(selectTotalCartItems)
	return (
		<>
			<Button
				onClick={() => {
					setShowCartSidebar(true)
				}}
				className='flex items-center space-x-1.5 rounded-full px-4 text-primary-foreground'
				variant='default'
				size='sm'
			>
				<FaShoppingCart className='text-sm' />
				<span className='text-sm'>Cart</span>
				<GoDotFill className='text-sm' />
				<span>{totalCartItems}</span>
			</Button>

			<CartSidebar
				showCartSidebar={showCartSidebar}
				setShowCartSidebar={setShowCartSidebar}
			/>
		</>
	)
}

export default TopCartBtn
