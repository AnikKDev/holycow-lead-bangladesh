import { apiSlice } from '@/redux/services/apiSlice'

export const addressApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// user/profile apis
		getAllAddresses: builder.query({
			query: () => ({
				url: `/user/all_addresses/`,
				method: 'GET',
			}),
			providesTags: (result, error, arg) => [{ type: 'Address', id: arg }],
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAddressesQuery } = addressApiSlice
