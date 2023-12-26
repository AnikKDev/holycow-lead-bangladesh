import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import {
	MdOutlineCall,
	MdOutlineLocationOn,
	MdOutlineStar,
} from 'react-icons/md'

import BookATableBtn from './reservation/book-table-btn'
import ReviewTotalCount from './review-total-count'

const AboutLocation = ({
	isRestaurant = false,
	locationInformation,
}: {
	isRestaurant?: boolean
	locationInformation?: LocationInfoType
}) => {
	return (
		<>
			<div className='container mb-1.5 mt-4 grid grid-cols-[1fr_auto] gap-3 text-foreground mobile-sm:grid-cols-1'>
				<div className='flex flex-col gap-2'>
					<h1 className='text-2xl font-bold'>
						Holycow - {locationInformation.name}
					</h1>
					<div className='flex flex-col justify-center gap-1'>
						<div className='flex items-center gap-1'>
							<MdOutlineStar size={18} />
							<h2 className='flex items-center gap-[2px] font-medium'>
								{Number(locationInformation.rating).toFixed(1)} (
								<ReviewTotalCount
									isRestaurant={isRestaurant}
									locationInfo={locationInformation}
								/>
								+ ratings) • {isRestaurant ? 'Restaurant' : 'Takeaway'}
							</h2>
						</div>
						<div className='flex items-center gap-1 mobile-sm:hidden'>
							<MdOutlineLocationOn size={18} />
							<h2 className='font-medium'>
								{locationInformation.address} •{' '}
								<a href={`tel:${locationInformation?.phone_number}`}>
									{locationInformation?.phone_number}
								</a>
							</h2>
						</div>
						<div className='hidden items-center gap-1 mobile-sm:flex'>
							<MdOutlineLocationOn size={18} />
							<h2 className='font-medium'>{locationInformation.address}</h2>
						</div>
						<div className='hidden items-center gap-1 mobile-sm:flex'>
							<a
								href={`tel:${locationInformation?.phone_number}`}
								className='flex items-center gap-1'
							>
								<MdOutlineCall size={18} />
								<h2 className='font-medium'>
									{locationInformation?.phone_number}
								</h2>
							</a>
						</div>
					</div>
				</div>
				{isRestaurant && <BookATableBtn />}
			</div>
		</>
	)
}

export default AboutLocation
