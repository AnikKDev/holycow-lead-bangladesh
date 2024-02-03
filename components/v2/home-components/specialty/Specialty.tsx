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
			<button className='bg-[#e8d3a2] px-8 py-2 font-medium leading-7 tracking-[0.04em] text-[#0c0b08]'>
				Explore Menu
			</button>
		</section>
	)
}

export default Specialty
