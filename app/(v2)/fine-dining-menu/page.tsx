import { Metadata } from 'next'
import bg from '@/assets/v2/secondary-bg.png'

import MenuTab from '@/components/v2/menu-tabs/MenuTab'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'

export const metadata: Metadata = {
	title: 'Fine Indian Dining Menu Limehouse – Canary Wharf',
}

const Page = () => {
	return (
		<>
			<GradientWrapper>
				<BannerContents text='Limehouse' image={bg.src} />
				<div className='container flex flex-col gap-12'>
					<SectionHeader
						subTitle='Grab-N-Taste'
						title='Come for our fresh, delicious fare, and stay for a dining experience you won’t forget.'
						subTitleSize='medium'
					/>
					<hr className='border-t border-dotted border-[#727272]' />
				</div>
			</GradientWrapper>

			<div className='mt-5 md:mt-10'>
				<MenuTab />
			</div>
		</>
	)
}

export default Page
