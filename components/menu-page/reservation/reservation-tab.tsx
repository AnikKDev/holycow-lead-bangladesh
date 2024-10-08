import { useAppSelector } from '@/redux/hooks'
import { selectBookingState } from '@/redux/slices/bookingSlice/bookingSlice'

import { cn, hasAllValues } from '@/lib/utils'

import { ReservationTab } from './reservation-modal'

const ReservationTabContainer = ({
	tab,
	setTab,
}: {
	tab: ReservationTab
	setTab: React.Dispatch<React.SetStateAction<ReservationTab>>
}) => {
	const bookingState = useAppSelector(selectBookingState)
	return (
		<div>
			<div className='flex w-full items-center space-x-7 shadow-[rgb(204,204,204)_0px_-1px_0px_inset] mobile-sm:space-x-4'>
				<button
					className={cn(
						'cursor-pointer whitespace-nowrap border-b-2 border-b-transparent pb-3 text-sm font-medium uppercase tracking-[1px] transition',
						{
							'border-primary-dark text-primary-dark': tab === 'find_table',
						}
					)}
					onClick={() => {
						setTab('find_table')
					}}
				>
					Find a Table
				</button>
				<button
					className={cn(
						' cursor-pointer whitespace-nowrap border-b-2 border-b-transparent pb-3 text-sm font-medium uppercase tracking-[1px] transition',
						{
							'border-primary-dark text-primary-dark': tab === 'contact_info',
						}
					)}
					onClick={() => {
						if (
							bookingState.people_count &&
							bookingState.date &&
							bookingState.time &&
							bookingState.selected_time
						) {
							setTab('contact_info')
						}
					}}
				>
					Contact Information
				</button>
				<button
					className={cn(
						'cursor-pointer whitespace-nowrap border-b-2 border-b-transparent pb-3 text-sm font-medium uppercase tracking-[1px] transition',
						{
							'border-primary-dark text-primary-dark': tab === 'payment',
						}
					)}
					onClick={() => {
						if (hasAllValues(bookingState, ['notes'])) {
							setTab('payment')
						}
					}}
				>
					Payment
				</button>
			</div>
		</div>
	)
}

export default ReservationTabContainer
