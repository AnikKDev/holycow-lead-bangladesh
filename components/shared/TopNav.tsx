import Image from 'next/image'
import Link from 'next/link'
import nav_logo from '@/assets/nav_logo.png'

import TopCartBtn from './top-cart-btn'
import TopNavRightSide from './top-nav-rightside'

type Props = {}

export default function TopNav({}: Props) {
	return (
		<nav className='container flex items-center justify-between'>
			<div>
				<Link href={'/'}>
					<Image src={nav_logo} className='h-auto w-24' alt='holy cow logo' />
				</Link>
			</div>
			{/* nav options */}
			<div className='flex items-center space-x-2.5'>
				<TopCartBtn />
				<TopNavRightSide />
			</div>
		</nav>
	)
}
