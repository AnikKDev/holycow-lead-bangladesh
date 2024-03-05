import { useEffect, useRef, useState } from 'react'

import MenuCategories from './menu-categories'
import MenuItems from './menu-items'

import './menu.css'

import { useAppSelector } from '@/redux/hooks'
import {
	getSearchedMenuItems,
	MenuItemType,
	selectMenuItemsByCategory,
	selectMenuSearchTerm,
} from '@/redux/slices/menuPageSlice/menuPageSlice'

import { ScrollSpy } from './scrollspy/ScrollSpy'

// Abstracted from ScrollSpy to allow for easier customizations
const onScrollUpdate = (entry, isInVewPort, hasTopMenuClicked, callback) => {
	const { target, boundingClientRect } = entry
	const menuItem: HTMLElement = document.querySelector(
		`[data-scrollspy-id="${target.id}"]`
	)
	const categoryContainer = document.getElementById('category-container')
	if (boundingClientRect.y <= 0 && isInVewPort) {
		menuItem?.classList?.add('active-scrollspy')
		if (categoryContainer && hasTopMenuClicked) {
			const containerLeft = categoryContainer.scrollLeft
			const containerWidth = categoryContainer.clientWidth
			const itemOffsetLeft = menuItem.offsetLeft
			const itemWidth = menuItem.clientWidth
			const scrollTo = itemOffsetLeft - (containerWidth - itemWidth) / 2
			categoryContainer.scrollTo({ left: scrollTo, behavior: 'smooth' })
		}
	} else {
		if (menuItem?.classList?.contains('active-scrollspy')) {
			menuItem?.classList?.remove('active-scrollspy')
		}
	}
}

const MenuContainer = ({
	isRestaurant,
	isTargetItemVisible,
	isInformationVisible,
}: {
	isRestaurant: boolean
	isTargetItemVisible: boolean
	isInformationVisible: boolean
}) => {
	const [hasTopMenuClicked, setHasTopMenuClicked] = useState(false)
	const sidebarRef = useRef<HTMLDivElement>(null)
	const allMenuByCategory: { [key: string]: MenuItemType } = useAppSelector(
		selectMenuItemsByCategory
	)
	const searchTerm = useAppSelector(selectMenuSearchTerm)
	const searchResult = useAppSelector(getSearchedMenuItems)
	let menuItemsByCategory: { [key: string]: MenuItemType }
	if (!searchTerm) {
		menuItemsByCategory = allMenuByCategory
	} else {
		menuItemsByCategory = searchResult
	}

	useEffect(() => {
		if (!isTargetItemVisible && sidebarRef?.current) {
			sidebarRef.current.style.backgroundColor = 'white'
		} else {
			sidebarRef.current.style.backgroundColor = '#FDFCF7'
		}
	}, [isTargetItemVisible, sidebarRef])

	// useEffect(() => {
	// 	if (!isTargetItemVisible && sidebarRef?.current) {
	// 		sidebarRef.current.classList.remove('absolute__sidebar')
	// 		sidebarRef.current.classList.add('fixed__sidebar')
	// 	} else {
	// 		sidebarRef.current.classList.remove('fixed__sidebar')
	// 	}
	// }, [isTargetItemVisible, sidebarRef])

	// useEffect(() => {
	// 	if (isInformationVisible && sidebarRef?.current) {
	// 		sidebarRef.current.classList.remove('fixed__sidebar')
	// 		sidebarRef.current.classList.add('absolute__sidebar')
	// 	} else {
	// 		sidebarRef.current.classList.remove('absolute__sidebar')
	// 		sidebarRef.current.classList.add('fixed__sidebar')
	// 	}
	// }, [isInformationVisible, sidebarRef])
	// console.log('menu-container', document.getElementById('category-container'))

	return (
		<div className='md:container'>
			<div className='flex flex-row mobile-md:flex-col'>
				<ScrollSpy
					hasTopMenuClicked={hasTopMenuClicked}
					setHasTopMenuClicked={setHasTopMenuClicked}
					handleScroll={onScrollUpdate}
				/>
				{/* menu categories */}
				<div
					ref={sidebarRef}
					className='relative z-[unset] -ml-2 mr-4 flex min-w-[190px] flex-1 mobile-md:sticky mobile-md:top-[calc(64px+48px)] mobile-md:z-[99] mobile-md:-ml-0 mobile-md:mr-0  mobile-md:min-w-full mobile-md:border-b mobile-md:border-border mobile-md:bg-background md:!bg-transparent'
				>
					<div
						id='category-container'
						className='sticky__sidebar custom-scrollbar flex h-[calc(100vh-65px)] flex-1 items-start overflow-y-auto overflow-x-hidden bg-transparent p-0 shadow-none  mobile-md:container mobile-md:h-12 mobile-md:items-center mobile-md:overflow-x-auto mobile-md:overflow-y-hidden'
					>
						<MenuCategories
							menuItemsByCategory={menuItemsByCategory}
							setHasTopMenuClicked={setHasTopMenuClicked}
						/>
					</div>
				</div>
				{/* menu items */}
				<MenuItems
					menuItemsByCategory={menuItemsByCategory}
					isRestaurant={isRestaurant}
				/>
			</div>
		</div>
	)
}

export default MenuContainer
