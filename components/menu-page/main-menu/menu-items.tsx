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
		<div
			className='flex flex-col justify-start  gap-6 pt-5 mobile-md:container'
			id='menu-container-1'
		>
			{Object.keys(menuItemsByCategory)?.length > 0 ? (
				Object.keys(menuItemsByCategory)?.map((category) => {
					return (
						<div
							id={category.split(' ').join('-')}
							data-nav-title={category.split(' ').join('-')}
							data-scrollspy
							className='flex scroll-m-32 flex-col justify-center gap-2.5'
						>
							<h1 className='text-xl font-medium'>{category}</h1>
							<div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4'>
								{menuItemsByCategory[category]?.map((item: MenuItemType) => {
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
				})
			) : (
				<p className='text-center'> No result found </p>
			)}
		</div>
	)
}

export default MenuItems
