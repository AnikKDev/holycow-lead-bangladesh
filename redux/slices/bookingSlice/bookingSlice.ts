import { createSlice } from '@reduxjs/toolkit'

const bookingInitialState = {}

const bookingSlice = createSlice({
	name: 'booking',
	initialState: bookingInitialState,
	reducers: {},
})

export default bookingSlice.reducer
