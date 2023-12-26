import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import nav_logo from '@/assets/nav_logo.png'

import TopCartBtn from './top-cart-btn'
import TopNavRightSide from './top-nav-rightside'

type Props = {}

export default function TopNav({}: Props) {
	const [showNavSheet, setShowNavSheet] = useState<boolean>(false)

	return (
		<nav className='container flex items-center justify-between'>
			<div>
				<Link href={'/'}>
					<Image
						src={nav_logo}
						className='h-auto w-36 mobile-md:w-[100px]'
						alt='holy cow logo'
					/>
				</Link>
			</div>
			{/* nav options */}
			<div className='flex items-center space-x-2.5'>
				<TopCartBtn />
				{/* conditionally show the carts */}
				<TopNavRightSide
					showNavSheet={showNavSheet}
					setShowNavSheet={setShowNavSheet}
				/>
			</div>
		</nav>
	)
}
