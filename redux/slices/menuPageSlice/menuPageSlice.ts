import { Extend } from '@/lib/utils'

import { UserType } from '../authSlice/authSlice'

export type OpeningHoursType = Extend<
	Partial<{
		week_day: string
		opening_from: string
		opening_to: string
	}>
>
export type LocationInfoType = Extend<
	Partial<{
		name: string
		address: string
		cover: string
		phone_number: string
		email: string
		rating: string
		opening_hours: OpeningHoursType[]
	}>
>
export type MenuItemType = Extend<
	Partial<{
		id: number
		item_name: string
		description: string
		price: string
		image: string
	}>
>
export type AllMenuType = Extend<
	Partial<{
		id: number
		name: string
		availability: boolean
		items: MenuItemType[]
	}>
>

export type LocationReviewItemType = Extend<
	Partial<{
		reviewer: UserType
		review: string
		rating: string
	}>
>
