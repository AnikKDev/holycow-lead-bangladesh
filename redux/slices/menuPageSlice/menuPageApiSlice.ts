import { apiSlice } from '@/redux/services/apiSlice'

import {
	AllMenuType,
	LocationInfoType,
	LocationReviewItemType,
} from './menuPageSlice'

export const menuPageApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTakeawayInformation: builder.query<
			LocationInfoType,
			{ takeawayName: string }
		>({
			query: (takeawayName) => ({
				url: `/takeout/info?takeout=${takeawayName}`,
				method: 'GET',
			}),
		}),
		getTakeawayReviews: builder.query<
			LocationReviewItemType[],
			{ takeawayName: string }
		>({
			query: (takeawayName) => ({
				url: `/takeout/reviews?takeout=${takeawayName}`,
				method: 'GET',
			}),
		}),
		getFullMenu: builder.query<AllMenuType, void>({
			query: () => ({
				url: '/order/get_menu/',
				method: 'GET',
			}),
		}),
	}),
})

export const {
	useGetTakeawayInformationQuery,
	useGetTakeawayReviewsQuery,
	useGetFullMenuQuery,
} = menuPageApiSlice
