import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import { Metadata } from 'next'

import AboutLocation from '@/components/menu-page/about-location'
import CoverPhoto from '@/components/menu-page/cover-photo'
import MenuAndAllBottomSections from '@/components/menu-page/menu-and-bottom-sections'
import { apiUrl } from '@/lib/constatns'

type ParamsType = {
	params: { location: string }
}

const getLocationInfo = async (location: string): Promise<LocationInfoType> => {
	const res = await fetch(`${apiUrl}/takeaway/info?takeaway=${location}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	})

	const data = await res?.json()
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Takeaway information not found')
	}
	return data?.takeaway_info
}

export const generateMetadata = async ({
	params,
}: ParamsType): Promise<Metadata> => {
	const locationInformation = await getLocationInfo(params.location)
	return {
		title: locationInformation.name,
	}
}

const TakeawayLocationMenuPage = async ({ params }: ParamsType) => {
	const locationInformation = await getLocationInfo(params.location)
	return (
		<div>
			<div className='mx-auto max-w-[1200px]'>
				<CoverPhoto locationInformation={locationInformation} />
			</div>
			<div className='mx-auto max-w-[1200px]'>
				<AboutLocation locationInformation={locationInformation} />
			</div>
			<MenuAndAllBottomSections locationInformation={locationInformation} />
		</div>
	)
}

export default TakeawayLocationMenuPage
