import React from 'react'
import Image from 'next/image'
import nav_logo from '@/assets/nav_logo.png'
import { FaTiktok, FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'

import { Button } from '@/components/ui/button'

type Props = {}

export default function FooterLogoSection({}: Props) {
	const iconBtnArr = [
		{
			icon: <FaTwitter className='text-xl' />,
		},
		{
			icon: <FaFacebookF className='text-xl' />,
		},
		{
			icon: <FiInstagram className='text-xl' />,
		},
		{
			icon: <FaTiktok className='text-xl' />,
		},
	]
	return (
		<div>
			{/* logo and social */}
			<Image src={nav_logo} height={120} width={120} alt='holy cow logo' />
			<div className='mt-6'>
				<p>
					Authentic Indian cuisine, made with love and delivered to your door.
				</p>
				{/* socila links icons here */}
				<div className='mt-6'>
					{iconBtnArr.map((icon) => (
						<Button
							size='icon'
							className='me-2 bg-[#F9F9F71F] p-3'
							variant='ghost'
						>
							{/* <FaInstagram className='text-xl' /> */}
							{icon.icon}
						</Button>
					))}
				</div>
			</div>
		</div>
	)
}
