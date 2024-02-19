import React from 'react'
import bg from '@/assets/career/career-and-offer-bg.png'

import OpenPositionCard from '@/components/v2/career/open-position-card'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'

type Props = {}

export default function Career({}: Props) {
	return (
		<>
			{/* banner here */}
			<div className='container'>
				<BannerContents text='Career' image={bg.src} />
			</div>
			{/* page info */}
			<div className='mx-auto max-w-5xl'>
				<div className='my-20'>
					<SectionHeader
						subTitle='Grab-N-go'
						title='take our fresh, delicious fare home for an unforgettable experience'
						subTitleSize='medium'
					/>
				</div>
				{/* open positions */}
				<SectionHeader
					title='Open Position'
					subTitleSize='large'
					showSpoon={false}
				/>
				{/* cards */}
				<OpenPositionCard />
			</div>
		</>
	)
}
