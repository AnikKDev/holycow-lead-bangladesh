import { Metadata } from 'next'
import bg from '@/assets/v2/secondary-bg.png'

import PhotoGallery from '@/components/v2/home-components/photo_gallery/PhotoGallery'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'
import TakeawayMenu from '@/components/v2/takeaway-components/takeaway-menu/TakeawayMenu'

export const metadata: Metadata = {
	title: 'Best Indian Takeaway in London',
}

const Page = () => {
	return (
		<>
			<GradientWrapper>
				<BannerContents text='Takeaway' image={bg.src} />
				<SectionHeader
					title='take our fresh, delicious fare home for an unforgettable experience'
					subTitle='Grab-N-go'
					subTitleSize='medium'
				/>
				<hr className='my-10 border-t-[0.5px] border-dotted border-[#727272] mobile-md:my-5' />
			</GradientWrapper>
			<div className='container mx-auto max-w-[1200px]'>
				<TakeawayMenu />
			</div>
			<PhotoGallery />
		</>
	)
}

export default Page
