import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Extend } from '@/lib/utils'

import { authApiSlice } from './authApiSlice'

export type LoginResponseType = Extend<
	Partial<{
		access: string
		refresh: string
	}>
>

export type UserType = Extend<
	Partial<{
		full_name: string
		phone_number: string
		email: string
		password: string
	}>
>

export type AuthStateType = Extend<
	Partial<{
		id: number
		access: string
		refresh: string
		user: UserType
	}>
>

export const authInitialState: AuthStateType = {
	refresh: '',
	access: '',
	id: null,
	user: {},
}

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		logOut: (state) => {
			state.access = ''
			state.refresh = ''
			state.id = null
			state.user = {}
		},
		setAuthState: (state, action: PayloadAction<AuthStateType>) =>
			action.payload,
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authApiSlice.endpoints.login.matchFulfilled,
			(state, action: PayloadAction<LoginResponseType>) => {
				console.log('fulfilled login')
				const { access, refresh } = action.payload
				state.access = access
				state.refresh = refresh
			}
		)
		builder.addMatcher(
			authApiSlice.endpoints.getUserProfileData.matchFulfilled,
			(state, action: PayloadAction<{ data: UserType }>) => {
				state.user = action.payload.data
			}
		)
	},
})
export default authSlice.reducer

export const { logOut, setAuthState } = authSlice.actions
export const selectAuthUser = (state: RootState) => state.auth
