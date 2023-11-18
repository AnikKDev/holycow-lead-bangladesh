'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import itemImg from '@/public/menu-item.jpg'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

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
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}) {
	const [showCartSidebar, setShowCartSidebar] = useState(false)
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] overflow-hidden p-0'>
					<DialogHeader className='text-left'>
						<div>
							<Image
								src={itemImg}
								alt='Menu item image'
								className='max-h-[300px] w-full object-cover'
							/>
						</div>
						<div className='flex flex-col justify-center gap-2.5 px-3 py-2.5 text-foreground'>
							<DialogTitle className=''>PANEER NAWABI</DialogTitle>
							<DialogTitle className='text-base'>10.69</DialogTitle>
							<DialogDescription>
								Homemade cottage cheese marinated with our own special spices,
								slowly cooked with green peppers and onions in the tandoor and
								cooled in a special medium spicy sauce. (Recommended)Homemade
								cottage cheese marinated with our own special spices, slowly
								cooked with green peppers and onions in the tandoor and cooled
								in a special medium spicy sauce. (Recommended)Homemade cottage
								cheese marinated with our own special spices, slowly cooked with
								green peppers and onions in the tandoor and cooled in a special
								medium spicy sauce. (Recommended)Homemade cottage cheese
								marinated with our own special spices, slowly cooked with green
								peppers and onions in the tandoor and cooled in a special medium
								spicy sauce. (Recommended)Homemade cottage cheese marinated with
								our own special spices, slowly cooked with green peppers and
								onions in the tandoor and cooled in a special medium spicy
								sauce. (Recommended)
							</DialogDescription>
						</div>
					</DialogHeader>

					<DialogFooter className='mt-2 flex-col gap-2 border-t border-border px-3 pb-3 pt-2.5'>
						<div className='flex items-center justify-center gap-4'>
							<Button
								variant='outline'
								className='border-none p-0 hover:bg-transparent hover:text-foreground'
							>
								<FiMinusCircle className='h-6 w-6' />
							</Button>
							<Input
								type='number'
								className='h-8 w-14 max-w-full bg-[#E9E2D2] px-0 py-0 text-center text-lg font-medium'
								id='quantity'
								defaultValue='1'
								min={1}
							/>
							<Button
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
								setShowModal(false)
								setShowCartSidebar(true)
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
