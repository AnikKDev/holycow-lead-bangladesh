import { Dispatch, SetStateAction } from 'react'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'

import CartItem from './cart-item'

const CartSidebar = ({
	showCartSidebar,
	setShowCartSidebar,
}: {
	showCartSidebar: boolean
	setShowCartSidebar: Dispatch<SetStateAction<boolean>>
}) => {
	return (
		<Sheet open={showCartSidebar} onOpenChange={setShowCartSidebar}>
			<SheetContent className='w-[420px] px-0 mobile-sm:w-full'>
				<SheetHeader className='border-b border-border px-3 pb-4'>
					<SheetTitle>Cart Items(3)</SheetTitle>
				</SheetHeader>
				<div className='grid gap-6 px-3 py-4'>
					<CartItem />
					<CartItem />
					<CartItem />
				</div>
				<SheetFooter className='flex-col gap-3 border-t border-border px-3 pt-3'>
					<div className='flex items-center justify-between'>
						<h3 className='text-base font-semibold'>Subtotal:</h3>
						<h3 className='text-base font-semibold'>32.09</h3>
					</div>
					<SheetClose asChild>
						<Button
							size='default'
							type='button'
							className=' font-medium uppercase'
						>
							Go to checkout
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default CartSidebar
