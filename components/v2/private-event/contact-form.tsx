'use client'

import { useCreateAContactMailMutation } from '@/redux/slices/contact/contactSlice'
import { z } from 'zod'

import AutoForm from '@/components/ui/auto-form'
import { AutoFormInputComponentProps } from '@/components/ui/auto-form/types'
import { Button } from '@/components/ui/button'
import { FormControl, FormItem } from '@/components/ui/form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import SectionHeader from '../shared/SectionHeader'

type Props = {}
// Define your form schema using zod
export const formSchema = z.object({
	name: z
		.string({
			required_error: 'Name can not be empty.',
		})
		.describe('Your Name'),
	contact_number: z.string().describe('Contact Number').default('').optional(),
	email: z
		.string({
			required_error: 'Email is required.',
		})
		.describe('Email')
		.email({
			message: 'Invalid email address',
		}),
	branch_email: z
		.enum([
			'angel@holycowonline.com',
			'archway@holycowonline.com',
			'balham@holycowonline.com',
			'battersea@holycowonline.com',
			'hammersmith@holycowonline.com',
			'kilburn@holycowonline.com',
			'putney@holycowonline.com',
			'canarywharf@holycowonline.com',
		])
		.describe('Branch Name'),
	leave_a_note: z.string().describe('Leave A Note'),
})

export default function ContactForm({}: Props) {
	const [
		createAContactMail,
		{
			isLoading: createContactFormLoading,
			isSuccess: createContactFormSuccess,
			isError: isCreateContactFormError,
			error: createContactFormError,
		},
	] = useCreateAContactMailMutation()

	const handleFormSubmit = async (
		data: Partial<z.infer<typeof formSchema>>
	) => {
		try {
			const result = await createAContactMail(data)

			console.log('Mutation Result:', result)
		} catch (error) {
			console.error('Error submitting form:', error)
		}
	}

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
								placeholder: 'Contact Number',
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
						branch_email: {
							fieldType: ({ field }: AutoFormInputComponentProps) => (
								<FormItem className='text-foreground'>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder='Select a branch' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value='angel@holycowonline.com'>
												Angel
											</SelectItem>
											<SelectItem value='archway@holycowonline.com'>
												Archway
											</SelectItem>
											<SelectItem value='balham@holycowonline.com'>
												Balham
											</SelectItem>
											<SelectItem value='battersea@holycowonline.com'>
												Battersea
											</SelectItem>
											<SelectItem value='hammersmith@holycowonline.com'>
												Hammersmith
											</SelectItem>
											<SelectItem value='kilburn@holycowonline.com'>
												Kilburn
											</SelectItem>
											<SelectItem value='putney@holycowonline.com'>
												Putney
											</SelectItem>
											<SelectItem value='canarywharf@holycowonline.com'>
												Restaurant (Canary Wharf)
											</SelectItem>
										</SelectContent>
									</Select>
								</FormItem>
							),
							inputProps: {
								type: 'text',
								showLabel: false,
								placeholder: 'Branch Name*',
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
