import React from 'react'
import Image from 'next/image'
import instagram from '@/assets/homepage/instagram.svg'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

import SectionHeader from '../../shared/SectionHeader'

type Props = {}

const PhotoGallery = (props: Props) => {
	return (
		<div className='flex min-h-[763px] w-full items-center justify-center bg-red-100'>
			<div className='ml-[296px] flex'>
				<LeftDiv />
				<CarousalDiv />
			</div>
		</div>
	)
}

export default PhotoGallery

const LeftDiv = () => {
	return (
		<div className='mr-10  w-[491px] space-y-6'>
			<SectionHeader
				title='Photo Gallery'
				subTitle='Instagram'
				containsAlign='left'
			/>
			<p className='text-[#414141]'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur
				adipiscing elit.
			</p>
			<Button className='rounded-none'>View More</Button>
		</div>
	)
}

const CarousalDiv = () => {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className=''
		>
			<CarouselContent>
				{Array.from({ length: 10 }).map((_, index) => (
					<CarouselItem key={index} className='basis-1/5 '>
						<div className='group relative flex cursor-pointer justify-center '>
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
