'use client'

import { MutableRefObject, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

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

const MenuNavbar = ({
	isRestaurant,
	sectionsRef,
}: {
	isRestaurant?: boolean
	sectionsRef: MutableRefObject<HTMLDivElement[]>
}) => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const router = useRouter()
	const [visibleSection, setVisibleSection] = useState()

	const currentTab = searchParams?.get('tab')
	useEffect(() => {
		console.log(currentTab)
		if (currentTab) {
			const elem = document.getElementById(currentTab)
			if (elem) {
				elem.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [currentTab])

	useEffect(() => {
		const options = {
			threshold: 0.1,
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// searchParams.set()
					const visibleSection = entry.target.getAttribute('id')
					console.log({ currentTab, visibleSection })
					if (currentTab === visibleSection) {
						// router.push(`?tab=${visibleSection}`, {
						// 	scroll: false,
						// })
					}
				}
			})
		}, options)

		// const targetSections = document.querySelectorAll("section");
		sectionsRef?.current.forEach((section) => {
			console.log({ section })
			observer.observe(section)
		})

		// To disable the entire IntersectionObserver
		return () => {
			observer.disconnect()
		}
	}, [])

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)

			return params.toString()
		},
		[searchParams]
	)

	return (
		<div className='w-full border-b border-border'>
			<div className='mx-auto flex h-12 max-w-[1200px] items-center justify-center'>
				<div className='w-full'>
					<div className='container flex items-center justify-between'>
						<nav className='flex items-center gap-5'>
							{getMenuItems(isRestaurant).map((item) => {
								return (
									<div key={item.id}>
										<Link
											href={
												// <pathname>?sort=desc
												pathname + '?' + createQueryString('tab', `${item.tab}`)
											}
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
						<div className='basis-auto'>
							<SearchBar />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuNavbar
