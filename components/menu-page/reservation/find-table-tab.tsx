import { FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useLazyGetReservationAvailabilityQuery } from '@/redux/slices/bookingSlice/bookingApiSlice'
import {
	selectBookingState,
	setBookingState,
} from '@/redux/slices/bookingSlice/bookingSlice'
import { format } from 'date-fns'
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

import { formatTimeTo24h } from '@/lib/date'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
// import DatePicker from 'react-datepicker'

// import 'react-datepicker/dist/react-datepicker.css'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import { availableReservationTimes, tablePeopleCounts } from './data'
import { ReservationTab } from './reservation-modal'

const FindATableTab = ({
	setTab,
}: {
	setTab: React.Dispatch<React.SetStateAction<ReservationTab>>
}) => {
	const dispatch = useAppDispatch()
	const bookingState = useAppSelector(selectBookingState)
	const [
		getReservationAvailableTime,
		{ data: availableTimes, isLoading, isError },
	] = useLazyGetReservationAvailabilityQuery()
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			await getReservationAvailableTime({
				recommended_time: formatTimeTo24h(bookingState.time),
				recommended_date: format(bookingState.date, 'YYYY-MM-DD'),
			}).unwrap()
		} catch {
			toast.error("Couldn't get available time")
		}
	}

	return (
		<div className='pb-8 pt-1'>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className='grid grid-cols-[repeat(12,1fr)] items-center mobile-sm:flex mobile-sm:grid-cols-3 mobile-sm:flex-wrap'
			>
				<div className='mobile-sm:flex-[1_1_33.3333%]'>
					<Select
						value={`${bookingState.people_count}`}
						onValueChange={(value) => {
							dispatch(
								setBookingState({
									...bookingState,
									people_count: value,
								})
							)
						}}
					>
						<SelectTrigger className='w-[135px] rounded-none rounded-bl-sm rounded-tl-sm p-4 mobile-sm:w-full mobile-sm:min-w-0 mobile-sm:rounded-bl-none'>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{tablePeopleCounts.map((item) => (
									<SelectItem key={item} value={`${item}`}>
										{item} {item === 1 ? 'person' : 'people'}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className='mobile-sm:flex-[1_1_33.3333%]'>
					<DatePicker
						date={bookingState.date}
						setDate={(selectedDate) => {
							dispatch(
								setBookingState({
									...bookingState,
									date: selectedDate,
								})
							)
						}}
						showIcon={false}
						formatOption='d MMM'
						showDropDownArrow
						className='w-[135px] rounded-none border-l-transparent p-4 mobile-sm:w-full mobile-sm:min-w-0'
					/>
				</div>

				<div className='mobile-sm:flex-[1_1_33.3333%]'>
					<Select
						value={bookingState.time}
						onValueChange={(value) => {
							dispatch(
								setBookingState({
									...bookingState,
									time: value,
								})
							)
						}}
					>
						<SelectTrigger className='w-[135px] rounded-none border-l-transparent p-4 mobile-sm:w-full mobile-sm:min-w-0'>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{availableReservationTimes.map((item, idx) => (
									<SelectItem key={idx} value={item.time}>
										{item.time}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<Button className='col-start-4 col-end-13 h-12 w-full rounded-none rounded-br-sm rounded-tr-sm p-4 mobile-sm:col-start-1 mobile-sm:row-start-2 mobile-sm:flex-[0_1_100%] mobile-sm:rounded-[0px_0px_0.25rem_0.25rem]'>
					Find a Table
				</Button>
			</form>

			<div className='flex w-full items-center justify-start  gap-2 pt-6 mobile-sm:flex-wrap mobile-sm:space-x-0 mobile-sm:pt-4'>
				{isLoading ? (
					<Loader2 className='h-4 w-4 animate-spin' />
				) : isError ? (
					<p>Error getting available times</p>
				) : availableTimes && availableTimes?.length > 0 ? (
					availableTimes.map((time) => {
						return (
							<Button
								onClick={() => {
									dispatch(
										setBookingState({
											...bookingState,
											selected_time: time.time,
										})
									)
									setTab('contact_info')
								}}
								className='w-full mobile-sm:h-9 mobile-sm:w-auto  mobile-sm:px-5'
								disabled={time.is_available}
							>
								{time.time}
							</Button>
						)
					})
				) : null}
				{/* {availableTime.map((time) => {
					return (
						<Button
							onClick={() => {
								setTab('contact_info')
							}}
							className='w-full mobile-sm:h-9 mobile-sm:w-auto  mobile-sm:px-5'
							disabled={!time.available}
						>
							{time.time}
						</Button>
					)
				})} */}
			</div>
		</div>
	)
}

export default FindATableTab
