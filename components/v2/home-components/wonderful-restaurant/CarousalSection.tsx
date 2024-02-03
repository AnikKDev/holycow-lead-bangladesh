import React from 'react'
import Image from 'next/image'

// import Autoplay from 'embla-carousel-autoplay'

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
			className='w-full max-w-full'
		>
			<CarouselPrevious className='-top-8 left-0 text-primary' />
			<CarouselNext className='-top-8 left-12 text-primary' />
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className='h-[457px] w-[421px] basis-1/3'>
						<Image
							src={'http://via.placeholder.com/421x457'}
							width={421}
							height={457}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}

export default CarousalSection
