import { useState } from 'react'
import { useGetTakeawayReviewsQuery } from '@/redux/slices/menuPageSlice/menuPageApiSlice'
import {
	LocationInfoType,
	LocationReviewItemType,
} from '@/redux/slices/menuPageSlice/menuPageSlice'
import ReactPaginate from 'react-paginate'

import { calculateAverageRating } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'

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
						[1, 2, 3, 4, 5].map((i) => (
							<div key={i} className='w-[956px] min-w-fit'>
								<div className='mb-1.5 flex items-center justify-between'>
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
					) : isError ? (
						<p>Couldn't fetch reviews</p>
					) : data && data?.length > 0 ? (
						<PaginatedReviewItems reviews={data} itemsPerPage={10} />
					) : (
						<p>It has no reviews yet!</p>
					)}
				</div>
			</div>
		</div>
	)
}

const PaginatedReviewItems = ({
	itemsPerPage,
	reviews,
}: {
	itemsPerPage: number
	reviews: LocationReviewItemType[]
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
					breakLabel='...'
					nextLabel='>'
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					marginPagesDisplayed={2}
					pageCount={pageCount}
					previousLabel='<'
					renderOnZeroPageCount={null}
					className='flex flex-row items-center gap-1.5 transition-all'
					pageClassName='bg-white border border-border rounded px-2.5 h-8  flex items-center justify-center'
					activeClassName='bg-[#AE9456] text-primary-foreground'
					previousClassName='bg-white border border-border rounded px-2.5 h-8 flex items-center justify-center'
					nextClassName='bg-white border border-border rounded px-2.5 h-8  flex items-center justify-center'
				/>
			</div>
		</>
	)
}

const ReviewContainer = ({ reviews }: { reviews: LocationReviewItemType }) => {
	return (
		<>
			{reviews.map((review) => (
				<ReviewItem review={review} />
			))}
		</>
	)
}

export default AllReviews
