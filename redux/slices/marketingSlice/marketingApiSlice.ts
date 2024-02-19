import { apiSlice } from '@/redux/services/apiSlice'

export const marketingApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllOffers: builder.query({
			query: () => ({
				url: '/order/get_offers/',
			}),
		}),
	}),
})
export const { useGetAllOffersQuery } = marketingApiSlice
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
