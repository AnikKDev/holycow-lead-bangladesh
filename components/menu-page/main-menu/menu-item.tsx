import Image from 'next/image'
import itemImg from '@/public/menu-item.jpg'

import { MenuItemType } from './menu-items'

interface IMenuItem {
	item: MenuItemType
}

const MenuItem = ({ item }: IMenuItem) => {
	return (
		<div className='overflow-hidden rounded-md border border-border/75 bg-white transition hover:border-border/100 hover:shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16)]'>
			<div className='flex justify-between'>
				<div className='py-5 pl-4 pr-2'>
					<h2>{item.name}</h2>
					<p>{item.description}</p>
					<p>{item.price}</p>
				</div>
				<div>
					<Image
						src={itemImg}
						height={120}
						width={120}
						className='h-[100px] w-[100px] object-cover'
						alt='Menu Item'
					/>
				</div>
			</div>
		</div>
	)
}

export default MenuItem
