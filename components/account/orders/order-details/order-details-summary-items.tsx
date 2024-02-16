import itemImg from '@/public/menu-item.jpg'
import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import Image from 'next/image'

import { formatPrice } from '@/lib/utils'

type Props = { orderItem: MenuItemType }

export default function OrderDetailsSummaryItems({ orderItem }: Props) {
	return (
		<div className='flex items-start justify-between'>
			<div className='flex gap-5'>
				<Image
					src={itemImg}
					alt='Cart product'
					className='h-14 w-14 rounded-sm object-cover'
				/>
				<div className='flex flex-col gap-1'>
					<h1 className='text-base font-medium'>{orderItem?.item_name}</h1>
					<p className='text-sm font-medium text-[#767676]'>
						Quantity: {orderItem?.quantity}
					</p>
				</div>
			</div>

			<div className='flex items-center justify-between'>
				<span className='text-base font-medium'>
					{formatPrice(orderItem?.unit_price)}
					£10.69
				</span>
			</div>
		</div>
	)
}
