export type NavItemType = {
	title: string
	path?: string
	noPathIdentifier?: string
	icon?: JSX.Element
	submenu?: boolean
	subMenuItems?: NavItemType[]
}

export const NAVBAR_ITEMS: NavItemType[] = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Explore menu',
		path: '/takeaway-menu',
		submenu: true,
		subMenuItems: [
			{ title: 'Takeaway Menu', path: '/takeaway-menu' },
			{ title: 'Lunch Menu', path: '/lunch-menu/' },
			{
				title: 'Fine Dine Menu',
				path: '/fine-dining-menu/',
			},
			{
				title: 'Make a Reservation',
				path: '/locations/limehouse-canary-wharf-indian-restaurant/',
			},
		],
	},
	{
		title: 'Restaurant',
		path: '/restaurant',
		submenu: true,
		subMenuItems: [
			{ title: 'Fine Dining Menu', path: '/fine-dining-menu/' },
			{ title: 'Reservation', path: '/reservations/' },
			{
				title: 'Limehouse - Canary Wharf Restaurant',
				path: '/locations/limehouse-canary-wharf-indian-restaurant/',
			},
		],
	},
	{
		title: 'Takeaway',
		path: '/takeaway',
		submenu: true,
		subMenuItems: [
			{ title: 'Takeaway Menu', path: '/takeaway-menu/' },
			{ title: 'Takeaway Location', path: '/locations' },
			{ title: 'Lunch Menu', path: '/lunch-menu' },
		],
	},
	{
		title: 'Online Order',
		path: '',
		noPathIdentifier: 'online-order',
	},
	{ title: 'Private Event', path: '/private-event' },
	{ title: 'Career', path: '/career' },
	{ title: 'Offers', path: '/whats-on' },
	{ title: 'Contact Us', path: '/Contact' },
	{
		title: 'Holy Cow',
		path: '/about-us',
		submenu: true,
		subMenuItems: [
			{ title: 'About Us', path: '/about-us' },
			{ title: 'Contact Us', path: '/contact' },
			{ title: 'Allergy Advice', path: '/allergy-advice' },
		],
	},
]
