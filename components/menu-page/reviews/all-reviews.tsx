import { useGetTakeawayReviewsQuery } from '@/redux/slices/menuPageSlice/menuPageApiSlice'
import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { calculateAverageRating } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import ReviewItem from './review-item'
import ReviewStars from './review-stars'

const AllReviews = ({
	locationInformation,
}: {
	locationInformation?: LocationInfoType
}) => {
	const { data, isLoading, isError } = useGetTakeawayReviewsQuery(
		locationInformation?.name.toLowerCase(),
		{
			skip: !locationInformation?.name,
		}
	)

	const averageRating = data?.length
		? calculateAverageRating(data?.map((r) => Number(r.rating)))
		: 0
	return (
		<div className='container px-7 py-10'>
			<div className='flex flex-col gap-7'>
				<div className='border-b border-border pb-4'>
					<div className='mx-auto flex max-w-[956px] flex-col  gap-2.5'>
						<h1 className='text-xl font-bold'>
							Reviews for Holycow - {locationInformation?.name}
						</h1>
						<ReviewStars count={Number(averageRating.toFixed(1))} />
						<h2 className='text-lg font-semibold'>
							{data?.length > 0 ? (
								<>
									{averageRating.toFixed(1)}/5 • {data?.length} ratings
								</>
							) : (
								'No ratings'
							)}
						</h2>
					</div>
				</div>
				<div className='mx-auto flex max-w-[956px] flex-col gap-10'>
					{isLoading ? (
						<p>Loading reviews...</p>
					) : isError ? (
						<p>Couldn't fetch reviews</p>
					) : data && data?.length > 0 ? (
						data.map((review) => <ReviewItem review={review} />)
					) : (
						<p>It has no reviews yet!</p>
					)}
				</div>
				<div className='self-center'>
					<Button variant='outline' className='rounded-full text-sm'>
						View all reviews
					</Button>
				</div>
			</div>
		</div>
	)
}

export default AllReviews
