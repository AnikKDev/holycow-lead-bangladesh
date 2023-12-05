import { apiSlice } from '@/redux/services/apiSlice'

import { UserType } from './authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: '/auth/login/',
				method: 'POST',
				body: credentials,
			}),
		}),
		register: builder.mutation({
			query: (credentials: UserType) => ({
				url: '/auth/register/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),
		verifyRegisterOtp: builder.mutation({
			query: (credentials: { phone_number: string; otp: number }) => ({
				url: '/auth/verify-otp/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		sendPhoneForgotPasswordOtp: builder.mutation({
			query: (credentials: { phone_number: string }) => ({
				url: '/auth/forgot_passwd/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		checkForgotPasswordOtp: builder.mutation({
			query: (credentials: { phone_number: string; otp: string }) => ({
				url: '/auth/verify-otp/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		resetForgotPassword: builder.mutation({
			query: (credentials: { new_password: string }) => ({
				url: '/auth/reset-password/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		verifyToken: builder.mutation({
			query: (credentials) => ({
				url: '/auth/token-verify/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		resendOTP: builder.mutation<any, { phone_number: string }>({
			query: (credentials) => ({
				url: '/auth/resend-otp/',
				body: { ...credentials },
				method: 'POST',
			}),
		}),

		// user/profile apis
		getUserProfileData: builder.query({
			query: (id) => ({
				url: `/profiles/view-profile/${id}/`,
				method: 'GET',
			}),
			providesTags: (result, error, arg) => [{ type: 'Profile', id: arg }],
		}),
		editUserProfile: builder.mutation({
			query: ({ data, id }) => ({
				url: '/profiles/edit-profile/',
				body: data,
				method: 'PUT',
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: 'Profile', id: arg.id },
				{ type: 'Post', id: 'LIST' },
			],
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useLoginMutation,
	useRegisterMutation,
	useResendOTPMutation,
	useResetForgotPasswordMutation,
	useVerifyRegisterOtpMutation,
	useSendPhoneForgotPasswordOtpMutation,
	useCheckForgotPasswordOtpMutation,
	useVerifyTokenMutation,
	useGetUserProfileDataQuery,
	useEditUserProfileMutation,
} = authApiSlice
