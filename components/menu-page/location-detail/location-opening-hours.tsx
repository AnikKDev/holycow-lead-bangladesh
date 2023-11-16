import { openingHours } from './data'

const LocationOpeningHours = () => {
	return (
		<div className='flex flex-col gap-2.5'>
			<h2 className='pb-2 text-lg font-semibold'>Opening Hours</h2>

			<div className='flex flex-col border-t border-border'>
				{openingHours.map((item) => (
					<div className='w-full border-b border-border py-4'>
						<div className='flex w-full items-center justify-between px-4'>
							<p>{item.weekday}</p>
							<p>
								{item.from} - {item.to}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default LocationOpeningHours
