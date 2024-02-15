import { apiSlice } from '@/redux/services/apiSlice'

import { OrderDetailType } from './orderSlice'

export const orderApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllOrder: builder.query<OrderDetailType[], void>({
			query: () => ({
				url: '/order/get_orders/',
				method: 'GET',
			}),
			transformResponse: (response: { data: OrderDetailType[] }) =>
				response?.data,
		}),
		getOrderDetailById: builder.query<OrderDetailType, string>({
			query: (id) => ({
				url: '/order/track_order/',
				params: {
					tracking_id: id,
				},
			}),
			transformResponse: (response: { data: OrderDetailType }) => response.data,
		}),
		checkoutOrder: builder.mutation<{ url: string }, any>({
			query: (orderInfo) => ({
				url: '/order/checkout/',
				body: orderInfo,
				method: 'POST',
			}),
		}),
	}),
})

export const {
	useGetAllOrderQuery,
	useGetOrderDetailByIdQuery,
	useCheckoutOrderMutation,
} = orderApiSlice
