import React from 'react'

import SectionHeader from '../../shared/SectionHeader'
import SpecialtyList from './SpecialtyList'

type Props = {}

const Specialty = (props: Props) => {
	return (
		<section className='mt-[198px] flex flex-col items-center gap-24'>
			<SectionHeader
				subTitle='OUR Specialty'
				title='Menu that fits you palette'
			/>
			<SpecialtyList />
			<button
				className='bg-[#e8d3a2] px-8 py-2 font-medium tracking-[0.04em] text-primary'
				style={{ lineHeight: 1.75 }}
			>
				Explore Menu
			</button>
		</section>
	)
}

export default Specialty
