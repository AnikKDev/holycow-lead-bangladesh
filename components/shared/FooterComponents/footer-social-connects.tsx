import React from 'react'
import { menuItemsArr } from '@/constants/footer.constant'
import {
	FaFacebookF,
	FaPinterest,
	FaTiktok,
	FaTumblr,
	FaTwitter,
} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

import { cn } from '@/lib/utils'

type Props = {}

export default function FooterSocialConnects({}: Props) {
	const socialConnectArr = [
		{
			text: 'Like us on Instagram',
			icon: <FiInstagram className={cn('text-xl')} />,
			navigateTo: 'https://www.instagram.com/holycowfineindianfood/',
		},
		{
			text: 'Follow us on Facebook',
			icon: <FaFacebookF className={cn('text-xl')} />,
			navigateTo: 'https://www.facebook.com/holycowfineindianfood/',
		},
		{
			text: 'Follow us on Twitter',
			icon: <FaTwitter className={cn('text-xl')} />,
			navigateTo: 'https://twitter.com/HolyCowLondonUK/',
		},
		{
			text: 'Pin us on Pinterest',
			icon: <FaPinterest className={cn('text-xl')} />,
			navigateTo: 'https://www.pinterest.co.uk/HolyCowFineIndianFood/',
		},
		{
			text: 'Follow us on Tumblr',
			icon: <FaTumblr className={cn('text-xl')} />,
			navigateTo: 'https://holycowfineindianfood.tumblr.com/',
		},
		{
			text: 'Follow us on Tiktok',
			icon: <FaTiktok className={cn('text-xl')} />,
			navigateTo: 'https://www.tiktok.com/@holycowfineindianfood/',
		},
	]
	return (
		<div>
			{/* about */}
			<h5 className='mb-6 text-lg font-bold text-white'>Connect With Us</h5>
			<ul>
				{/* todo: have to add the links */}
				{socialConnectArr.map((social) => (
					<a
						className='mb-3 flex items-center hover:underline'
						href={social.navigateTo}
						target='_blank'
						key={social.text}
					>
						<span className='me-2'>{social.icon}</span>
						{social.text}
					</a>
				))}
			</ul>
		</div>
	)
}
