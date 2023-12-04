import AboutLocation from '@/components/menu-page/about-location'
import CoverPhoto from '@/components/menu-page/cover-photo'
import MenuAndAllBottomSections from '@/components/menu-page/menu-and-bottom-sections'

const RestaurantHomePage = () => {
	return (
		<div>
			<div className='mx-auto max-w-[1200px]'>
				<CoverPhoto />
			</div>
			<div className='mx-auto max-w-[1200px]'>
				<AboutLocation isRestaurant />
			</div>
			<MenuAndAllBottomSections isRestaurant />
		</div>
	)
}

export default RestaurantHomePage
