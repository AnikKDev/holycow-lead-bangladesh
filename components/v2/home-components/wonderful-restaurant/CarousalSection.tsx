import React from 'react'
import Image from 'next/image'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

type Props = {
	restaurantImages: { 'item-name': string; image: string }[]
}

const CarousalSection = ({ restaurantImages }: Props) => {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
		>
			<div className='relative left-1/2 w-fit'>
				<CarouselPrevious className='relative -left-8 bottom-0 right-0 top-6  hidden h-6 w-6 border-[#905A09] text-[#905A09] md:block' />
				<CarouselNext className='relative bottom-0 left-8 right-0 top-0 hidden h-6 w-6 border-[#905A09] text-[#905A09] md:block' />
			</div>
			<CarouselContent className='py-4 md:py-10'>
				{restaurantImages.map((restaurantImage, index) => (
					<CarouselItem key={index} className='basis-1/2  md:basis-1/3'>
						<Image
							src={restaurantImage.image}
							width={421}
							height={457}
							alt={restaurantImage['item-name']}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}

export default CarousalSection
