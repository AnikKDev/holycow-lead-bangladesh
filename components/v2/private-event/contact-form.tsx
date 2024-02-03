'use client'

import React from 'react'
import { z } from 'zod'

import AutoForm from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'

type Props = {}
// Define your form schema using zod
const formSchema = z.object({
	name: z
		.string({
			required_error: 'Name can not be empty.',
		})
		.describe('Your Name'),

	email: z
		.string({
			required_error: 'Email is required.',
		})
		.describe('Email')
		.email({
			message: 'Invalid email address',
		}),
	contact_number: z
		.string({
			required_error: 'Contact number is required.',
		})
		.describe('Contact Number'),
	subject: z
		.string({
			required_error: 'Please provide a subject.',
		})
		.describe('Subject'),
	location: z
		.string({
			required_error: 'Select a location.',
		})
		.describe('Select Location'),
	leave_a_note: z.string().describe('Leave A Note'),
})

export default function ContactForm({}: Props) {
	const handleFormSubmit = (data: Partial<z.infer<typeof formSchema>>) => {}
	return (
		<section className='mx-auto w-2/3'>
			<h2 className='my-5 text-center text-4xl font-[500] capitalize text-primary'>
				Message to us
			</h2>
			{/* inputs */}
			<div>
				<AutoForm
					onSubmit={handleFormSubmit}
					formSchema={formSchema}
					containerClassName='grid grid-cols-3 gap-x-4 gap-y-3 text-primary'
					// className='space-y-0 gap-x-4 gap-y-3'
					fieldConfig={{
						name: {
							inputProps: {
								showLabel: false,
								type: 'text',
								placeholder: 'Your Name*',
								className: 'mt-5',
							},
						},
						contact_number: {
							inputProps: {
								type: 'number',
								showLabel: false,
								placeholder: 'Contact Number*',
							},
						},
						email: {
							inputProps: {
								type: 'email',
								showLabel: false,
								placeholder: 'Email*',
							},
						},

						subject: {
							inputProps: {
								type: 'text',
								showLabel: false,
								placeholder: 'Subject*',
							},
						},
						location: {
							inputProps: {
								type: 'text',
								showLabel: false,
								placeholder: 'Your Location*',
							},
						},
						leave_a_note: {
							inputProps: {
								type: 'text',
								showLabel: false,
								placeholder: 'Leave A Note',
							},
						},
					}}
				>
					<Button type='submit' className='mx-auto block font-lora'>
						Send Message
					</Button>
				</AutoForm>
			</div>
		</section>
	)
}
