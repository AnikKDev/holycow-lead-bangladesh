'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGetTakeawayMenuQuery } from '@/redux/slices/takeawayMenuSlice/takeawayMenuSlice'
import { TakeawayMenuItem } from '@/types'

import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'

import TakeawayMenuCategoriesDropdown from './TakeawayMenuCategoriesDropdown'
import TakeawayMenuItemsList from './TakeawayMenuItemsList'

type Props = {}
const getLastPartFromUrl = (url) => {
	const parts = url.split('/')
	const nonEmptyParts = parts.filter((part) => part.trim() !== '')
	return nonEmptyParts[nonEmptyParts.length - 1]
}

const TakeawayMenuWithSidebar = (props: Props) => {
	const pathname = usePathname()
	const { data, isLoading } = useGetTakeawayMenuQuery()

	const [activeMenuItems, setActiveMenuItems] = useState<
		Array<TakeawayMenuItem>
	>([])

	const lastPartPath = getLastPartFromUrl(pathname)

	useEffect(() => {
		if (data && lastPartPath) {
			const foundMenuItem = data?.menu.find(
				(menu) => menu.slug === lastPartPath
			)

			if (foundMenuItem) {
				setActiveMenuItems(foundMenuItem.items)
			} else {
			}
		}
	}, [data, lastPartPath])

	if (isLoading) {
		return (
			<section className='grid grid-cols-12 gap-8'>
				<div className='col-span-3'>
					<ul className='flex flex-col gap-8'>
						<div className='space-y-2'>
							<Skeleton className='h-4 w-[250px]' />
							<Skeleton className='h-4 w-[200px]' />
							<Skeleton className='h-4 w-[200px]' />
						</div>
					</ul>
				</div>
			</section>
		)
	}

	console.log('data.menu: ', data.menu)
	return (
		<section className='grid grid-cols-12 gap-8'>
			<div className='col-span-12 _desktop-sm:col-span-3 _desktop-md:col-span-3'>
				<ul className='hidden gap-2 overflow-x-scroll py-3 _desktop-sm:flex  _desktop-sm:flex-col _desktop-sm:gap-8 _desktop-md:flex _desktop-md:flex-col _desktop-md:gap-8'>
					{data?.menu.map((item) => (
						<li key={item.id}>
							<Link
								className={cn(
									'whitespace-nowrap rounded-full border border-secondary-foreground px-3 py-1  font-lora text-base font-bold capitalize leading-[1.75] tracking-[0.04em] text-primary-foreground hover:text-[#905A09] hover:underline _desktop-sm:border-none _desktop-sm:text-lg _desktop-md:border-none _desktop-md:text-lg',
									lastPartPath == item.slug ? 'text-[#905A09] underline ' : ''
								)}
								href={`/takeaway-menu/${item.slug}`}
								scroll={false}
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<TakeawayMenuItemsList items={activeMenuItems} />
			<div className='sticky bottom-2 col-span-12 mt-16 flex items-center  justify-center  _desktop-sm:hidden _desktop-md:hidden'>
				<TakeawayMenuCategoriesDropdown
					categories={data.menu}
					lastPartPath={lastPartPath}
				/>
			</div>
		</section>
	)
}

export default TakeawayMenuWithSidebar
