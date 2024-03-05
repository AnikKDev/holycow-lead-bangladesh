import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Extend } from '@/lib/utils'

export const bookingInitialState = {
	people_count: 1,
	first_name: '',
	last_name: '',
	email: '',
	phone_number: '',
	notes: '',
	date: new Date(),
	time: '7:00 pm',
	selected_time: '',
}

export type BookingStateType = Extend<Partial<typeof bookingInitialState>>

const bookingSlice = createSlice({
	name: 'booking',
	initialState: <BookingStateType>bookingInitialState,
	reducers: {
		setBookingState: (state, action: PayloadAction<BookingStateType>) =>
			action.payload,
	},
})

export const { setBookingState } = bookingSlice.actions

export default bookingSlice.reducer

export const selectBookingState = (state: RootState) => state.booking
