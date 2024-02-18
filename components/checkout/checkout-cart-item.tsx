import Image from 'next/image'
import itemImg from '@/public/menu-item.jpg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import {
	changeCartItemQuantityByInput,
	decreaseItemQuantity,
	increaseItemQuantity,
	OrderInitialState,
	removeCartItem,
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { store } from '@/redux/store'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { GoTrash } from 'react-icons/go'
import { useMediaQuery } from 'react-responsive'

import { apiUrl } from '@/lib/constatns'
import { formatPrice } from '@/lib/utils'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const resetOrderDiscount = (orderState: OrderInitialState) => {
	if (orderState.discount) {
		store.dispatch(
			setOrderState({
				...orderState,
				discount: null,
				promo_code: '',
				promo_code_id: null,
			})
		)
	}
}

const CheckoutCartItem = ({ item }: { item: MenuItemType }) => {
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
	const isMobileMd = useMediaQuery({ maxWidth: 768 })

	return (
		<>
			<div className='-ml-2 -mr-2 grid grid-cols-[auto,1fr] items-center gap-4 rounded-md py-3 pl-2 pr-2 transition hover:bg-[#E9E2D2]'>
				<div>
					<Image
						src={item?.image ? `${apiUrl}${item.image}` : itemImg}
						alt='Cart product'
						className='h-14 w-14 rounded-sm object-cover'
						height={100}
						width={100}
					/>
				</div>
				<div className='flex flex-row justify-between'>
					<h1 className='w-full text-base font-medium'>
						<span className='text-base font-medium'>{item.item_name}</span>
						{isMobileMd && (
							<div className='flex w-full items-center justify-between pt-1.5'>
								<span className='text-base font-medium'>
									{formatPrice(Number(item.price) * item.quantity)}
								</span>
								<div className='flex items-center gap-2'>
									<Button
										onClick={handleDeleteCartItem}
										variant='outline'
										className='h-[26px] w-[26px] rounded-full border border-border p-0 hover:bg-transparent hover:text-foreground'
									>
										<GoTrash className='h-[12px] w-[12px]' />
									</Button>
									<div className='flex h-7 items-center rounded-full border border-b bg-white px-1.5 py-0'>
										<Button
											variant='outline'
											className='border-none bg-transparent p-0 hover:bg-transparent hover:text-foreground'
											onClick={handleDecreaseQuantity}
										>
											<FiMinus className='h-[14px] w-[14px]' />
										</Button>
										<Input
											type='number'
											className='h-7 w-9 max-w-full border-none bg-transparent px-0 py-0 text-center text-sm font-medium focus-visible:ring-0 focus-visible:ring-offset-0'
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
											onClick={handleIncreaseQuantity}
											variant='outline'
											className='border-none bg-transparent p-0 hover:bg-transparent hover:text-foreground'
										>
											<FiPlus className='h-[14px] w-[14px]' />
										</Button>
									</div>
								</div>
							</div>
						)}
					</h1>
					<div className='flex items-center gap-16'>
						{!isMobileMd && (
							<div className='flex items-center gap-5 mobile-md:gap-1.5'>
								<Button
									onClick={handleDeleteCartItem}
									variant='outline'
									className='h-[30px]  w-[30px] rounded-full border border-border p-0 hover:bg-transparent hover:text-foreground'
								>
									<GoTrash className='h-[16px] w-[16px]' />
								</Button>
								<div className='flex h-8 items-center rounded-full border border-b bg-white px-1.5 py-0'>
									<Button
										variant='outline'
										className='border-none bg-transparent p-0 hover:bg-transparent hover:text-foreground'
										onClick={handleDecreaseQuantity}
									>
										<FiMinus className='h-[14px] w-[14px]' />
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
										onClick={handleIncreaseQuantity}
										variant='outline'
										className='border-none bg-transparent p-0 hover:bg-transparent hover:text-foreground'
									>
										<FiPlus className='h-[20px] w-[20px]' />
									</Button>
								</div>
							</div>
						)}

						<span className='text-base font-medium mobile-md:hidden'>
							{formatPrice(Number(item.price) * item.quantity)}
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default CheckoutCartItem
