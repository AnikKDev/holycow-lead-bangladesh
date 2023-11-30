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
