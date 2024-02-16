'use client'

import React, { useEffect, useState } from 'react'
import { Review } from '@/types'

import { cn } from '@/lib/utils'

import TestimonialCard from './TestimonialCard'

type TestimonialSlider = {
	reviews: Review[]
}

const TestimonialSlider = ({ reviews }: TestimonialSlider) => {
	const [currentSlider, setCurrentSlider] = useState(0)

	const nextSlider = () =>
		setCurrentSlider((currentSlider) =>
			currentSlider === reviews.length - 1 ? 0 : currentSlider + 1
		)

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlider()
		}, 3000)

		return () => {
			clearInterval(intervalId)
		}
	}, [currentSlider])
	const isSmallScreen = window.innerWidth <= 768
	console.log(reviews, 'reviews')
	return (
		<div className='relative flex w-full flex-row items-center overflow-hidden md:min-w-[350px]'>
			<div className='relative w-full overflow-hidden'>
				{/* slider container */}
				<div
					className='relative flex duration-300 ease-linear'
					style={{
						transform: `translateX(-${
							currentSlider * (isSmallScreen ? 100 : 50)
						}%)`,
					}}
				>
					{/* sliders */}
					{reviews?.map((each, idx) => (
						<div key={idx} className='relative min-w-full p-4 md:min-w-[50%]'>
							<TestimonialCard
								key={idx}
								reviewer={each.reviewer}
								review={each.review}
								image={each.image}
								rating={each.rating}
							/>
						</div>
					))}
				</div>

				{/* dots */}
				<div className='relative z-50 mt-4 flex w-full items-center justify-center gap-1 rounded-full md:mt-12'>
					{reviews.map((_, inx) => (
						<button
							key={inx}
							onClick={() => {
								setCurrentSlider(inx)
							}}
							className={cn(
								'h-2  rounded-full duration-300',
								currentSlider === inx
									? 'w-[18px] rounded-sm bg-[#905A09]'
									: 'w-2 bg-[#D1D1CD]'
							)}
						></button>
					))}
				</div>
			</div>
		</div>
	)
}

export default TestimonialSlider
