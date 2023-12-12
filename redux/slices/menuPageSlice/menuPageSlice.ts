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
	menuSearchTerm: string
	visited_location_slug: string
}

const initialState: InitialStateType = {
	allMenuItems: [],
	menuSearchTerm: '',
	visited_location_slug: '',
}

const menuPageSlice = createSlice({
	name: 'menuPage',
	initialState,
	reducers: {
		setSearchTerm: (state, action: PayloadAction<string>) => {
			state.menuSearchTerm = action.payload
		},
		setVisitedLocationSlug: (state, action: PayloadAction<string>) => {
			state.visited_location_slug = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			menuPageApiSlice.endpoints.getFullMenu.matchFulfilled,
			(state, action: PayloadAction<AllMenuType[]>) => {
				state.allMenuItems = action.payload
			}
		)
	},
})
export const { setSearchTerm, setVisitedLocationSlug } = menuPageSlice.actions
export default menuPageSlice.reducer
export const selectMenuSearchTerm = (state: RootState) =>
	state.menuPage.menuSearchTerm
export const selectAllMenuitems = (state: RootState) =>
	state.menuPage.allMenuItems
export const selectVisitedLocationSlug = (state: RootState) =>
	state.menuPage.visited_location_slug
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

export const getSearchedMenuItems = createSelector(
	selectMenuItemsByCategory,
	selectMenuSearchTerm,
	(allItemsByCategory, searchTerm) => {
		if (!Object.keys(allItemsByCategory).length || !searchTerm) {
			return {}
		}

		let result: { [key: string]: MenuItemType[] } = {}
		Object.keys(allItemsByCategory).forEach((key) => {
			if (key.toLowerCase().includes(searchTerm)) {
				result = {
					...result,
					[key]: allItemsByCategory[key],
				}
			} else {
				if (allItemsByCategory[key]?.length > 0) {
					const sItems = allItemsByCategory[key].filter((item) =>
						item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
					)

					if (sItems?.length) {
						result = {
							...result,
							[key]: sItems,
						}
					}
				}
			}
		})
		return result
	}
)
