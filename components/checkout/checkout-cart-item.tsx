import Image from 'next/image'
import itemImg from '@/public/menu-item.jpg'
import { useAppDispatch } from '@/redux/hooks'
import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import {
	changeCartItemQuantityByInput,
	decreaseItemQuantity,
	increaseItemQuantity,
	removeCartItem,
} from '@/redux/slices/orderSlice/orderSlice'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { GoTrash } from 'react-icons/go'

import { apiUrl } from '@/lib/constatns'
import { formatPrice } from '@/lib/utils'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

const CheckoutCartItem = ({ item }: { item: MenuItemType }) => {
	const dispatch = useAppDispatch()

	const handleIncreaseQuantity = () => {
		dispatch(increaseItemQuantity(item))
	}

	const handleDecreaseQuantity = () => {
		dispatch(decreaseItemQuantity(item))
	}

	const handleDeleteCartItem = () => {
		dispatch(removeCartItem(item))
	}

	return (
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
				<h1 className='text-base font-medium'>{item.item_name}</h1>
				<div className='flex items-center gap-16'>
					<div className='flex items-center gap-5'>
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
									} else {
										dispatch(
											changeCartItemQuantityByInput({
												...item,
												quantity: Number(e.target.valueAsNumber),
											})
										)
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
					<span className='text-base font-medium'>
						{formatPrice(item.price)}
					</span>
				</div>
			</div>
		</div>
	)
}

export default CheckoutCartItem
