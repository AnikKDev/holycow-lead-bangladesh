import React from 'react'
import Image from 'next/image'
import nav_logo from '@/assets/nav_logo.png'
import { FaShoppingCart } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

import { Button } from '../ui/button'

type Props = {}

export default function TopNav({}: Props) {
	return (
		<nav className='flex items-center justify-between px-20 py-5'>
			<div>
				<Image src={nav_logo} height={150} width={150} alt='holy cow logo' />
			</div>
			{/* nav options */}
			<div className='flex items-center'>
				<Button
					className='mx-1 flex items-center rounded-full px-6'
					variant='default'
				>
					<FaShoppingCart className='me-3 text-lg' />
					<span className='me-1'>Cart</span>
					<GoDotFill className='me-1 text-lg' />
					<span>0</span>
				</Button>
				<Button className='mx-1 rounded-3xl px-6' variant='ghost'>
					Signin
				</Button>
				<Button className='mx-1 rounded-3xl px-6' variant='secondary'>
					Signup
				</Button>
			</div>
		</nav>
	)
}
