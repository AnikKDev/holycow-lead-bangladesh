import { useAppSelector } from '@/redux/hooks'
import { useMakeReservationMutation } from '@/redux/slices/bookingSlice/bookingApiSlice'
import { selectBookingState } from '@/redux/slices/bookingSlice/bookingSlice'
import { format } from 'date-fns'
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

import { formatTimeTo24h } from '@/lib/date'
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
			bookingData.time = formatTimeTo24h(bookingData.selected_time)
			bookingData.date = format(new Date(bookingData.date), 'yyyy-MM-dd')
			delete bookingData.selected_time

			const res = await makeReservation(bookingData).unwrap()

			const { url } = res
			window.localStorage.setItem('is_booking_success', JSON.stringify(true))
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
				<Button disabled={isLoading} onClick={handleConfirmBooking} size='lg'>
					{isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
					Pay & Confirm Booking
				</Button>
			</div>
		</div>
	)
}

export default PaymentTab
