import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import nav_logo from '@/assets/nav_logo.png'

import NavMenu from './nav-menu'
import TopCartBtn from './top-cart-btn'
import TopNavRightSide from './top-nav-rightside'

type Props = {}

export default function TopNavV2({}: Props) {
	const [showNavSheet, setShowNavSheet] = useState<boolean>(false)

	const restaurantContent = {
		displayTitle: 'Restaurant',
		links: [
			{ title: 'Fine Dining Menu', path: 'path' },
			{ title: 'Reservation', path: 'path' },
			{ title: 'Putney Restaurant', path: 'path' },
		],
	}

	const takewayContent = {
		displayTitle: 'Takeway',
		links: [
			{ title: 'Takeaway Menu', path: 'path' },
			{ title: 'Takeaway Location', path: 'path' },
			{ title: 'Lunch Menu', path: 'path' },
		],
	}

	return (
		<div className='container flex items-center justify-center gap-4'>
			<div className='flex flex-1 items-center  gap-12'>
				<div className='justify-self-start text-black'>HB</div>

				<div className='ml-auto flex items-center justify-center gap-4 text-black'>
					<NavMenu content={restaurantContent} />
					<NavMenu content={takewayContent} />
					<Link href={'/'}>Online Order</Link>
				</div>
			</div>

			<Link href={'/'}>
				<Image
					src={nav_logo}
					className='h-auto w-36 mobile-md:w-[100px]'
					alt='holy cow logo'
				/>
			</Link>

			<div className='flex flex-1 items-center'>
				<div className='flex items-center justify-center gap-3  text-black'>
					<Link href={'/'}>Private Event</Link>
					<Link href={'/'}>Career</Link>
					<Link href={'/'}>Offers</Link>
					<Link href={'/'}>Contact Us</Link>
				</div>

				<div className='ml-auto flex items-center justify-center gap-4 text-black'>
					<TopCartBtn />
					<TopNavRightSide
						showNavSheet={showNavSheet}
						setShowNavSheet={setShowNavSheet}
					/>
				</div>
				{/* nav options */}
			</div>
		</div>
	)
}

// <div className='flex items-center space-x-2.5'>
//
// 	{/* conditionally show the carts */}
// 	<TopNavRightSide
// 		showNavSheet={showNavSheet}
// 		setShowNavSheet={setShowNavSheet}
// 	/>
// </div>
