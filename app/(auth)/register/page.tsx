'use client'

import { useState } from 'react'

import AuthLayoutContainer from '@/components/authentications/auth-layout-container'
import RegisterPage from '@/components/authentications/register-page'
import RegisterVerifyPage from '@/components/authentications/register-verify'

export const metadata = {
	title: 'Register',
	description: 'Register Page',
}

export type RegisterStep = 'register' | 'register-verify'

const Register = () => {
	const [currentStep, setCurrentStep] = useState<RegisterStep>('register')
	return (
		<AuthLayoutContainer>
			{currentStep === 'register' ? (
				<RegisterPage setCurrentStep={setCurrentStep} />
			) : (
				currentStep === 'register-verify' && (
					<RegisterVerifyPage setCurrentStep={setCurrentStep} />
				)
			)}
		</AuthLayoutContainer>
	)
}

export default Register
