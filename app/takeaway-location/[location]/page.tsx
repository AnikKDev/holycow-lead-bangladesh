import AboutLocation from '@/components/menu-page/about-location'
import CoverPhoto from '@/components/menu-page/cover-photo'
import MenuContainer from '@/components/menu-page/main-menu/menu-container'
import MenuNavbar from '@/components/menu-page/menu-navbar'

const TakeawayLocationMenuPage = () => {
	return (
		<>
			<CoverPhoto />
			<AboutLocation />
			<MenuNavbar />
			<MenuContainer />
		</>
	)
}

export default TakeawayLocationMenuPage
