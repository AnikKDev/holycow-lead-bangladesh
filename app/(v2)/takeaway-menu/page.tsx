import React from 'react'
import { Metadata } from 'next'
import bg from '@/assets/v2/secondary-bg.png'

import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'
import TakeawayMenu from '@/components/v2/takeaway-components/takeaway-menu/TakeawayMenu'

export const metadata: Metadata = {
	title: 'Best Indian Takeaway Menu',
}

const Page = () => {
	return (
		<>
			<GradientWrapper>
				<div className='px-2 md:px-4 _desktop-md:px-8'>
					<BannerContents text='Takeaway' image={bg.src} />
				</div>
				<SectionHeader
					title='take our fresh, delicious fare home for an unforgettable experience'
					subTitle='Grab-N-go'
					subTitleSize='medium'
				/>
				<hr className='my-24 border-t-[0.5px] border-dotted border-[#727272]' />
			</GradientWrapper>
			<div className='container mx-auto max-w-[1327px] space-y-24'>
				<TakeawayMenu />
			</div>
		</>
	)
}

export default Page
