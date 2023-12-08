'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLoginMutation } from '@/redux/slices/authSlice/authApiSlice'
import { Loader2 } from 'lucide-react'
import { useCookies } from 'react-cookie'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { LoginPageStep } from '@/app/(auth)/login/page'

import AutoForm from '../ui/auto-form'
import { Button } from '../ui/button'
import AuthLayoutContainer from './auth-layout-container'

// Define your form schema using zod
const formSchema = z.object({
	phone_number: z
		.string({
			required_error: 'Phone number can not be empty.',
		})
		// Use the "describe" method to set the label
		// If no label is set, the field name will be used
		// and un-camel-cased
		.describe('Phone number'),
	// .regex(ukPhoneRegex, {
	// 	message: 'Invalid phone number.',
	// })
	/* email: z
		.string({
			required_error: 'Email is required.',
		})
		.describe('Email Address')
		.email({
			message: 'Invalid email address',
		}), */
	password: z
		.string({
			required_error: 'Password is required.',
		})
		// Use the "describe" method to set the label
		// If no label is set, the field name will be used
		// and un-camel-cased
		.describe('Enter Password')
		.min(8, {
			message: 'Password must be at least 8 characters.',
		}),
})
const LoginPage = ({
	setCurrentStep,
}: {
	setCurrentStep: React.Dispatch<React.SetStateAction<LoginPageStep>>
}) => {
	const searchParams = useSearchParams()
	const callBackRoute = searchParams.get('callback-url')
	const [loginUser, { isLoading: verifiedUserLoginLoading }] =
		useLoginMutation()

	const [cookie, setCookie] = useCookies(['access', 'refresh'])
	const router = useRouter()
	const handleFormSubmit = async (
		data: Partial<z.infer<typeof formSchema>>
	) => {
		try {
			const res = await loginUser({
				...data,
				phone_number: `+88${data.phone_number}`,
				// phone_number: `${data.phone_number}`,
			}).unwrap()
			const { access, refresh } = await res
			// const refresh = await res.refresh
			let expires = new Date()
			expires.setTime(expires.getTime() + 1000 * 60 * 60 * 24 * 365)
			setCookie('access', access, {
				path: '/',
				expires,
			})
			setCookie('refresh', refresh, {
				path: '/',
				expires,
			})

			// window.location.href = callBackRoute
			if (callBackRoute) {
				router.push(callBackRoute)
			} else {
				router.replace('/')
			}
		} catch (e) {
			console.log(e)
			toast.error('Phone number or password is incorrect')
		}
	}
	return (
		<AuthLayoutContainer hideBackBtn>
			<div className='flex w-full flex-col space-y-3.5 place-self-center rounded-lg bg-white px-7  py-6 drop-shadow-lg mobile-sm:bg-transparent mobile-sm:px-0 mobile-sm:drop-shadow-none '>
				<h1 className='text-2xl font-bold'>
					Welcome, login to get access of your account
				</h1>
				<div>
					<AutoForm
						onSubmit={handleFormSubmit}
						formSchema={formSchema}
						containerClassName='grid space-y-2.5'
						// className='space-y-0 gap-x-4 gap-y-3'
						fieldConfig={{
							phone_number: {
								inputProps: {
									// todo: regex for email or phone check
									type: 'number',
								},
							},
							password: {
								inputProps: {
									type: 'password',
								},
							},
						}}
					>
						<Button
							disabled={verifiedUserLoginLoading}
							type='submit'
							className='w-full'
							size='default'
						>
							{verifiedUserLoginLoading && (
								<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							)}
							Login
						</Button>
					</AutoForm>
				</div>
				<Button
					variant='link'
					onClick={() => setCurrentStep('forgot-password')}
					className='text-center text-sm font-medium text-primary'
				>
					Forgot your password?
				</Button>
				<p className='text-center text-sm font-medium'>
					Don't have an account ?{' '}
					<Link className='text-primary' href={'/register/'}>
						Register
					</Link>
				</p>
			</div>
		</AuthLayoutContainer>
	)
}

export default LoginPage
