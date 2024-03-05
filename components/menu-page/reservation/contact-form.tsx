'use client'

import { useAppSelector } from '@/redux/hooks'
import {
	selectBookingState,
	setBookingState,
} from '@/redux/slices/bookingSlice/bookingSlice'
import { useDispatch } from 'react-redux'
import * as z from 'zod'

import { ukPhoneRegex } from '@/lib/validations/string'
import AutoForm from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'

import { ReservationTab } from './reservation-modal'

// Define your form schema using zod
const formSchema = z.object({
	first_name: z
		.string({
			required_error: 'First name is required.',
		})
		.describe('First name')
		// You can use zod's built-in validation as normal
		.min(2, {
			message: 'First name must be at least 2 characters.',
		}),
	last_name: z
		.string({
			required_error: 'Last name is required.',
		})
		.describe('Last name')
		// You can use zod's built-in validation as normal
		.min(2, {
			message: 'Last name must be at least 2 characters.',
		}),

	phone_number: z
		.string({
			required_error: 'Phone number is required.',
		})
		// Use the "describe" method to set the label
		// If no label is set, the field name will be used
		// and un-camel-cased
		.describe('Phone number')
		.regex(ukPhoneRegex, {
			message: 'Invalid phone number.',
		}),
	email: z
		.string({
			required_error: 'Email is required.',
		})
		.email({
			message: 'Invalid email address',
		}),

	// Enum will show a select
	occasion: z
		.enum([
			'Birthday',
			'Anniversary',
			'Date',
			'Special Occasion',
			'Business Meal',
		])
		.describe('Select an occasion (optional)')
		.optional(),

	notes: z.string().describe('Add a special request (optional)').optional(),
})

const BookingContactForm = ({
	setTab,
}: {
	setTab: React.Dispatch<React.SetStateAction<ReservationTab>>
}) => {
	const dispatch = useDispatch()
	const bookingState = useAppSelector(selectBookingState)
	const handleFormSubmit = (data: Partial<z.infer<typeof formSchema>>) => {
		dispatch(
			setBookingState({
				...bookingState,
				...data,
			})
		)
		setTab('payment')
	}
	return (
		<div className='pt-3.5'>
			<AutoForm
				onSubmit={handleFormSubmit}
				formSchema={formSchema}
				containerClassName='grid grid-cols-2 mobile-sm:grid-cols-1 items-baseline space-y-0 gap-x-4 gap-y-3'
				className='gap-x-4 gap-y-3'
				fieldConfig={{
					first_name: {
						inputProps: {
							defaultValue: bookingState?.first_name,
						},
					},
					last_name: {
						inputProps: {
							defaultValue: bookingState?.last_name,
						},
					},
					email: {
						inputProps: {
							defaultValue: bookingState?.email,
						},
					},
					phone_number: {
						inputProps: {
							defaultValue: bookingState?.phone_number,
						},
					},
					notes: {
						inputProps: {
							defaultValue: bookingState?.notes,
						},
					},
					occasion: {
						inputProps: {
							className: 'h-10',
							placeholder: 'Select  occasion',
							defaultValue: bookingState?.occasion,
						},
					},
				}}
			>
				<Button type='submit' className='w-full' size='lg'>
					Next step
				</Button>
			</AutoForm>
		</div>
	)
}

export default BookingContactForm
