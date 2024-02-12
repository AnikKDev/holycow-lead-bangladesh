'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import Link from 'next/link'
import { AlignJustify } from 'lucide-react'
import { FaRegCircleUser } from 'react-icons/fa6'

import { useAuthState } from '@/hooks/useAuthState'

import AccountSidebarModal from '../../account/account-sidebar-modal'
import { Button } from '../../ui/button'
import TopNavSheet from './top-nav-sheet'

const TopNavRightSide = ({
	showNavSheet,
	setShowNavSheet,
}: {
	showNavSheet: boolean
	setShowNavSheet: Dispatch<SetStateAction<boolean>>
}) => {
	const { auth } = useAuthState()
	const [showAccountSidebar, setShowAccountSidebar] = useState(false)
	return (
		<>
			{auth.access ? (
				<>
					{/* for bigger screen */}
					<Button
						size='sm'
						className='flex items-center gap-1.5 rounded-3xl bg-transparent px-4 mobile-md:hidden'
						variant='secondary'
						onClick={() => {
							setShowAccountSidebar(true)
						}}
					>
						<FaRegCircleUser size={18} />
						<span>Account</span>
					</Button>
					{/* for smaller screen */}
					<Button
						size='sm'
						className='flex items-center rounded-3xl bg-transparent p-0 hover:bg-transparent _tablet:hidden _desktop-sm:hidden _desktop-md:hidden'
						variant='secondary'
						onClick={() => {
							setShowAccountSidebar(true)
						}}
					>
						<AlignJustify size={24} />
					</Button>

					<AccountSidebarModal
						showAccountSidebar={showAccountSidebar}
						setShowAccountSidebar={setShowAccountSidebar}
					/>
				</>
			) : (
				<>
					{/* smaller screen */}
					<div className='mobile-md:hidden'>
						<Link href={'/register'}>
							<Button
								size='sm'
								className='rounded-3xl bg-transparent px-4'
								variant='secondary'
							>
								Sign Up
							</Button>
						</Link>
						<Link href={'/login'}>
							<Button
								size='sm'
								className='rounded-3xl px-4'
								variant='secondary'
							>
								Log In
							</Button>
						</Link>
					</div>
					{/* big screen */}
					<div
						onClick={() => setShowNavSheet(true)}
						className='mx-2 _tablet:hidden _desktop-sm:hidden _desktop-md:hidden'
					>
						{/* <CiMenuBurger size={38} /> */}
						<AlignJustify size={38} />
					</div>
					<TopNavSheet
						setShowNavSheet={setShowNavSheet}
						showNavSheet={showNavSheet}
					/>
				</>
			)}
		</>
	)
}

export default TopNavRightSide
