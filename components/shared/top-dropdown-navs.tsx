'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export function TopDropdownNavItesm() {
	return (
		<NavigationMenu className='hidden md:block'>
			<NavigationMenuList className='gap-2 space-x-2.5'>
				<NavigationMenuItem>
					<NavigationMenuTrigger className='h-auto bg-transparent px-0 py-0 text-base font-medium transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09] data-[active]:bg-transparent data-[state=open]:bg-transparent'>
						Restaurant
					</NavigationMenuTrigger>
					<NavigationMenuContent className='border-none bg-primary'>
						<ul className='grid w-[250px]  gap-1.5 border-none bg-primary px-4 py-5'>
							<ListItem href='/fine-dining-menu/'>Fine Dining Menu</ListItem>
							<ListItem href='/reservations'>Reservation</ListItem>
							<ListItem href='/locations/limehouse-canary-wharf-indian-restaurant/'>
								Limehouse - Canary Wharf Restaurant
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className='h-auto bg-transparent px-0 py-0 text-base font-medium transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09] data-[active]:bg-transparent data-[state=open]:bg-transparent'>
						Takeaway
					</NavigationMenuTrigger>
					<NavigationMenuContent className='border-none bg-primary'>
						<ul className='grid w-[250px] gap-1.5 border-none bg-primary px-4 py-5'>
							<ListItem href='/takeaway-menu'>Takeaway Menu</ListItem>
							<ListItem href='/locations'>Takeaway Location</ListItem>
							<ListItem href='/lunch-menu'>Lunch Menu</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 p-1.5 leading-none no-underline outline-none transition-colors hover:underline  focus:underline',
						className
					)}
					{...props}
				>
					<p className='line-clamp-2 text-sm font-medium leading-snug text-[#414141]'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
