import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { Extend } from '@/lib/utils'

export type AccountTab = {
	name: string
	navigateTo: string
	info: string
	icon?: JSX.Element
}
export type OrderTabType = 'current orders' | 'order history'

export type YourOrdersTab = {
	name: OrderTabType
}

export type OrderTableColumns = {
	orderNumber: string
	items: MenuItemType[]
	orderDate: Date | string
	status: string
	total: string
}
export type AccountAddress = Extend<
	Partial<{
		address: string
		address_name: string
		apartment_number: string
		city: string
		customer: number | string
		id: number
		postal_code: string
	}>
>
