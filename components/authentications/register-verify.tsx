import { useRouter } from 'next/navigation'
import {
	useLoginMutation,
	useSendPhoneForgotPasswordOtpAsResendOtpMutation,
	useVerifyRegisterOtpMutation,
} from '@/redux/slices/authSlice/authApiSlice'
import { Loader2 } from 'lucide-react'
import { useCookies } from 'react-cookie'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { capitalizeFirstLetter } from '@/lib/utils'
import { LoginPageStep } from '@/app/(auth)/login/page'
import { RegisterStep } from '@/app/(auth)/register/page'

import AutoForm from '../ui/auto-form'
import { Button } from '../ui/button'
import AuthLayoutContainer from './auth-layout-container'

// Define your form schema using zod
const formSchema = z.object({
	otp: z
		.string({
			required_error: 'Full name is required.',
		})
		.describe('Enter OTP Code')
		// You can use zod's built-in validation as normal
		.min(4, {
			message: 'OTP must be 4 digit number',
		})
		.max(4, {
			message: 'OTP must be 4 digit number',
		}),
})
const RegisterVerifyPage = ({
	setCurrentStep,
	phoneNumber,
	password,
}: {
	// todo: discussion about registerstep or login step
	setCurrentStep: React.Dispatch<
		React.SetStateAction<RegisterStep | LoginPageStep>
	>
	phoneNumber: string
	password: string
}) => {
	const [verifyRegisterOtp, { isLoading, isError }] =
		useVerifyRegisterOtpMutation()
	const [resendOtp, { isLoading: resendOtpLoading, isError: resendOtpErr }] =
		useSendPhoneForgotPasswordOtpAsResendOtpMutation()
	const [loginVerifiedUser, { isLoading: verifiedUserLoginLoading }] =
		useLoginMutation()

	const [cookie, setCookie] = useCookies(['access', 'refresh'])
	const router = useRouter()

	const handleVerifyOtp = async (data: Partial<z.infer<typeof formSchema>>) => {
		try {
			await verifyRegisterOtp({
				otp: data.otp,
				phone_number: phoneNumber,
			}).unwrap()
			toast.success('OTP verified successfully!')
			// automatically login and get access/refresh token
			// after successfully register otp verified
			toast.promise(handleLoginVerifiedUser(), {
				loading: 'Setting up user account',
				success: <b>Successfully account registered</b>,
				error: <b>Failed to login</b>,
			})
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

	const handleLoginVerifiedUser = async () => {
		try {
			const res = await loginVerifiedUser({
				phone_number: phoneNumber,
				password: password,
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
			router.replace('/')
		} catch (e) {
			console.log(e)
			throw new Error(e)
		}
	}

	const handleResendOtp = async () => {
		try {
			await resendOtp({
				phone_number: phoneNumber,
			}).unwrap()
			toast.success('Resend OTP successfully!')
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
		<AuthLayoutContainer
			handleBackBtn={() => {
				setCurrentStep('register')
			}}
		>
			<div className='-mt-[8rem] flex w-full flex-col  space-y-3.5 place-self-center rounded-lg bg-white px-7  py-6 drop-shadow-lg mobile-sm:bg-transparent mobile-sm:px-0 mobile-sm:drop-shadow-none '>
				<div className='flex flex-col gap-2.5'>
					<h1 className='text-2xl font-bold text-foreground'>Enter Code</h1>
					<p className='text-sm text-foreground/70'>
						We’ve sent an SMS with an activation code to your phone{' '}
						{phoneNumber}
					</p>
				</div>
				<div>
					<AutoForm
						onSubmit={handleVerifyOtp}
						formSchema={formSchema}
						// className='space-y-0 gap-x-4 gap-y-3'
						containerClassName='space-y-2'
						fieldConfig={{
							otp: {
								inputProps: {
									type: 'number',
									className: 'mobile-sm:bg-white',
								},
							},
						}}
					>
						<div className='flex flex-col gap-2'>
							<p className='text-center text-sm text-[7D7D7D]'>
								Didn’t receive otp?{' '}
								<Button
									type='button'
									onClick={handleResendOtp}
									disabled={resendOtpLoading}
									variant='outline'
									className='h-fit cursor-pointer border-none px-0 py-0 text-sm font-medium text-primary hover:bg-transparent'
								>
									Resend
								</Button>
							</p>
							<Button
								disabled={isLoading || verifiedUserLoginLoading}
								type='submit'
								className='w-full'
								size='default'
							>
								{isLoading ||
									(verifiedUserLoginLoading && (
										<Loader2 className='mr-2 h-4 w-4 animate-spin' />
									))}
								Submit
							</Button>
						</div>
					</AutoForm>
				</div>
			</div>
		</AuthLayoutContainer>
	)
}

export default RegisterVerifyPage
