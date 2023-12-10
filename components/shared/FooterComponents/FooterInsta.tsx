import React from 'react'
import Image from 'next/image'
import footer_img_1 from '@/assets/footer/footer_img_1.png'
import footer_img_2 from '@/assets/footer/footer_img_2.png'

type Props = {}

export default function FooterInsta({}: Props) {
	return (
		<div>
			{/* follow us */}
			<h5 className='mb-6 text-lg font-bold text-white'>
				Follow us on Instagram
			</h5>
			{/* image will be here */}
			<div className='flex items-center space-y-2 mobile-sm:flex-wrap mobile-md:flex-wrap mobile-lg:flex-wrap tablet:flex-wrap'>
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
	)
}
