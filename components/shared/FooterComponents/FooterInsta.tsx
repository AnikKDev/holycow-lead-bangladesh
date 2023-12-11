import React from 'react'
import Image from 'next/image'
import footer_img_1 from '@/assets/footer/footer_img_1.png'
import footer_img_2 from '@/assets/footer/footer_img_2.png'
import footer_img_3 from '@/assets/footer/insta_img_1.jpeg'
import footer_img_4 from '@/assets/footer/insta_img_2.jpeg'
import { FiInstagram } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Props = {}

export default function FooterInsta({}: Props) {
	return (
		<div>
			{/* follow us */}
			<h5 className='mb-6 text-lg font-bold text-white'>
				<a className='mb-3 flex cursor-pointer items-center'>
					<FiInstagram
						className={cn(
							'rounded-full p-2 text-5xl transition-all duration-200 hover:bg-white hover:text-primary'
						)}
					/>
				</a>
			</h5>
			{/* image will be here */}
			<div className='flex items-center space-y-2 mobile-sm:flex-wrap mobile-md:flex-wrap mobile-lg:flex-wrap tablet:flex-wrap'>
				<Image
					// src={footer_img_1}
					src={footer_img_3}
					height={178}
					width={178}
					alt='instagram follow'
					className='me-5'
				/>
				<Image
					// src={footer_img_2}
					src={footer_img_4}
					height={178}
					width={178}
					alt='instagram follow 2'
				/>
			</div>
			<div className='mt-6 flex items-center justify-center'>
				<Button className='bg-[#333333] hover:bg-[#464646]'>
					Load More...
				</Button>
				<Button variant='outline' className='ml-4 text-black hover:text-black'>
					Follow on Instagram
				</Button>
			</div>
		</div>
	)
}
