'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiPhone } from 'react-icons/ci'
import { MdOutlineEmail } from 'react-icons/md'

import { Button } from '../ui/button'
import { getSocialIcons } from './FooterComponents/FooterLogoSection'

const TopInformationBar = () => {
	const pathname = usePathname()

	if (pathname.includes('/checkout')) {
		return null
	}

	return (
		<div className='w-full bg-primary py-[6px] text-primary-foreground'>
			<div className='container flex flex-wrap items-center justify-between'>
				<div className='flex items-center gap-2.5'>
					{/* <a
						href='tel:(414) 857 - 0107'
						className='flex items-center gap-1 text-sm'
					>
						<CiPhone className='h-4 w-4 text-primary-foreground' />
						(414) 857 - 0107
					</a> */}
					<a
						href='mailto:info@holycowonline.com'
						className='flex items-center gap-1 text-sm'
					>
						<MdOutlineEmail className='h-4 w-4 text-primary-foreground' />
						info@holycowonline.com
					</a>
				</div>
				<div className='flex items-center space-x-5'>
					<div className='flex items-center space-x-2.5'>
						<Link className='text-sm hover:underline' href={'/about-us'}>
							About
						</Link>
						<Link className='text-sm hover:underline' href={'/contact-us'}>
							Contact
						</Link>
						<Link className='text-sm hover:underline' href={'/allergy-advice'}>
							Allergy Advice
						</Link>
					</div>
					<div className='flex items-center space-x-2.5'>
						{getSocialIcons('text-sm').map((icon) => (
							<Button
								size='icon'
								className='h-8 w-8 bg-[#F9F9F71F]'
								variant='ghost'
							>
								{/* <FaInstagram className='text-xl' /> */}
								{icon.icon}
							</Button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopInformationBar
