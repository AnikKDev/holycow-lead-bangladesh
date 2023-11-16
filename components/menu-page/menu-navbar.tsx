'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

import SearchBar from './searchbar'

export const menuNavItems = [
	{
		id: 1,
		name: 'Menu',
	},
	{
		id: 2,
		name: 'Information',
	},
	{
		id: 3,
		name: 'Reviews',
	},
]

const MenuNavbar = () => {
	const [activeMenu, setActiveMenu] = useState('menu')
	return (
		<div className='w-full py-3'>
			<div className='container flex items-center justify-between'>
				<nav className='flex items-center gap-5'>
					{menuNavItems.map((item) => {
						return (
							<div key={item.id}>
								<a
									onClick={() => setActiveMenu(item.name.toLowerCase())}
									href={`#${item.name.toLowerCase()}`}
									className={cn(
										'text-base font-medium',
										activeMenu == item.name.toLowerCase()
											? 'font-medium underline decoration-primary decoration-2 underline-offset-4'
											: ''
									)}
								>
									{item.name}
								</a>
							</div>
						)
					})}
				</nav>
				<div className='basis-1/5'>
					<SearchBar />
				</div>
			</div>
		</div>
	)
}

export default MenuNavbar
