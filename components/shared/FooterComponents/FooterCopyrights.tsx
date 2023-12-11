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
		<div className='text-center'>
			<Separator className='my-4' />
			{/* cr parts */}
			<span>
				© {new Date().getFullYear()} — Copyright Holy Cow - Fine Indian Food.
				All Rights Reserved.
			</span>
			{/* <div className='flex flex-wrap items-center justify-between'>
				<div>
					<span>
						© {new Date().getFullYear()} — Copyright Holy Cow - Fine Indian
						Food. All Rights Reserved.
					</span>
				</div>
				<div className='flex items-center'>
					<span className='flex items-center'>
						<a
							href='mailto:info@holycowonline.com'
							className='flex items-center gap-1'
						>
							<MdOutlineEmail className='h-4 w-4' />
							info@holycowonline.com
						</a>
					</span>
				</div>
				<div>
					<Button
						onClick={scrollToTop}
						size='icon'
						className='bg-[#F9F9F71F]'
						variant='ghost'
					>
						<IoIosArrowRoundUp className='text-5xl font-thin' />
					</Button>
				</div>
			</div> */}
		</div>
	)
}
