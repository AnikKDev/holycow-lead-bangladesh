import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Extend } from '@/lib/utils'

export type BookingStateType = Extend<
	Partial<{
		people_count: number
		first_name: string
		last_name: string
		email: string
		phone_number: string
		notes: string
		date: string
		time: string
		selected_time: string
	}>
>

export const bookingInitialState: BookingStateType = {
	people_count: 1,
	first_name: '',
	last_name: '',
	email: '',
	phone_number: '',
	notes: '',
	date: new Date().toISOString(),
	time: '7:00 pm',
	selected_time: '',
}

const bookingSlice = createSlice({
	name: 'booking',
	initialState: bookingInitialState,
	reducers: {
		setBookingState: (state, action: PayloadAction<BookingStateType>) =>
			action.payload,
	},
})

export const { setBookingState } = bookingSlice.actions

export default bookingSlice.reducer

export const selectBookingState = (state: RootState) => state.booking
