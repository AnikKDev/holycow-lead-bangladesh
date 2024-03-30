import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import LocationAboutUs from './location-aboutus'
import LocationInfo from './location-info'
import LocationOpeningHours from './location-opening-hours'

const InformationSection = ({
	locationInformation,
	refCallback,
}: {
	locationInformation?: LocationInfoType
	refCallback?: any
}) => {
	return (
		<div className='container mt-9 flex flex-col gap-4  py-5 '>
			<h1
				id='opening-hours'
				ref={refCallback}
				className='scroll-m-32 text-2xl font-bold'
			>
				Holycow - {locationInformation?.name}, Fine Indian Food - Indian
				Takeaway in {locationInformation?.name}, London
			</h1>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(479px,1fr))] gap-8 mobile-sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
				<LocationInfo locationInformation={locationInformation} />
				<LocationOpeningHours locationInformation={locationInformation} />
				<LocationAboutUs ref={refCallback} id='about' />
			</div>
		</div>
	)
}

export default InformationSection
