import { apiSlice } from '@/redux/services/apiSlice'
import { Review } from '@/types'

const reviewsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getReviews: builder.query<{ data: Review[] }, void>({
			query: () => '/takeaway/testimonials',
		}),
	}),
})
export const { useGetReviewsQuery } = reviewsApi
