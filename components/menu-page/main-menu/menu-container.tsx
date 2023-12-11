import { useRef } from 'react'

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
const onScrollUpdate = (entry, isInVewPort) => {
	const { target, boundingClientRect } = entry
	const menuItem = document.querySelector(`[data-scrollspy-id="${target.id}"]`)
	if (boundingClientRect.y <= 0 && isInVewPort) {
		menuItem?.classList?.add('active-scrollspy')
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

	return (
		<div className='container' id='menu-container'>
			<div className='flex flex-row'>
				<ScrollSpy handleScroll={onScrollUpdate} />
				{/* menu categories */}
				<div className='relative z-[unset] -ml-2 mr-4 flex min-w-[190px] max-w-min flex-1'>
					<div
						ref={sidebarRef}
						className='sticky__sidebar flex h-[calc(100vh-65px)] flex-1 items-start overflow-y-auto overflow-x-hidden bg-transparent p-0 shadow-none'
					>
						<MenuCategories menuItemsByCategory={menuItemsByCategory} />
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
