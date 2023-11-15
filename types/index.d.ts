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
