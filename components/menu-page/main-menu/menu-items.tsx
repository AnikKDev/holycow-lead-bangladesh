import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import MenuItem from './menu-item'

const MenuItems = ({
	isRestaurant,
	menuItemsByCategory,
}: {
	isRestaurant: boolean
	menuItemsByCategory: { [key: string]: MenuItemType }
}) => {
	return (
		<div className='flex flex-col justify-center  gap-6 pt-5'>
			{Object.keys(menuItemsByCategory).map((category) => {
				return (
					<div className='flex flex-col justify-center gap-2.5'>
						<h1 className='text-xl font-medium'>{category}</h1>
						<div className='grid grid-cols-2 gap-4'>
							{menuItemsByCategory[category].map((item: MenuItemType) => {
								return (
									<MenuItem
										key={item.id}
										item={item}
										isRestaurant={isRestaurant}
									/>
								)
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default MenuItems
