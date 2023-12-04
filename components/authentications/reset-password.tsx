import { z } from 'zod'

import { LoginPageStep } from '@/app/(auth)/login/page'

import AutoForm from '../ui/auto-form'
import { Button } from '../ui/button'
import AuthLayoutContainer from './auth-layout-container'

// Define your form schema using zod
const formSchema = z.object({
	new_password: z
		.string({
			required_error: 'Password is required.',
		})
		// Use the "describe" method to set the label
		// If no label is set, the field name will be used
		// and un-camel-cased
		.describe('Set a New Password')
		.min(8, {
			message: 'Password must be at least 8 characters.',
		}),
})
const RegisterPasswordPage = ({
	setCurrentStep,
}: {
	setCurrentStep: React.Dispatch<React.SetStateAction<LoginPageStep>>
}) => {
	const handleFormSubmit = () => {
		setCurrentStep('reset-success')
	}
	return (
		<AuthLayoutContainer
			handleBackBtn={() => {
				setCurrentStep('forgot-verify')
			}}
		>
			<div className='-mt-[8rem] flex w-full flex-col  space-y-3.5 place-self-center rounded-lg bg-white px-7  py-6 drop-shadow-lg mobile-sm:bg-transparent mobile-sm:px-0 mobile-sm:drop-shadow-none '>
				<div className='flex flex-col gap-2.5'>
					<h1 className='text-2xl font-bold text-foreground'>Reset password</h1>
					<p className='text-sm text-foreground/70'>
						Please type something you’ll remember
					</p>
				</div>
				<div>
					<AutoForm
						onSubmit={handleFormSubmit}
						formSchema={formSchema}
						// className='space-y-0 gap-x-4 gap-y-3'
						containerClassName='space-y-2'
						fieldConfig={{
							new_password: {
								inputProps: {
									type: 'password',
								},
							},
						}}
					>
						<div className='flex flex-col gap-2'>
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

export default RegisterPasswordPage
