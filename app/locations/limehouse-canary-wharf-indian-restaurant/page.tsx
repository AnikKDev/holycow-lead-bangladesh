import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { apiUrl } from '@/lib/constatns'
import AboutLocation from '@/components/menu-page/about-location'
import CoverPhoto from '@/components/menu-page/cover-photo'
import MenuAndAllBottomSections from '@/components/menu-page/menu-and-bottom-sections'

type ParamsType = {
	params: { location: string }
}

export const getLocationInfo = async (
	location: string
): Promise<LocationInfoType> => {
	const res = await fetch(`${apiUrl}/takeaway/info?takeaway=${location}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
		cache: 'no-store',
	})

	const data = await res.json()
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Restaurant information not found')
	}
	return data?.takeaway_info
}

export const generateMetadata = () => {
	return {
		title: 'Limehouse - Canary Wharf',
	}
}

const RestaurantHomePage = async () => {
	const locationInformation = await getLocationInfo('limehouse')

	return (
		<div>
			<div className='mx-auto max-w-[1200px]'>
				<CoverPhoto locationInformation={locationInformation} />
			</div>
			<div className='mx-auto max-w-[1200px]'>
				<AboutLocation isRestaurant locationInformation={locationInformation} />
			</div>
			<MenuAndAllBottomSections
				isRestaurant
				locationInformation={locationInformation}
			/>
		</div>
	)
}

export default RestaurantHomePage
