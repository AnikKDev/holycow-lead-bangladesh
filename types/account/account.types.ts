export type AccountTab = {
	name: string
	navigateTo: string
	info: string
	icon?: JSX.Element
}
export type YourOrdersTab = {
	name: string
}

export type OrderTableColumns = {
	orderNumber: string
	items: string
	orderDate: string
	status: React.ReactNode
	total: string
}
export type AccountAddress = {
	address: string
	address_name: string
	apartment_number: string
	city: string
	customer: number | string
	id?: number
	postal_code: string
}
