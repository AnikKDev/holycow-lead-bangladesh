import React from 'react'

import SectionHeader from '../../shared/SectionHeader'
import CarousalSection from './CarousalSection'

type Props = {}

const WonderfulRestaurant = (props: Props) => {
	return (
		<div className='mx-auto w-[1327px] space-y-24'>
			<div className='max-w-[909px]'>
				<SectionHeader
					title='Come for our fresh, delicious fare, and stay for a dining experience you won’t forget.'
					subTitle='Wonderful Restaurant'
					containsAlign='left'
					subTitleSize='medium'
				/>
			</div>
			<CarousalSection />
		</div>
	)
}

export default WonderfulRestaurant
