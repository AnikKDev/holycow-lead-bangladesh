import { RootState } from '@/redux/store'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Extend } from '@/lib/utils'

import { menuPageApiSlice } from './menuPageApiSlice'

export type OpeningHoursType = Extend<
	Partial<{
		week_day: string
		opening_from: string
		opening_to: string
	}>
>
export type LocationInfoType = Extend<
	Partial<{
		name: string
		address: string
		cover: string
		phone_number: string
		email: string
		rating: string
		opening_hours: OpeningHoursType[]
	}>
>
export type MenuItemType = Extend<
	Partial<{
		id: number
		item_name: string
		description: string
		price: string
		image: string
		// for cart
		quantity: number
	}>
>
export type AllMenuType = Extend<
	Partial<{
		id: number
		name: string
		availability: boolean
		items: MenuItemType[]
	}>
>

export type LocationReviewItemType = Extend<
	Partial<{
		reviewer: string
		review: string
		rating: string
		created_at: string
	}>
>

type InitialStateType = {
	allMenuItems: AllMenuType[]
}

const initialState: InitialStateType = {
	allMenuItems: [],
}

const menuPageSlice = createSlice({
	name: 'menuPage',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			menuPageApiSlice.endpoints.getFullMenu.matchFulfilled,
			(state, action: PayloadAction<AllMenuType[]>) => {
				state.allMenuItems = action.payload
			}
		)
	},
})
export default menuPageSlice.reducer
export const selectAllMenuitems = (state: RootState) =>
	state.menuPage.allMenuItems

export const selectMenuItemsByCategory = createSelector(
	selectAllMenuitems,
	(allMenu) => {
		console.log(allMenu)
		if (!allMenu.length) {
			return {}
		}
		return allMenu.reduce(
			(acc: { [key: string]: MenuItemType[] }, currentMenu) => {
				return {
					...acc,
					[currentMenu.name]: currentMenu.items,
				}
			},
			{}
		)
	}
)
