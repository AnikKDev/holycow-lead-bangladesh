import { Metadata } from 'next'
import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { apiUrl } from '@/lib/constatns'
import { getActualFetchedLocationName } from '@/lib/utils'
import AboutLocation from '@/components/menu-page/about-location'
import CoverPhoto from '@/components/menu-page/cover-photo'
import MenuAndAllBottomSections from '@/components/menu-page/menu-and-bottom-sections'

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
		throw new Error('Takeaway information not found')
	}
	return data?.takeaway_info
}

export const generateMetadata = async ({
	params,
}: ParamsType): Promise<Metadata> => {
	const locationInformation = await getLocationInfo(
		getActualFetchedLocationName(params.location)
	)
	return {
		title: locationInformation.name,
	}
}

const TakeawayLocationMenuPage = async ({ params }: ParamsType) => {
	const locationInformation = await getLocationInfo(
		getActualFetchedLocationName(params.location)
	)
	return (
		<div className='font-lora'>
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
