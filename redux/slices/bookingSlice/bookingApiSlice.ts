import { apiSlice } from '@/redux/services/apiSlice'

import { formatTimeTo12h, generateTimes } from '@/lib/date'

import { BookingStateType } from './bookingSlice'

export type AvailableTimeType = {
	time: string
	count: number
}

export const bookingApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getReservationAvailability: builder.query<
			AvailableTimeType[],
			{ recommended_time?: string; recommended_date?: string }
		>({
			query: (queryParams) => ({
				url: '/reservation_availability/',
				params: queryParams,
			}),
			transformResponse: (result: { data: AvailableTimeType[] }, meta, arg) => {
				const parsedTime = formatTimeTo12h(arg.recommended_time)
				const generatedTimes = generateTimes(parsedTime)

				if (!result?.data?.length) {
					return generatedTimes.map((item) => ({
						time: item,
						count: 0,
					}))
				}

				const transformedTimes = result?.data.map((item) => ({
					...item,
					time: formatTimeTo12h(item.time),
				}))
				const allAvailableTimes = generatedTimes.map((item) => {
					const matchingItem = transformedTimes.find(
						(tItem) => tItem.time === item
					)
					if (matchingItem) {
						return {
							time: item,
							count: matchingItem.count,
						}
					}
					return {
						time: item,
						count: 0,
					}
				})

				return allAvailableTimes
			},
		}),
		makeReservation: builder.mutation<{ url: string }, BookingStateType>({
			query: (bookingState) => ({
				url: '/make_reservation/',
				method: 'POST',
				body: bookingState,
			}),
		}),
	}),
})

export const {
	useLazyGetReservationAvailabilityQuery,
	useMakeReservationMutation,
} = bookingApiSlice
