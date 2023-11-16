import AboutLocation from '@/components/menu-page/about-location'
import CoverPhoto from '@/components/menu-page/cover-photo'
import InformationSection from '@/components/menu-page/location-detail/information-section'
import MenuContainer from '@/components/menu-page/main-menu/menu-container'
import MenuNavbar from '@/components/menu-page/menu-navbar'
import AllReviews from '@/components/menu-page/reviews/all-reviews'

const TakeawayLocationMenuPage = () => {
	return (
		<div className=''>
			<div className='mx-auto max-w-[1200px]'>
				<CoverPhoto />
			</div>
			<div className='mx-auto max-w-[1200px]'>
				<AboutLocation />
			</div>
			<div className='w-full border-b border-border'>
				<div className='mx-auto max-w-[1200px] '>
					<MenuNavbar />
				</div>
			</div>
			<div className='mx-auto max-w-[1200px]'>
				<MenuContainer />
			</div>
			<div className='mx-auto max-w-[1200px]'>
				<InformationSection />
			</div>
			<div className='mx-auto max-w-[1200px]'>
				<AllReviews />
			</div>
		</div>
	)
}

export default TakeawayLocationMenuPage
