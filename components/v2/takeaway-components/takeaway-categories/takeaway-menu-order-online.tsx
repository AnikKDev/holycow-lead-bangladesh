'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { allTakeawayLocations } from '@/components/home-components/date'
import { HomeShowLocationsModal } from '@/components/home-components/home-modal'

const TakeawayMenuOrderOnlineBtn = () => {
	const [showTakeawayLocations, setShowTakeawayLocations] = useState(false)

	return (
		<>
			<Button
				onClick={() => {
					setShowTakeawayLocations(true)
				}}
				variant='default'
				size='lg'
				className='min-w-[236px] px-14 text-base mobile-md:w-full'
			>
				Order Online
			</Button>
			{/* online order popup */}
			<HomeShowLocationsModal
				header='Select the nearest takeaway location'
				selectOptions={allTakeawayLocations}
				showModal={showTakeawayLocations}
				setShowModal={setShowTakeawayLocations}
			/>
		</>
	)
}

export default TakeawayMenuOrderOnlineBtn
