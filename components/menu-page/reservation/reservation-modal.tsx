'use client'

import { Dispatch, SetStateAction } from 'react'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'

import ReservationTabContainer from './reservation-tab'

export function ReservationModal({
	showModal,
	setShowModal,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}) {
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-2xl overflow-hidden p-0'>
					<DialogHeader className='px-5 pt-5 text-left'>
						<DialogTitle className='pt-4 text-2xl'>
							Booking at Holycow - Putney
						</DialogTitle>
					</DialogHeader>

					<div className='px-5 pt-2'>
						<ReservationTabContainer />
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}
