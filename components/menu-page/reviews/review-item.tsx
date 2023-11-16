import { getInitials } from '@/lib/getInitials'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import ReviewStars from './review-stars'

const ReviewItem = ({
	review,
}: {
	review: {
		name: string
		time: string
		review: string
		rating: number
	}
}) => {
	return (
		<div>
			<div className='mb-3 flex items-center justify-between'>
				<div className='flex items-center gap-2.5'>
					<Avatar>
						<AvatarImage src='' alt='Reviewer profile photo' />
						<AvatarFallback className='text-sm text-primary-foreground'>
							{getInitials(review.name)}
						</AvatarFallback>
					</Avatar>
					<h3 className='text-base font-medium'>{review.name}</h3>
				</div>
				<span className='text-sm text-foreground/70'>{review.time}</span>
			</div>
			<ReviewStars count={review.rating} />
			<p className='mt-1.5 text-sm text-foreground'>{review.review}</p>
		</div>
	)
}

export default ReviewItem
