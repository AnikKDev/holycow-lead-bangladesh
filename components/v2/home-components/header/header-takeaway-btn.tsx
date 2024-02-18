'use client'

import { ReactNode, useState } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { allTakeawayLocations } from '@/components/home-components/date'
import { HomeShowLocationsModal } from '@/components/home-components/home-modal'

const HeaderTakeawayBtn = ({
	children,
	className,
	onClick,
}: {
	children: ReactNode
	className?: string
	onClick?: () => void
}) => {
	const [showTakeawayLocations, setShowTakeawayLocations] = useState(false)

	return (
		<>
			<Button
				onClick={() => {
					setShowTakeawayLocations(true)
					if (onClick) {
						console.log('onclick clicked')
						onClick()
					}
				}}
				className={cn(
					'rounded-none bg-primary font-lora text-[16px]  font-[500px] leading-[28px] tracking-[0.04em] text-foreground',
					className
				)}
			>
				{children}
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
