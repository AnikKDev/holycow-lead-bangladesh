'use client'

import { useState } from 'react'
import { Metadata } from 'next'

import ForgotPasswordPage from '@/components/authentications/forgot-password'
import LoginPage from '@/components/authentications/login-page'
import RegisterVerifyPage from '@/components/authentications/register-verify'
import RegisterPasswordPage from '@/components/authentications/reset-password'
import ResetPasswordSuccessPage from '@/components/authentications/reset-password-success'

/* export const metadata: Metadata = {
	title: 'Login',
	description: 'Login Page',
} */

export type LoginPageStep =
	| 'login'
	| 'forgot-password'
	| 'forgot-verify'
	| 'reset-password'
	| 'reset-success'
	| ''

const Login = () => {
	const [currentStep, setCurrentStep] = useState<LoginPageStep>('login')
	let displayableIteim = <LoginPage setCurrentStep={setCurrentStep} />
	if (currentStep === 'forgot-password')
		displayableIteim = <ForgotPasswordPage setCurrentStep={setCurrentStep} />
	else if (currentStep === 'forgot-verify')
		displayableIteim = (
			<RegisterVerifyPage
				currentStep={currentStep}
				setCurrentStep={setCurrentStep}
			/>
		)
	else if (currentStep === 'reset-password')
		displayableIteim = <RegisterPasswordPage setCurrentStep={setCurrentStep} />
	else if (currentStep === 'reset-success')
		displayableIteim = <ResetPasswordSuccessPage />
	return <>{displayableIteim}</>
}

export default Login
