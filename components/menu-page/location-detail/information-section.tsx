import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import LocationAboutUs from './location-aboutus'
import LocationInfo from './location-info'
import LocationOpeningHours from './location-opening-hours'

const InformationSection = ({
	locationInformation,
}: {
	locationInformation?: LocationInfoType
}) => {
	return (
		<div className='container mt-9 flex flex-col gap-4  py-5'>
			<h1 className='text-2xl font-bold'>
				Holycow - {locationInformation?.name}, Fine Indian Food - Indian
				Takeaway in {locationInformation?.name}, London
			</h1>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-8'>
				<LocationInfo locationInformation={locationInformation} />
				<LocationOpeningHours locationInformation={locationInformation} />
				<LocationAboutUs />
			</div>
		</div>
	)
}

export default InformationSection
