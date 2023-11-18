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
			<SheetContent className='flex h-full w-[420px] flex-col flex-nowrap gap-0 px-0 py-3 mobile-sm:w-full '>
				<SheetHeader className='shrink-0 border-b border-border px-3 pb-4'>
					<SheetTitle>Cart Items(3)</SheetTitle>
				</SheetHeader>
				<div className='grid min-h-fit grow-[1] gap-7 overflow-y-auto px-3 py-4'>
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
				</div>
				<SheetFooter className='shrink-0 flex-col gap-3 border-t border-border px-3 pt-3'>
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
