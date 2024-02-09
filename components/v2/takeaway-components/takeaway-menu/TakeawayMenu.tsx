import React from 'react'

import TakeawayMenuList from './TakeawayMenuList'

const menuItems = [
	{
		title: 'To Start',
		img: '/takeaway/takeaway-menu-items/01-to-start.png',
		url: '/takeaway-menu/to-start',
	},
	{
		title: 'Tandoories',
		img: '/takeaway/takeaway-menu-items/02-tandoories.png',
		url: '/takeaway-menu/tandoories',
	},
	{
		title: 'Vegetable',
		img: '/takeaway/takeaway-menu-items/3-vegetable.png',
		url: '/takeaway-menu/vegetables',
	},
	{
		title: 'Vegan',
		img: '/takeaway/takeaway-menu-items/4-vegan.png',
		url: '/takeaway-menu/vegan',
	},
	{
		title: 'Seafoods',
		img: '/takeaway/takeaway-menu-items/5-seafoods.png',
		url: '/takeaway-menu/seafoods',
	},
	{
		title: 'Chicken',
		img: '/takeaway/takeaway-menu-items/6-chicken.png',
		url: '/takeaway-menu/chicken',
	},
	{
		title: 'Lamb',
		img: '/takeaway/takeaway-menu-items/7-lamb.png',
		url: '/takeaway-menu/lamb',
	},
	{
		title: 'Side Dishes (Vegetable)',
		img: '/takeaway/takeaway-menu-items/8-side-dishes.png',
		url: '/takeaway-menu/side-dishes-vegetable',
	},
	{
		title: 'Specialty',
		img: '/takeaway/takeaway-menu-items/9-specialty.png',
		url: '/takeaway-menu/specialty',
	},
	{
		title: 'Rice & Bread',
		img: '/takeaway/takeaway-menu-items/10-rice-and-bread.png',
		url: '/takeaway-menu/rice-bread',
	},
	{
		title: 'Accompaniments',
		img: '/takeaway/takeaway-menu-items/11-accompaniments.png',
		url: '/takeaway-menu/accompaniments',
	},
	{
		title: 'Drinks',
		img: '/takeaway/takeaway-menu-items/12-drinks.png',
		url: '/takeaway-menu/drinks',
	},
]

const TakeawayMenu = () => {
	return (
		<section className='flex flex-col items-center justify-center gap-24'>
			<h2 className=' text-center font-lora text-[56px] font-medium capitalize leading-[1.3] tracking-[0.03em] text-primary'>
				Takeaway Menu
			</h2>
			<TakeawayMenuList takeawayMenuItems={menuItems} />
		</section>
	)
}

export default TakeawayMenu
