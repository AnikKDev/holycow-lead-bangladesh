import React from 'react'

import SectionHeader from '../../shared/SectionHeader'
import TestimonialSlider from './TestimonialSlider'

type Props = {}

const Testimonial = (props: Props) => {
	return (
		<section className='mt-[144px]'>
			<SectionHeader title='Happy customers' subTitle='Testimonial' />
			<TestimonialSlider />
		</section>
	)
}

export default Testimonial
