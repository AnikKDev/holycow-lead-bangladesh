'use client'

import React, { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import TestimonialCard from './TestimonialCard'

type Props = {}

const TestimonialSlider = (props: Props) => {
	const [currentSlider, setCurrentSlider] = useState(0)

	const testimonies = [
		{
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
			name: 'Mrs Lata',
			image: 'http://via.placeholder.com/125',
			rating: 2,
		},
		{
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
			name: 'John Doe',
			image: 'http://via.placeholder.com/125',
			rating: 4,
		},
		{
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
			name: 'Jane Smith',
			image: 'http://via.placeholder.com/125',
			rating: 5,
		},
		{
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
			name: 'Mr. Johnson',
			image: 'http://via.placeholder.com/125',
			rating: 3,
		},
		{
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
			name: 'Alice Brown',
			image: 'http://via.placeholder.com/125',
			rating: 1,
		},
	]
	const nextSlider = () =>
		setCurrentSlider((currentSlider) =>
			currentSlider === testimonies.length - 1 ? 0 : currentSlider + 1
		)

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlider()
		}, 300)

		return () => {
			clearInterval(intervalId)
		}
	}, [currentSlider])
	const isSmallScreen = window.innerWidth <= 768

	return (
		<div className='flex min-w-[350px] max-w-full flex-row items-center overflow-hidden'>
			<div className='relative overflow-hidden'>
				{/* slider container */}
				<div
					className='flex duration-300 ease-linear'
					style={{
						transform: `translateX(-${
							currentSlider * (isSmallScreen ? 100 : 50)
						}%)`,
					}}
				>
					{/* sliders */}
					{testimonies.map((each, idx) => (
						<div key={idx} className='min-w-full p-4 md:min-w-[50%]'>
							<TestimonialCard
								key={idx}
								name={each.name}
								message={each.message}
								image={each.image}
								rating={each.rating}
							/>
						</div>
					))}
				</div>

				{/* dots */}
				<div className='relative z-50 mt-12 flex w-full items-center justify-center gap-1 rounded-full'>
					{testimonies.map((_, inx) => (
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
