import { z } from 'zod'

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
const RegisterVerifyPage = ({
	currentStep,
	setCurrentStep,
}: {
	// todo: discussion about registerstep or login step
	currentStep?: RegisterStep | LoginPageStep
	setCurrentStep: React.Dispatch<
		React.SetStateAction<RegisterStep | LoginPageStep>
	>
}) => {
	console.log(currentStep)
	const handleFormSubmit = () => {
		// ? added conditional setState
		if (currentStep === 'register-verify') setCurrentStep('register')
		else if (currentStep === 'forgot-verify') setCurrentStep('reset-password')
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
						We’ve sent an SMS with an activation code to your phone +88
						01849528992
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
							<Button type='submit' className='w-full' size='default'>
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
