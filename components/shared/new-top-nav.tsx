// import { IoCartOutline } from 'react-icons/io5';
import Image from 'next/image'
import Link from 'next/link'
import nav_logo from '@/assets/nav_logo.png'
import { AlignJustify, ShoppingCart, User } from 'lucide-react'

import { TopDropdownNavItesm } from './top-dropdown-navs'

const NewTopNav = () => {
	return (
		<nav className='container'>
			{/* left nav-items*/}
			<div className='flex flex-row items-center justify-between gap-2'>
				<div>
					<div className=''>
						{/* <CiMenuBurger size={38} /> */}
						<AlignJustify className='text-primary-foreground' size={22} />
					</div>
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
				<div className='flex items-center space-x-2.5'>
					<User size={22} className='cursor-pointer text-primary-foreground' />
					<ShoppingCart
						size={22}
						className='cursor-pointer text-primary-foreground'
					/>
				</div>
			</div>
		</nav>
	)
}

export default NewTopNav
