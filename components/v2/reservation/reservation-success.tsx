'use client'

import { useAppDispatch } from '@/redux/hooks'
import {
	bookingInitialState,
	setBookingState,
} from '@/redux/slices/bookingSlice/bookingSlice'
import { useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6F0t0FxckQk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

const modalMap = {
	success: PaymentSuccessModal,
	failed: PaymentFailedModal,
}

const ReservationSuccessOrFailure = () => {
	const [showSuccessModal, setShowSuccessModal] = useState(false)
	const [showFailedModal, setShowFailedModal] = useState(false)

	const searchParams = useSearchParams()
	const dispatch = useAppDispatch()
	const isOrderSuccess = searchParams.get('success')
	const isOrderCancelled = searchParams.get('cancelled')
	const localStorage_is_order_succeed = JSON.parse(
		window.localStorage.getItem('is_booking_success')
	)

	useEffect(() => {
		if ((isOrderSuccess || isOrderCancelled) && localStorage_is_order_succeed) {
			if (isOrderSuccess) {
				setShowSuccessModal(true)
			} else if (isOrderCancelled) {
				setShowFailedModal(true)
			}

			dispatch(setBookingState(bookingInitialState))
			window.localStorage.setItem('is_booking_success', JSON.stringify(false))
		}
	}, [isOrderSuccess, isOrderCancelled])

	return (
		<>
			<PaymentSuccessModal
				showModal={showSuccessModal}
				setShowModal={setShowSuccessModal}
			/>
			<PaymentFailedModal
				showModal={showFailedModal}
				setShowModal={setShowFailedModal}
			/>
		</>
	)
}

export default ReservationSuccessOrFailure

export function PaymentSuccessModal({
	showModal,
	setShowModal,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}) {
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='flex min-w-0 max-w-md justify-center rounded-lg bg-white p-6 font-lora shadow-lg mobile-sm:w-full'>
					<div className='flex flex-col items-center space-y-4'>
						<div className='rounded-full bg-green-100 p-2'>
							<CheckIcon className='text-green-600' />
						</div>
						<h2 className='text-lg font-semibold text-gray-800'>Success!</h2>
						<p className='text-sm text-gray-600'>
							We've confirmed your order and payment. Thank you for shopping
							with us!
						</p>
						<Button onClick={() => setShowModal(false)}>
							Continue Browsing
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}

export function PaymentFailedModal({
	showModal,
	setShowModal,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}) {
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='flex min-w-0 max-w-md justify-center rounded-lg bg-white p-6 font-lora shadow-lg mobile-sm:w-full'>
					<div className='flex flex-col items-center space-y-4'>
						<div className='rounded-full bg-red-100 p-2'>
							<XIcon className='text-red-600' />
						</div>
						<h2 className='text-lg font-semibold text-gray-800'>Error!</h2>
						<p className='text-sm text-gray-600'>
							We're Sorry! Something went wrong, and we were unable to complete
							your order.
						</p>
						<Button onClick={() => setShowModal(false)} variant='destructive'>
							Try again later
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}

function CheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<polyline points='20 6 9 17 4 12' />
		</svg>
	)
}

function XIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M18 6 6 18' />
			<path d='m6 6 12 12' />
		</svg>
	)
}
