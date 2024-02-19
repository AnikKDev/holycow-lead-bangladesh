import React from 'react'

import SectionHeader from '../../shared/SectionHeader'
import TakeawayLocationsList from './TakeawayLocationsList'

const TakeawayLocations = () => {
	return (
		<section className='mx-auto my-24 flex max-w-5xl flex-col gap-8 px-4 md:gap-16'>
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
