import { Dispatch, SetStateAction, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { logOut } from '@/redux/slices/authSlice/authSlice'
import { useCookies } from 'react-cookie'
import { FaRegCircleUser } from 'react-icons/fa6'
import { MdLogout, MdOutlineLocationOn } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'

import { LoginRegisterModal } from '../checkout/login-register-modal'

const AccountSidebarModal = ({
	showAccountSidebar,
	setShowAccountSidebar,
}: {
	showAccountSidebar: boolean
	setShowAccountSidebar: Dispatch<SetStateAction<boolean>>
}) => {
	const router = useRouter()
	const params = useParams()
	const [showModal, setShowModal] = useState(false)
	const [cookies, setCookie, removeCookie] = useCookies(['access', 'refresh'])
	const dispatch = useAppDispatch()
	const handleLogout = () => {
		removeCookie('access')
		removeCookie('refresh')
		dispatch(logOut())
		setShowModal(false)
		router.replace('/')
	}

	return (
		<>
			<Sheet open={showAccountSidebar} onOpenChange={setShowAccountSidebar}>
				<SheetContent className='flex h-full w-[300px] max-w-sm flex-col flex-nowrap gap-0 px-0 py-0'>
					<SheetHeader className='shrink-0 border-b border-border px-5 pb-3 pt-5'>
						<SheetTitle>John Doe</SheetTitle>
					</SheetHeader>
					<div className='grid min-h-fit grow-[1]'>
						<div>
							<Link
								href={'/account/your-profile'}
								onClick={() => setShowAccountSidebar(false)}
							>
								<Button
									size='lg'
									className='flex w-full items-center justify-start gap-4 rounded-none border-b border-border  bg-transparent px-5 py-6'
									variant='secondary'
								>
									<FaRegCircleUser size={18} />
									View Account
								</Button>
							</Link>
							<Link
								href={'/account/your-orders'}
								onClick={() => setShowAccountSidebar(false)}
							>
								<Button
									size='lg'
									className='flex w-full items-center justify-start gap-4 rounded-none border-b border-border  bg-transparent px-5 py-6'
									variant='secondary'
								>
									<RxDashboard size={18} />
									Order History
								</Button>
							</Link>
							<Link
								href={'/account/view-address'}
								onClick={() => setShowAccountSidebar(false)}
							>
								<Button
									size='lg'
									className='flex w-full items-center justify-start gap-4 rounded-none border-b border-border  bg-transparent px-5 py-6'
									variant='secondary'
								>
									<MdOutlineLocationOn size={18} />
									View Addresses
								</Button>
							</Link>
						</div>
					</div>
					<SheetFooter className='shrink-0 flex-col gap-3 border-t border-border'>
						<div className='w-full'>
							<Button
								size='lg'
								className='flex w-full items-center justify-start gap-4 rounded-none border-none bg-transparent px-5 py-7'
								variant='secondary'
								onClick={handleLogout}
							>
								<MdLogout size={18} className='rotate-180' />
								Log Out
							</Button>
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
			<LoginRegisterModal showModal={showModal} setShowModal={setShowModal} />
		</>
	)
}

export default AccountSidebarModal
