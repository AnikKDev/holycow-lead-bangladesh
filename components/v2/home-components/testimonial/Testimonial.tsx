'use client'

import React from 'react'
import { useGetReviewsQuery } from '@/redux/slices/reviews/reviewSlice'

import { Skeleton } from '@/components/ui/skeleton'

import SectionHeader from '../../shared/SectionHeader'
import TestimonialSlider from './TestimonialSlider'

type Props = {}

const Testimonial = (props: Props) => {
	const { data, isLoading } = useGetReviewsQuery()
	if (isLoading) {
		return (
			<section className='grid grid-cols-12 gap-8'>
				<div className='col-span-3'>
					<ul className='flex flex-col gap-8'>
						<div className='space-y-2'>
							<Skeleton className='h-4 w-[250px]' />
							<Skeleton className='h-4 w-[200px]' />
						</div>
					</ul>
				</div>
			</section>
		)
	}
	return (
		<section className='relative my-[144px] flex w-full flex-col items-center'>
			<SectionHeader title='Happy customers' subTitle='Testimonial' />
			<div className='container relative mt-[75px] flex'>
				<TestimonialSlider reviews={data?.data} />
			</div>
		</section>
	)
}

export default Testimonial
