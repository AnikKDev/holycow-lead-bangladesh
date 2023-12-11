'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import itemImg from '@/public/menu-item.jpg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import {
	addItemToCart,
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

import { apiUrl } from '@/lib/constatns'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import CartSidebar from '@/components/cart/cart-sidebar'

export function MenuItemModal({
	showModal,
	setShowModal,
	item,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
	item: MenuItemType
}) {
	const [showCartSidebar, setShowCartSidebar] = useState(false)
	const [quantity, setQuantity] = useState(1)
	const orderState = useAppSelector(selectOrderState)
	const dispatch = useAppDispatch()
	const handleAddItemToCart = () => {
		dispatch(
			addItemToCart({
				...item,
				quantity: quantity,
			})
		)
		// if already discount added and user tries to change the cart quantity then reset the discount
		if (orderState.discount) {
			dispatch(
				setOrderState({
					...orderState,
					discount: 0,
				})
			)
		}
		setQuantity(1)
		setShowModal(false)
		setShowCartSidebar(true)
	}

	// useEffect(() => {
	// 	if (!quantity) {
	// 		setQuantity(1)
	// 	}
	// }, [quantity])

	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] overflow-hidden p-0'>
					<DialogHeader className='text-left'>
						<div>
							<Image
								src={item?.image ? `${apiUrl}${item?.image}` : itemImg}
								alt='Menu item image'
								className='max-h-[300px] w-full object-cover'
								height={300}
								width={500}
							/>
						</div>
						<div className='flex flex-col justify-center gap-2.5 px-3 py-2.5 text-foreground'>
							<DialogTitle className=''>{item?.item_name}</DialogTitle>
							<DialogTitle className='text-base'>
								{formatPrice(item?.price)}
							</DialogTitle>
							<DialogDescription>{item?.description}</DialogDescription>
						</div>
					</DialogHeader>

					<DialogFooter className='mt-2 flex-col gap-2 border-t border-border px-3 pb-3 pt-2.5'>
						<div className='flex items-center justify-center gap-4'>
							<Button
								onClick={() => {
									if (quantity > 1) {
										setQuantity(quantity - 1)
									}
								}}
								variant='outline'
								className='border-none p-0 hover:bg-transparent hover:text-foreground'
							>
								<FiMinusCircle className='h-6 w-6' />
							</Button>
							<Input
								type='number'
								className='h-8 w-14 max-w-full bg-[#E9E2D2] px-0 py-0 text-center text-lg font-medium'
								id='quantity'
								min={1}
								value={quantity}
								onChange={(e) => {
									setQuantity(e.target.valueAsNumber)
								}}
								placeholder='1'
								onBlur={() => {
									if (!quantity) {
										setQuantity(1)
									}
								}}
							/>
							<Button
								onClick={() => {
									setQuantity(quantity + 1)
								}}
								variant='outline'
								className='border-none p-0 hover:bg-transparent hover:bg-none hover:text-foreground'
							>
								<FiPlusCircle className='h-6 w-6' />
							</Button>
						</div>
						<Button
							type='submit'
							className='text-base'
							onClick={() => {
								handleAddItemToCart()
							}}
						>
							Add to cart
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<CartSidebar
				showCartSidebar={showCartSidebar}
				setShowCartSidebar={setShowCartSidebar}
			/>
		</>
	)
}
