import TakeawayLocationsCard from './TakeawayLocationsCard'

type Props = {}

const takeawayLocationsList = [
	{
		name: 'Angel',
		address: ['98 Chapel Market,', 'London N1 9EY'],
		phone: '0203 995 6000',
		location: '/takeaway-location/angel/',
	},
	{
		name: 'Archway',
		address: ['87 Junction Road, ', 'Archway, London N19 5QU'],
		phone: '0207 263 7007',
		location: '/takeaway-location/archway',
	},
	{
		name: 'Balham',
		address: ['27 Balham High Road, ', 'Balham, London SW12 9AL'],
		phone: '020 8673 8000',
		location: '/takeaway-location/balham',
	},
	{
		name: 'Battersea',
		address: ['152 Battersea Bridge Road, ', 'Battersea, London SW11 3AW'],
		phone: '020 7498 2000',
		location: '/takeaway-location/battersea',
	},
	{
		name: 'Hammersmith',
		address: ['354 King Street, ', 'Hammersmith, London W6 0RX'],
		phone: '020 8748 8989',
		location: '/takeaway-location/hammersmith',
	},
	{
		name: 'Kilburn',
		address: ['2F Dyne Road, ', 'Kilburn, London NW6 7XB'],
		phone: '020 7372 3123',
		location: '/takeaway-location/kilburn',
	},
	{
		name: 'Putney',
		address: ['238 Upper Richmond Road, ', 'Putney, London SW15 6TG'],
		phone: '020 8788 9555',
		location: '/locations/putney',
	},
	{
		name: 'Limehouse - Canary Wharf',
		address: ['51 Narrow Street, ', 'London E14 8DN'],
		phone: '0207 790 7688',
		location: '/locations/limehouse-canary-wharf',
	},
]

const TakeawayLocationsList = (props: Props) => {
	return (
		<div className='grid grid-cols-1 gap-0 _tablet:grid-cols-2  _tablet:gap-y-8 _desktop-sm:grid-cols-3 _desktop-sm:gap-y-8 _desktop-md:grid-cols-4 _desktop-md:gap-y-8'>
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
