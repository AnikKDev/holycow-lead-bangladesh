import { useAppSelector } from '@/redux/hooks'
import { useMakeReservationMutation } from '@/redux/slices/bookingSlice/bookingApiSlice'
import { selectBookingState } from '@/redux/slices/bookingSlice/bookingSlice'
import toast from 'react-hot-toast'

import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import TableSelectedOptions from './selected-options'

const PaymentTab = () => {
	const [makeReservation, { data, isLoading, isError }] =
		useMakeReservationMutation()
	const bookingState = useAppSelector(selectBookingState)

	const handleConfirmBooking = async () => {
		try {
			const bookingData = { ...bookingState }
			bookingData.time = bookingData.selected_time
			delete bookingData.selected_time

			const res = await makeReservation(bookingData).unwrap()

			const { url } = res
			window.location.href = url
		} catch (e) {
			console.log(e)
			toast.error('Something went wrong!')
		}
	}

	return (
		<div className='pb-8'>
			<TableSelectedOptions />

			<div className='mt-4 flex w-full flex-col gap-2.5'>
				<div className='h-11 text-left text-sm font-medium text-foreground'>
					Deposit Amount: {formatPrice(10)}
				</div>
				<Button onClick={handleConfirmBooking} size='lg'>
					Pay & Confirm Booking
				</Button>
			</div>
		</div>
	)
}

export default PaymentTab
