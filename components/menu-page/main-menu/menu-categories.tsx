'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

import { allCategory } from './data'

const MenuCategories = () => {
	const [activeCategory, setActiveCategory] = useState(allCategory[0])

	return (
		<div className='pt-5'>
			<ul className='flex flex-col gap-1.5'>
				{allCategory.map((category, idx) => (
					<CategoryItem
						idx={idx}
						category={category}
						activeCategory={activeCategory}
						setActiveCategory={setActiveCategory}
					/>
				))}
			</ul>
		</div>
	)
}

const CategoryItem = ({ idx, category, activeCategory, setActiveCategory }) => {
	return (
		<>
			<li key={idx} className='w-full'>
				<button
					onClick={() => setActiveCategory(category)}
					className={cn(
						'-ml-2 block w-full items-center justify-center whitespace-nowrap rounded-md  px-1 py-1.5 pl-2 text-left text-base  text-[#6b6b83] ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
						activeCategory === category
							? 'rounded-sm bg-primary/25 font-medium text-foreground'
							: ''
					)}
				>
					{category}
				</button>
			</li>
		</>
	)
}

export default MenuCategories
