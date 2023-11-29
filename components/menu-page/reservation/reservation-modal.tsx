'use client'

import { Dispatch, SetStateAction } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'

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
					<DialogHeader className='px-5 pb-5 pt-5 text-left'>
						<DialogTitle className='pt-3 text-xl'>
							Booking at Holycow - Putney
						</DialogTitle>
					</DialogHeader>

					<DialogFooter className='mt-2 flex-col gap-2 pb-4 pt-4'>
						<div className='px-5'>
							<div className='flex w-full items-center gap-2.5'>
								<Button variant='default' size='lg' className='w-full'>
									Submit
								</Button>
							</div>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
