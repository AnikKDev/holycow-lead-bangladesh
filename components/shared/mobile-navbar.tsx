'use client'

import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

import { NAVBAR_ITEMS, NavItemType } from './data'

type MenuItemWithSubMenuProps = {
	item: NavItemType
	toggleOpen: () => void
}

const MobileNavbar = ({
	isOpen,
	toggleOpen,
}: {
	isOpen: boolean
	toggleOpen: () => void
}) => {
	const pathname = usePathname()

	return (
		<div className='grid w-full gap-2 pt-4'>
			{NAVBAR_ITEMS.map((item, idx) => {
				const isLastItem = idx === NAVBAR_ITEMS.length - 1 // Check if it's the last item

				return (
					<ul key={idx}>
						{item.submenu ? (
							<MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
						) : (
							<MenuItem className='px-2.5'>
								<Link
									href={item.path}
									onClick={() => toggleOpen()}
									className={`flex w-full text-base ${
										item.path === pathname ? 'font-bold' : ''
									}`}
								>
									{item.title}
								</Link>
							</MenuItem>
						)}

						{!isLastItem && (
							<MenuItem className='my-1.5 h-px w-full bg-[#9E9E9E]' />
						)}
					</ul>
				)
			})}
		</div>
	)
}

export default MobileNavbar

const MenuItem = ({
	className,
	children,
}: {
	className?: string
	children?: ReactNode
}) => {
	return (
		<>
			<li className={cn('hover:font-medium', className)}>{children}</li>
		</>
	)
}

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
	item,
	toggleOpen,
}) => {
	const pathname = usePathname()
	const [subMenuOpen, setSubMenuOpen] = useState(false)

	return (
		<>
			<MenuItem className='px-2.5'>
				<button
					className='flex w-full text-base'
					onClick={() => setSubMenuOpen(!subMenuOpen)}
				>
					<div className='flex w-full flex-row items-center justify-between'>
						<span
							className={`${pathname.includes(item.path) ? 'font-bold' : ''}`}
						>
							{item.title}
						</span>
						<div className={`${subMenuOpen && 'rotate-180'}`}>
							<ChevronDown width='14' height='14' />
						</div>
					</div>
				</button>
			</MenuItem>
			<div className='ml-2 mt-2 flex flex-col space-y-2'>
				{subMenuOpen && (
					<>
						{item.subMenuItems?.map((subItem, subIdx) => {
							return (
								<MenuItem key={subIdx} className='px-2.5'>
									<Link
										href={subItem.path}
										onClick={() => toggleOpen()}
										className={` ${
											subItem.path === pathname ? 'font-bold' : ''
										}`}
									>
										{subItem.title}
									</Link>
								</MenuItem>
							)
						})}
					</>
				)}
			</div>
		</>
	)
}
