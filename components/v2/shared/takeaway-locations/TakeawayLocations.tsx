import React from 'react'

import SectionHeader from '../../shared/SectionHeader'
import TakeawayLocationsList from './TakeawayLocationsList'

const TakeawayLocations = () => {
	return (
		<section className='container flex flex-col gap-24'>
			<SectionHeader
				title='Take our fresh, delicious fare home for an
						unforgettable experience'
				subTitle='Grab-N-go'
				subTitleSize='medium'
			/>
			<TakeawayLocationsList />
		</section>
	)
}

export default TakeawayLocations
