import { format } from 'date-fns'
import { Calendar, Clock3, MapPin, User } from 'lucide-react'

const TableSelectedOptions = () => {
	return (
		<div className='flex flex-col gap-2.5'>
			<div className='flex items-center gap-5'>
				<div className='flex items-center gap-1.5'>
					<Calendar className='h-5 w-5 text-foreground' />
					<span className='text-base text-foreground'>
						{format(new Date(), 'EEEE, d MMMM')}
					</span>
				</div>
				<div className='flex items-center gap-1.5'>
					<Clock3 className='h-5 w-5 text-foreground' />
					<span className='text-base text-foreground'>6:00 pm</span>
				</div>
				<div className='flex items-center gap-1.5'>
					<User className='h-5 w-5 text-foreground' />
					<span className='text-base text-foreground'>2 people</span>
				</div>
			</div>
			<div className='flex items-center gap-1.5'>
				<MapPin className='h-5 w-5 text-foreground' />
				<span className='text-base text-foreground'>
					87 Junction Road Archway London N19 5QU
				</span>
			</div>
		</div>
	)
}

export default TableSelectedOptions
