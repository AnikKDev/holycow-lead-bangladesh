'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaRegCircleUser } from 'react-icons/fa6'

import { useAuthState } from '@/hooks/useAuthState'

import AccountSidebarModal from '../account/account-sidebar-modal'
import { Button } from '../ui/button'

const TopNavRightSide = () => {
	const { auth } = useAuthState()
	const [showAccountSidebar, setShowAccountSidebar] = useState(false)
	return (
		<>
			{auth.access ? (
				<>
					<Button
						size='sm'
						className='flex items-center gap-1.5 rounded-3xl bg-transparent px-4'
						variant='secondary'
						onClick={() => {
							setShowAccountSidebar(true)
						}}
					>
						<FaRegCircleUser size={18} />
						Account
					</Button>

					<AccountSidebarModal
						showAccountSidebar={showAccountSidebar}
						setShowAccountSidebar={setShowAccountSidebar}
					/>
				</>
			) : (
				<>
					<Link href={'/login'}>
						<Button
							size='sm'
							className='rounded-3xl bg-transparent px-4'
							variant='secondary'
						>
							Sign In
						</Button>
					</Link>
					<Link href={'/register'}>
						<Button size='sm' className='rounded-3xl px-4' variant='secondary'>
							Sign Up
						</Button>
					</Link>
				</>
			)}
		</>
	)
}

export default TopNavRightSide
