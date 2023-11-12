import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { apiUrl } from '@/lib/constatns'

import { RootState } from '../store'

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: apiUrl,
		mode: 'cors',
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const token = (getState() as RootState).auth.token
			if (token) {
				headers.set('Authorization', `Token ${token}`)
			}
			return headers
		},
	}),
	tagTypes: [],
	// This setting allows you to control whether RTK Query will try to refetch all subscribed queries after regaining a network connection.
	refetchOnReconnect: true,
	// This is how long RTK Query will keep the data cached for after the last component unsubscribes.(seconds)
	keepUnusedDataFor: 45,

	endpoints: (builder) => ({}),
})
