import { Metadata } from 'next'
import bg from '@/assets/v2/takeaway/location-bg.png'

import TakeawayLocationFilter from '@/components/v2/locations/TakeawayLocationFilter'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'
import TakeawayLocationInput from '@/components/v2/shared/takeaway-locations/TakeawayLocationInput'
import TakeawayLocationsList from '@/components/v2/shared/takeaway-locations/TakeawayLocationsList'

export const metadata: Metadata = {
	title: 'Best Indian Takeaway in London',
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
				<hr className='my-10 border-t-[0.5px] border-dotted border-[#727272] mobile-md:my-5' />
			</GradientWrapper>

			<section className='container my-10 flex flex-col items-center gap-10'>
				<h2 className='text-center font-lora text-3xl font-medium capitalize leading-[1.3] tracking-[0.04em] text-foreground'>
					Takeaway Locations
				</h2>
				<TakeawayLocationFilter />
			</section>
		</>
	)
}

export default Page
