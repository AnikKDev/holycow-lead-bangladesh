import { Dispatch, SetStateAction, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'
import {
	getCartTotals,
	selectAllCartItems,
} from '@/redux/slices/orderSlice/orderSlice'

import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'

import { LoginRegisterModal } from '../checkout/login-register-modal'
import CartItem from './cart-item'

const CartSidebar = ({
	showCartSidebar,
	setShowCartSidebar,
}: {
	showCartSidebar: boolean
	setShowCartSidebar: Dispatch<SetStateAction<boolean>>
}) => {
	const router = useRouter()
	const params = useParams()
	const [showModal, setShowModal] = useState(false)
	const cartItems = useAppSelector(selectAllCartItems)
	const cartTotals = useAppSelector(getCartTotals)

	return (
		<>
			<Sheet open={showCartSidebar} onOpenChange={setShowCartSidebar}>
				<SheetContent className='flex h-full w-[420px] flex-col flex-nowrap gap-0 px-0 py-3 mobile-sm:w-full '>
					<SheetHeader className='shrink-0 border-b border-border px-3 pb-4'>
						<SheetTitle>Cart Items({cartItems?.length})</SheetTitle>
					</SheetHeader>
					<div className=' min-h-fit grow-[1] overflow-y-auto px-3 py-4'>
						{cartItems.length > 0 ? (
							<div className='grid  gap-7 '>
								{cartItems.map((item) => (
									<CartItem item={item} key={item.id} />
								))}
							</div>
						) : (
							<p>No items in the cart</p>
						)}
					</div>
					<SheetFooter className='shrink-0 flex-col gap-3 border-t border-border px-3 pt-3'>
						<div className='flex items-center justify-between'>
							<h3 className='text-base font-semibold'>Subtotal:</h3>
							<h3 className='text-base font-semibold'>
								{formatPrice(cartTotals.subtotal)}
							</h3>
						</div>
						<div className='w-full'>
							<Button
								size='default'
								type='button'
								className=' w-full font-medium uppercase'
								onClick={() => {
									setShowCartSidebar(false)
									setShowModal(true)
									// router.push(`/takeaway-location/${params.location}/checkout`)
								}}
							>
								Go to checkout
							</Button>
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
			<LoginRegisterModal showModal={showModal} setShowModal={setShowModal} />
		</>
	)
}

export default CartSidebar
