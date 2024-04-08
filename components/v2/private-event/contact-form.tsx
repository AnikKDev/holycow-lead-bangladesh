'use client'

import { useEffect, useRef, useState } from 'react'
import { useCreateAContactMailMutation } from '@/redux/slices/contact/contactSlice'
import toast from 'react-hot-toast'
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
export const formSchema = z.object({
	contact_name: z
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
	branch: z
		.string({
			required_error: 'branch is required.',
		})
		.describe('Branch Name'),
	message: z.string().describe('Leave A Note'),
})

export default function ContactForm({}: Props) {
	const [formValues, setFormValues] = useState<z.infer<typeof formSchema>>({})
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
			setFormValues({
				contact_name: '',
				contact_number: '',
				email: '',
				branch: '',
				message: '',
			})
		} catch (error) {
			console.error('Error submitting form:', error)
		}
	}
	useEffect(() => {
		if (createContactFormSuccess) {
			toast('Email was successfully sent!')
		}
	}, [createContactFormSuccess])
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
					values={formValues}
					onParsedValuesChange={setFormValues}
					onSubmit={handleFormSubmit}
					formSchema={formSchema}
					containerClassName='text-primary items-center [&>*]:w-full'
					fieldConfig={{
						contact_name: {
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
						branch: {
							fieldType: ({ field }: AutoFormInputComponentProps) => (
								<FormItem className='text-foreground'>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder='Select a branch *' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value='angle'>Angel</SelectItem>
											<SelectItem value='archway'>Archway</SelectItem>
											<SelectItem value='balham'>Balham</SelectItem>
											<SelectItem value='battersea'>Battersea</SelectItem>
											<SelectItem value='hammersmith'>Hammersmith</SelectItem>
											<SelectItem value='kilburn'>Kilburn</SelectItem>
											<SelectItem value='putney'>Putney</SelectItem>
											<SelectItem value='limehouse'>
												Lime House Canary Wharf
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
						message: {
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
