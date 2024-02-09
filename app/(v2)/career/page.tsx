import React from 'react'
import bg from '@/assets/career/career-and-offer-bg.png'

import OpenPositionCard from '@/components/v2/career/open-position-card'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'

type Props = {}

export default function Career({}: Props) {
	return (
		<GradientWrapper>
			{/* banner here */}
			<div>
				<BannerContents text='Career' image={bg.src} />
			</div>
			{/* page info */}
			<SectionHeader
				subTitle='Grab-N-go'
				title='take our fresh, delicious fare home for an unforgettable experience'
				subTitleSize='medium'
			/>
			{/* open positions */}
			<div>
				<SectionHeader
					title='Open Position'
					subTitleSize='large'
					showSpoon={false}
				/>
				{/* cards */}
				<OpenPositionCard />
			</div>
		</GradientWrapper>
	)
}
