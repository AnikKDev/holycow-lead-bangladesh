import React from 'react'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

type Props = {}

const CarousalSection = (props: Props) => {
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
				{Array.from({ length: 10 }).map((_, index) => (
					<CarouselItem
						key={index}
						className='desktop:basis-1/3 w-[421px] basis-1/2'
					>
						<Image
							src={'http://via.placeholder.com/421x457'}
							width={421}
							height={457}
							alt='image'
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}

export default CarousalSection
