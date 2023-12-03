'use client'

import { useState } from 'react'

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
		<>
			{currentStep === 'register' ? (
				<RegisterPage setCurrentStep={setCurrentStep} />
			) : (
				currentStep === 'register-verify' && (
					<RegisterVerifyPage setCurrentStep={setCurrentStep} />
				)
			)}
		</>
	)
}

export default Register
