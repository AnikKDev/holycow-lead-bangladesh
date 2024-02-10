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
			className='max-w-full'
		>
			<CarouselPrevious className='-top-8 left-0 text-primary' />
			<CarouselNext className='-top-8 left-12 text-primary' />
			<CarouselContent>
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
