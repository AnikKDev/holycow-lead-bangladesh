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
		title: 'Online Order',
		path: '',
		noPathIdentifier: 'online-order',
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
		title: 'Restaurant',
		path: '/restaurant',
		submenu: true,
		subMenuItems: [
			{ title: 'Fine Dining Menu', path: '/fine-dining-menu/' },
			{ title: 'Reservation', path: '/reservations/' },
			{ title: 'Private Event', path: '/private-event/' },
			{
				title: 'Limehouse - Canary Wharf Restaurant',
				path: '/locations/limehouse-canary-wharf-indian-restaurant/',
			},
		],
	},
	{ title: 'Allergy Advice', path: '/allergy-advice' },
	{ title: 'Offers', path: '/whats-on' },
	// { title: 'Private Event', path: '/private-event' },
	{ title: 'Career', path: '/career' },
	{ title: 'About Us', path: '/about-us' },
	{ title: 'Contact Us', path: '/contact' },
]

export const takeawayLocationsListData = [
	{
		name: 'Angel',
		address: ['98 Chapel Market,', 'London N1 9EY'],
		phone: '0203 995 6000',
		location: '/locations/angel/',
		postcode: [
			'N1',
			'EC1',
			'N5',
			'EC2',
			'E8',
			'E2',
			'N7',
			'NW1',
			'WC1',
			'WC2',
			'W1',
			'E1',
			'N16',
		],
	},
	{
		name: 'Archway',
		address: ['87 Junction Road, ', 'Archway, London N19 5QU'],
		phone: '0207 263 7007',
		location: '/locations/archway',
		postcode: ['NW5', 'NW1', 'N7', 'N8', 'N19', 'N4', 'N5', 'N6'],
	},
	{
		name: 'Balham',
		address: ['27 Balham High Road, ', 'Balham, London SW12 9AL'],
		phone: '020 8673 8000',
		location: '/locations/balham',
		postcode: ['SW12', 'SW4', 'SW2', 'SW16', 'SW17', 'SW18'],
	},
	{
		name: 'Battersea',
		address: ['152 Battersea Bridge Road, ', 'Battersea, London SW11 3AW'],
		phone: '020 7498 2000',
		location: '/locations/battersea',
		postcode: [
			'SW3',
			'SW4',
			'SW5',
			'SW6',
			'SW7',
			'SW8',
			'SW9',
			'SW10',
			'SW11',
			'SW18',
			'SW1W',
			'SW1V',
		],
	},
	{
		name: 'Hammersmith',
		address: ['354 King Street, ', 'Hammersmith, London W6 0RX'],
		phone: '020 8748 8989',
		location: '/locations/hammersmith',
		postcode: ['W3', 'W4', 'W6', 'W8', 'W11', 'W12', 'W14', 'TW8'],
	},
	{
		name: 'Kilburn',
		address: ['2F Dyne Road, ', 'Kilburn, London NW6 7XB'],
		phone: '020 7372 3123',
		location: '/locations/kilburn',
		postcode: [
			'NW6',
			'NW10',
			'NW2',
			'NW11',
			'NW3',
			'NW5',
			'NW1',
			'NW8',
			'W2',
			'W9',
			'W10',
		],
	},
	{
		name: 'Putney',
		address: ['238 Upper Richmond Road, ', 'Putney, London SW15 6TG'],
		phone: '020 8788 9555',
		location: '/locations/putney',
		postcode: ['SW15', 'SW14', 'SW13', 'SW6', 'SW18', 'SW19'],
	},
	{
		name: 'Limehouse – Canary Wharf',
		address: ['51 Narrow Street, ', 'London E14 8DN'],
		phone: '0207 790 7688',
		location: '/locations/limehouse-canary-wharf-indian-restaurant',
		postcode: ['TBC'],
	},
]

// old menu

// export const NAVBAR_ITEMS: NavItemType[] = [
// 	{
// 		title: 'Home',
// 		path: '/',
// 	},
// 	{
// 		title: 'Explore menu',
// 		path: '/takeaway-menu',
// 		submenu: true,
// 		subMenuItems: [
// 			{ title: 'Takeaway Menu', path: '/takeaway-menu' },
// 			{ title: 'Lunch Menu', path: '/lunch-menu/' },
// 			{
// 				title: 'Fine Dine Menu',
// 				path: '/fine-dining-menu/',
// 			},
// 			{
// 				title: 'Make a Reservation',
// 				path: '/locations/limehouse-canary-wharf-indian-restaurant/',
// 			},
// 		],
// 	},
// 	{
// 		title: 'Restaurant',
// 		path: '/restaurant',
// 		submenu: true,
// 		subMenuItems: [
// 			{ title: 'Fine Dining Menu', path: '/fine-dining-menu/' },
// 			{ title: 'Reservation', path: '/reservations/' },
// 			{
// 				title: 'Limehouse - Canary Wharf Restaurant',
// 				path: '/locations/limehouse-canary-wharf-indian-restaurant/',
// 			},
// 		],
// 	},
// 	{
// 		title: 'Takeaway',
// 		path: '/takeaway',
// 		submenu: true,
// 		subMenuItems: [
// 			{ title: 'Takeaway Menu', path: '/takeaway-menu/' },
// 			{ title: 'Takeaway Location', path: '/locations' },
// 			{ title: 'Lunch Menu', path: '/lunch-menu' },
// 		],
// 	},
// 	{
// 		title: 'Online Order',
// 		path: '',
// 		noPathIdentifier: 'online-order',
// 	},
// 	{ title: 'Private Event', path: '/private-event' },
// 	{ title: 'Career', path: '/career' },
// 	{ title: 'Offers', path: '/whats-on' },
// 	{ title: 'Contact Us', path: '/contact' },
// 	{
// 		title: 'Holy Cow',
// 		path: '/about-us',
// 		submenu: true,
// 		subMenuItems: [
// 			{ title: 'About Us', path: '/about-us' },
// 			{ title: 'Contact Us', path: '/contact' },
// 			{ title: 'Allergy Advice', path: '/allergy-advice' },
// 		],
// 	},
// ]
