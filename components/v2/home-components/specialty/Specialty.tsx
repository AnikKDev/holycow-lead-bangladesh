import React from 'react'

import SectionHeader from '../../shared/SectionHeader'
import SpecialtyList from './SpecialtyList'

type Props = {}

const Specialty = (props: Props) => {
	return (
		<section className='flex flex-col items-center gap-8 md:my-[144px] md:gap-24'>
			<SectionHeader
				subTitle='OUR Specialty'
				title='Menu that fits you palette'
			/>
			<SpecialtyList />
			<button
				className='bg-primary px-8 py-2 font-medium tracking-[0.04em] text-foreground'
				style={{ lineHeight: 1.75 }}
			>
				Explore Menu
			</button>
		</section>
	)
}

export default Specialty
