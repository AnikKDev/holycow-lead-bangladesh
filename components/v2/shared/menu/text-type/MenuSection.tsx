import React from 'react'
import { FoodSectionProps } from '@/types'

import MenuFoodList from './MenuFoodList'

const MenuSection = ({
	food_section_name,
	food_section_items,
}: FoodSectionProps) => {
	return (
		<section className='container relative flex flex-col gap-8'>
			{food_section_name && (
				<h2 className='mt-8 text-center text-[32px] font-semibold leading-[1.7] tracking-[0.04] text-[#905A09]'>
					{food_section_name}
				</h2>
			)}
			<div className='w-full gap-x-12 overflow-hidden _desktop-sm:columns-2 _desktop-md:columns-2'>
				{food_section_items?.map((item, index) => (
					<MenuFoodList
						id={index}
						food_list_name={item.food_list_name}
						food_list_items={item.food_list_items}
						key={index}
					/>
				))}
			</div>
			<hr className='border-t border-dotted border-[#1A1301] ' />
		</section>
	)
}

export default MenuSection
