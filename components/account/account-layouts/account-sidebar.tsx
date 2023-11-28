import React, { useState } from 'react'
import { ACCOUNT_TABS } from '@/constants/account.constant'

import AccountSidebarTab from '../account-components/account-sidebar-tab'

type Props = {}

export default function AccountSidebar({}: Props) {
	return (
		<div className='sticky left-0 top-0 z-20 flex h-screen w-96 flex-col space-y-4 overflow-auto pb-5 pt-28'>
			{/* buttons */}
			{ACCOUNT_TABS.map((tab) => (
				<AccountSidebarTab tab={tab} key={tab.name} />
			))}
		</div>
	)
}
