import Image from 'next/image'
import itemImg from '@/public/menu-item.jpg'

import { MenuItemType } from './menu-items'

interface IMenuItem {
	item: MenuItemType
}

const MenuItem = ({ item }: IMenuItem) => {
	return (
		<div className='overflow-hidden rounded-md border border-border/75 bg-white transition hover:border-border/100 hover:shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16)]'>
			<div className='grid grid-cols-16 justify-between gap-2'>
				<div className='col-start-1 col-end-12 flex flex-col gap-2 py-3 pl-2'>
					<h2 className='text-base font-medium text-foreground'>{item.name}</h2>
					<p className='text-sm font-normal text-[#767676] text-foreground'>
						{item.description}
					</p>
					<p className='text-sm font-medium text-foreground/70'>{item.price}</p>
				</div>
				<div className='col-start-12 col-end-[17]'>
					<Image
						src={itemImg}
						className='h-full w-full object-cover'
						alt='Menu Item'
					/>
				</div>
			</div>
		</div>
	)
}

export default MenuItem
