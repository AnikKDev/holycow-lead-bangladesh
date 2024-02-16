'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { allTakeawayLocations } from '@/components/home-components/date'
import { HomeShowLocationsModal } from '@/components/home-components/home-modal'

const HeaderTakeawayBtn = () => {
	const [showTakeawayLocations, setShowTakeawayLocations] = useState(false)

	return (
		<>
			<Button
				onClick={() => {
					setShowTakeawayLocations(true)
				}}
				className='rounded-none bg-primary font-lora text-[16px]  font-[500px] leading-[28px] tracking-[0.04em] text-foreground'
			>
				Takeaway / Order Online
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

export default HeaderTakeawayBtn
