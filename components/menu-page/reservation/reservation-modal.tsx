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
				<DialogContent className='sm:max-w-[425px] max-w-2xl p-0'>
					<DialogHeader className='px-5 pt-5 text-left'>
						<DialogTitle className='pt-4 text-2xl'>
							Booking at Holycow - Putney
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
