import React from 'react'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

import TestimonialCard from './TestimonialCard'

type Props = {}

const TestimonialSlider = (props: Props) => {
	return (
		<Carousel
			className='mt-[75px] w-full'
			opts={{
				align: 'start',
				loop: true,
			}}
		>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className='basis-1/2 pl-8'>
						<TestimonialCard key={index} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default TestimonialSlider
