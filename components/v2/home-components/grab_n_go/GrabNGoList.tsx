import React from 'react'

import GrabNGoItem from './GrabNGoItem'

type Props = {}

const grabNGoList = [
	{
		name: 'Angel',
		address: ['98 Chapel Market,', 'London N1 9EY'],
		phone: '0203 995 6000',
		location: 'https://maps.app.goo.gl/che5K2PSjtSHyCrr8',
	},
	{
		name: 'Archway',
		address: ['87 Junction Road, ', 'Archway, London N19 5QU'],
		phone: '0207 263 7007',
		location: 'https://maps.app.goo.gl/che5K2PSjtSHyCrr8',
	},
	{
		name: 'Balham',
		address: ['27 Balham High Road, ', 'Balham, London SW12 9AL'],
		phone: '020 8673 8000',
		location: 'https://maps.app.goo.gl/che5K2PSjtSHyCrr8',
	},
	{
		name: 'Battersea',
		address: ['152 Battersea Bridge Road, ', 'Battersea, London SW11 3AW'],
		phone: '020 7498 2000',
		location: 'https://maps.app.goo.gl/che5K2PSjtSHyCrr8',
	},
	{
		name: 'Hammersmith',
		address: ['354 King Street, ', 'Hammersmith, London W6 0RX'],
		phone: '020 8748 8989',
		location: 'https://maps.app.goo.gl/che5K2PSjtSHyCrr8',
	},
	{
		name: 'Kilburn',
		address: ['2F Dyne Road, ', 'Kilburn, London NW6 7XB'],
		phone: '020 7372 3123',
		location: 'https://maps.app.goo.gl/che5K2PSjtSHyCrr8',
	},
	{
		name: 'Putney',
		address: ['238 Upper Richmond Road, ', 'Putney, London SW15 6TG'],
		phone: '020 8788 9555',
		location: 'https://maps.app.goo.gl/che5K2PSjtSHyCrr8',
	},
	{
		name: 'Limehouse - Canary Wharf',
		address: ['51 Narrow Street, ', 'London E14 8DN'],
		phone: '0207 790 7688',
		location: 'https://maps.app.goo.gl/che5K2PSjtSHyCrr8',
	},
]
const GrabNGoList = (props: Props) => {
	const firstSection = grabNGoList.slice(0, 4)
	const secondSection = grabNGoList.slice(4, 8)
	return (
		<div className='relative flex flex-col items-center'>
			<div className='relative flex  items-center justify-center gap-8 px-4 pb-5'>
				{firstSection.map((store, index) => (
					<GrabNGoItem
						key={index}
						storeName={store.name}
						storeAddress={store.address}
						storePhone={store.phone}
						storeLocation={store.location}
					/>
				))}
				<span className='absolute bottom-0 h-1/2 w-full bg-[#E8D3A2]'></span>
			</div>

			<div className='relative mt-8 flex items-center justify-center gap-8 px-4 pb-5'>
				{secondSection.map((store, index) => (
					<GrabNGoItem
						key={index}
						storeName={store.name}
						storeAddress={store.address}
						storePhone={store.phone}
						storeLocation={store.location}
					/>
				))}
				<span className='absolute bottom-0 h-1/2 w-full bg-[#E8D3A2]'></span>
			</div>
		</div>
	)
}

export default GrabNGoList
