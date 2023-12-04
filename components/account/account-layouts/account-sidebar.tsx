import { FaRegCircleUser } from 'react-icons/fa6'
import { MdOutlineLocationOn } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'

import AccountSidebarTab from '../account-components/account-sidebar-tab'

type Props = {}
export const ACCOUNT_TABS = [
	{
		name: 'profile',
		navigateTo: '/your-profile',
		info: 'account information',
		icon: <FaRegCircleUser className='text-3xl' />,
	},
	{
		name: 'your orders',
		navigateTo: '/your-orders',
		info: 'your orders',
		icon: <RxDashboard className='text-3xl' />,
	},
	{
		name: 'view address',
		navigateTo: '/view-address',
		info: 'delivery addresses',
		icon: <MdOutlineLocationOn className='text-3xl' />,
	},
]
export default function AccountSidebar({}: Props) {
	return (
		<>
			<div className='sticky left-0 top-0 z-20 flex h-screen w-96 flex-col space-y-4 overflow-auto pb-5'>
				{/* buttons */}
				{ACCOUNT_TABS.map((tab) => (
					<AccountSidebarTab tab={tab} key={tab.name} />
				))}
			</div>
		</>
	)
}
