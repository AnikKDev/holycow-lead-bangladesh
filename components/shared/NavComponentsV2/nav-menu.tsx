import React from 'react'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

type Props = {}

const NavMenu = ({ content }) => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem className=''>
					<NavigationMenuTrigger>{content.displayTitle}</NavigationMenuTrigger>
					<NavigationMenuContent className='flex  flex-col gap-4 bg-primary p-10'>
						{content.links.map((item, index) => (
							<NavigationMenuLink className='w-[269px]'>
								{item.title}
							</NavigationMenuLink>
						))}
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavMenu
