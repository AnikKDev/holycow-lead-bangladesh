import { OrderTableColumns, YourOrdersTab } from '@/types/account/account.types'

export const ACCOUNT_TABS = [
	{
		name: 'profile',
		navigateTo: '/your-profile',
		info: 'account information',
	},
	{
		name: 'your orders',
		navigateTo: '/your-orders',
		info: 'your orders',
	},
	{
		name: 'view address',
		navigateTo: '/view-address',
		info: 'delivery addresses',
	},
]

export const ORDERS_TAB: YourOrdersTab[] = [
	{
		name: 'current orders',
	},
	{
		name: 'order history',
	},
]
