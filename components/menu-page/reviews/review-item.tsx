import { LocationReviewItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import { format } from 'date-fns'

import { getInitials } from '@/lib/getInitials'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import ReviewStars from './review-stars'

const ReviewItem = ({ review }: { review: LocationReviewItemType }) => {
	return (
		<div>
			<div className='mb-3 flex items-center justify-between'>
				<div className='flex items-center gap-2.5'>
					<Avatar>
						<AvatarImage src='' alt='Reviewer profile photo' />
						<AvatarFallback className='text-sm text-primary-foreground'>
							{getInitials(String(review?.reviewer) || 'Alex')}
						</AvatarFallback>
					</Avatar>
					<h3 className='text-base font-medium'>
						{review?.reviewer || 'Alex'}
					</h3>
				</div>
				<span className='text-sm text-foreground/70'>
					{review?.created_at || format(new Date(), 'MM/dd/yyyy')}
				</span>
			</div>
			<ReviewStars count={Number(review.rating)} />
			<p className='mt-1.5 text-sm text-foreground'>{review?.review}</p>
		</div>
	)
}

export default ReviewItem
