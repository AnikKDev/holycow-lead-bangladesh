import React from 'react'

import SectionHeader from '../../shared/SectionHeader'
import TestimonialSlider from './TestimonialSlider'

type Props = {}

const Testimonial = (props: Props) => {
	return (
		<section className='my-[144px] flex w-full flex-col items-center'>
			<SectionHeader title='Happy customers' subTitle='Testimonial' />
			<div className='mt-[75px] flex max-w-[1328px]'>
				<TestimonialSlider />
			</div>
		</section>
	)
}

export default Testimonial
