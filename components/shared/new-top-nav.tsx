// import { IoCartOutline } from 'react-icons/io5';
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import nav_logo from '@/assets/nav_logo.png'
import { useAppSelector } from '@/redux/hooks'
import { selectTotalCartItems } from '@/redux/slices/orderSlice/orderSlice'
import { AlignJustify, ShoppingCart, User } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

import { useAuthState } from '@/hooks/useAuthState'

import AccountSidebarModal from '../account/account-sidebar-modal'
import CartSidebar from '../cart/cart-sidebar'
import { LoginRegisterModal } from '../checkout/login-register-modal'
import { allTakeawayLocations } from '../home-components/date'
import { HomeShowLocationsModal } from '../home-components/home-modal'
import { TopDropdownNavItesm } from './top-dropdown-navs'
import TopNavigationSidebarModal, {
	ResponsiveTopNavigation,
} from './top-navigation-sidebar'

const NewTopNav = () => {
	const [showCartSidebar, setShowCartSidebar] = useState(false)
	const [showAccountSidebar, setShowAccountSidebar] = useState(false)
	const [showLoginRegModal, setShowLoginRegModal] = useState(false)
	const [showNavSidebar, setShowNavSidebar] = useState(false)
	const [showTakeawayLocations, setShowTakeawayLocations] = useState(false)
	const [showResponsiveNavigation, setShowResponsiveNavigation] =
		useState(false)
	const totalCartItems = useAppSelector(selectTotalCartItems)
	const { auth } = useAuthState()
	const isMobileMd = useMediaQuery({ query: '(max-width: 768px)' })
	return (
		<>
			<nav className='container'>
				{/* left nav-items*/}
				<div className='flex flex-row items-center justify-between gap-2'>
					<div>
						{/* <CiMenuBurger size={38} /> */}
						<AlignJustify
							onClick={() => {
								if (isMobileMd) {
									setShowResponsiveNavigation(true)
								} else {
									setShowNavSidebar(true)
								}
							}}
							className='cursor-pointer text-primary-foreground'
							size={22}
						/>
					</div>

					{/* middle nav-items */}
					<ul className='flex items-center gap-2 space-x-4'>
						<TopDropdownNavItesm />
						<li
							onClick={() => {
								setShowTakeawayLocations(true)
							}}
							className='hidden cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent  focus:text-[#905A09] md:block'
						>
							Online Order
						</li>
						<li className='cursor-pointer px-5 text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09]'>
							<Link href={'/'} className=''>
								<Image
									src={nav_logo}
									className='h-auto w-36 mobile-md:w-[100px]'
									alt='holycow logo'
								/>
							</Link>
						</li>
						{/* <li className='hidden cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09] md:block'>
							<Link href={'/private-event'}>Private Event</Link>
						</li> */}
						<li className='hidden cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09] md:block'>
							<Link href={'/career'}>Career</Link>
						</li>
						<li className='hidden cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09] md:block'>
							<Link href={'/whats-on'}>Offers</Link>
						</li>
						<li className='hidden cursor-pointer text-base font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-[#905A09] focus:bg-transparent focus:text-[#905A09] md:block'>
							<Link href={'/contact'}>Contact Us</Link>
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

			{/* cart modal */}
			<CartSidebar
				showCartSidebar={showCartSidebar}
				setShowCartSidebar={setShowCartSidebar}
			/>

			{/* account setting sidebar modal */}
			<AccountSidebarModal
				showAccountSidebar={showAccountSidebar}
				setShowAccountSidebar={setShowAccountSidebar}
			/>
			{/* login reg popup modal */}
			<LoginRegisterModal
				showModal={showLoginRegModal}
				setShowModal={setShowLoginRegModal}
			/>

			{/* top navbar side navigation modal */}
			<TopNavigationSidebarModal
				showNavSidebar={showNavSidebar}
				setShowNavSidebar={setShowNavSidebar}
			/>

			{/* responsive navbar */}
			<ResponsiveTopNavigation
				setShowNavResSidebar={setShowResponsiveNavigation}
				showNavResSidebar={showResponsiveNavigation}
				toggleLocationModal={() => {
					setShowTakeawayLocations(!showTakeawayLocations)
				}}
			/>

			{/* online order popup */}
			<HomeShowLocationsModal
				header='Select the nearest takeaway location'
				selectOptions={allTakeawayLocations}
				showModal={showTakeawayLocations}
				setShowModal={setShowTakeawayLocations}
			/>
		</>
	)
}

export default NewTopNav
