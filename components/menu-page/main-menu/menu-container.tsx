import { useEffect, useRef } from 'react'

import MenuCategories from './menu-categories'
import MenuItems from './menu-items'

import './menu.css'

const MenuContainer = ({
	isTargetItemVisible,
	isInformationVisible,
}: {
	isTargetItemVisible: boolean
	isInformationVisible: boolean
}) => {
	const sidebarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!isTargetItemVisible && sidebarRef?.current) {
			sidebarRef.current.classList.remove('absolute__sidebar')
			sidebarRef.current.classList.add('fixed__sidebar')
		} else {
			sidebarRef.current.classList.remove('fixed__sidebar')
		}
	}, [isTargetItemVisible, sidebarRef])

	useEffect(() => {
		if (isInformationVisible && sidebarRef?.current) {
			sidebarRef.current.classList.remove('fixed__sidebar')
			sidebarRef.current.classList.add('absolute__sidebar')
		} else {
			sidebarRef.current.classList.remove('absolute__sidebar')
			sidebarRef.current.classList.add('fixed__sidebar')
		}
	}, [isInformationVisible, sidebarRef])

	return (
		<div className=' container'>
			<div className='flex flex-row'>
				{/* menu categories */}
				<div className='relative z-[unset] -ml-2 mr-4 flex min-w-[190px] flex-1'>
					<div
						ref={sidebarRef}
						className='relative flex h-[calc(100vh-65px)] flex-1 items-start overflow-y-auto overflow-x-hidden bg-transparent p-0 shadow-none'
					>
						<MenuCategories />
					</div>
				</div>
				{/* menu items */}
				<MenuItems />
			</div>
		</div>
	)
}

export default MenuContainer
