import React from 'react'

import SectionHeader from '../../shared/SectionHeader'
import GrabNGoList from './GrabNGoList'

type Props = {}

const GrabNGo: React.FC<Props> = () => {
	return (
		<section className='mt-[146px] flex flex-col gap-24'>
			<SectionHeader
				title='Take our fresh, delicious fare home for an
						unforgettable experience'
				subTitle='Grab-N-go'
				subTitleSize='medium'
			/>
			<GrabNGoList />
		</section>
	)
}

export default GrabNGo
