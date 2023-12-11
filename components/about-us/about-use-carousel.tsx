'use client'

import React from 'react'
import Image from 'next/image'
import about_us_img_1 from '@/assets/about-us/holy-cow-image-1.jpg'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'

type Props = {}

export default function AboutUsCarousel({}: Props) {
	return (
		<div className='w-[40%] rounded-md p-2 shadow-md'>
			<Swiper
				spaceBetween={30}
				navigation={true}
				// loop={true}
				autoplay={true}
				modules={[Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Image
						src={about_us_img_1}
						alt='about-us'
						className='h-full w-full'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={about_us_img_1}
						alt='about-us'
						className='h-full w-full'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
