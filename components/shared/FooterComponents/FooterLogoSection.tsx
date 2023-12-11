import Image from 'next/image'
import nav_logo from '@/assets/nav_logo.png'
import { FaTiktok, FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Props = {}

export const getSocialIcons = (className = 'text-xl') => [
	{
		icon: <FaTwitter className={cn(className)} />,
		navigateTo: 'https://twitter.com/HolyCowLondonUK/',
	},
	{
		icon: <FaFacebookF className={cn(className)} />,
		navigateTo: 'https://www.facebook.com/holycowfineindianfood/',
	},
	{
		icon: <FiInstagram className={cn(className)} />,
		navigateTo: 'https://www.instagram.com/holycowfineindianfood/',
	},
	{
		icon: <FaTiktok className={cn(className)} />,
		navigateTo: 'https://www.tiktok.com/@holycowfineindianfood/',
	},
]

export default function FooterLogoSection({}: Props) {
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
					{getSocialIcons().map((icon) => (
						<Button
							size='icon'
							className='me-2 bg-[#F9F9F71F] p-3'
							variant='ghost'
						>
							{/* <FaInstagram className={cn('text-xl', className)} /> */}
							{icon.icon}
						</Button>
					))}
				</div>
			</div>
		</div>
	)
}
