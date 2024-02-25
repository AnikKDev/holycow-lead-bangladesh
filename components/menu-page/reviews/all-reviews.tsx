import { useGetRestaurantReviewsQuery, useGetTakeawayReviewsQuery } from '@/redux/slices/menuPageSlice/menuPageApiSlice';
import { LocationInfoType, LocationReviewItemType } from '@/redux/slices/menuPageSlice/menuPageSlice';
import { useRef, useState } from 'react';
// import ReactPaginate from 'react-paginate'
import ReactPaginate from 'react-paginate';



import { Skeleton } from '@/components/ui/skeleton';
import { calculateAverageRating } from '@/lib/utils';



import ReviewItem from './review-item';
import ReviewStars from './review-stars';


const AllReviews = ({
	locationInformation,
	isRestaurant = false,
}: {
	locationInformation?: LocationInfoType
	isRestaurant?: boolean
}) => {
	const ref = useRef<HTMLHeadingElement>(null)
	const { data, isLoading, isError } = useGetTakeawayReviewsQuery(
		locationInformation?.name.toLowerCase(),
		{
			skip: isRestaurant,
		}
	)
	const {
		data: restaurantReviews,
		isLoading: isRestaurantReviewLoading,
		isError: isRestaurantReviewError,
	} = useGetRestaurantReviewsQuery(
		locationInformation?.name.toLowerCase().includes('limehouse')
			? 'limehouse'
			: locationInformation?.name.toLowerCase(),
		{
			skip: !isRestaurant,
		}
	)

	const averageRating = !isRestaurant
		? data?.length
			? calculateAverageRating(data?.map((r) => Number(r.rating)))
			: 0
		: restaurantReviews?.length
		  ? calculateAverageRating(restaurantReviews?.map((r) => Number(r.rating)))
		  : 0

	const handlePageChange = () => {
		ref.current.scrollIntoView()
	}

	let content
	if (isRestaurant) {
		content =
			restaurantReviews && restaurantReviews?.length > 0 ? (
				<PaginatedReviewItems
					reviews={restaurantReviews}
					itemsPerPage={10}
					handlePageChange={handlePageChange}
				/>
			) : (
				<p>No reviews found!</p>
			)
	} else {
		content =
			data && data?.length > 0 ? (
				<PaginatedReviewItems
					reviews={data}
					itemsPerPage={10}
					handlePageChange={handlePageChange}
				/>
			) : (
				<p>No reviews found!</p>
			)
	}

	return (
		<div className='container px-7 py-10 mobile-md:px-4'>
			<div className='flex flex-col gap-7'>
				<div className='border-b border-border pb-4'>
					<div className='mx-auto flex max-w-[956px] flex-col  gap-2.5'>
						<h1 ref={ref} className='text-xl font-bold'>
							Reviews for Holycow - {locationInformation?.name}
						</h1>
						<ReviewStars count={Number(averageRating.toFixed(1))} />
						<h2 className='text-lg font-semibold'>
							{data?.length > 0 || restaurantReviews?.length > 0 ? (
								<>
									{averageRating.toFixed(1)}/5 •{' '}
									{isRestaurant ? restaurantReviews?.length : data?.length}{' '}
									ratings
								</>
							) : (
								'No ratings'
							)}
						</h2>
					</div>
				</div>
				<div className='mx-auto flex w-full max-w-[956px] flex-col gap-10'>
					{isLoading || isRestaurantReviewLoading ? (
						[1, 2, 3, 4, 5].map((i) => (
							<div key={i} className=' min-w-fit '>
								<div className='mb-1.5 flex items-center justify-between '>
									<div className='flex items-center gap-2.5'>
										<Skeleton className='h-8 w-8 rounded-full' />
										<Skeleton className='h-4 w-[150px]' />
									</div>
									<Skeleton className='h-4 w-[80px]' />
								</div>
								<div className='flex flex-col gap-1.5'>
									<Skeleton className='h-5 w-[80px]' />
									<Skeleton className='h-10 w-full' />
								</div>
							</div>
						))
					) : isError || isRestaurantReviewError ? (
						<p>Couldn't fetch reviews</p>
					) : isRestaurant ? (
						restaurantReviews &&
						restaurantReviews?.length > 0 && (
							<PaginatedReviewItems
								reviews={restaurantReviews}
								itemsPerPage={10}
								handlePageChange={handlePageChange}
							/>
						)
					) : (
						content
					)}
				</div>
			</div>
		</div>
	)
}

const PaginatedReviewItems = ({
	itemsPerPage,
	reviews,
	handlePageChange,
}: {
	itemsPerPage: number
	reviews: LocationReviewItemType[]
	handlePageChange: () => void
}) => {
	const [itemOffset, setItemOffset] = useState(0)

	// Simulate fetching items from another resources.
	// (This could be items from props; or items loaded in a local state
	// from an API endpoint with useEffect and useState)
	const endOffset = itemOffset + itemsPerPage
	console.log(`Loading items from ${itemOffset} to ${endOffset}`)
	const currentItems = reviews.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(reviews.length / itemsPerPage)

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % reviews.length
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		)
		setItemOffset(newOffset)
	}

	return (
		<>
			<ReviewContainer reviews={currentItems} />
			<div className='self-center'>
				<ReactPaginate
					onClick={handlePageChange}
					breakLabel='...'
					nextLabel='>'
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					marginPagesDisplayed={2}
					pageCount={pageCount}
					previousLabel='<'
					renderOnZeroPageCount={null}
					className='flex flex-row items-center gap-1.5 transition-all'
					pageClassName='bg-white border border-border rounded px-2.5 h-8  flex items-center justify-center cursor-pointer'
					pageLinkClassName='cursor-pointer'
					activeClassName='!bg-[#AE9456]'
					activeLinkClassName='bg-[#AE9456]'
					previousClassName='bg-white border border-border rounded px-2.5 h-8 flex items-center justify-center cursor-pointer'
					nextClassName='bg-white border border-border rounded px-2.5 h-8  flex items-center justify-center cursor-pointer'
					disabledClassName='bg-gray-300 pointer-events-none cursor-not-allowed '
					disabledLinkClassName='pointer-events-none cursor-not-allowed '
				/>
			</div>
		</>
	)
}

const ReviewContainer = ({ reviews }: { reviews: LocationReviewItemType }) => {
	return (
		<>
			{reviews.map((review, idx) => (
				<ReviewItem key={idx} review={review} />
			))}
		</>
	)
}

export default AllReviews