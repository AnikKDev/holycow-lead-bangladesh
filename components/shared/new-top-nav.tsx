// import { IoCartOutline } from 'react-icons/io5';
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import nav_logo from '@/assets/nav_logo.png'
import { useAppSelector } from '@/redux/hooks'
import { selectTotalCartItems } from '@/redux/slices/orderSlice/orderSlice'
import { AlignJustify, ShoppingCart, User } from 'lucide-react'

import { useAuthState } from '@/hooks/useAuthState'

import AccountSidebarModal from '../account/account-sidebar-modal'
import CartSidebar from '../cart/cart-sidebar'
import { LoginRegisterModal } from '../checkout/login-register-modal'
import { TopDropdownNavItesm } from './top-dropdown-navs'

const NewTopNav = () => {
	const [showCartSidebar, setShowCartSidebar] = useState(false)
	const [showAccountSidebar, setShowAccountSidebar] = useState(false)
	const [showLoginRegModal, setShowLoginRegModal] = useState(false)

	const totalCartItems = useAppSelector(selectTotalCartItems)
	const { auth } = useAuthState()

	return (
		<>
			<nav className='container'>
				{/* left nav-items*/}
				<div className='flex flex-row items-center justify-between gap-2'>
					<div>
						{/* <CiMenuBurger size={38} /> */}
						<AlignJustify
							className='cursor-pointer text-primary-foreground'
							size={22}
						/>
					</div>

					{/* middle nav-items */}
					<ul className='flex items-center gap-2 space-x-2.5'>
						<TopDropdownNavItesm />
						<li className='cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09]'>
							Online Order
						</li>
						<li className='cursor-pointer px-4 text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09]'>
							<Link href={'/'} className=''>
								<Image
									src={nav_logo}
									className='h-auto w-36 mobile-md:w-[100px]'
									alt='holycow logo'
								/>
							</Link>
						</li>
						<li className='cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09]'>
							<Link href={'/events'}>Private Event</Link>
						</li>
						<li className='cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09]'>
							<Link href={'/career'}>Career</Link>
						</li>
						<li className='cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09]'>
							<Link href={'/offers'}>Offers</Link>
						</li>
						<li className='cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09]'>
							<Link href={'/contact-us'}>Contact Us</Link>
						</li>
					</ul>

					{/* end nav-items */}
					<div className='flex items-center gap-2 space-x-2.5'>
						<User
							onClick={() => {
								if (auth.access) {
									setShowAccountSidebar(true)
								} else {
									setShowLoginRegModal(true)
								}
							}}
							size={22}
							className='cursor-pointer text-primary-foreground'
						/>
						<ShoppingCart
							size={22}
							className='cursor-pointer text-primary-foreground'
							onClick={() => {
								setShowCartSidebar(true)
							}}
						/>
					</div>
				</div>
			</nav>

			<CartSidebar
				showCartSidebar={showCartSidebar}
				setShowCartSidebar={setShowCartSidebar}
			/>

			<AccountSidebarModal
				showAccountSidebar={showAccountSidebar}
				setShowAccountSidebar={setShowAccountSidebar}
			/>
			<LoginRegisterModal
				showModal={showLoginRegModal}
				setShowModal={setShowLoginRegModal}
			/>
		</>
	)
}

export default NewTopNav
