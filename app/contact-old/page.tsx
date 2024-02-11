'use client'

import { z } from 'zod'

import AutoForm from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'

// Define your form schema using zod
const formSchema = z.object({
	full_name: z
		.string({
			required_error: 'Full name is required.',
		})
		.describe('Enter Full name')
		// You can use zod's built-in validation as normal
		.min(2, {
			message: 'Full name must be at least 2 characters.',
		}),

	email: z
		.string({
			required_error: 'Email is required.',
		})
		.describe('Email Address')
		.email({
			message: 'Invalid email address',
		}),

	contact_number: z
		.string({
			required_error: 'Contact number is required.',
		})
		// Use the "describe" method to set the label
		// If no label is set, the field name will be used
		// and un-camel-cased
		.describe('Contact number'),
	branch: z
		.enum([
			'Archway',
			'Balham',
			'Battersea',
			'Hammersmith',
			'Kilburn',
			'Putney',
			'Limehouse - Canary Wharf',
		])
		.describe('Select a branch'),

	message: z
		.string({
			required_error: 'Please write message',
		})
		.describe('Your message')
		// You can use zod's built-in validation as normal
		.min(2, {
			message: 'Message must be at least 2 characters.',
		}),
})
const ContactPage = () => {
	const handleFormSubmit = (data) => {}
	return (
		<div className='container mx-auto max-w-lg '>
			<div className='mt-2 flex flex-col space-y-2.5'>
				<h1 className='text-xl font-semibold'>Message to us</h1>
				<AutoForm
					formSchema={formSchema}
					containerClassName='grid space-y-2.5'
					className='space-y-2'
					fieldConfig={{
						full_name: {
							inputProps: {
								className: 'bg-white',
							},
						},
						contact_number: {
							inputProps: {
								type: 'number',
								className: 'bg-white',
							},
						},
						email: {
							inputProps: {
								type: 'email',
								className: 'bg-white',
							},
						},
						branch: {
							inputProps: {
								className: 'bg-white',
							},
						},
						message: {
							fieldType: 'textarea',
							inputProps: {
								type: 'text',
								className: 'bg-white',
							},
						},
					}}
				>
					<div className='max-w-[200px]'>
						<Button
							type='submit'
							className='w-full rounded-full'
							size='default'
							// disabled={isLoading}
						>
							{/* {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} */}
							Submit
						</Button>
					</div>
				</AutoForm>
			</div>
		</div>
	)
}

export default ContactPage
