import Link from 'next/link'
import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import {
	MdOutlineCall,
	MdOutlineLocationOn,
	MdOutlineStar,
} from 'react-icons/md'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import DownloadMenuBtn from '../v2/takeaway-components/takeaway-menu/download-menu-btn'
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
			<div className='container mb-1.5 mt-4 grid grid-cols-[1fr_auto] gap-3 text-foreground mobile-md:grid-cols-1'>
				<div className='flex flex-col gap-2'>
					<div className='grid grid-cols-[1fr_auto] gap-3'>
						<h1 className='text-2xl font-bold'>
							Holycow - {locationInformation?.name}
						</h1>
						<div className='flex flex-wrap gap-2 mobile-md:hidden'>
							<div className='mobile-md:w-full'>
								<DownloadMenuBtn
									variant={isRestaurant ? 'outline' : 'default'}
									size='lg'
									className={cn(
										'min-w-[236px] px-14 text-base mobile-md:w-full',
										{
											'bg-transparent': isRestaurant,
										}
									)}
								>
									Download menu
								</DownloadMenuBtn>
							</div>

							{isRestaurant && <BookATableBtn />}
						</div>
					</div>
					<div className='grid grid-cols-[1fr_auto] gap-3 mobile-md:grid-cols-1'>
						<div className='flex flex-col justify-center gap-1'>
							<div className='flex items-center gap-1'>
								<MdOutlineStar size={18} />
								<Link
									className='flex items-center gap-[2px] font-medium'
									href={
										locationInformation.google_review_link
											? locationInformation.google_review_link
											: '/'
									}
									target='_blank'
								>
									{Number(locationInformation?.rating).toFixed(1)} (
									<ReviewTotalCount
										isRestaurant={false}
										locationInfo={{
											...locationInformation,
											name: isRestaurant
												? 'limehouse'
												: locationInformation?.name,
										}}
									/>
									+ ratings) • {isRestaurant ? 'Restaurant' : 'Takeaway'}
								</Link>
							</div>
							<div className='flex items-center gap-1 mobile-sm:hidden'>
								<MdOutlineLocationOn size={18} />
								<h2 className='font-medium'>
									{locationInformation?.address} •{' '}
									<a href={`tel:${locationInformation?.phone_number}`}>
										{locationInformation?.phone_number}
									</a>
								</h2>
							</div>
							<div className='hidden items-center gap-1 mobile-sm:flex'>
								<MdOutlineLocationOn size={18} />
								<h2 className='font-medium'>{locationInformation?.address}</h2>
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
							{!isRestaurant && (
								<div className='flex flex-wrap items-center gap-1.5 font-medium'>
									<p className='font-semibold'>Delivery Areas:</p>
									{locationInformation?.delivery_areas?.map((area, index) => (
										<span key={index}>
											{area}
											{index === locationInformation.delivery_areas.length - 1
												? ''
												: ','}
										</span>
									))}
								</div>
							)}
						</div>

						<div className='mobile-md:w-full'>
							<a href='/allergy-advice' target='_blank'>
								<Button
									variant={isRestaurant ? 'outline' : 'default'}
									size='lg'
									className={cn(
										'min-w-[236px] px-14 text-base mobile-md:w-full',
										{
											'bg-transparent': isRestaurant,
										}
									)}
								>
									Allergy Advice
								</Button>
							</a>
						</div>
					</div>
				</div>
				<div className='hidden flex-wrap gap-2 mobile-md:flex'>
					<div className='flex flex-col gap-3 mobile-md:w-full'>
						{isRestaurant && <BookATableBtn />}

						<DownloadMenuBtn
							variant={isRestaurant ? 'outline' : 'default'}
							size='lg'
							className={cn('px-14 text-base mobile-md:w-full', {
								'bg-transparent': isRestaurant,
							})}
						>
							Download menu
						</DownloadMenuBtn>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutLocation
