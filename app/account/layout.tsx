import React from 'react'

import AccountSidebar from '@/components/account/account-layouts/account-sidebar'

type Props = {
	children: React.ReactNode
}

export default function AccountLayout({ children }: Props) {
	return (
		<section className='container'>
			{/* left layout here */}
			<div className='flex flex-row'>
				<AccountSidebar />
				{/* right children here */}
				<div className='sm:px-10 flex min-h-screen flex-1 flex-col items-center border border-red-500 px-6 pb-10 pt-28'>
					<div className='w-full'>{children}</div>
				</div>
			</div>
		</section>
	)
}
