import { allMenuItemsByCategory } from './data'
import MenuItem from './menu-item'

export type MenuItemType = {
	id: number
	name: string
	description: string
	price: number
}
const MenuItems = ({ isRestaurant }: { isRestaurant: boolean }) => {
	return (
		<div className='flex flex-col justify-center  gap-6 pt-5'>
			{Object.keys(allMenuItemsByCategory).map((category) => {
				return (
					<div className='flex flex-col justify-center gap-2.5'>
						<h1 className='text-xl font-medium'>{category}</h1>
						<div className='grid grid-cols-2 gap-4'>
							{allMenuItemsByCategory[category].map((item: MenuItemType) => {
								return <MenuItem item={item} isRestaurant={isRestaurant} />
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default MenuItems
