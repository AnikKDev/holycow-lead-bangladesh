import { apiSlice } from '@/redux/services/apiSlice'

import {
	AllMenuType,
	LocationInfoType,
	LocationReviewItemType,
} from './menuPageSlice'

export const menuPageApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTakeawayInformation: builder.query<LocationInfoType, string>({
			query: (takeawayName) => ({
				url: `/takeaway/info?takeaway=${takeawayName}`,
				method: 'GET',
			}),
			transformResponse: (response: { takeaway_info: LocationInfoType }) =>
				response?.takeaway_info,
		}),
		getTakeawayReviews: builder.query<LocationReviewItemType[], string>({
			query: (takeawayName) => ({
				url: `/takeaway/reviews?takeaway=${takeawayName}`,
				method: 'GET',
			}),
			transformResponse: (response: { reviews: LocationReviewItemType[] }) =>
				response?.reviews,
		}),
		getRestaurantInformation: builder.query<LocationInfoType, string>({
			query: (restaurantName) => ({
				url: `/restaurant/info?restaurant=${restaurantName}`,
				method: 'GET',
			}),
			transformResponse: (response: { restaurant_info: LocationInfoType }) =>
				response?.restaurant_info,
		}),
		getRestaurantReviews: builder.query<LocationReviewItemType[], string>({
			query: (restaurantName) => ({
				url: `/restaurant/reviews?restaurant=${restaurantName}`,
				method: 'GET',
			}),
			transformResponse: (response: { reviews: LocationReviewItemType[] }) =>
				response?.reviews,
		}),
		getFullMenu: builder.query<AllMenuType[], void>({
			query: () => ({
				url: '/order/get_menu/',
				method: 'GET',
			}),
			transformResponse: (response: { menu: AllMenuType[] }) => response?.menu,
		}),
	}),
})

export const {
	useGetTakeawayInformationQuery,
	useGetTakeawayReviewsQuery,
	useGetRestaurantInformationQuery,
	useGetRestaurantReviewsQuery,
	useGetFullMenuQuery,
} = menuPageApiSlice
