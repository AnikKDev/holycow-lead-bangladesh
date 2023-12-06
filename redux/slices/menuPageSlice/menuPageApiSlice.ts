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
				url: `/takeout/info?takeout=${takeawayName}`,
				method: 'GET',
			}),
			transformResponse: (response: { takeout_info: LocationInfoType }) =>
				response?.takeout_info,
		}),
		getTakeawayReviews: builder.query<LocationReviewItemType[], string>({
			query: (takeawayName) => ({
				url: `/takeout/reviews?takeout=${takeawayName}`,
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
	useGetFullMenuQuery,
} = menuPageApiSlice
