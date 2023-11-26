'use client'

import React from 'react'
import { CiPhone } from 'react-icons/ci'
import { IoIosArrowRoundUp } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

type Props = {}

export default function FooterCopyrights({}: Props) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // This enables the smooth scrolling effect
		})
	}
	return (
		<div>
			<Separator className='my-4' />
			{/* cr parts */}
			<div className='flex items-center justify-between'>
				<div>
					<span>© {new Date().getFullYear()} — Copyright</span>
				</div>
				<div className='flex items-center'>
					<span className='mx-3 flex items-center'>
						<CiPhone className='me-1' />
						(414) 857 - 0107
					</span>
					<span className='mx-3 flex items-center'>
						<MdOutlineEmail className='me-1' />
						info@holycowonline.com
					</span>
				</div>
				<div>
					<Button
						onClick={scrollToTop}
						size='icon'
						className='bg-[#F9F9F71F]'
						variant='ghost'
					>
						{/* <FaInstagram className='text-xl' /> */}
						<IoIosArrowRoundUp className='text-5xl font-thin' />
					</Button>
				</div>
			</div>
		</div>
	)
}
