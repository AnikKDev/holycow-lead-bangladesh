'use client'

import { useState } from 'react'

import RegisterPage from '@/components/authentications/register-page'
import RegisterVerifyPage from '@/components/authentications/register-verify'

/* export const metadata = {
	title: 'Register',
	description: 'Register Page',
}
 */
export type RegisterStep = 'register' | 'register-verify'

const Register = () => {
	const [currentStep, setCurrentStep] = useState<RegisterStep>('register')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')

	return (
		<>
			{currentStep === 'register' ? (
				<RegisterPage
					setPhoneNumber={setPhoneNumber}
					setCurrentStep={setCurrentStep}
					setPassword={setPassword}
				/>
			) : (
				currentStep === 'register-verify' && (
					<RegisterVerifyPage
						phoneNumber={phoneNumber}
						setCurrentStep={setCurrentStep}
						password={password}
					/>
				)
			)}
		</>
	)
}

export default Register
