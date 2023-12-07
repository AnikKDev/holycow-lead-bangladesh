import { apiSlice } from '@/redux/services/apiSlice'

export const addressApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// user/profile apis
		getAllAddresses: builder.query({
			query: () => ({
				url: `/user/all_addresses/`,
				method: 'GET',
			}),
			providesTags: (result, error, arg) => [
				'Address',
				{ type: 'Address', id: arg },
			],
		}),
		createAddress: builder.mutation({
			query: (address) => ({
				url: `/user/add_address/`,
				method: 'POST',
				body: address,
			}),
			invalidatesTags: ['Address'],
		}),
		updateAddress: builder.mutation({
			query: ({ address, addressId }) => ({
				url: `/user/address/${addressId}`,
				method: 'PATCH',
				body: address,
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: 'Address', id: arg.addressId },
				'Address',
			],
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetAllAddressesQuery,
	useCreateAddressMutation,
	useUpdateAddressMutation,
} = addressApiSlice
