import { RootState } from '@/redux/store'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Extend } from '@/lib/utils'

import { authApiSlice } from './authApiSlice'

export type UserInfoType = Extend<
	Partial<{
		id: number
		full_name: string
		profile_picture: string | null
		cover_photo: string | null
		is_online: boolean
	}>
>

export type UserType = Extend<
	Partial<{
		user_info: UserInfoType
		gender: 'Male' | 'Female' | 'Others'
		bio: string
		address: string
	}>
>
export type AuthStateType = Extend<
	Partial<{
		id: number
		token: string
		user: UserType
		currentViewingProfile: UserType
	}>
>

const initialState: AuthStateType = {
	token: '',
	id: null,
	user: {},
	currentViewingProfile: {},
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<AuthStateType>) => {
			const { token } = action.payload
			state.token = token
		},
		logOut: (state) => {
			state.token = ''
			state.id = null
			state.user = {}
		},
		setCurrentViewingProfile: (state, action: PayloadAction<UserType>) => {
			state.currentViewingProfile = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authApiSlice.endpoints.login.matchFulfilled,
			(state, action: PayloadAction<AuthStateType>) => {
				console.log('fulfilled login')
				const { id, token } = action.payload
				state.id = id
				state.token = token
			}
		)
		builder.addMatcher(
			authApiSlice.endpoints.getUserProfileData.matchFulfilled,
			(state, action: PayloadAction<{ data: UserType }>) => {
				state.user = action.payload.data
			}
		)
		builder.addMatcher(
			authApiSlice.endpoints.getOtherUserProfileData.matchFulfilled,
			(state, action: PayloadAction<{ data: UserType }>) => {
				state.currentViewingProfile = action.payload.data
				if (action.payload.data?.user_info?.id == state.user?.user_info?.id) {
					state.user = action.payload.data
				}
			}
		)
	},
})
export default authSlice.reducer

export const { setCredentials, logOut } = authSlice.actions
export const selectAuthUser = (state: RootState) => state.auth
export const selectCurrentViewingProfile = (state: RootState) =>
	state.auth.currentViewingProfile

export const getIsOwnProfile = createSelector(
	selectCurrentViewingProfile,
	selectAuthUser,
	(currentViewingProfile, authUser) => {
		return currentViewingProfile?.user_info?.id == authUser.id
	}
)
