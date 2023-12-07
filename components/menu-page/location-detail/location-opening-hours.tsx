import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import { format, parse } from 'date-fns'

const LocationOpeningHours = ({
	locationInformation,
}: {
	locationInformation?: LocationInfoType
}) => {
	return (
		<div className='flex flex-col gap-2.5'>
			<h2 className='pb-2 text-lg font-semibold'>Opening Hours</h2>

			<div className='flex flex-col border-t border-border'>
				{locationInformation.opening_hours.map((oh) => (
					<div className='w-full border-b border-border py-4'>
						<div className='flex w-full items-center justify-between px-4'>
							<p>{oh.week_day}</p>
							<p>
								{format(
									parse(oh.opening_from, 'HH:mm:ss', new Date()),
									"h:mmaaaaa'm'"
								)}{' '}
								-{' '}
								{format(
									parse(oh.opening_to, 'HH:mm:ss', new Date()),
									"h:mmaaaaa'm'"
								)}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default LocationOpeningHours
