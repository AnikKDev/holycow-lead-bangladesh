import Link from 'next/link'
import { useRegisterMutation } from '@/redux/slices/authSlice/authApiSlice'
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { capitalizeFirstLetter } from '@/lib/utils'
import { ukPhoneRegex } from '@/lib/validations/string'
import { RegisterStep } from '@/app/(auth)/register/page'

import AutoForm from '../ui/auto-form'
import { Button } from '../ui/button'
import AuthLayoutContainer from './auth-layout-container'

// Define your form schema using zod
const formSchema = z.object({
	full_name: z
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
	setPhoneNumber,
	setPassword,
}: {
	setCurrentStep: React.Dispatch<React.SetStateAction<RegisterStep>>
	setPhoneNumber: (e: string) => void
	setPassword: (e: string) => void
}) => {
	const [registerUser, { isLoading, isError, error }] = useRegisterMutation()
	const handleFormSubmit = async (
		data: Partial<z.infer<typeof formSchema>>
	) => {
		try {
			await registerUser({
				...data,
				phone_number: `+44${data.phone_number}`,
			}).unwrap()
			setPhoneNumber(`+44${data.phone_number}`)
			setPassword(data.password)
			setCurrentStep('register-verify')
		} catch (e) {
			console.log(e)
			if ('status' in e) {
				Object.values(e?.data).forEach((err) => {
					console.log(err)
					toast.error(capitalizeFirstLetter(err?.[0]))
				})
			}
		}
	}
	return (
		<AuthLayoutContainer hideBackBtn>
			<div className='flex w-full flex-col space-y-3.5 place-self-center rounded-lg bg-white px-7  py-6 drop-shadow-lg mobile-sm:bg-transparent mobile-sm:px-0 mobile-sm:drop-shadow-none '>
				<h1 className='text-2xl font-bold'>Create an Account</h1>
				<div>
					<AutoForm
						onSubmit={(data) => {
							handleFormSubmit(data)
						}}
						formSchema={formSchema}
						containerClassName='grid space-y-2.5'
						// className='space-y-0 gap-x-4 gap-y-3'
						fieldConfig={{
							full_name: {
								inputProps: {
									className: 'mobile-sm:bg-white',
								},
							},
							phone_number: {
								inputProps: {
									type: 'number',
									className: 'mobile-sm:bg-white',
								},
							},
							email: {
								inputProps: {
									type: 'email',
									className: 'mobile-sm:bg-white',
								},
							},
							password: {
								inputProps: {
									type: 'password',
									className: 'mobile-sm:bg-white',
								},
							},
						}}
					>
						<Button
							type='submit'
							className='w-full'
							size='default'
							disabled={isLoading}
						>
							{isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
							Sign Up
						</Button>
					</AutoForm>
				</div>
				<p className='text-center text-sm font-medium'>
					Already have an account ?{' '}
					<Link className='text-primary-dark' href={'/login/'}>
						Login
					</Link>
				</p>
			</div>
		</AuthLayoutContainer>
	)
}

export default RegisterPage
