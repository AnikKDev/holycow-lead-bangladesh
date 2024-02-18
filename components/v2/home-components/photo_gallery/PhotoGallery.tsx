import React from 'react'
import Image from 'next/image'
import instagram from '@/assets/homepage/instagram.svg'

import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'

import SectionHeader from '../../shared/SectionHeader'

const PhotoGallery = () => {
	return (
		<div className='mx-auto my-14 flex max-w-5xl flex-col gap-4 px-4 md:gap-16'>
			<SectionHeader
				title='Photo Gallery'
				subTitle='Instagram'
				subTitleSize='medium'
			/>
			<div className='flex flex-col gap-4 md:flex-row _desktop-sm:gap-16 _desktop-md:gap-16'>
				<LeftDiv />
				<CarousalDiv />
			</div>
		</div>
	)
}

export default PhotoGallery

const LeftDiv = () => {
	return (
		<div className='flex flex-col items-center gap-4 md:items-start _desktop-sm:gap-8 _desktop-md:gap-8'>
			<p className='text-[#414141]'>
				Lorem ipsum dolor sit amet, consec adipiscing elit. consectetur
				adipiscing elit.
			</p>
			<Button className='w-fit rounded-none'>View More</Button>
		</div>
	)
}

const CarousalDiv = () => {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className='md:max-w-[60%]'
		>
			<CarouselContent>
				{Array.from({ length: 10 }).map((_, index) => (
					<CarouselItem
						key={index}
						className='basis-1/2 md:basis-1/2 _desktop-md:basis-1/3'
					>
						<div className='group relative flex cursor-pointer justify-center'>
							<Image
								src={'http://via.placeholder.com/301x447'}
								width={301}
								height={447}
								alt='image'
							/>
							<div className='absolute flex h-full w-full items-center justify-center bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-75'>
								<Image src={instagram} width={40} height={40} alt='image' />
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
