'use client'

import React, { useState } from 'react'
import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { cn } from '@/lib/utils'

import { allCategory } from './data'

const MenuCategories = ({
	menuItemsByCategory,
	setHasTopMenuClicked,
}: {
	menuItemsByCategory: { [key: string]: MenuItemType }
	setHasTopMenuClicked?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	const [activeCategory, setActiveCategory] = useState(allCategory[0])

	return (
		<div className='w-full pt-5 mobile-md:pt-0'>
			<ul className='flex w-full flex-col gap-1.5 mobile-md:flex-row'>
				{Object.keys(menuItemsByCategory)?.length > 0
					? Object.keys(menuItemsByCategory)?.map((category, idx) => (
							<CategoryItem
								key={idx}
								idx={idx}
								category={category}
								activeCategory={activeCategory}
								setActiveCategory={setActiveCategory}
								setHasTopMenuClicked={setHasTopMenuClicked}
							/>
					  ))
					: null}
			</ul>
		</div>
	)
}

const CategoryItem = ({
	idx,
	category,
	activeCategory,
	setActiveCategory,
	setHasTopMenuClicked,
}) => {
	const handleClick = (e) => {
		e.preventDefault()
		// setActiveCategory(category)
		// control the click event
		// Set the hash
		window.location.hash = e.target.hash
		// Scroll to the section + 1 to account for weird bug.
		// remove the `+1` and click on Section 2 link to see the bug.
		const targetSection: HTMLElement = document.querySelector(
			`${e.target.hash}`
		)
		// targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
		setHasTopMenuClicked(true)
		window.scrollTo(0, targetSection.offsetTop + 1)
	}
	return (
		<>
			<li className=' w-full '>
				<a
					href={`#${category.split(' ').join('-')}`}
					data-scrollspy-id={category.split(' ').join('-')}
					// onClick={handleClick}
					className={cn(
						'block w-full items-center justify-center truncate  whitespace-nowrap rounded-md px-1 py-1.5 pl-2  text-left text-base capitalize text-[#6b6b83] ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mobile-md:text-sm mobile-md:font-medium'
					)}
				>
					{category.toLowerCase()}
				</a>
			</li>
		</>
	)
}

export default MenuCategories
