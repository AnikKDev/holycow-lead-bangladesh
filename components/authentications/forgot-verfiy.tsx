import { useEffect } from 'react'
import { useCheckForgotPasswordOtpMutation } from '@/redux/slices/authSlice/authApiSlice'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { ReduxErrorType } from '@/types/auth/auth.types'
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
		.min(2, {
			message: 'First name must be at least 2 characters.',
		}),
})
const ForgotVerifyPage = ({
	setCurrentStep,
	phoneNumber,
}: {
	// todo: discussion about registerstep or login step
	setCurrentStep: React.Dispatch<
		React.SetStateAction<RegisterStep | LoginPageStep>
	>
	phoneNumber: string
}) => {
	const [
		checkForgotPasswordOtp,
		{
			isLoading: checkForgotPasswordOtpLoading,
			isSuccess: checkForgotPasswordOtpSuccess,
			isError: isCheckForgotPasswordOtpError,
			error: checkForgotPasswordOtpError,
		},
	] = useCheckForgotPasswordOtpMutation()
	// sendPhoneForgotPasswordOtpAsResendOtp
	const handleFormSubmit = (data: Partial<z.infer<typeof formSchema>>) => {
		checkForgotPasswordOtp({
			phone_number: phoneNumber,
			otp: data.otp,
		})
	}

	useEffect(() => {
		if (isCheckForgotPasswordOtpError) {
			toast.error((checkForgotPasswordOtpError as ReduxErrorType).data?.message)
		} else if (checkForgotPasswordOtpSuccess) {
			toast.success('OTP verified successfully.')
			setCurrentStep('reset-password')
		}
	}, [isCheckForgotPasswordOtpError, checkForgotPasswordOtpSuccess])
	return (
		<AuthLayoutContainer
			handleBackBtn={() => {
				setCurrentStep('forgot-password')
			}}
		>
			<div className='-mt-[8rem] flex w-full flex-col  space-y-3.5 place-self-center rounded-lg bg-white px-7  py-6 drop-shadow-lg mobile-sm:bg-transparent mobile-sm:px-0 mobile-sm:drop-shadow-none '>
				<div className='flex flex-col gap-2.5'>
					<h1 className='text-2xl font-bold text-foreground'>Enter Code</h1>
					<p className='text-sm text-foreground/70'>
						We’ve sent an SMS with an activation code to your phone +44
						{phoneNumber}
					</p>
				</div>
				<div>
					<AutoForm
						onSubmit={handleFormSubmit}
						formSchema={formSchema}
						// className='space-y-0 gap-x-4 gap-y-3'
						containerClassName='space-y-2'
						fieldConfig={{
							otp: {
								inputProps: {
									type: 'number',
								},
							},
						}}
					>
						<div className='flex flex-col gap-2'>
							<p className='text-center text-sm text-[7D7D7D]'>
								Didn’t receive otp?{' '}
								<strong className='cursor-pointer text-sm font-medium text-primary'>
									Resend
								</strong>
							</p>
							<Button
								disabled={checkForgotPasswordOtpLoading}
								type='submit'
								className='w-full'
								size='default'
							>
								Submit
							</Button>
						</div>
					</AutoForm>
				</div>
			</div>
		</AuthLayoutContainer>
	)
}

export default ForgotVerifyPage
