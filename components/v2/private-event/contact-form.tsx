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
	contact_number: z
		.string({
			required_error: 'Contact number is required.',
		})
		.describe('Contact Number'),
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
		<section className='mb-12 flex w-full flex-col items-center justify-center '>
			<SectionHeader
				subTitle='Contact'
				title='Message To Us'
				subTitleSize='large'
			/>
			{/* inputs */}
			<div className='w-full max-w-[600px]'>
				<AutoForm
					onSubmit={handleFormSubmit}
					formSchema={formSchema}
					containerClassName='text-primary items-center [&>*]:w-full'
					fieldConfig={{
						name: {
							inputProps: {
								showLabel: false,
								type: 'text',
								placeholder: 'Your Name*',
								className: 'mt-5 focus-visible:right-0 text-foreground',
							},
						},
						contact_number: {
							inputProps: {
								type: 'number',
								showLabel: false,
								placeholder: 'Contact Number*',
								className: 'focus-visible:right-0 text-foreground',
							},
						},
						email: {
							inputProps: {
								type: 'email',
								showLabel: false,
								placeholder: 'Email*',
								className: 'focus-visible:right-0 text-foreground',
							},
						},
						leave_a_note: {
							fieldType: 'textarea',
							inputProps: {
								type: 'text',
								showLabel: false,
								placeholder: 'Leave A Note',
								className: 'focus-visible:right-0 text-foreground',
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
