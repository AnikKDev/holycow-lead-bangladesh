import { IconType } from 'react-icons'

export type SiteConfig = {
	name: string
	description: string
	url: string
	ogImage: string
	links: {
		twitter: string
		github: string
	}
}

export type MenuItem = {
	id: number
	name: string
	href: string
	icon?: IconType
}

export type TakeawayMenuItem = {
	id: number
	item_name: string
	description: string
	price: string
	image: string
}

export type TakeawayMenuList = {
	items: TakeawayMenuItem[]
}

export type TakeawayMenu = {
	id: number
	name: string
	slug: string
	availability: boolean
	items: TakeawayMenuList
}
export type Review = {
	reviewer: string
	review: string
	rating: string
	image?: string
}
