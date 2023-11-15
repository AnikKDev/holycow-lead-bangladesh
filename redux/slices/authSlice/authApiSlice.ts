import { apiSlice } from '@/redux/services/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: '/user/login/',
				method: 'POST',
				body: credentials,
			}),
		}),
		register: builder.mutation({
			query: (credentials) => ({
				url: '/user/register/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),
		verifyRegisterOtp: builder.mutation({
			query: (credentials: { phone_number: string; otp: number }) => ({
				url: '/user/verify-otp/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		sendPhoneForgotPasswordOtp: builder.mutation({
			query: (credentials: { phone_number: string }) => ({
				url: '/user/forgot-password-otp-request/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		checkForgotPasswordOtp: builder.mutation({
			query: (credentials: { phone_number: string; otp: number }) => ({
				url: '/user/forgot-password-otp-verify/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		resetForgotPassword: builder.mutation({
			query: (credentials) => ({
				url: '/user/forgot-password-reset/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		verifyToken: builder.mutation({
			query: (credentials) => ({
				url: '/user/token-verify/',
				method: 'POST',
				body: { ...credentials },
			}),
		}),

		resendOTP: builder.mutation<any, { phone_number: string }>({
			query: (credentials) => ({
				url: '/user/resend-otp/',
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
		getOtherUserProfileData: builder.query({
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
		addProfilePicture: builder.mutation({
			query: ({ pictureFormData, id }) => ({
				url: '/user/profile-picture/',
				body: pictureFormData,
				method: 'POST',
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: 'Profile', id: arg.id },
				{ type: 'Post', id: 'LIST' },
			],
		}),
		addCoverPhoto: builder.mutation({
			query: ({ pictureFormData, id }) => ({
				url: '/profiles/cover-photo/',
				body: pictureFormData,
				method: 'POST',
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: 'Profile', id: arg.id },
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
	useGetOtherUserProfileDataQuery,
	useAddProfilePictureMutation,
	useEditUserProfileMutation,
	useAddCoverPhotoMutation,
} = authApiSlice
