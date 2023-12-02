import LocationAboutUs from './location-aboutus'
import LocationInfo from './location-info'
import LocationOpeningHours from './location-opening-hours'

const InformationSection = () => {
	return (
		<div className='container mt-7 flex flex-col gap-4  py-5'>
			<h1 className='text-2xl font-bold'>
				Holycow - Archway, Fine Indian Food - Indian Takeaway in Archway, London
			</h1>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-8'>
				<LocationInfo />
				<LocationOpeningHours />
				<LocationAboutUs />
			</div>
		</div>
	)
}

export default InformationSection
