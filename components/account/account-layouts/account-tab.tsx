import React from 'react'

import AccountTabbarTab from '../account-components/account-tabbar-tab'
import { ACCOUNT_TABS } from './account-sidebar'

type Props = {}

export default function AccountTab({}: Props) {
	return (
		<div className='mb-6 flex flex-wrap items-center space-y-1'>
			{ACCOUNT_TABS.map((tab) => (
				<AccountTabbarTab tab={tab} key={tab.name} />
			))}
		</div>
	)
}
