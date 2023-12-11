'use client'

import {
	useGetRestaurantReviewsQuery,
	useGetTakeawayReviewsQuery,
} from '@/redux/slices/menuPageSlice/menuPageApiSlice'
import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { Skeleton } from '../ui/skeleton'

const ReviewTotalCount = ({
	isRestaurant,
	locationInfo,
}: {
	isRestaurant?: boolean
	locationInfo: LocationInfoType
}) => {
	const { data, isLoading, isError } = useGetTakeawayReviewsQuery(
		locationInfo?.name.toLowerCase(),
		{
			skip: isRestaurant,
		}
	)
	const {
		data: restaurantReviews,
		isLoading: isRestaurantReviewLoading,
		isError: isRestaurantReviewError,
	} = useGetRestaurantReviewsQuery(locationInfo?.name.toLowerCase(), {
		skip: !isRestaurant,
	})
	return (
		<>
			{isLoading || isRestaurantReviewLoading ? (
				<Skeleton className='h-[10px] w-[10px] rounded-full' />
			) : isRestaurant ? (
				restaurantReviews?.length
			) : (
				data?.length
			)}
		</>
	)
}

export default ReviewTotalCount
