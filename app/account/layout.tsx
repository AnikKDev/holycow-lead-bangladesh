import React from 'react'

import AccountSidebar from '@/components/account/account-layouts/account-sidebar'
import AccountTab from '@/components/account/account-layouts/account-tab'

type Props = {
	children: React.ReactNode
}

export default function AccountLayout({ children }: Props) {
	return (
		<section className='container'>
			{/* left layout here */}
			<div className='flex-row pt-16 _desktop-sm:flex _desktop-md:flex'>
				{/* for bigger screen size */}
				<div className='hidden _desktop-sm:block _desktop-md:block'>
					<h4 className='mb-8 text-2xl font-bold'>Your Account</h4>
					<AccountSidebar />
				</div>
				{/* for smaller screen size */}
				<div className='_desktop-sm:hidden _desktop-md:hidden'>
					<h4 className='mb-8 text-2xl font-bold'>Your Account</h4>
					<AccountTab />
				</div>
				{/* right children here */}
				<div className='flex min-h-screen flex-1 flex-col items-center px-2 pb-10 _desktop-md:px-6 '>
					<div className='w-full'>{children}</div>
				</div>
			</div>
		</section>
	)
}
