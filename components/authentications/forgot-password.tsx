import { z } from 'zod'

import { LoginPageStep } from '@/app/(auth)/login/page'

import AutoForm from '../ui/auto-form'
import { Button } from '../ui/button'
import AuthLayoutContainer from './auth-layout-container'

const formSchema = z.object({
	email_or_phone: z
		.string({
			required_error: 'Field can not be empty.',
		})
		.describe('Email / Phone number'),
	// You can use zod's built-in validation as normal
	/* .min(2, {
			message: 'First name must be at least 2 characters.',
		}), */
})
const ForgotPasswordPage = ({
	setCurrentStep,
}: {
	setCurrentStep: React.Dispatch<React.SetStateAction<LoginPageStep>>
}) => {
	const handleFormSubmit = () => {
		setCurrentStep('forgot-verify')
	}

	return (
		<AuthLayoutContainer
			handleBackBtn={() => {
				setCurrentStep('login')
			}}
		>
			<div className='-mt-[8rem] flex w-full flex-col  space-y-3.5 place-self-center rounded-lg bg-white px-7  py-6 drop-shadow-lg mobile-sm:bg-transparent mobile-sm:px-0 mobile-sm:drop-shadow-none '>
				<div className='flex flex-col gap-2.5'>
					<h1 className='text-2xl font-bold text-foreground'>
						Forgot password?
					</h1>
					<p className='text-sm text-foreground/70'>
						Don’t worry! It happens. Please enter the email/phone associated
						with your account.
					</p>
				</div>
				<div>
					<AutoForm
						onSubmit={handleFormSubmit}
						formSchema={formSchema}
						// className='space-y-0 gap-x-4 gap-y-3'
						containerClassName='space-y-2'
						fieldConfig={{
							email_or_phone: {
								inputProps: {
									type: 'text',
								},
							},
						}}
					>
						<div className='flex flex-col gap-2'>
							{/* <p className='text-center text-sm text-[7D7D7D]'>
								Didn’t receive otp?{' '}
								<strong className='cursor-pointer text-sm font-medium text-primary'>
									Resend
								</strong>
							</p> */}
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

export default ForgotPasswordPage
