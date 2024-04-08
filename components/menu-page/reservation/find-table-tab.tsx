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
		{ data: availableTimes, isLoading, isError, isFetching },
	] = useLazyGetReservationAvailabilityQuery()

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('inside')
		try {
			console.log('res')
			const res = await getReservationAvailableTime({
				recommended_time: formatTimeTo24h(bookingState.time),
				recommended_date: format(new Date(bookingState.date), 'yyyy-MM-dd'),
			}).unwrap()
			console.log('real res', res)
			if (!res.is_available) {
				dispatch(
					setBookingState({
						...bookingState,
						selected_time: null,
					})
				)
				toast.error('The selected time is not available at this moment')
				return
			}
			dispatch(
				setBookingState({
					...bookingState,
					selected_time: res.time,
				})
			)
			setTab('contact_info')
		} catch (error) {
			console.error(error)
			dispatch(
				setBookingState({
					...bookingState,
					selected_time: null,
				})
			)
			toast.error("Couldn't get available time")
		}
	}

	return (
		<div className='pb-8 pt-1'>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className='grid grid-cols-3 items-center mobile-sm:flex mobile-sm:flex-wrap'
			>
				<div className='flex-[1_1_33.3333%]'>
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
						<SelectTrigger className='w-full min-w-0 rounded-none rounded-bl-none rounded-tl-sm p-4'>
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

				<div className='flex-[1_1_33.3333%]'>
					<DatePicker
						date={new Date(bookingState.date || new Date())}
						setDate={(selectedDate) => {
							dispatch(
								setBookingState({
									...bookingState,
									date: selectedDate.toISOString(),
								})
							)
						}}
						showIcon={false}
						formatOption='d MMM'
						showDropDownArrow
						className='w-full min-w-0 rounded-none border-l-transparent p-4'
					/>
				</div>

				<div className='flex-[1_1_33.3333%]'>
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
						<SelectTrigger className=' w-full min-w-0 rounded-none border-l-transparent p-4'>
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

				<Button
					disabled={isLoading}
					className='col-start-1 col-end-13 row-start-2 h-12 w-full flex-[0_1_100%] rounded-[0px_0px_0.25rem_0.25rem] rounded-br-sm rounded-tr-none p-4'
				>
					{isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
					Book a Table
				</Button>
			</form>

			{/* <div className='flex w-full items-center justify-start  gap-2 pt-6 mobile-sm:flex-wrap mobile-sm:space-x-0 mobile-sm:pt-4'>
				{isLoading || isFetching ? (
					<Loader2 className='h-4 w-4 animate-spin' />
				) : isError ? (
					<p>Error getting available times</p>
				) : availableTimes && availableTimes?.length > 0 ? (
					availableTimes.map((time, idx) => {
						return (
							<Button
								key={idx}
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
								disabled={time.count >= 10}
							>
								{time.time}
							</Button>
						)
					})
				) : null}
			</div> */}
		</div>
	)
}

export default FindATableTab
