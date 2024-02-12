import React from 'react'
import { FoodListProps } from '@/types'

import FoodCard from '../../card/FoodCard'

const MenuFoodList = ({
	id,
	food_list_items,
	food_list_name,
}: FoodListProps) => {
	return (
		<div className='md:mb-16'>
			<h3 className='my-8 text-[32px] font-semibold leading-[1.7] tracking-[0.04] text-[#905A09]'>
				{food_list_name}
			</h3>
			<div className='flex flex-col gap-8'>
				{food_list_items?.map((item) => (
					<FoodCard
						key={item.id}
						id={item.id}
						food_name={item.food_name}
						description={item.description}
					/>
				))}
			</div>
		</div>
	)
}
export default MenuFoodList
