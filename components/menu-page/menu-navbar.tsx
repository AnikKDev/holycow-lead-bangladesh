'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { cn } from '@/lib/utils'

import SearchBar from './searchbar'

export const getMenuItems = (isRestaurant = false) => {
	if (isRestaurant) {
		return [
			{
				id: 1,
				name: 'Menu',
				tab: 'menu',
			},
			{
				id: 2,
				name: 'Information',
				tab: 'information',
			},
			{
				id: 3,
				name: 'Gallery',
				tab: 'gallery',
			},
			{
				id: 4,
				name: 'Reviews',
				tab: 'reviews',
			},
		]
	} else {
		return [
			{
				id: 1,
				name: 'Menu',
				tab: 'menu',
			},
			{
				id: 2,
				name: 'Information',
				tab: 'information',
			},
			{
				id: 3,
				name: 'Reviews',
				tab: 'reviews',
			},
		]
	}
}

const MenuNavbar = ({ isRestaurant }: { isRestaurant?: boolean }) => {
	const searchParams = useSearchParams()
	const currentTab = searchParams?.get('tab')
	useEffect(() => {
		if (currentTab) {
			const elem = document.getElementById(currentTab)
			if (elem) {
				elem.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [currentTab])
	return (
		<div className='w-full border-b border-border'>
			<div className='mx-auto max-w-[1200px] '>
				<div className='w-full py-3'>
					<div className='container flex items-center justify-between'>
						<nav className='flex items-center gap-5'>
							{getMenuItems(isRestaurant).map((item) => {
								return (
									<div key={item.id}>
										<Link
											href={{ query: { tab: `${item.tab}` } }}
											scroll={false}
											// onClick={() => {
											// 	setActiveMenu(item.name.toLowerCase())
											// }}
											// href={`#${item.name.toLowerCase()}`}
											className={cn(
												'text-base font-medium',
												currentTab == item.tab
													? 'font-medium underline decoration-primary decoration-2 underline-offset-4'
													: ''
											)}
										>
											{item.name}
										</Link>
									</div>
								)
							})}
						</nav>
						<div className='basis-1/5'>
							<SearchBar />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuNavbar
