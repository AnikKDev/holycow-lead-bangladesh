import Image from 'next/image'
import nav_logo from '@/assets/nav_logo.png'

import { Button } from '../ui/button'
import TopCartBtn from './top-cart-btn'

type Props = {}

export default function TopNav({}: Props) {
	return (
		<nav className='container flex items-center justify-between'>
			<div>
				<Image src={nav_logo} className='h-auto w-24' alt='holy cow logo' />
			</div>
			{/* nav options */}
			<div className='flex items-center space-x-2.5'>
				<TopCartBtn />
				<Button
					size='sm'
					className='rounded-3xl bg-transparent px-4'
					variant='secondary'
				>
					Sign In
				</Button>
				<Button size='sm' className='rounded-3xl px-4' variant='secondary'>
					Sign Up
				</Button>
			</div>
		</nav>
	)
}
