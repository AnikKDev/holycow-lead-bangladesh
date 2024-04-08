import { apiSlice } from '@/redux/services/apiSlice'

import { LoginResponseType, UserType } from './authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponseType, UserType>({
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
			query: (credentials: { phone_number: string; otp: string }) => ({
				url: '/auth/verify_otp/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		sendPhoneForgotPasswordOtp: builder.mutation({
			query: (credentials: { phone_number: string }) => ({
				url: '/auth/forgot_password/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),
		sendPhoneForgotPasswordOtpAsResendOtp: builder.mutation({
			query: (credentials: { phone_number: string }) => ({
				url: '/auth/forgot_password/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		checkForgotPasswordOtp: builder.mutation({
			query: (credentials: { phone_number: string; otp: string }) => ({
				url: '/auth/verify_otp/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		resetForgotPassword: builder.mutation({
			query: (credentials: { phone_number: string; new_password: string }) => ({
				url: '/auth/reset_password/',
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
		/* note: not using this */
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
		/* ============================= */
		getUserAccountDate: builder.query({
			query: () => ({
				url: '/user/profile/',
				method: 'GET',
			}),
			providesTags: ['UserAccount'],
		}),
		updateUserFullName: builder.mutation({
			query: (data: { full_name: string }) => ({
				url: '/user/update_name/',
				method: 'PATCH',
				body: { fullname: data.full_name },
			}),
			invalidatesTags: ['UserAccount'],
		}),
		updateUserEmail: builder.mutation({
			query: (data: { email: string }) => ({
				url: '/user/update_email/',
				method: 'PATCH',
				body: { email: data.email },
			}),
			invalidatesTags: ['UserAccount'],
		}),

		updateUserPassword: builder.mutation({
			query: (data: { current_password: string; new_password: string }) => ({
				url: '/user/update_password/',
				method: 'POST',
				body: {
					current_password: data.current_password,
					new_password: data.new_password,
				},
			}),
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
	useSendPhoneForgotPasswordOtpAsResendOtpMutation,
	useCheckForgotPasswordOtpMutation,
	useVerifyTokenMutation,
	useGetUserProfileDataQuery,
	useEditUserProfileMutation,
	useGetUserAccountDateQuery,
	useUpdateUserEmailMutation,
	useUpdateUserFullNameMutation,
	useUpdateUserPasswordMutation,
} = authApiSlice
