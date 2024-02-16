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
			<Image src={nav_logo} height={113} width={200} alt='holy cow logo' />
			<div className='mt-6'>
				<p className='font-open_sans text-[16px] font-[600] italic leading-[28px] text-[#905A09]'>
					"Make your takeaway a special occasion, with Holy Cow fine Indian
					food. It will be a dining experience you will remember.”
				</p>
				{/* logo */}
				<div className='my-3'>
					<svg
						width='40'
						height='9'
						viewBox='0 0 40 9'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g clipPath='url(#clip0_198_419)'>
							<path
								d='M33.5026 9C37.0859 9 40.001 6.98129 40.001 4.49995C40.001 2.01861 37.0859 0 33.5026 0C30.1132 0 27.3231 1.80637 27.031 4.1018H22.3539V3.1552L0.000976562 3.1552V5.84446L22.354 5.84446V4.89798H27.0311C27.3232 7.19352 30.1132 9 33.5026 9ZM21.4908 5.04839L0.864269 5.04839V3.95161L21.4908 3.95161V5.04839ZM27.8672 4.49995C27.8672 2.45778 30.3953 0.796403 33.5027 0.796403C36.61 0.796403 39.1382 2.45778 39.1382 4.49995C39.1382 6.54222 36.61 8.2037 33.5027 8.2037C30.3953 8.2037 27.8672 6.54222 27.8672 4.49995Z'
								fill='#BD9632'
							/>
						</g>
						<defs>
							<clipPath id='clip0_198_419'>
								<rect
									width='40'
									height='9'
									fill='white'
									transform='translate(0.000976562)'
								/>
							</clipPath>
						</defs>
					</svg>
				</div>
				{/* socila links icons here */}
				<div className=''>
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
