import { apiSlice } from '@/redux/services/apiSlice'
import { TakeawayMenuItem } from '@/types'

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

const specialityMenuApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getSpecialityMenu: builder.query<{ data: TakeawayMenuItem[] }, void>({
			query: () => 'order/get_special_items/',
		}),
	}),
})

export const { useGetTakeawayMenuQuery } = takeawayMenuApi
export const { useGetSpecialityMenuQuery } = specialityMenuApi
