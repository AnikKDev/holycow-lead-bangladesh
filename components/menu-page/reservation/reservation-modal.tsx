'use client'

import { Dispatch, SetStateAction, useState } from 'react'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'

import ReservationTabContainer from './reservation-tab'
import TabContent from './tab-content'

export type ReservationTab = 'find_table' | 'contact_info' | 'payment'

export function ReservationModal({
	showModal,
	setShowModal,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}) {
	const [tab, setTab] = useState<ReservationTab>('find_table')
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='min-w-0 max-w-2xl p-0 mobile-sm:w-full'>
					<DialogHeader className='px-5 pt-5 text-left'>
						<DialogTitle className='pt-4 text-2xl'>
							Booking at Holycow - Limehouse - Canary Wharf
						</DialogTitle>
					</DialogHeader>

					<div className=' px-5 pt-2'>
						<ReservationTabContainer tab={tab} setTab={setTab} />

						<TabContent tab={tab} setTab={setTab} />
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}
