import { apiSlice } from '@/redux/services/apiSlice'
import { createSlice } from '@reduxjs/toolkit'

import { AllMenuType } from '../menuPageSlice/menuPageSlice'

const initialState: {
	takeawayMenu: AllMenuType[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
} = {
	takeawayMenu: [],
	status: 'idle',
	error: null,
}

const takeawayMenuApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTakeawayMenu: builder.query<AllMenuType, void>({
			query: () => 'order/get_menu/',
		}),
	}),
})

const takeawayMenuSlice = createSlice({
	name: 'takeawayMenu',
	initialState,
	reducers: {},
})

export default takeawayMenuSlice.reducer
export const { useGetTakeawayMenuQuery } = takeawayMenuApi
