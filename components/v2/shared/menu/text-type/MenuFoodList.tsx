import React from 'react'
import { FoodListProps } from '@/types'

import FoodCard from '../../card/FoodCard'

const MenuFoodList = ({ food_list_items, food_list_name }: FoodListProps) => {
	return (
		<div className='_desktop-sm:mb-16 _desktop-md:mb-16'>
			<details className='group _desktop-sm:hidden _desktop-md:hidden'>
				<summary className='mb-8 flex items-center justify-between text-lg font-semibold leading-[1.7] tracking-[0.04] text-[#905A09]'>
					{food_list_name}
					<span className='transition group-open:rotate-180'>
						<svg
							className='h-8 w-8'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
								clip-rule='evenodd'
							/>
						</svg>
					</span>
				</summary>
				<div className='flex flex-col gap-8 group-open:animate-accordion-down'>
					{food_list_items?.map((item) => (
						<FoodCard
							key={item.id}
							id={item.id}
							food_name={item.food_name}
							description={item.description}
						/>
					))}
				</div>
			</details>
			<>
				<div className='hidden items-center justify-between text-[32px] font-semibold leading-[1.7] tracking-[0.04] text-[#905A09] _desktop-sm:flex _desktop-md:flex'>
					{food_list_name}
					<svg
						className='h-8 w-8'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fill-rule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clip-rule='evenodd'
						/>
					</svg>
				</div>

				<div className='hidden flex-col gap-8 overflow-hidden _desktop-sm:flex _desktop-md:flex'>
					{food_list_items?.map((item) => (
						<FoodCard
							key={item.id}
							id={item.id}
							food_name={item.food_name}
							description={item.description}
						/>
					))}
				</div>
			</>
		</div>
	)
}
export default MenuFoodList
