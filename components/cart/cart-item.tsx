import Image from 'next/image'
import itemImg from '@/public/menu-item.jpg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import {
	changeCartItemQuantityByInput,
	decreaseItemQuantity,
	increaseItemQuantity,
	removeCartItem,
	selectOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { GoTrash } from 'react-icons/go'

import { apiUrl } from '@/lib/constatns'
import { formatPrice } from '@/lib/utils'

import { resetOrderDiscount } from '../checkout/checkout-cart-item'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const CartItem = ({ item }: { item: MenuItemType }) => {
	const dispatch = useAppDispatch()
	const orderState = useAppSelector(selectOrderState)

	const handleIncreaseQuantity = () => {
		dispatch(increaseItemQuantity(item))
		resetOrderDiscount(orderState)
	}

	const handleDecreaseQuantity = () => {
		dispatch(decreaseItemQuantity(item))
		resetOrderDiscount(orderState)
	}

	const handleDeleteCartItem = () => {
		dispatch(removeCartItem(item))
		resetOrderDiscount(orderState)
	}
	return (
		<div className='grid grid-cols-[auto,1fr] items-start gap-4'>
			<div>
				<Image
					src={item?.image ? `${apiUrl}${item.image}` : itemImg}
					alt='Cart product'
					className='h-14 w-14 rounded-sm object-cover'
					height={100}
					width={100}
				/>
			</div>
			<div className='flex flex-col gap-3'>
				<div className='flex flex-col gap-1'>
					<h1 className='line-clamp-1 text-base font-medium'>
						{item.item_name}
					</h1>
					<p className='line-clamp-2 text-sm font-medium text-[#767676]'>
						{item.description}
					</p>
				</div>
				<div className='flex items-center justify-between'>
					<span className='text-base font-medium'>
						{formatPrice(item.price)}
					</span>
					<div className='flex items-center gap-3'>
						<Button
							variant='outline'
							className='h-[32px]  w-[32px] rounded-full border border-border p-0 hover:bg-transparent hover:text-foreground'
							onClick={handleDeleteCartItem}
						>
							<GoTrash className='h-[18px] w-[18px]' />
						</Button>
						<div className='flex h-[34px] items-center rounded-full border border-b px-1.5 py-0'>
							<Button
								variant='outline'
								className='border-none bg-transparent p-0 hover:bg-transparent hover:text-foreground'
								onClick={handleDecreaseQuantity}
							>
								<FiMinus className='h-[18px] w-[18px]' />
							</Button>
							<Input
								type='number'
								className='h-8 w-10 max-w-full border-none bg-transparent px-0 py-0 text-center text-sm font-medium focus-visible:ring-0 focus-visible:ring-offset-0'
								id='quantity'
								min={1}
								placeholder='1'
								value={item.quantity}
								onChange={(e) => {
									console.log(e.target.valueAsNumber, item.quantity)
									if (isNaN(e.target.valueAsNumber)) {
										dispatch(
											changeCartItemQuantityByInput({
												...item,
												quantity: 1,
											})
										)
										resetOrderDiscount(orderState)
									} else {
										dispatch(
											changeCartItemQuantityByInput({
												...item,
												quantity: Number(e.target.valueAsNumber),
											})
										)
										resetOrderDiscount(orderState)
									}
								}}
							/>
							<Button
								variant='outline'
								className='border-none bg-transparent p-0 hover:bg-transparent hover:text-foreground'
								onClick={handleIncreaseQuantity}
							>
								<FiPlus className='h-[20px] w-[20px]' />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
