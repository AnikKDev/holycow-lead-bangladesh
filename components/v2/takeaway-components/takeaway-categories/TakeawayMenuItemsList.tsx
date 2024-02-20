import React from 'react'
import { TakeawayMenuList } from '@/types'

import MenuFoodCard from '../../shared/card/MenuFoodCard'

const TakeawayMenuItemsList = ({ items }: TakeawayMenuList) => {
	return (
		<div className='col-span-12 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3 _desktop-sm:col-span-9 _desktop-sm:grid-cols-3 _desktop-md:col-span-9 _desktop-md:grid-cols-3'>
			{items.map((item) => (
				<MenuFoodCard
					id={item.id}
					key={item.id}
					item_name={item.item_name}
					description={item.description}
					image={item.image}
					price={item.price}
				/>
			))}
		</div>
	)
}

export default TakeawayMenuItemsList
