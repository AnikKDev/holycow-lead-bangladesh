'use client'

import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

import CartSidebar from '../cart/cart-sidebar'
import { Button } from '../ui/button'

const TopCartBtn = () => {
	const [showCartSidebar, setShowCartSidebar] = useState(false)
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
				<span>3</span>
			</Button>

			<CartSidebar
				showCartSidebar={showCartSidebar}
				setShowCartSidebar={setShowCartSidebar}
			/>
		</>
	)
}

export default TopCartBtn
