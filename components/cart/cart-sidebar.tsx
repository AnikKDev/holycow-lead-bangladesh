import { Dispatch, SetStateAction, useState } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'
import {
	getCartTotals,
	selectAllCartItems,
	selectVisitedLocationSlug,
} from '@/redux/slices/orderSlice/orderSlice'
import { FiPlusCircle } from 'react-icons/fi'

import { formatPrice } from '@/lib/utils'
import { useAuthState } from '@/hooks/useAuthState'
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
	const pathname = usePathname()
	const [showModal, setShowModal] = useState(false)
	const cartItems = useAppSelector(selectAllCartItems)
	const cartTotals = useAppSelector(getCartTotals)
	const { auth } = useAuthState()
	const locationSlug = useAppSelector(selectVisitedLocationSlug)

	return (
		<>
			<Sheet open={showCartSidebar} onOpenChange={setShowCartSidebar}>
				<SheetContent className='flex h-full w-[420px] flex-col flex-nowrap gap-0 px-0 py-4 mobile-sm:w-full'>
					<SheetHeader className='shrink-0 border-b border-border px-4 pb-4'>
						<SheetTitle>Cart Items({cartItems?.length})</SheetTitle>
					</SheetHeader>
					<div className=' min-h-fit grow-[1] overflow-y-auto px-4 py-4'>
						{cartItems.length > 0 ? (
							<div>
								<div className='grid  gap-7 '>
									{cartItems.map((item) => (
										<CartItem item={item} key={item.id} />
									))}
								</div>
								<Button
									onClick={() => {
										if (
											params?.location !== locationSlug ||
											pathname.includes('checkout')
										) {
											router.push(`/locations/${locationSlug}/`)
										}
										setShowCartSidebar(false)
									}}
									variant='link'
									className='mt-2 gap-1.5 text-[#905A09]'
								>
									<FiPlusCircle className='h-4 w-4' />
									Add More Items
								</Button>
							</div>
						) : (
							<div className='flex h-full flex-col items-center justify-center space-y-4'>
								<p className='text-sm font-medium text-foreground'>
									No items in the cart
								</p>
								<Button
									onClick={() => {
										console.log(pathname.includes('checkout'))
										if (
											params?.location !== locationSlug ||
											pathname.includes('checkout')
										) {
											router.push(`/locations/${locationSlug}/`)
										}
										setShowCartSidebar(false)
									}}
									variant='link'
									className='mt-2 gap-1.5'
								>
									<FiPlusCircle className='h-4 w-4' />
									Add Items
								</Button>
							</div>
						)}
					</div>
					<SheetFooter className='shrink-0 flex-col gap-4 border-t border-border px-4 pt-4'>
						<div className='flex items-center justify-between'>
							<h3 className='text-base font-semibold'>Subtotal:</h3>
							<h3 className='text-base font-semibold'>
								{formatPrice(cartTotals.subtotal)}
							</h3>
						</div>
						<div className='w-full'>
							<Button
								disabled={
									!cartTotals.totalQuantity || pathname.includes('/checkout/')
								}
								size='default'
								type='button'
								className=' w-full font-medium uppercase'
								onClick={() => {
									setShowCartSidebar(false)
									if (auth.access) {
										router.push(`/locations/${locationSlug}/checkout`)
									} else {
										setShowModal(true)
									}
								}}
							>
								Go to checkout
							</Button>
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
			<LoginRegisterModal
				isCheckoutPage
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</>
	)
}

export default CartSidebar
