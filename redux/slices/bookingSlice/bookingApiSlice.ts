import { apiSlice } from '@/redux/services/apiSlice'

import { formatTimeTo12h } from '@/lib/date'

import { BookingStateType } from './bookingSlice'

export type AvailableTimeType = {
	time: string | number
	reservedCount: string | number
	is_available: boolean
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
			transformResponse: (result: {
				data: (string | number)[][]
			}): AvailableTimeType[] => {
				if (result?.data.length) {
					return result.data.reduce((acc: AvailableTimeType[], currentVal) => {
						return [
							...acc,
							{
								time: formatTimeTo12h(String(currentVal[0])),
								reservedCount: currentVal[1],
								is_available: currentVal[1] !== 10,
							},
						]
					}, [])
				}
				return []
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
	useGetReservationAvailabilityQuery,
	useLazyGetReservationAvailabilityQuery,
	useMakeReservationMutation,
} = bookingApiSlice
