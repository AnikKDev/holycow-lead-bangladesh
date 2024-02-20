import { takeawayLocationsListData } from '@/components/shared/data'

import TakeawayLocationsCard from './TakeawayLocationsCard'

const TakeawayLocationsList = ({
	takeawayLocationsList = takeawayLocationsListData,
}) => {
	return (
		<div className='md: grid grid-cols-2 gap-y-2 md:grid-cols-3 md:gap-y-8 _desktop-sm:grid-cols-4 _desktop-md:grid-cols-4'>
			{takeawayLocationsList.map((store, index) => (
				<TakeawayLocationsCard
					key={index}
					storeName={store.name}
					storeAddress={store.address}
					storePhone={store.phone}
					storeLocation={store.location}
				/>
			))}
		</div>
	)
}

export default TakeawayLocationsList
