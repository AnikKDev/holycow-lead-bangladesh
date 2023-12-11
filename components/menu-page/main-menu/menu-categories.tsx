'use client'

import { useState } from 'react'
import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { cn } from '@/lib/utils'

import { allCategory } from './data'

const MenuCategories = ({
	menuItemsByCategory,
}: {
	menuItemsByCategory: { [key: string]: MenuItemType }
}) => {
	const [activeCategory, setActiveCategory] = useState(allCategory[0])

	return (
		<div className='pt-5'>
			<ul className='flex flex-col gap-1.5'>
				{Object.keys(menuItemsByCategory)?.length > 0
					? Object.keys(menuItemsByCategory)?.map((category, idx) => (
							<CategoryItem
								key={idx}
								idx={idx}
								category={category}
								activeCategory={activeCategory}
								setActiveCategory={setActiveCategory}
							/>
					  ))
					: null}
			</ul>
		</div>
	)
}

const CategoryItem = ({ idx, category, activeCategory, setActiveCategory }) => {
	const handleClick = (e) => {
		e.preventDefault()
		// setActiveCategory(category)
		// control the click event
		// Set the hash
		window.location.hash = e.target.hash
		// Scroll to the section + 1 to account for weird bug.
		// remove the `+1` and click on Section 2 link to see the bug.
		const targetSection: any = document.querySelector(`${e.target.hash}`)
		window.scrollTo(0, targetSection.offsetTop + 1)
	}
	return (
		<>
			<li className='w-full'>
				<a
					href={`#${category.split(' ').join('-')}`}
					data-scrollspy-id={category.split(' ').join('-')}
					onClick={handleClick}
					className={cn(
						'block w-full items-center justify-center whitespace-nowrap rounded-md  px-1 py-1.5 pl-2 text-left text-base  text-[#6b6b83] ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
						activeCategory === category
							? 'rounded-sm bg-primary/25 font-medium text-foreground'
							: ''
					)}
				>
					{category}
				</a>
			</li>
		</>
	)
}

export default MenuCategories
