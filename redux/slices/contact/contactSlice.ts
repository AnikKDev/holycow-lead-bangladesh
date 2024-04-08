import { apiSlice } from '@/redux/services/apiSlice'

// type ContactFormData = {
// 	data: {
// 		name?: string
// 		contact_number?: string
// 		email?: string
// 		branch_email?:
// 			| 'angel@holycowonline.com'
// 			| 'archway@holycowonline.com'
// 			| 'balham@holycowonline.com'
// 			| 'battersea@holycowonline.com'
// 			| 'hammersmith@holycowonline.com'
// 			| 'kilburn@holycowonline.com'
// 			| 'putney@holycowonline.com'
// 			| 'canarywharf@holycowonline.com'
// 		leave_a_note?: string
// 	}
// }

export const contactApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createAContactMail: builder.mutation({
			query: (data) => ({
				url: `/send_email/`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
})

export const { useCreateAContactMailMutation } = contactApiSlice
