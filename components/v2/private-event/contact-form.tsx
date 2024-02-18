'use client'

import { z } from 'zod'

import AutoForm from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'

import SectionHeader from '../shared/SectionHeader'

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
	leave_a_note: z.string().describe('Leave A Note'),
})

export default function ContactForm({}: Props) {
	const handleFormSubmit = (data: Partial<z.infer<typeof formSchema>>) => {}
	return (
		<section className='container mb-12 '>
			<SectionHeader
				subTitle='Contact'
				title='Message To Us'
				subTitleSize='large'
			/>
			{/* inputs */}
			<div>
				<AutoForm
					onSubmit={handleFormSubmit}
					formSchema={formSchema}
					containerClassName='grid md:grid-cols-1  gap-x-4 text-primary'
					// className='space-y-0 gap-x-4 gap-y-3'
					fieldConfig={{
						name: {
							inputProps: {
								showLabel: false,
								type: 'text',
								placeholder: 'Your Name*',
								className: 'mt-5 focus-visible:right-0',
							},
						},
						email: {
							inputProps: {
								type: 'email',
								showLabel: false,
								placeholder: 'Email*',
								className: 'focus-visible:right-0',
							},
						},
						leave_a_note: {
							fieldType: 'textarea',
							inputProps: {
								type: 'text',
								showLabel: false,
								placeholder: 'Leave A Note',
								className: 'focus-visible:right-0',
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
