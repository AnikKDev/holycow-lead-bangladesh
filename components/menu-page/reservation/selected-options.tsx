import { useAppSelector } from '@/redux/hooks'
import { selectBookingState } from '@/redux/slices/bookingSlice/bookingSlice'
import { format } from 'date-fns'
import { Calendar, Clock3, MapPin, User } from 'lucide-react'

const TableSelectedOptions = () => {
	const bookingState = useAppSelector(selectBookingState)
	return (
		<div className='flex flex-col gap-2.5'>
			<div className='flex items-center gap-5 mobile-sm:flex-wrap mobile-sm:gap-2.5'>
				<div className='flex items-center gap-1.5'>
					<Calendar className='h-5 w-5 text-foreground' />
					<span className='text-base text-foreground'>
						{format(bookingState.date, 'EEEE, d MMMM')}
					</span>
				</div>
				<div className='flex items-center gap-1.5'>
					<Clock3 className='h-5 w-5 text-foreground' />
					<span className='text-base text-foreground'>{bookingState.time}</span>
				</div>
				<div className='flex items-center gap-1.5'>
					<User className='h-5 w-5 text-foreground' />
					<span className='text-base text-foreground'>
						{bookingState.people_count} people
					</span>
				</div>
			</div>
			<div className='flex items-center gap-1.5'>
				<MapPin className='h-5 w-5 text-foreground' />
				<span className='text-base text-foreground'>
					Unit 2, Adriatic Building, 45/51 narrow street E14 8DN
				</span>
			</div>
		</div>
	)
}

export default TableSelectedOptions
