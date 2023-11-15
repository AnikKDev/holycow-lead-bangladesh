import React from 'react'
import Image from 'next/image'
import footer_img_1 from '@/assets/footer/footer_img_1.png'
import footer_img_2 from '@/assets/footer/footer_img_2.png'
import nav_logo from '@/assets/nav_logo.png'
import { locationsArr, menuItemsArr } from '@/constants/footer.constant'
import { FaTiktok, FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'

import { Button } from '../ui/button'

type Props = {}

export default function Footer({}: Props) {
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
		<footer className='_desktop-md:p-20 mt-48 bg-primary text-secondary mobile-sm:p-3 mobile-md:p-3 _desktop-sm:p-20'>
			<div className='_desktop-md:grid-cols-4 _desktop-md:justify-items-center _desktop-lg:justify-items-center grid gap-5 mobile-sm:grid-cols-2 mobile-sm:justify-items-start mobile-md:grid-cols-2 mobile-lg:grid-cols-2 _desktop-sm:grid-cols-4 _desktop-sm:justify-items-center'>
				<div>
					{/* logo and social */}
					<Image src={nav_logo} height={120} width={120} alt='holy cow logo' />
					<div className='mt-6'>
						<p>
							Authentic Indian cuisine, made with love and delivered to your
							door.
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
				<div>
					{/* locations */}
					<h5 className='mb-6 text-lg font-bold text-white'>Our locations</h5>
					<ul>
						{locationsArr.map((location) => (
							<li className='mb-2' key={location.text}>
								{location.text}
							</li>
						))}
					</ul>
				</div>
				<div>
					{/* about */}
					<h5 className='mb-6 text-lg font-bold text-white'>About</h5>
					<ul>
						{menuItemsArr.map((location) => (
							<li className='mb-2' key={location.text}>
								{location.text}
							</li>
						))}
					</ul>
				</div>
				<div>
					{/* follow us */}
					<h5 className='mb-6 text-lg font-bold text-white'>
						Follow us on instagram
					</h5>
					{/* image will be here */}
					<div className='flex items-center'>
						<Image
							src={footer_img_1}
							height={178}
							width={178}
							alt='instagram follow'
							className='me-5'
						/>
						<Image
							src={footer_img_2}
							height={178}
							width={178}
							alt='instagram follow 2'
						/>
					</div>
				</div>
			</div>
		</footer>
	)
}
