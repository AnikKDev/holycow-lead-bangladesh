'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { allRestaurantLocations, allTakeawayLocations } from './date'
import { HomeShowLocationsModal } from './home-modal'

type Props = {}

export default function HomeBanner({}: Props) {
	const [showTakeawayLocations, setShowTakeawayLocations] = useState(false)
	const [showRestaurantLocations, setShowRestaurantLocations] = useState(false)

	return (
		<>
			<div className='flex h-[calc(100vh-108px)] flex-col items-center justify-center mobile-md:h-[calc(100vh-64px)]'>
				<div className='home-banner_background h-screen w-full  bg-cover bg-center'>
					<div className='flex h-full w-full items-center justify-center  backdrop-brightness-50 backdrop-opacity-50 mobile-sm:flex-col'>
						<Button
							onClick={() => {
								setShowTakeawayLocations(true)
							}}
							size='lg'
							className='mx-3 my-3 w-72 rounded-3xl text-xl transition-all hover:bg-white hover:text-primary'
							variant='default'
						>
							Takeway
						</Button>
						<Button
							onClick={() => {
								setShowRestaurantLocations(true)
							}}
							size='lg'
							className='mx-3 w-72 rounded-3xl text-xl transition-all hover:bg-white hover:text-primary'
							variant='default'
						>
							Restaurants
						</Button>
					</div>
				</div>
			</div>
			<HomeShowLocationsModal
				header='Select the nearest takeaway location'
				selectOptions={allTakeawayLocations}
				showModal={showTakeawayLocations}
				setShowModal={setShowTakeawayLocations}
			/>

			<HomeShowLocationsModal
				header='Select the nearest restaurant location'
				selectOptions={allRestaurantLocations}
				showModal={showRestaurantLocations}
				setShowModal={setShowRestaurantLocations}
			/>
		</>
	)
}
