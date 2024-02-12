import React from 'react'
import bg from '@/assets/v2/secondary-bg.png'

import MenuTab from '@/components/v2/menu-tabs/MenuTab'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'

const Page = () => {
	return (
		<>
			<GradientWrapper>
				<div className='px-2 md:px-4 _desktop-md:px-8'>
					<BannerContents text='Limehouse' image={bg.src} />
				</div>
				<div className='container flex flex-col gap-24'>
					<SectionHeader
						subTitle='Grab-N-Taste'
						title='Come for our fresh, delicious fare, and stay for a dining experience you won’t forget.'
						subTitleSize='medium'
					/>
					<hr className='border-t border-dotted border-[#727272]' />
				</div>
			</GradientWrapper>

			<div className='mt-9 md:mt-24'>
				<MenuTab />
			</div>
		</>
	)
}

export default Page
