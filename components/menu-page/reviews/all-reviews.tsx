import { Button } from '@/components/ui/button'

import { allReview } from './data'
import ReviewItem from './review-item'
import ReviewStars from './review-stars'

const AllReviews = () => {
	return (
		<div className='container px-7 py-10'>
			<div className='flex flex-col gap-7'>
				<div className='border-b border-border pb-4'>
					<div className='mx-auto flex max-w-[956px] flex-col  gap-2.5'>
						<h1 className='text-xl font-bold'>Reviews for Holycow - Archway</h1>
						<ReviewStars count={4.8} />
						<h2 className='text-lg font-semibold'>4.8/5 • 120 ratings</h2>
					</div>
				</div>
				<div className='mx-auto flex max-w-[956px] flex-col gap-10'>
					{allReview.map((review) => (
						<ReviewItem review={review} />
					))}
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
