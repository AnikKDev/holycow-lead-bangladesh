import Link from 'next/link'
import { z } from 'zod'

import { ukPhoneRegex } from '@/lib/validations/string'
import { RegisterStep } from '@/app/(auth)/register/page'

import AutoForm from '../ui/auto-form'
import { Button } from '../ui/button'

// Define your form schema using zod
const formSchema = z.object({
	fullName: z
		.string({
			required_error: 'Full name is required.',
		})
		.describe('Enter Full name')
		// You can use zod's built-in validation as normal
		.min(2, {
			message: 'First name must be at least 2 characters.',
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
		.describe('Email Address')
		.email({
			message: 'Invalid email address',
		}),
	password: z
		.string({
			required_error: 'Password is required.',
		})
		// Use the "describe" method to set the label
		// If no label is set, the field name will be used
		// and un-camel-cased
		.describe('Set a Password')
		.min(8, {
			message: 'Password must be at least 8 characters.',
		}),
})
const RegisterPage = ({
	setCurrentStep,
}: {
	setCurrentStep: React.Dispatch<React.SetStateAction<RegisterStep>>
}) => {
	const handleFormSubmit = () => {
		setCurrentStep('register-verify')
	}
	return (
		<div className='mt-10 flex flex-col space-y-3.5 rounded-lg bg-white px-7  py-6 drop-shadow-lg mobile-sm:bg-transparent mobile-sm:px-0 mobile-sm:drop-shadow-none '>
			<h1 className='text-2xl font-bold'>Create Your Account</h1>
			<div>
				<AutoForm
					onSubmit={handleFormSubmit}
					formSchema={formSchema}
					containerClassName='grid space-y-2.5'
					// className='space-y-0 gap-x-4 gap-y-3'
					fieldConfig={{
						fullName: {
							inputProps: {},
						},
						phone_number: {
							inputProps: {
								type: 'number',
							},
						},
						email: {
							inputProps: {
								type: 'email',
							},
						},
						password: {
							inputProps: {
								type: 'password',
							},
						},
					}}
				>
					<Button type='submit' className='w-full' size='default'>
						Register
					</Button>
				</AutoForm>
			</div>
			<p className='text-center text-sm font-medium'>
				Already have an account ?{' '}
				<Link className='text-primary' href={'/login/'}>
					Login
				</Link>
			</p>
		</div>
	)
}

export default RegisterPage
