import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Extend } from '@/lib/utils'

import { authApiSlice } from './authApiSlice'

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
		refresh: string
		token: string
		user: UserType
	}>
>

const initialState: AuthStateType = {
	refresh: '',
	token: '',
	id: null,
	user: {},
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
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authApiSlice.endpoints.login.matchFulfilled,
			(state, action: PayloadAction<AuthStateType>) => {
				console.log('fulfilled login')
				const { id, access, refresh } = action.payload
				state.id = id
				state.token = access
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

export const { setCredentials, logOut } = authSlice.actions
export const selectAuthUser = (state: RootState) => state.auth
