'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { ReservationModal } from './reservation-modal'

const BookATableBtn = () => {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<div className='mobile-sm:w-full'>
				<Button
					variant='default'
					size='lg'
					className='px-14 text-base mobile-sm:w-full'
					onClick={() => {
						setShowModal(true)
					}}
				>
					Book a table
				</Button>
			</div>
			<ReservationModal showModal={showModal} setShowModal={setShowModal} />
		</>
	)
}

export default BookATableBtn
