'use client'

import { useState } from 'react'

import { allTakeawayLocations } from '@/components/home-components/date'
import { HomeShowLocationsModal } from '@/components/home-components/home-modal'

type Props = {}

const LunchMenuPopUp = (props: Props) => {
	const [showTakeawayLocations, setShowTakeawayLocations] = useState(false)
	return (
		<>
			<button
				className='v2-custom-button bg-primary px-8 py-2 text-sm font-medium capitalize leading-[1.7] tracking-[0.04em] text-foreground'
				onClick={() => setShowTakeawayLocations(true)}
			>
				Order Online
			</button>
			<HomeShowLocationsModal
				header='Select the nearest takeaway location'
				selectOptions={allTakeawayLocations}
				showModal={showTakeawayLocations}
				setShowModal={setShowTakeawayLocations}
			/>
		</>
	)
}

export default LunchMenuPopUp
